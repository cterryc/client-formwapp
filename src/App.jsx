import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './views/Landing/Landing'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Login from './views/Login/Login'
import Footer from './components/Footer/Footer'
import Register from './views/Register/Register'
import VerifyRegister from './views/VerifyRegister/VerifyRegister'
import VerifiedEmail from './views/VerifiedEmail/VerifiedEmail'
import Dashboard from './views/Dashboard/Dashboard'
import Preview from './views/Preview/Preview'

function App () {
  const { pathname } = useLocation()
  console.log('MERGE')

  return (
    <section className='section-app'>
      {(pathname === '/login' || pathname === '/register' || pathname === '/preview') ? null : <Navbar />}
      <main className='main-app'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='/register/verified' element={<VerifyRegister />} />
          <Route path='/user/verified/id/:token' element={<VerifiedEmail />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>
      {pathname === '/login' || pathname === '/register' ? null : <Footer />}
    </section>
  )
}

export default App
