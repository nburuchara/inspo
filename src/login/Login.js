import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
import LandingNavbar from '../navbar/LandingNavbar'
import {Helmet} from 'react-helmet';


const Styles = styled.div `

    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 6%;
}

.header h1 {
    font-family: Quicksand;
    font-size: 45px;
    color: #F5EDA8;
    margin-top: 2%;
    margin-bottom: 4%;
}

.header h6 {
    color: #FF8447;;
    font-family: Quicksand;
    font-size: 18px;
}

.header a {
    color: #F5EDA8;
}



    // - - LOGIN ELEMENTS - - //

.loginElements input {
    text-align: center !important;
    width: 275px !important;
    height: 47.5px !important;
    font-family: Quicksand;
    margin-bottom: 25px !important;
    border-radius: 9px !important;
    outline: none !important;
    border: 2px solid #ff8447 !important;
    background-color: #053B35;
    color: #F5EDA8;
}

.textbox::placeholder {
    font-size: 16px;
    font-family: Quicksand;
    color: #F5EDA8;
}

.loginElements button {
    font-family: Quicksand;
    font-size: 16px;
    width: 200px;
    height: 50px;
    border-radius: 9px;
    background-color: #F5EDA8;
    margin-top: 35px;
    color: #08645B;
    border 2px solid #ff8447;
}

.loginElements p {
    font-family: Quicksand;
    color: #F5EDA8;
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
    color: #F5EDA8;;
    font-size: 22.5px;
    margin-left: 20px;
    margin-right: 20px;
}

.loginCode button {
    font-family: Quicksand;
    font-size: 20px;
    width: 200px;
    height: 55px;
    border-radius: 15px;
    background-color: #F5EDA8;
    margin-top: 35px;
    color: #08645B;
    border 2px solid transparent;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
}

    // - - LOGO BACKGROUND - - //

.logoBackground img {
    width: 100px;
}

    // - - FORGOT PASSWORD - - //

.forgetPassword {
    text-align: center;
    margin-top: 10%;
}

.forgotPassword h1 {
    font-family: Quicksand;
    font-size: 45px;
    color: #F5EDA8;;
    margin-top: 2%;
}

.forgotPassword h4 {
    font-family: Quicksand;
    color: #F5EDA8;
    font-size: 20px;
    margin-bottom: 20px;
}

.forgotPassword h5 {
    font-family: Quicksand;
    color: #F5EDA8;
    font-size: 24px;
    margin-bottom: 20px;
}

.forgotPassword input {
    width: 350px;
    height: 47.5px;
    border-radius: 8px;
    border: 2px solid #ff8447;
    padding: 7px;
    outline: none;
    text-align: center;
    font-family: Quicksand;
    color: #F5EDA8;
    background-color: #053B35;
}

.forgotPassword input::placeholder {
    text-align: center;
    font-family: Quicksand;
    color: #F5EDA8;
}

.forgotPassword p {
    margin-bottom: 35px;
    font-family: Quicksand;
    color: #FF8447;
    font-size: 19px;
    margin-top: 15px;
}

.forgotPassword button {
    font-family: Quicksand;
    height: 45px;
    width: 150px;
    background-color: #F5EDA8;
    color: #08645B;
    outline: none;
    border-radius: 8px;
    border: 2px solid #F5EDA8;
    margin-bottom: 25px;
}

    // - - LAST BUTTON - - //

.lastBtn button {
    margin-bottom: 20px;
}

    // - - PASSWORD CHANGED - - //

.passwordChanged {
    text-align: center;
    margin-top: 10%;
}

.passwordChanged h1 {
    font-family: Quicksand;
    font-size: 45px;
    color: #F5EDA8;
    margin-top: 2%;
}

.passwordChanged h4 {
    font-family: Quicksand;
    color: #F5EDA8;
    font-size: 25px;
    margin-bottom: 20px;
}

.passwordChanged button {
    font-family: Quicksand;
    height: 45px;
    width: 150px;
    background-color: #F5EDA8;
    color: #08645B;
    outline: none;
    border-radius: 8px;
    border: 2px solid #F5EDA8;
    margin-bottom: 25px;
}

@media screen and (max-width: 600px) {

        // - - HEADER - - //

    .header {
        text-align: center;
        margin-top: 6%;
    }
    
    .header h1 {
        font-family: Quicksand;
        font-size: 45px;
        color: #F5EDA8;
        margin-top: 2%;
        margin-bottom: 7%;
    }
    
    .header h6 {
        color: #FF8447;;
        font-family: Quicksand;
        font-size: 18px;
    }
    
    .header a {
        color: #F5EDA8;
    }

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
            codeErrorMsg: "",
            forgotPassword: false,
            errMsg: "",
            forgotEmail: ""
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
                    loginErrorMsg: "Please fill out all the fields correctly"
                })
            }
        } 
    }

    // ! - - BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG - - //
    // ! - - BUG BUG BUG BUG BUG BUG BELOW BELOW BELOW BUG BUG BUG BUG BUG BUG BUG BUG - - //
    // ! - - BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG- - //
    
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

    submitForgot = () => {
        if(!this.state.forgotEmail == "") {
            fire.firestore().collection("forgottenPassword").add({
                email: this.state.forgotEmail,
                date: new Date()
            })
            this.setState({
                forgotPassword: false,
                passwordChanged: true,
                errMsg: ""
            })
        } else {
            this.setState({
                errMsg: "Please enter your email address"
            })
        }
    }

    leavePasswordChanged = () => {
        this.setState({
            passwordChanged: false,
            loggedOut: true,
            errMsg: "",
            forgotPassword:""
        })
    }

    leaveForgot = () => {
        this.setState({
            loggedOut: true,
            forgotPassword: false,
            errMsg: "",
            forgotPassword: ""
        })
    }

    goToForgotPassword = () => {
        this.setState({
            loggedOut: false,
            forgotPassword: true
        })
    }

    render () {
        return(
            <Styles>
                <Helmet>
                    <style>{'body { background-color: #08645B; }'}</style>
                </Helmet>
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
                                    <a href="javascript:void(0);" onClick={this.goToForgotPassword}>
                                    <h6
                                    onClick={this.forgotPassword}
                                    ><b>Forgot my password</b></h6>
                                    </a>
                                    <button
                                    onClick={this.loginClicked}
                                    ><b>Login</b></button>
                                    <br/>
                                    <div className="lastBtn">   
                                        <button
                                        onClick={this.backToHome}
                                        ><b>Back to Home</b></button>
                                    </div>
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
                                    <p>If you landed on this page but you already have an active account, you must have accidentally typed your password incorrectly (apologies we're trying to fix this issue!). Simlpy refresh the page and try logging in again.</p>
                                </div>
                            }   
                    </div>
                }
                {this.state.forgotPassword && 
                    <div className="forgotPassword">
                        <h1>Forgot Your Password?</h1>
                        <h4>Don't worry we get it!</h4>
                        <h5>Drop your email below and we'll sort you out</h5> <br/>
                        <input
                        value={this.state.forgotEmail}
                        id="forgotEmail"
                        onChange={this.handleChange}
                        placeholder="Enter your email here"
                        />
                        <p><b>{this.state.errMsg}</b></p>
                        <button
                        onClick={this.submitForgot}
                        ><b>Sumbit</b></button> <br/>
                        <button
                        onClick={this.leaveForgot}
                        ><b>Back</b></button>
                    </div>
                }
                {this.state.passwordChanged && 
                    <div className="passwordChanged">
                        <h1>Done!</h1>
                        <h4>You will receive an email within the next hour or so with a link to reset your password</h4>
                        <button
                        onClick={this.leavePasswordChanged}
                        >Back</button>
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