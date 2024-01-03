import { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import React_useState from './components/useState';
import React_useEffect from './components/useEffect';
import React_useContext from './components/useContext';
import './App.css'

function App() {

  return (
    <>
      <div>ReactJS Hooks</div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/usestate' element={<React_useState/>} />
            <Route path='/useeffect' element={<React_useEffect/>} />
            <Route path='/usecontext' element={<React_useContext/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
