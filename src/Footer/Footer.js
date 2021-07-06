import React, {Component} from 'react'
import styled from 'styled-components'
import fire from '../database/firebase'


const Styles = styled.div `

    // - - HEADER - - //

.header {
    border-top: 3.5px solid #ff8447;
    background-color: #F5EDA8;
    height: 330px !important;
    width: 100% ;
    text-align: left !important;
}

.header img {
    margin-top: 15px;
    margin-left: 20px !important;
    width: 80px !important;
}

.header span {
    text-align: right;
}

.header ul {
    list-style-type: none;
}

.header a {
    color: #08645B;
}

.lonelyLabel {
    text-align: right;
    
}

    // - - LIST - - //

.mainLabel {
    margin-bottom: 15px !important;
    font-family: Quicksand !important;
    font-size: 20px !important;
    color: #08645B !important;
}

.subLabel {
    font-family: Quicksand !important;
    font-size: 18px !important;
    color: black !important;
    margin-bottom: 10px !important;
    color: #08645B !important;
}

.subLabel2 {
    color: #F5EDA8 !important;
}

.lonelyLabel {
    color: #08645B;
    font-size: 17.5px;
    font-family: Quicksand;
}




@media screen and (orientation:landscape) 
and (min-device-width: 319px) 
and (max-device-width: 480px) {


    // - - HEADER - - //

    .header {
        background-color: #F5EDA8;
        height: 375px !important;
        width: 100%;
        text-align: left;
    }
    
    .header img {
        margin-top: 10px;
        margin-left: 10px;
        width: 90px !important;
    }


    // - - LIST - - //

    .mainLabel {
        margin-bottom: 15px;
        font-family: Quicksand;
        font-size: 25px !important;
        color: #08645B;
    }
    
    .subLabel {
        font-family: Quicksand;
        font-size: 20px !important;
        color: black;
        margin-bottom: 10px;
        color: #08645B;
    }
    
    .subLabel2 {
        color: #F5EDA8;
        font-size: 20px;
    }

    .lonelyLabel {
        font-size: 18px;
    }

    // - - HEADER 2 - - //

    .header2 {
        background-color: #F5EDA8;;
        height: 200px;
        width: 100%;
        text-align: left;
    }

}


@media screen and (max-width: 600px) {

        // - - HEADER - - //

    .header {
        background-color: #F5EDA8;;
        height: 500px !important;
        width: 100%;
        text-align: left !important;
    }
    
    .header img {
        text-align: left;
        margin-top: 20px;
        margin-left: 15px !important;
        width: 100px !important;
    }

    .header span {
        text-align: center !important;
    }

    // - - LIST - - //

    .mainLabel {
        margin-bottom: 15px;
        font-family: Quicksand;
        font-size: 35px !important;
        color: #08645B;
    }
    
    .subLabel {
        font-family: Quicksand;
        font-size: 30px !important;
        color: black;
        margin-bottom: 10px;
        color: #08645B;
    }
    
    .subLabel2 {
        color: #F5EDA8;
        font-size: 30px;
    }

    .lonelyLabel {
        font-size: 18px;
    }



    
}

`


export default class Footer extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render () {
        return(
            <Styles>
                <div className="header">
                    <img src="assets/logo3.png"/>
                    <br></br>
                    <span>
                        <label>
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <ul >
                                <li className="mainLabel"><b>Product</b></li>
                                <li className="subLabel"><a href="/login">Login</a></li>
                                <li className="subLabel"><a href="/about">About</a></li>
                                <li className="subLabel"><a href="/demo">Demo</a></li>
                            </ul>
                        </label>
                        <label>
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <ul>
                                <li className="mainLabel"><b>Social</b></li>
                                <li className="subLabel">
                                    <a 
                                    href="mailto: inspoplatform@gmail.com" 
                                    target="_blank">Email</a></li>
                                <li className="subLabel">
                                    <a 
                                    href="https://www.instagram.com/inspo_platform/" 
                                    target="_blank">Instagram</a></li>
                                <li className="subLabel2">  <label>twitter</label> </li>
                            </ul>
                        </label><br/>
                        <label className="lonelyLabel">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp; 
                            <b>Made with ❤️ in Minnesota.&nbsp;  © 2021 </b></label>
                    </span>
                </div>


            </Styles>
        )
    }
}