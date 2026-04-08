
import './App.css'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'
import Auth from './Pages/Auth'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'

function App() {
  return (
    <>
    <AuthProvider>  
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/checkout' element={<Checkout/>} /> 
      </Routes>
    </div>
    </AuthProvider>
    </>
  )
}

export default App
