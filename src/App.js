import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import {
    BrowserRouter as Router,
    Route,
    // Link,
    Routes
  } from "react-router-dom";

export default function App() {

    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message,type) =>{
        setAlert({
            msg:message,
            tp:type
        });
        setTimeout(() => {
            setAlert(null);
        }, 6000);
        
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#030728';
            showAlert("Dark mode has been enabled", "success");
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "Success");
        }
    };
 return (

  <>
   <Router>
        <Navbar  mode={mode} toggleMode={toggleMode} title="YES"/>
        <Alert alert={alert} mode={mode} toggleMode={toggleMode} />
         <div> 
    <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>                      
            <Route exact path="/" element={ <TextForm heading="ALWAYS & FOREVER" mode={mode} toggleMode={toggleMode} alert={Alert} showAlert={showAlert}/> }/>
    </Routes>
        </div> 
 </Router>
    </>
  );
}