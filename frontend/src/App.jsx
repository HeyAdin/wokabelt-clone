import { useState } from 'react'
import './App.css'
import { AppBar } from './components/AppBar'
import { Dashboard } from './pages/Dashboard'

function App() {

  return (
    <div className='bg-gray-500'>
      <Dashboard />
    </div>
  )
}

export default App
