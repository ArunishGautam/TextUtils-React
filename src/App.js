import './App.css';
// import AboutUs from './component/AboutUs';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setalert] = useState(null)
  const showalert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showalert("Dark Mode has been Enabled", "success");
      document.title="TextUtils - Dark Mode Grey";
      setInterval(()=>{
        document.title = "TextUtils is Amazing";
      },3000);
      setInterval(()=>{
        document.title = "Install TextUtils";
      },5000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been Enabled", "success")
      document.title="TextUtils - Light Mode";
      setInterval(()=>{
        document.title = "TextUtils is Amazing";
      },3000);
      setInterval(()=>{
        document.title = "Install TextUtils";
      },5000);
    }
  }
  const toggleMode1 = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='green';
      showalert("Dark Mode has been Enabled in Green", "success");
      document.title="TextUtils - Dark Mode Green";
      setInterval(()=>{
        document.title = "TextUtils is Amazing";
      },3000);
      setInterval(()=>{
        document.title = "Install TextUtils";
      },5000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been Enabled", "success")
      document.title="TextUtils - Light Mode";
      setInterval(()=>{
        document.title = "TextUtils is Amazing";
      },3000);
      setInterval(()=>{
        document.title = "Install TextUtils";
      },5000);
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1}/>
    <Alert  alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
        {/* <Route exact path="/about">
          <AboutUs/>
        </Route> */}
        {/* <Route exact path="/"> */}
          <TextForm showalert={showalert} heading="Enter the Text for analyze" mode={mode} />
        {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
