import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Cart } from './pages/Cart'
import { Dashboard } from './pages/Dashboard'
import { Services } from './pages/Services'
import { Suspense } from 'react'

function App() {

  return (
    <div className='bg-gray-500 '>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Suspense fallback={"...Loading"}><Dashboard /></Suspense>} />
        <Route path='/cart' element={<Suspense fallback={"...Loading"}><Cart /></Suspense>} />
        <Route path='/services' element={<Suspense fallback={"...Loading"}><Services /></Suspense>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
