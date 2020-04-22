import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Nav from "./components/nav";
import Login from "./components/login";
import Hompage from "./components/homepage";
import Inteview from "./components/inteview";
import Welcome from "./components/welcom";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/homepage" component={Hompage} />
      <Route path="/inteview" component={Inteview} />
      <Route path="/welcome" component={Welcome} />
      
    </div>
    </Router>
  );
}

export default App;
