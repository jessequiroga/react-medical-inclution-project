import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Nav from "./components/nav";
import Login from "./components/login";
import Hompage from "./components/homepage";
import Inteview from "./components/inteview";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      
      
      <Route exact path="/" component={Login} />
      <Route path="/homepage" component={Hompage} />
      <Route path="/inteview" component={Inteview} />
      
    </div>
    </Router>
  );
}

export default App;
