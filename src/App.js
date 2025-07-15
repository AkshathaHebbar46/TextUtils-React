// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [mode2, setMode2] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000000';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    } 
  }

  const toggleMode2 = () => {
    if(mode2 === 'light'){
      setMode2('danger');
      document.body.style.backgroundColor = '#d44444ff';
      showAlert("Red mode has been enabled", "success");
      document.title = "TextUtils - Red Mode";
    }
    else{
      setMode2('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    } 
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} 
    mode2 = {mode2} toggleMode2 = {toggleMode2}/>
    <Alert alert = {alert}/>
    <div className="container my-8">
      {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the text below" mode = {mode} mode2 = {mode2}/>} />
        </Routes> */}
     <TextForm showAlert = {showAlert} heading = "Enter the text below" mode = {mode} mode2 = {mode2}/>
    </div>
    {/* </Router> */}
    
</>
  );
}

export default App;
