import React, { Component } from "react";
import TextButtons from "./Navbar";
import BottomNav from "./BottomNav";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Projects() {
  const page = {
    backgroundImage: "linear-gradient(60deg, #222831 0%, #393e46 90%)",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    minHeight: "100vh",
    minWidth: "200v",
  };
  const pageHeading = {
    textAlign: "center",
    color: "#eeeeee",
    fontSize: 120,
    fontFamily: "Bungee Outline, cursive",
    opacity: 1,
    fontWeight: "bold",
  };

  const topBG = {
    marginTop: 20,
    height: 160,
    backgroundImage:
      "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
  };
  const footer = {
    paddingTop: 100,
  };

  const individualHeadings = {
    textAlign: "center",
    color: "#00adb5",
    paddingTop: 10,
    fontSize: 60,
    fontFamily: "Bungee, Helvetica",
  };

  const headingBG = {
    position: "relative",
    margin: "auto",
    backgroundImage: "url(./PositiveZestyAmericankestrel-size_restricted.gif)",
    opacity: 1,
    height: 100,
    marginTop: 70,
    width: 600,
  };

  const projectHeadings = {
    textAlign: "center",
    fontSize: 80,
    fontFamily: "Bungee outline, cursive",
    paddingTop: 150,
    color: "#eeeeee",
  };

  const whatsIt = {
    paddingLeft: 20,
    color: "#00adb5",
    paddingTop: 5,
    fontSize: 40,
  };

  const whatsItBG = {
    marginLeft: 30,
    backgroundColor: "white",
    opacity: 1,
    height: 70,
    marginTop: 20,
    width: 350,
  };
  const paras = {
    paddingTop: 20,
    marginLeft: 35,
    color: "#eeeeee",
    fontSize: 25,
  };

  const tryOut = {
    marginLeft: 1250,
    marginRight: 20,
    marginTop: -100,
  };

  const buttonSt = {
    paddingLeft: 20,
    paddingright: 30,
  };
  return (
    <div style={page}>
      <TextButtons />
      <div style={topBG}>
        <div style={pageHeading}>
          <text>PROJECTS</text>
        </div>
      </div>
      <div style={headingBG}>
        <div style={individualHeadings}>
          <text>iOS PROJECTS</text>
        </div>
      </div>
      <div style={projectHeadings}>
        <text>CLIMA</text>
      </div>
      <div style={whatsItBG}>
        <div style={whatsIt}>
          <text>What is it?</text>
        </div>
      </div>
      <div style={paras}>
        <text>
          An iOS app that uses the inbuilt GPS in your phone and fetches climate
          data for your location<br></br>
          The app makes available data like current temperature, rain forecast
          etc.
        </text>
        <div style={tryOut}>
          Want to Try it out?<br></br>
          <div style={buttonSt}>
            <Button
              variant="contained"
              href="https://github.com/abhi6689-develop/Clima-iOS13"
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </div>
        </div>
      </div>

      <div style={projectHeadings}>
        <text>Covid India Tracker</text>
      </div>
      <div style={whatsItBG}>
        <div style={whatsIt}>
          <text>What is it?</text>
        </div>
      </div>
      <div style={paras}>
        <text>
          Want to know real-time statewise covid19 stats in India? This app can
          do that, it collects data<br></br>
          from various sources to make sure that the data is correct and up to
          date. With this app, you<br></br>
          have access to stats like total confirmed cases, total recovered
          cases, total deaths, activate cases, <br></br>
          and recovery rate of each state and the country.
        </text>
        <div style={tryOut}>
          Want to Try it out?<br></br>
          <div style={buttonSt}>
            <Button
              variant="contained"
              href="https://github.com/abhi6689-develop/CovidIndia-Tracker"
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </div>
        </div>
      </div>

      <div style={projectHeadings}>
        <text>Alert!</text>
      </div>
      <div style={whatsItBG}>
        <div style={whatsIt}>
          <text>What is it?</text>
        </div>
      </div>
      <div style={paras}>
        <text>
          Ever stuck in place and see no one or nothing around? Or are sorrounded by poeple that don't seem<br></br>
          that good? With a press of button in this app you can send your exact address and coordinates to your pre-<br></br>
          saved contacts. This app enables people that care about you have a shot at saving you, if you are ever in trouble.<br></br> 
          And even if you get killed, people will know where you got killed..
        </text>
        <div style={tryOut}>
          Want to Try it out?<br></br>
          <div style={buttonSt}>
            <Button
              variant="contained"
              href="https://github.com/abhi6689-develop/Alert-"
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </div>
        </div>
      </div>
      <div style={footer}>
        <BottomNav />
      </div>
    </div>
  );
}
