import React, { Component } from "react";
import { Chrono } from "react-chrono";
import TextButtons from "./Navbar";
import BottomNav from "./BottomNav";

export default function SchoolEducation() {
  const items = [
    {
      title: "Class 10",
      cardTitle: "Class 10: 2017",
    },
    {
      title: "2017",
      cardTitle: "SCHOOL: SRI SRI ACADEMY",
      cardSubtitle: "BOARD: ICSE",
      media: {
        type: "IMAGE",
        source: {
          url: "./slider5a.jpg",
        },
      },
    },
    {
      title: "Class 12",
      cardTitle: "Class 12: 2019",
    },
    {
      title: "2019",
      cardTitle: "SCHOOL: SRI SRI ACADEMY",
      cardSubtitle: "BOARD: ISC",
      media: {
        type: "IMAGE",
        source: {
          url: "./slider5a.jpg",
        },
      },
    },
    {
        title: "College",
        cardTitle: "College(Undergraduate)",
      },
      {
        title: "2019-Current",
        cardTitle: "SP Jain School Of Global Management",
        cardSubtitle: "Bachelor Of Data Science",
        media: {
          type: "IMAGE",
          source: {
            url: "./SP_Jain_School_of_Global_Management_Logo.webp",
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
        <text>Education</text>
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
