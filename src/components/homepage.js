import React from 'react';
import Nav from "./nav.js";
import '../App.css';
import Button from '@material-ui/core/Button';

function Homepage() {
  return (
    <div className="container">
        <Nav />
        <div row>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        </div>
    </div>
  );
}

export default Homepage;
