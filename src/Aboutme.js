import React from "react";
import { Chrono } from "react-chrono";
import TextButtons from "./Navbar";
import BottomNav from "./BottomNav";

export default function Aboutme() {
  const items = [
    {
      title: "August 2001",
      cardTitle: "Born",
      cardSubtitle: "Birthday's on 12th August",
      media: {
        type: "IMAGE",
        source: {
          url: "./getty_483183993_2000133320009280267_371857.jpg",
        },
      },
    },
    {
      title: "Some time in 2002",
      cardTitle: "Started Walking",
      cardSubtitle: "Made use of those legs",
    },
    {
      title: "2004",
      cardTitle: "School Begins",
      cardSubtitle: "At this point, my parents were done",
      media: {
        type: "IMAGE",
        source: {
          url: "./Starting-kindergarten.jpg",
        },
      },
    },
    {
      title: "2017",
      cardTitle: "Gave my class 10 board exams",
      cardSubtitle: "I have two birth certficates now",
      media: {
        type: "IMAGE",
        source: {
          url: "./ICSE_The_Indian_Wire.jpg.webp",
        },
      },
    },
    {
      title: "2019",
      cardTitle: "Gave my class 12 board exams",
      cardSubtitle: "We head to college now",
      media: {
        type: "IMAGE",
        source: {
          url: "./ICSE_The_Indian_Wire.jpg.webp",
        },
      },
    },
    {
      title: "2019",
      cardTitle: "College",
      cardSubtitle:
        "WOW! Such an eventful year, the world is moving too fast. Wonder how hectic next year is gonna be.",
      media: {
        type: "IMAGE",
        source: {
          url: "./4a34877f-8a50-4bba-be2c-7edad2672502.gif",
        },
      },
    },
    {
      title: "2020",
      cardTitle: "Coronavirus | Lockdown",
      cardSubtitle:
        "The world is under lockdown, and I am currently getting fat.",
      media: {
        type: "VIDEO",
        source: {
          url: "https://www.youtube.com/embed/ouWg4-37aJE",
          type: "mp4",
        },

        name: "2020 summed up",
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
        <text>MY STORY</text>
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
