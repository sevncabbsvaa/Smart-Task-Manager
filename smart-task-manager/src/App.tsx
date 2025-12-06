import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Components/Layout/MainLayout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          
        </Route>
      </Routes>
    </>
  )
}

export default App
