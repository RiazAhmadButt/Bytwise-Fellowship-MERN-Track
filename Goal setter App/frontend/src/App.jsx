import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import './index.css'
function App() {

  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <div className="page">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>

        </div>
      </Router>
    </>
  )
}

export default App
