import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Components/Layout/MainLayout'
import DashboardPage from './Pages/DashboardPage/DashboardPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/dashboard' element={<DashboardPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
