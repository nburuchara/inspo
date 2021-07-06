import React, {Component} from 'react'
import styled from 'styled-components'
import fire from '../database/firebase'
import NavbarTool from '../navbar/Navbar'
import {Helmet} from 'react-helmet';


const Styles = styled.div `

// - - HEADER - - //

.header {
    text-align: center;
    margin-top: 1%;
    margin-bottom: 3%;
}

.header h1 {
    font-family: inspoMain;
    font-size: 35px;
    margin-top: 3%;
    color: #F5EDA8;
    font-family: Arvo;
}

`

export default class Alert extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <Styles>
                <Helmet>
                    <style>{'body { background-color: #08645B; }'}</style>
                </Helmet>
                <NavbarTool/>
                <div className="header">
                    <h1>notifications</h1>
                </div>
            </Styles>
        )
    }
}