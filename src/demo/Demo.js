import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
import LandingNavbar from '../navbar/LandingNavbar'


const Styles = styled.div `

    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 1%;
    margin-bottom: 3%;
    // background-image: url("/assets/blob2.png");
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
}

.header h1 {
    font-family: inspoMain;
    font-size: 55px;
    margin-top: 3%;
}

.header h5 {
    color: #FF8447;
    font-size: 30px;
    font-family: Quicksand;
}

.header img {
    width: 30%;
}

@media screen and (max-width: 600px) {
    
    // - - HEADER - - //

.header img {
    width: 70%;
}

}

`


export default class Demo extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render () {
        return(
            <Styles>
                <LandingNavbar/>
                <div className="header">
                    <h1>Demo</h1>
                    <h5>Still recording this - it will be up soon!</h5>
                    <img src="/assets/recording.gif"/>
                </div>
            </Styles>
        )
    }
}