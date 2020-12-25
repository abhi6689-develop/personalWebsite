import React, { Component } from "react";
import { Chrono } from "react-chrono";
import TextButtons from "./Navbar";
import BottomNav from "./BottomNav";

export default function CollegeEducation() {
  const items = [
    {
      title: "2017",
      cardTitle: "Sportskeeda",
    },
    {
      title: "Duration: 3 months(May,2017-August,2017)",
      cardTitle: "SportsKeeda",
      cardSubtitle: "Position: Content Writer",
      media: {
        type: "IMAGE",
        source: {
          url: "./unnamed.png",
        },
      },
    },
    {
      title: "2019",
      cardTitle: "VMD & Associates",
    },
    {
      title: "Duration: 6 months(April,2019-September,2019)",
      cardTitle: "VMD & Associates",
      cardSubtitle: "Assistant market research analyst",
      media: {
        type: "IMAGE",
        source: {
          url: "./0.png",
        },
      },
    },
    {
      title: "2020",
      cardTitle: "Infoware India, Kolkata",
    },
    {
      title: "Duration: 3 months(June,2020-August,2020)",
      cardTitle: "Inforware India, Kolkata",
      cardSubtitle: "Junior iOS developer",
      media: {
        type: "IMAGE",
        source: {
          url: "./Infoware-Logo-07-07-07.png",
        },
      },
    },
    {
        title: "2020",
        cardTitle: "Adaptive Investments",
      },
      {
        title: "Duration: August 2020-Current",
        cardTitle: "Adaptive Investment Solutions, Boston",
        cardSubtitle: "Junior software engineer",
        media: {
          type: "IMAGE",
          source: {
            url: "./1539893929319.png",
          },
        },
      },
  ];

  const pageStyle = {
    backgroundImage:
      "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
    paddingTop: 0,
    paddingBottom: 0,
    minHeight: "100vh",
    minwidth: "100vh",
  };

  const timeLine = {
    paddingTop: 30,
    paddingBottom: 30,
    position: "relative",
    margin: "auto",
    width: 700,
    height: 800,
  };

  const Bottom = {
    marginTop: 70,
  };
  const pageHeading = {
    textAlign: "center",
    color: "#eeeeee",
    fontSize: 120,
    fontFamily: "Bungee Outline, cursive",
    opacity: 1,
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <TextButtons />
      <div style={pageHeading}>
        <text>Work Experience</text>
      </div>
      <div style={timeLine}>
        <Chrono
          items={items}
          slideShow
          slideItemDuration={2000}
          mode="VERTICAL_ALTERNATING"
          theme="white"
          scrollable={{ scrollbar: false }}
          hideControls
        />
      </div>
      <div style={Bottom}>
        <BottomNav />
      </div>
    </div>
  );
}
