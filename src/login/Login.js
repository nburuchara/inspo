import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
import LandingNavbar from '../navbar/LandingNavbar'

const Styles = styled.div `

    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 10%;
}

.header h1 {
    font-family: inspoMain;
    font-size: 85px;
    color: #FF8447;
    margin-top: 2%;
}

    // - - LOGIN ELEMENTS - - //

.loginElements input {
    text-align: center;
    width: 260px;
    height: 45px;
    margin-bottom: 25px;
    border-radius: 6px;
    border: 0.2px solid black;
    outline: none;
}

.textbox::placeholder {
    font-size: 30px;
    font-family: Concert One;
}

.loginElements button {
    font-family: Quicksand;
    font-size: 20px;
    width: 200px;
    height: 55px;
    border-radius: 15px;
    background-color: #FF8447;
    margin-top: 35px;
    color: white;
    border 2px solid transparent;
}

.loginElements p {
    font-family: Quicksand;
    color: #FF8447;
    font-size: 22.5px;
}

    // - - LOGIN CODE - - //

.loginCode {
    margin-top: 15%;
}

.loginCode input {
    text-align: center;
    width: 260px;
    height: 45px;
    margin-bottom: 25px;
    border-radius: 6px;
    border: 0.2px solid black;
    outline: none;
}

.loginCode p {
    font-family: Quicksand;
    color: #FF8447;
    font-size: 22.5px;
}

.loginCode button {
    font-family: Quicksand;
    font-size: 20px;
    width: 200px;
    height: 55px;
    border-radius: 15px;
    background-color: #FF8447;
    margin-top: 35px;
    color: white;
    border 2px solid transparent;
    margin-left: 10px;
    margin-right: 10px;
}

    // - - LOGO BACKGROUND - - //

.logoBackground img {
    width: 100px;
}


`


export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            userEmail: "",
            verifiedEmails: [],
            email: "",
            password: "",
            loginErrorMsg: "",
            loggedOut: true,
            loginForm: true,
            loginCode: false,
            friendlyBackgroud: false,
            code: "",
            activeAccounts: '',
            verifiedUser: [],
            currentCode: "",
            codeErrorMsg: ""
        }
    }

    authListener () {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userEmail: user.email})
            } else {
                this.setState({userEmail: null})
            }
        })
    }

    componentDidMount = () => {
        this.authListener()
        fire.firestore().collection("verifiedUsers")
        .get().then(querySnapshot => {
            const data1 = querySnapshot.docs.map(doc => doc.data().email)
            const data2 = querySnapshot.docs.map(doc => doc.data())
            this.setState({
                verifiedEmails: data1,
                verifiedUserData: data2
            })
           
        })

        fire.firestore().collection("allUsernames")
        .get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data().email)
            this.setState({
                activeAccounts: data
            })
           
        })
       
    }

    renderVerifiedUser = () => {
        this.state.verifiedUser.map((userInfo) => {
            if (this.state.email == userInfo.email && this.state.code == userInfo.code) {
               
            } else {
                
            }
        })
    }
e
    loginClicked = () => {
        if (!this.state.email == "" 
        && !this.state.password == "" 
        && this.state.activeAccounts.includes(this.state.email)) {
           
           this.login()
        } else {
            if (!this.state.email == "" 
            && !this.state.password == "" 
            && this.state.verifiedEmails.includes(this.state.email)) {
                this.state.verifiedUserData.map((user) => {
                    if (user.email == this.state.email && user.password == this.state.password) {
                        
                        this.setState({
                            currentCode: user.code,
                            loginCode: true,
                            loginForm: false,
                        })
                    } else {
                        this.setState({
                            loginErrorMsg: "Password seems to be incorrect"
                        })
                    }
                })
            } else if (!this.state.email == "" 
            && !this.state.password == "" 
            && !this.state.verifiedEmails.includes(this.state.email)) {
                this.setState({
                    loginErrorMsg: "Oops! Looks like you're not in our system yet, not to worry though! Click 'Back to Home' to sign up!"
                })
            } else {
                this.setState({
                    loginErrorMsg: "Please fill out all the fields correctly.!"
                })
            }
        } 
    }

    login = () => {
  
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            localStorage.setItem('logged', true)
            window.location.href = '/'
        }).catch((error)=>{
            this.login()
            this.setState({
                currentCode: this.state.currentCode,
                loginCode: true,
                loginForm: false,
            })
            if (this.state.verifiedEmails.includes(this.state.email)) { 
                this.state.verifiedUserData.find(obj => {
                    if(obj.email == this.state.email){
                        this.setState({
                            currentCode: obj.code
                        })
                    }
                })
            } else {
                this.setState({
                    loginErrorMsg: "⚠️ Email or password are incorrect"
                })
            }
        })
    }

    signUp

    signUp = () => {
        if (this.state.currentCode == this.state.code) {
            //* signup function
            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
                localStorage.setItem("logged", true)
                window.location.href = '/'
            }).catch((error) => {
                alert(error)
            })
        } else {
            this.setState({codeErrorMsg: "Your code is incorrect"})
        }
    }

    backToLogin = () => {
        this.setState({
            loginCode: false,
            loginForm: true
        })
    }

    backToHome = () => {
        window.location.href = "/"
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    render () {
        return(
            <Styles>
                <LandingNavbar/>
                {this.state.loggedOut && 
                    <div>
                        {this.state.loginForm && 
                            <div className="header">
                                <h1>Login</h1>
                                <div className="loginElements">
                                    <input
                                    id="email"
                                    type="email"
                                    className="textbox"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    />
                                    <br/>
                                    <input
                                    id="password"
                                    type="password"
                                    className="textbox"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    />
                                    <p>{this.state.loginErrorMsg}</p>
                                    <button
                                    onClick={this.loginClicked}
                                    ><b>Login</b></button>
                                    <br/>
                                    <button
                                    onClick={this.backToHome}
                                    ><b>Back to Home</b></button>
                                </div>
                            </div>   
                            }
                            {this.state.loginCode && 
                                <div className="loginCode">
                                    <p>Please enter your verification code</p>
                                    <input
                                    id="code"
                                    typ="text"
                                    className='textbox'
                                    value={this.state.code}
                                    onChange={this.handleChange}
                                    />
                                    <p>{this.state.codeErrorMsg}</p>
                                    <button
                                    onClick={this.signUp}
                                    >Continue</button>
                                    <button
                                    onClick={this.backToLogin}
                                    >Cancel</button>
                                </div>
                            }   
                    </div>
                }
                {this.state.friendlyBackgroud &&
                    <div className="logoBg">
                        <img src="assets/logo.png"/>
                    </div>
                }
            </Styles>
        )
    }

}