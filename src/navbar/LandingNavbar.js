import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap'

const Styles = styled.div `



// - - LOGO IMAGE - - //

.wholeNavbar img {
    width: 50px;
}

.logoImg {
    width: 90px;
}

#brand {
    font-family: inspoMain;
    font-size: 50px;
    color: #F5EDA8;
}

// - - NAVBAR STYLE - - //

.navContainer img {
    width: 50px;
    margin-left: 0px;
    margin-right: 0px;
}

.navContainer figcaption {
    font-family: Quicksand;
}

.navContainer figcaption:hover {
    color: #F5EDA8;
}

    // - - NAVBAR LINK - - //

.navLink {
    width: 150px;
    font-size: 16px;
    height: 39.5px;
    border: 0px solid #FF8447;
    border-radius: 10px;
    margin-left: 50px;
    margin-right: 50px;
    font-family: Quicksand;
}

.navLink:hover {
    background-color: #F5EDA8;;
    color: #fff;
}



`


export default class LandingNavbar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render () {
        return(
            <Styles>
                <div className="wholeNavbar">
                    <Navbar expand="lg">
                        <Navbar.Brand href="/" id="brand"><img src="assets/logo3.png"/></Navbar.Brand>
                        <Navbar.Toggle id="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="container-fluid navContainer ml-auto">
                                <div className="navLink">
                                    <Nav.Item className="navText">
                                        <Nav.Link href="/about" ><b>About</b></Nav.Link>
                                    </Nav.Item>
                                </div>
                                <div className="navLink">
                                    <Nav.Item>
                                        <Nav.Link href="/demo" ><b>Demo</b></Nav.Link>
                                    </Nav.Item>
                                </div>
                                <div className="navLink">
                                    <Nav.Item>
                                        <Nav.Link href="/login" ><b>Login</b></Nav.Link>
                                    </Nav.Item>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Styles>
        )
    }
}