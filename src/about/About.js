import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
import NavbarLanding from '../navbar/LandingNavbar'
import {Helmet} from 'react-helmet';



const Styles = styled.div `

    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 1%;
    margin-bottom: 3%;
    // background-image: url("/assets/newBlobCover.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.header h1 {
    font-family: Quicksand;
    font-size: 27.5px;
    margin-top: 3%;
    color: #F5EDA8;
}

.header h3 {
    color: #F5EDA8 !important;
    font-family: Quicksand;
    font-size: 30px;
    text-align: justify center;
    margin-bottom: 50px;
}

.header img {
    width: 150px;
}

    // - - FOUNDING DIMENSIONS - - //

.foundingCol:after {
    content: "";
    display: table;
    clear: both;
}

.foundingRow {
    float: left;
    width: 33%;
    text-align: center;
}

.foundingRow img {
    width: 50%;
}

.foundingRow h5 {
    font-family: Quicksand;
    color: #F5EDA8;;
    font-size: 25px;
    margin-top: 10px;
}

@media screen and (max-width: 600px) {

    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 1%;
    margin-bottom: 3%;
    //background-image: url("/assets/newBlobCover.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.header h3 {
    color: #FF8447;
    font-family: Quicksand;
    font-size: 20px;
    text-align: justify center;
    margin: auto;
    margin-bottom: 30px;
}

    // - - FOUNDING DIMENSIONS - - //

.foundingCol:after {
    content: "";
    display: table;
    clear: both;
}

.foundingRow {
    float: left;
    width: 100%;
    text-align: center;
}

}

`

export default class About extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render () {
        return(
            <Styles>
                <NavbarLanding/>
                <Helmet>
                    <style>{'body { background-color: #08645B; }'}</style>
                </Helmet>
                <div className="header">
                    <h1><u>What is inspo?</u></h1>
                    <h3>inspo is an online platform where students and young professionals can share their academic and professional experiences to inform and inspire younger individuals still figuring out their paths.</h3>
                    <h1><u>Founding Story</u></h1>
                    <div className="foundingCol">
                        <div className="foundingRow">
                            <h5>1/7</h5>
                            <img src="/assets/story2.jpg"/>
                        </div>  
                        <div className="foundingRow">
                            <h5>2/7</h5>
                            <img src="/assets/story3.jpg"/>
                        </div> 
                        <div className="foundingRow">
                            <h5>3/7</h5>
                            <img src="/assets/story4.jpg"/>
                        </div>
                    </div>
                    <div className="foundingCol">
                        <div className="foundingRow">
                            <h5>4/7</h5>
                            <img src="/assets/story5.jpg"/>
                        </div>  
                        <div className="foundingRow">
                            <h5>5/7</h5>
                            <img src="/assets/story6.jpg"/>
                        </div> 
                        <div className="foundingRow">
                            <h5>6/7</h5>
                            <img src="/assets/story7.jpg"/>
                        </div>
                    </div>
                    <div className="foundingCol">
                        <div className="foundingRow">
                            <h5>7/7</h5>
                            <img src="/assets/story8.jpg"/>
                        </div>  
                    </div>
                </div>
                
            </Styles>
        )
    }
}