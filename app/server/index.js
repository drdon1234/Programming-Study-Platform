import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { readFileSync, writeFileSync, existsSync, mkdirSync, unlinkSync, statSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PDFS_DIR = join(__dirname, '..', 'pdfs')
const META_FILE = join(PDFS_DIR, 'metadata.json')
const DIST_DIR = join(__dirname, '..', 'dist')
const PORT = process.env.PORT || 3001

if (!existsSync(PDFS_DIR)) mkdirSync(PDFS_DIR, { recursive: true })

function loadMeta() {
  if (existsSync(META_FILE)) {
    try { return JSON.parse(readFileSync(META_FILE, 'utf-8')) }
    catch { return [] }
  }
  return []
}

function saveMeta(meta) {
  writeFileSync(META_FILE, JSON.stringify(meta, null, 2), 'utf-8')
}

function syncMeta() {
  const meta = loadMeta()
  const files = readdirSync(PDFS_DIR).filter(f => f.toLowerCase().endsWith('.pdf'))

  const metaMap = Object.fromEntries(meta.map(m => [m.filename, m]))
  const synced = files.map(filename => {
    if (metaMap[filename]) return metaMap[filename]
    const stats = statSync(join(PDFS_DIR, filename))
    return { filename, size: stats.size, uploadedAt: stats.mtime.toISOString() }
  })

  saveMeta(synced)
  return synced
}

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({
  storage: multer.diskStorage({
    destination: (_, __, cb) => cb(null, PDFS_DIR),
    filename: (_, file, cb) => {
      const name = Buffer.from(file.originalname, 'latin1').toString('utf8')
      cb(null, name)
    },
  }),
  fileFilter: (_, file, cb) => {
    cb(null, file.originalname.toLowerCase().endsWith('.pdf'))
  },
  limits: { fileSize: 200 * 1024 * 1024 },
})

app.get('/api/pdfs', (_, res) => {
  const meta = syncMeta()
  res.json(meta)
})

app.post('/api/pdfs/upload', upload.single('pdf'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No PDF file' })

  const meta = loadMeta()
  const existing = meta.findIndex(m => m.filename === req.file.filename)
  const entry = {
    filename: req.file.filename,
    size: req.file.size,
    uploadedAt: new Date().toISOString(),
  }
  if (existing >= 0) meta[existing] = entry
  else meta.push(entry)
  saveMeta(meta)

  res.json(entry)
})

app.delete('/api/pdfs/:filename', (req, res) => {
  const filename = req.params.filename
  const filepath = join(PDFS_DIR, filename)

  if (existsSync(filepath)) {
    unlinkSync(filepath)
  }

  const meta = loadMeta().filter(m => m.filename !== filename)
  saveMeta(meta)
  res.json({ ok: true })
})

app.get('/api/pdfs/:filename/file', (req, res) => {
  const filepath = join(PDFS_DIR, req.params.filename)
  if (!existsSync(filepath)) return res.status(404).json({ error: 'Not found' })
  res.setHeader('Content-Type', 'application/pdf')
  res.sendFile(filepath)
})

if (existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR))
  app.get('*', (_, res) => res.sendFile(join(DIST_DIR, 'index.html')))
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`PDF directory: ${PDFS_DIR}`)
})
