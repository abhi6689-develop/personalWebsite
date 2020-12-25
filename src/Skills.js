import React, { Component } from "react";
import "./styles.css";
import TextButtons from "./Navbar";
import BootstrapSlider from "./Carousel";
import BottomNav from "./BottomNav";
import SphereGroup from './SphereGroup'
export default function Skills() {
  const pageStyle = {
    backgroundImage: "linear-gradient(60deg, #222831 0%, #393e46 90%)",
    paddingTop: 0,

    paddingBottom: 0,
    minHeight: "100vh",
    minwidth: "200vh"
  };

  const car = {
    position: "relative",
    float: "relative",
    margin: "auto",
    marginTop: 30,
    width: 1000,
  };
  const heading = {
    marginTop: 30,
    textAlign: "center",
    color: "white",
    fontSize: 70,
    opacity: 0.9,
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
    paddingTop: 30,
  };
  return (
    <div style={pageStyle}>
      <div>
        <TextButtons />
      </div>
      <div style={topBG}>
        <div style={pageHeading}>
          <text>SKILLS</text>
        </div>
      </div>
      <div>
        <SphereGroup/>
      </div>
      <div style={heading}>| DETAILS |</div>
      <div style={car}>
        <BootstrapSlider />
      </div>
      <div style={footer}>
        <BottomNav />
      </div>
    </div>
  );
}
