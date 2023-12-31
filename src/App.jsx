import { useState } from 'react'
import CandidateDetails from './components/Landingpage'
import CalculateBmi from './components/CalculateBMI';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<CandidateDetails/>}/>
        <Route path='/calculateBmi' element={<CalculateBmi/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
