import React, { Component } from "react";
import TextButtons from "./Navbar";
import TextField from "@material-ui/core/TextField";
import GoogleMapReact from "google-map-react";

export default function ContactMe() {

  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  const page = {
    backgroundImage: "linear-gradient(60deg, #222831 0%, #393e46 90%)",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    minHeight: "100vh",
    minWidth: "200v",
  };
  const headingBG = {
    position: "relative",
    margin: "auto",
    marginTop: 35,
    fontFamily: "Helvetica Neue",
    backgroundColor: "#00adb5",
    opacity: 1,
    height: 80,
    width: 600,
  };
  const heading = {
    textAlign: "center",
    color: "#eeeeee",
    opacity: 1,
    fontSize: 50,
  };
  const form = {
    position: "relative",
    margin: "auto",
    width: 500,
    marginTop: 30,
  };
  const bottomtext = {
    textAlign: "center",
    paddingTop: 20,
    color: "#eeeeee",
  };
  const myInfo = {
    textAlign: "center",
    paddingTop: 40,
    color: "#eeeeee",
    fontSize: 30,
  };
  const location = {
    lat: 22.5726,
    lng: 88.3639,
    address: 'The 368',
  };
  return (
    <div style={page}>
      <TextButtons />
      <div style={headingBG}>
        <div style={heading}>
          <text>LEAVE ME A MESSAGE:</text>
        </div>
      </div>
      <div>
        <form style={form} noValidate autoComplete="off">
          <TextField
            fullWidth={true}
            id="filled-basic"
            label="Your Name"
            variant="filled"
          />
        </form>
        <form style={form} noValidate autoComplete="off">
          <TextField
            fullWidth={true}
            id="filled-basic"
            label="Your Email"
            variant="filled"
          />
        </form>
        <form style={form} noValidate autoComplete="off">
          <TextField
            id="standard-multiline-static"
            label="Your Message"
            rows={4}
            fullWidth={true}
            variant="filled"
          />
        </form>
      </div>
      <div style={bottomtext}>
        <text>Press enter to submit</text>
      </div>
      <div style={headingBG}>
        <div style={heading}>
          <text>Or just contact me</text>
        </div>
      </div>
      <div style={myInfo}>
        <text>Email me at:</text>
        <br></br>
        <text>abhithe6689@gmail.com</text>
      </div>
      <div style={myInfo}>
        <text>Find me here:</text>
      </div>
      <div
        style={{
          height: "50vh",
          width: "50%",
          position: "relative",
          margin: "auto",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDpkj4sNd7tLwVU1aBwR69nkpQ65vXKDiU" }}
          defaultCenter={location}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
}
