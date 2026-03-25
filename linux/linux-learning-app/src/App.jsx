import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChapterList from './pages/ChapterList'
import ChapterDetail from './pages/ChapterDetail'
import QuizCenter from './pages/QuizCenter'
import QuizSession from './pages/QuizSession'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="chapters" element={<ChapterList />} />
        <Route path="chapters/:id" element={<ChapterDetail />} />
        <Route path="quiz" element={<QuizCenter />} />
        <Route path="quiz/:moduleId" element={<QuizSession />} />
      </Route>
    </Routes>
  )
}
