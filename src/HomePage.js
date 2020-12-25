import React, { Component } from "react";
import { AnimatedText } from "./AnimatedText";
import "./styles.css";
import TextButtons from "./Navbar";
import ButtonBases from "./Highlights";
import BottomNav from "./BottomNav";

export default function HomePage() {
  const name = {
    textAlign: "left",
    paddingLeft: 50,
    paddingTop: 100,
  };

  const highlights = {
    marginTop: 20,
  };

  const texts = {
    marginTop: 150,
    textAlign: "center",
    color: "white",
    fontSize: 40,
    opacity: 0.9,
  };
  const A = {
    paddingLeft: 1100,
    marginTop: -800,
    fontSize: 700,
    marginRight:0,
    paddingRight:0
  };

  const footer = {
    paddingTop: 300,
  }

  return (
    <div className="home-page">
      <div>
        <TextButtons />
      </div>
      <div style={name}>
        <AnimatedText textColor="#eeeeee" overlayColor="#00adb5" fontSize="800">
          {" "}
          ABHISHEK <br></br>TIWARI
        </AnimatedText>
      </div>
      <div style={texts}>
        <text>| FAQs |</text>
      </div>
      <div style={highlights}>
        <ButtonBases />
      </div>
      <div style={A}>
        <AnimatedText textColor="#1aa6b7" overlayColor="#ff414d" Size="500px">
          {" "}
          A
        </AnimatedText>
      </div>
      <div style={footer}>
        <BottomNav />
      </div>
    </div>
  );
}
