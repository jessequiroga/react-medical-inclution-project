import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"


class Login extends Component {
  constructor(props) {
    super(props);
    //this.signIn = this.signIn.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state = {
      username: '',
      pwd: ''
    };
    
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      pwd: event.target.value
    })
  }

  handleSubmit = () =>{
    const data = {
      username: this.state.username,
      pwd: this.state.pwd
    }
    console.log(data)

   axios.post('http://localhost:3001/user/login', data)
   .then(res => {
     console.log(res.data)
     window.location = '/homepage';
    });
   
  }
  
render(){
  return (
    <div className="login container">
      <form onSubmit={this.handleSubmit}>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    <Card style={{width:"626px", marginLeft:"auto", marginRight:"auto"}}>
    <CardHeader title="Sign in" subheader="to continue to MIP" style={{backgroundColor: "#eb5757b5"}} />
                  <CardContent >
                    <TextField
                      label="Enter your email"
                      fullWidth
                      autoFocus
                      required
                      type="text"
                      value ={this.state.username}
                      onChange={this.handleUsernameChange}
                    />
                    <br/><br/>
                    <TextField
                      label="Enter your password"
                      fullWidth
                      required
                      type="password"
                      value ={this.state.pwd}
                      onChange={this.handlePasswordChange}
                      
                    />
                  </CardContent>
                  <br/>
                    <Button color="primary" variant="contained" onClick={this.handleSubmit}>
                      Sign in
                    </Button>
                    <br/><br/>
                  
   
  </Card>
  </form>
  </div>
  );
}
}

export default Login;
