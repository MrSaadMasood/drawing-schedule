import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { RoadmapPage } from './pages/RoadmapPage'
import { PhaseGuidePage } from './pages/PhaseGuidePage'

function PhaseRoute() {
  const { phaseId } = useParams()
  const phaseNumber = Number(phaseId)

  if (!Number.isInteger(phaseNumber) || phaseNumber < 1 || phaseNumber > 5) {
    return <Navigate to="/" replace />
  }

  return <PhaseGuidePage phaseNumber={phaseNumber} />
}

function App() {
  return (
    <BrowserRouter basename='/drawing-schedule'>
      <Routes >
        <Route element={<AppLayout />}>
          <Route index element={<RoadmapPage />} />
          <Route path="phase/:phaseId" element={<PhaseRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
