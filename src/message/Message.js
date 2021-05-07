import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
import NavbarTool from '../navbar/Navbar'

const Styles = styled.div `

    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 1%;
    margin-bottom: 3%;
}

.header h1 {
    font-family: inspoMain;
    font-size: 75px;
    margin-top: 3%;
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
                <NavbarTool/>
                <div className="header">
                    <h1>messages</h1>
                </div>
            </Styles>
        )
    }
}