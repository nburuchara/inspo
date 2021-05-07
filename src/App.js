import React,{Component} from 'react'
import logo from './logo.svg';
import fire from './database/firebase'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import './index.css'
import styled from 'styled-components'
import LandingPg from '../src/landing/LandingPg'
import Home from './home/Home'
import Profile from './profile/Profile'
import OtherUser from './other_user/OtherUser'
import Upload from './upload/Upload';
import Login from './login/Login';
import About from './about/About'
import Message from './message/Message'
import Demo from './demo/Demo'

const Styles = styled.div  `


`

class App extends Component {

  constructor () {
    super()
    this.state = {
      user:null
    }
  }

  componentDidMount() {
    this.authListener()
  }


  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
      } else {
        this.setState({user:null})
      }
    })
  }


  
  render () {
    return (
      <Styles>
        <div className="App">
          {this.state.user ? (
              //* LOGGED IN
            <React.Fragment>
            <Router>
              <Switch>
              <Route exact path = "/" render = {() => <Home/>}/>
                <Route exact path = "/profile" render = {() => <Profile/>}/>
                <Route exact path = "/selected_user" render = {() => <OtherUser/>}/>
                <Route exact path = "/upload" render = {() => <Upload/>}/>
                <Route exact path = "/messages" render = {() => <Message/>} />
              </Switch>
            </Router>
          </React.Fragment>
          ) : (
              //* NOT LOGGED IN
            <React.Fragment>
            <Router>
              <Switch>
                <Route exact path = "/" render = {() => <LandingPg/>}/>
                <Route exact path = "/login" render = {() => <Login/>}/>
                <Route exact path = "/about" render = {() => <About/>}/>
                <Route exact path = "/demo" render = {() => <Demo/>} />
              </Switch>
            </Router>
          </React.Fragment>
          )}
          
        </div>
      </Styles>
    );
  }
}

export default App;
