import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ModuleHome from './pages/ModuleHome'
import ChapterDetail from './pages/ChapterDetail'
import QuizCenter from './pages/QuizCenter'
import QuizSession from './pages/QuizSession'
import ExamMode from './pages/ExamMode'
import PdfLibrary from './pages/PdfLibrary'
import PdfReader from './pages/PdfReader'
import OverallProgress from './pages/OverallProgress'
import HelpPage from './pages/HelpPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/m/:moduleId" element={<ModuleHome />} />
        <Route path="/m/:moduleId/chapter/:chapterId" element={<ChapterDetail />} />
        <Route path="/m/:moduleId/quiz" element={<QuizCenter />} />
        <Route path="/m/:moduleId/quiz/:chapterId" element={<QuizSession />} />
        <Route path="/m/:moduleId/exam" element={<ExamMode />} />
        <Route path="/library" element={<PdfLibrary />} />
        <Route path="/library/:pdfId" element={<PdfReader />} />
        <Route path="/progress" element={<OverallProgress />} />
        <Route path="/help" element={<HelpPage />} />
      </Route>
    </Routes>
  )
}
