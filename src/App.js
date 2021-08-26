import "./App.css";
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import Alert from "./Components/Alert";

function App() {

const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
          msg : message,
          type : type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 3000);
  }

const[mode, setMode] = useState('light');

const toggleMode = () => {
  if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light Mode has been enabled!", "success")
  }
  else{
    setMode('dark');
    document.body.style.backgroundColor ='#021328';
    showAlert("Dark Mode has been enabled!", "success")
  }
}
  

  return (
    <>
      <Router>
        <Header mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/"><MainPage showAlert={showAlert} heading="Enter the text for Analyze below &#9759;" mode={mode}/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
