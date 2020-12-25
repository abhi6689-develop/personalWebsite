import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "center"
    },
  },
}));
const styles = { 
    backgroundColor: '#eeeeee',
    shadow: '5px 5px 5px 5px',
    textAlign: "center"
}

export default function BottomNav() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={styles}>
      <Button href="https://www.instagram.com/abhishek_.12/" startIcon ={<InstagramIcon/>}>Instagram</Button>
      <Button href="https://github.com/abhi6689-develop" startIcon ={<GitHubIcon/>}>Github</Button>
      <Button href="https://www.linkedin.com/in/abhishek-tiwari-1b255a1a9/" startIcon ={<LinkedInIcon/>}>LinkedIn</Button>
    </div>
  );
}
