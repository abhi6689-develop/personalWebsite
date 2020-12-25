import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Skills from "./Skills";
import Aboutme from "./Aboutme";
import SchoolEducation from "./SchoolEducation";
import CollegeEducation from "./CollegeEducation";
import ContactMe from "./ContactMe";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/schooleducation" component={SchoolEducation} />
        <Route exact path="/collegeeducation" component={CollegeEducation}/>
        <Route exact path="/contactMe" component={ContactMe}/>
      </Switch>
    </Router>
  );
}
