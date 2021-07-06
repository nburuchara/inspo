import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
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
    font-family: Arvo;
    font-size: 35px;
    margin-top: 3%;
    color: #F5EDA8;
}

`

export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            
         }
    }

    render () {
        return(
            <Styles>
                <Helmet>
                    <style>{'body { background-color: #08645B; }'}</style>
                </Helmet>
                <NavbarTool/>
                <div className="header">
                    <h1>messages</h1>
                </div>
            </Styles>
        )
    }
}