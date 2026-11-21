import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './comps/Login'
import Layout from './comps/Layout'
import Showroom from './comps/Showroom'

function App() {

  const [auth,setAuth]=useState({user:null,token:null});
  return (
    <>
      <Routes>
              <Route path="/" element={<Layout />}>
        
        <Route path="/login" element={<Login authSetter={setAuth}/>}/>
                  <Route path="/showroom" element={auth.token ? <Showroom user={auth.user} /> : <Navigate to="/" replace />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
