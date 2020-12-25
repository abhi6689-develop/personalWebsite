import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import BrushIcon from '@material-ui/icons/Brush';
import ContactMailIcon from '@material-ui/icons/ContactMail';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const styles = { 
    backgroundImage: 'linear-gradient(80deg, #00adb5 40%, #eeeeee 80%)',
    shadow: '5px 5px 5px 5px'
}

export default function TextButtons() {
  const history = useHistory();
  const handleClick = () => history.push("/");
  const handleClick2 = () => history.push("/skills");
  const handleClick3 = () => history.push("/projects");
  const handleClick4 = () => history.push("/contactMe");
  const classes = useStyles();

  return (
    <div className={classes.root} style={styles}>
      <Button onClick={handleClick} startIcon ={<HomeIcon/>}>HOME</Button>
      <Button onClick={handleClick2} startIcon ={<BlurOnIcon/>}>SKILLS</Button>
      <Button onClick={handleClick3} startIcon ={<BrushIcon/>}>PROJECTS</Button>
      <Button onClick={handleClick4} startIcon ={<ContactMailIcon/>}>CONTACT ME</Button>
    </div>
  );
}
