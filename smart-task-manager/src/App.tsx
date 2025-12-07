import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Components/Layout/MainLayout'
import DashboardPage from './Pages/DashboardPage/DashboardPage'
import TasksPage from './Pages/TasksPage/TasksPage'
import CalendarPage from './Pages/CalendarPage/CalendarPage'
import SettingsPage from './Pages/SettingsPage/SettingsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/tasks' element={<TasksPage/>}/>
          <Route path='/calendar' element={<CalendarPage/>}/>
          <Route path='/settings' element={<SettingsPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

// bugs fixed

export default App
