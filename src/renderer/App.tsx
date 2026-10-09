import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Content from './pages/Content'

const App = () => {
  return (
    <Routes>
        <Route>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/content" element={<Content />} />
            <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
    </Routes>
  )
}

export default App