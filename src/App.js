import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navrbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleDarkModeBtn = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Black Dark mode Enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode Enable", "success")
    }
  }
  return (
    <>
      <Router>
        <Navrbar title='TextUtils' mode={mode} toggleDarkModeBtn={toggleDarkModeBtn} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter your text here :-" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
