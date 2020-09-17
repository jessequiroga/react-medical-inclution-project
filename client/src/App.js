import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import Axios from "axios";
import UserContext from "./components/context/UserContext";
//import Nav from "./components/nav";

import Login1 from "./components/auth/login1";
import Hompage from "./components/homepage";
import Nav from "./components/nav";
import Inteview from "./components/inteview";
import InternalMedcine from "./components/InternalMedcine";
import ViewInternalMed from "./components/inteviewForms/viewInternalMed";
import Dialect from "./components/diaLect/dialect";
import Wakayama from "./components/diaLect/wakayama";
import FontDetails from "./components/diaLect/fontDetails";
import FindDetails from "./components/diaLect/findDetails";
import BasicSentences from "./components/diaLect/basicSentences";
import Obstetricgynecology from "./components/Obstetricgynecology";
import Disclaimer from "./components/disclaimer";
import Covid19 from "./components/covid-19";
import Covid19Result from "./components/covid-19Resuls";
import Register from "./components/auth/register";
import Cardiology from "./components/CardiologyForms/cardiology";
import Gastrology from "./components/GastrologyForm/gastrology";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { InternalMedContext } from './components/internalMedContext';
import { CardioContext } from './components/context/cardiologyContext';
import { LogContext } from './components/context/logfileContext';
import { GastrologyContext } from './components/context/gastrologyContext';
//import { BasicSentContext } from './components/diaLect/basicSentContext';
import { ObstetricgynecologyContext } from "./components/ObstetricgynecologyContext"
import { Covid19Context } from "./components/context/covid19Context"

import WordDetails from "./components/diaLect/wordDetails";
import Dictionary from "./components/diaLect/dictionary";



function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://18.221.74.51:5000/user/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://18.221.74.51:5000/user/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data
        });
      }
    }
    checkLoggedIn();
  }, [])

  return (
    <>
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <LogContext>
        <Covid19Context>
          <Route exact path="/" component={Covid19} />
          <Route path="/covid19Result" component={Covid19Result} />
        </Covid19Context>
        
        <Route path="/login1" component={Login1} />
        <Route path="/homepage" component={Hompage} />
        <Route path="/inteview" component={Inteview} />
        <Route path="/nav" component={Nav} />


        <Route path="/disclaimer" component={Disclaimer} />

        <InternalMedContext>
          <Route path="/internalMedcine" component={InternalMedcine} />
          <Route path="/viewInternalMed" component={ViewInternalMed} />
        </InternalMedContext>

        <ObstetricgynecologyContext>
          <Route path="/obstetricgynecology" component={Obstetricgynecology} />
        </ObstetricgynecologyContext>

        <CardioContext>
          <Route path="/cardiology" component={Cardiology} />
        </CardioContext>


        <Route path="/gastrology" component={Gastrology} />

        <Route path="/register" component={Register} />


        <Route path="/dialect" component={Dialect} />
        <Route path="/wakayama" component={Wakayama} />
        <Route path="/basicSentences" component={BasicSentences} />
        <Route path="/fontDetails" component={FontDetails} />
        <Route path="/findDetails" component={FindDetails} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/wordDetails" component={WordDetails} />

        </LogContext>
      </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
