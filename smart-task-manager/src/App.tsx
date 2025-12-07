import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Components/Layout/MainLayout'
import DashboardPage from './Pages/DashboardPage/DashboardPage'
import TasksPage from './Pages/TasksPage/TasksPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/tasks' element={<TasksPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
