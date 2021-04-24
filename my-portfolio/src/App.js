import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Component/NavBar';
import About from './Component/About';
import Footer from './Component/Footer';
import Home from './Component/Home';
import React, { useState, useEffect } from "react";
import Project from './Component/Project/Project';

import Resume from './Component/Resume';


function App() {

  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
      <div className="main-Class" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Project} />
          <Route path="/resume" component={Resume} />

        </Switch>

      </div>
      <Footer />
    </Router>


  );
}

export default App;
