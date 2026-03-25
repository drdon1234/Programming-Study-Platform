import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './hooks/useProgress'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChapterView from './pages/ChapterView'
import QuizPage from './pages/QuizPage'
import QuizBank from './pages/QuizBank'
import ExamMode from './pages/ExamMode'

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chapter/:id" element={<ChapterView />} />
            <Route path="/chapter/:id/quiz" element={<QuizPage />} />
            <Route path="/quiz-bank" element={<QuizBank />} />
            <Route path="/exam" element={<ExamMode />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  )
}
