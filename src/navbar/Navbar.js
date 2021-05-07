import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap'


const Styles = styled.div `

    // - - LOGO - - //

#brand {
    width: 25px;
}

.logoImg {
    width: 90px !important;
}

    // - - NAVBAR OPTIONS - - //

.navContainer {
    text-align: center !important;
}

.navContainer img {
    width: 50px !important;
    margin-left: 45px !important;
    margin-right: 45px !important;
}

.navContainer figcaption {
    font-family: Quicksand;
}

.navContainer figcaption:hover {
    color: #FF8447;
}

    // - - THE WHOLE NAVBAR - - //

.theWholeNavbar {
    text-align: right;
}
.theWholeNavbar img {
    width: 55.5%;
}

.theWholeNavbar label {
    font-family: 25px;
}

    // - - MESSAGE BUTTON - - //

.messageBtn {
    height: 50px;
    width: 70px;
    text-align: center;
    border: 1px solid #FF8447;
    border-radius: 7px;
    font-family: Quicksand;
    margin-right: 4%;
}

.messageBtn img {
    // margin-right: 10px;
}

@media screen and (orientation:landscape) 
and (min-device-width: 319px) 
and (max-device-width: 480px) {

    // - - THE WHOLE NAVBAR - - //

.theWholeNavbar {
    text-align: right;
}
.theWholeNavbar img {
    width: 100.5%;
}

.theWholeNavbar label {
    // margin-top: 3.35%;
    font-family: 25px;
}
        
            // - - MESSAGE BUTTON - - //
        
.messageBtn {
    height: 45px;
    width: 60px;
    border-radius: 7px;
    font-family: Quicksand;
    margin-right: 1.75%;
    margin-bottom: 5%;
}

.messageBtn img {
    margin-right: 10px;
}

}


@media screen and (max-width: 600px) {

    // - - THE WHOLE NAVBAR - - //

.theWholeNavbar {
    text-align: right;
}
.theWholeNavbar img {
    width: 100.5%;
}

.theWholeNavbar label {
    // margin-top: 3.35%;
    font-family: 25px;
}
    
        // - - MESSAGE BUTTON - - //
    
.messageBtn {
    height: 45px;
    width: 60px;
    border-radius: 7px;
    font-family: Quicksand;
    margin-right: 3%;
    margin-bottom: 5%;
}

.messageBtn img {
    margin-right: 10px;
}

}

`


export default class NavbarTool extends Component {
    constructor() {
        super()
        this.state = {
            userEmail: "",
            btnBgColor: "transparent",
            btnImg: "assets/messages.png",
            btnText: "Messages"
        }
    }

    componentDidMount() {
        this.authListener()
      }
    
    
    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userEmail: user.email})
            } else {
                this.setState({user:null})
            }
        })
    }

    logout = () => {
        fire.auth().signOut();
    }

    openMessages = () => {
        this.setState({
            btnBgColor: "transparent",
            btnImg: "/assets/messages.png"
        })
        window.location.href = "/messages"
    }

    render () {

        let msgBtnStyle = {
            backgroundColor: this.state.btnBgColor,
            color: this.state.btnTxtColor
        }

       
        return(
            <Styles>
                <div className="theWholeNavbar">
                    <Navbar expand="lg">
                        <Navbar.Brand id="brand"><img className="logoImg" src="assets/logo.png"/></Navbar.Brand>
                        <Navbar.Toggle id="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="navContainer ml-auto">
                                <Nav.Item><Nav.Link href="/">
                                    <figure>
                                        <img src="/assets/inspoIcon.png"/>
                                        <figcaption><b>feed</b></figcaption>
                                    </figure> 
                                </Nav.Link></Nav.Item>
                                {/* <Nav.Item><Nav.Link href="/upload">
                                    <figure>
                                        <img src="/assets/uploadIcon.png"/>
                                        <figcaption><b>upload</b></figcaption>
                                    </figure> 
                                </Nav.Link></Nav.Item> */}
                                <Nav.Item><Nav.Link href="/profile">
                                    <figure>
                                        <img src="/assets/profileIcon.png"/>
                                        <figcaption><b>profile</b></figcaption>
                                    </figure> 
                                </Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link href="/" onClick={() => this.logout()}>
                                    <figure>
                                        <img src="/assets/logoutIcon.png"/>
                                        <figcaption><b>logout</b></figcaption>
                                    </figure> 
                                </Nav.Link></Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* <button 
                    style={msgBtnStyle} 
                    className="messageBtn"
                    onClick={this.openMessages}
                    >
                        <img src={this.state.btnImg}/>
                    </button> */}
                </div>
            </Styles>
        )
    }
}