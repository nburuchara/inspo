import React,{Component} from 'react'
import styled from 'styled-components'
import '../App.css'
import fire from '../database/firebase'
import { nanoid } from 'nanoid'
import LandingNavbar from '../navbar/LandingNavbar'
import {Helmet} from 'react-helmet';
import Footer from '../Footer/Footer'



const Styles = styled.div ` 

    // - - NAVBAR - - //

.navCol {
    margin-top: 0.5%;
    width: 100%;
}

.navRow img {
    width: 100px;
}

.navCol:after {
    content: "";
    display: table;
    clear: both;
}

.navRow {
    float: left;
    width: 25%;
    text-align: center;
    cursor: pointer;
}

.navRow h1 {
    font-family: inspoMain;
    color: #F5EDA8;
    font-size: 70px;
}

.navRow h3 {
    font-family: Quicksand;
    margin-top: 25px;
    color: #F5EDA8;
}

// - - NAVBAR  2- - //

    .navCol2 {
        margin-top: 5%;
        width: 100%;
    }
    
    .navCol2:after {
        content: "";
        display: table;
        clear: both;
    }
    
    .navRow2 {
        width: 150px; 
        float: center;
        width: 25%;
        text-align: center;
    }

    .navRow2 h1 {
        font-family: inspoMain;
        color: #F5EDA8;
        font-size: 110px;
    }
    
    .navRow2 h3 {
        margin-left: 100%;
        margin-right: 100%;
        font-family: Quicksand;
        margin-top: 40px;
        font-size: 40px;
    }


    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 2%;
}

.header img {
    width: 95%;
}

.mainLogo {
    margin-top: 20px;
    width: 200px !important;
}

.header h1 {
    font-size: 105px;
    font-family: inspoMain;
    color: #F5EDA8;
}

.header h3 {
    font-family: inspoSub2;
    font-size: 40px;
    color: #F5EDA8;
}

    // - - LOADING - - //

.loading {

}

.loading img {
    margin-top: 18%;
    width: 200px;
}

    // - - REGISTER - - //

.register {
    font-family: Quicksand;
    font-size: 25px;
}

.register img {
    margin-top: 35px !important;
    width: 45px !important;
    margin-bottom: 30px !important;
}

.endOfSection img {
    margin-top: 15px !important;
    width: 45px !important;
    margin-bottom: 15px !important;
}

.endOfSection2 img {
    margin-top: 0px !important;
    width: 45px !important;
    margin-bottom: 27.5px !important;
}

.ourCareers {
    width: 100% !important;
    margin-bottom: 17.5px;
}

.endOfSection3 img {
    margin-top: 25px !important;
    width: 45px !important;
    margin-bottom: 37.5px !important;
}


.register button {
    width: 200px;
    height: 55px;
    border-radius: 14px;
    background-color: #F5EDA8;
    color: #08645B;
    border 2px solid #ff8447;
}

.register button:hover {
    background-color: #08645B;
    color: #F5EDA8;
    border-color: black;
    border: 2px solid #F5EDA8;
}

.register h5 {
    margin-top: 15px;
    font-family: Quicksand;
    font-size: 24px;
    margin-bottom: 17.5px;
}

.register a {
    color: #F5EDA8;
}

    // - - COMMUNITY HEADER - - //
    
.communityHeader {
    width: 100%;
}

.communityHeader h2 {
    margin-top: 10px;
    font-family: Arvo;
    font-size: 45px;
    color: #F5EDA8;
}

.communityHeader h5 {
    margin-top: 50px;
    font-family: Quicksand;
    color: #F5EDA8;
    font-size: 42.5px;
    margin-left: 45px;
    margin-right: 45px;
    margin-bottom: 47.5px;
}

.communityHeader img {
    // height: 1000px;
    width: 80%;
}

.demoVid {
    width: 70%;
    margin-top: 40px;
    margin-bottom: 27.5px;
}

.demoVid2{
    width: 55% !important;
    margin-top: 20px;
    margin-bottom: 27.5px;
}

.commHeadCol {
    margin-bottom: 55px;
}

.commHeadCol2 {
    margin-top: 40px;
    margin-bottom: 50px;
}

.commHeadCol2:after {
    content: "";
    display: table;
    clear: both;
}

.commHeadCol:after {
    content: "";
    display: table;
    clear: both;
}

.commHeadRow {
    float: left;
    width: 50%;
    text-align: right;
} 

.commHeadRow2 {
    float: right;
    width: 50%;
    text-align: left;
}

.commHeadRow img {
    width: 85%;
}

.commHeadRow2 img {
    width: 90%;
}

    // - - DEMO - - //

.demo:after {
    content: "";
    display: table;
    clear: both;
}

.demoRowPic {
    float: left;
    width: 50%;
    text-align: right;
}

.demoRowPic img {
    width: 600px;
}

.demoRowCap {
    float: left;
    width: 50%;
    text-align: left;
}

.demoRowCap img {
    width: 450px;
    margin-right: 100px;
}

 // - - SIGN UP - - //

.signUp {
    text-align: center;
    margin-top: 2.5%;
}

.signUp h1 {
    font-family: Quicksand;
    font-size: 45px;
    color: #F5EDA8;
}

.signUp p {
    font-family: Quicksand;
    color: #F5EDA8;
    font-size: 22.5px;
}

.signUp h4 {
    font-family: Quicksand;
    color: #F5EDA8;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;
    
}

.signUp h5 {
    font-family: Quicksand;
    color: #F5EDA8;
    font-size: 25px;
    margin-left: 15px;
    margin-right: 15px;
}

.signUp h6 {
    font-family: Quicksand;
    color: #F5EDA8;
    font-size: 20px;
    margin-bottom: 30px;
}

.signUp input {
    text-align: center;
    width: 310px;
    height: 47.5px;
    margin-bottom: 25px;
    border-radius: 9px;
    border: 2px solid #ff8447;
    outline: none;
    background-color: #053B35;
    color: #F5EDA8;
}

.signUp input::placeholder {
    font-family: Quicksand;
    font-size: 16px;
    color: #F5EDA8;
}

.speakerBtn button {
    font-family: Quicksand;
    font-size: 20px;
    width: 250px ;
    height: 65px ;
    border-radius: 8px;
    background-color: #F5EDA8;
    margin-top: 35px;
    color: #08645B ;
    border 2px solid #F5EDA8;
}

.signUp button {
    font-family: Quicksand;
    font-size: 20px;
    width: 200px;
    height: 55px;
    border-radius: 8px;
    background-color: #F5EDA8;
    margin-top: 27.5px;
    color: #08645B;
    border 2px solid #ff8447;
    margin-bottom: 10px;
}

.backStep1Btn button {
    font-family: Quicksand;
    font-size: 20px;
    width: 200px;
    height: 55px;
    border-radius: 8px;
    background-color: #F5EDA8;
    margin-top: 15px !important;
    color: #08645B;
    border 2px solid #ff8447;
    margin-bottom: 12.5px;
}


.signUpSpeaker

.verifyBackBtn button {
    margin-bottom: 15px;
}

.unsureBtn {
    margin-bottom: 10px;
}
.unsureBtn button {
    font-size: 17.5px;
    width: 150px;
    height: 45px;
    border-radius: 7.5px;
    border 2px solid #ff8447;
}


.textbox::placeholder {
    font-size: 26.5px;
    font-family: Concert One;
}

.textbox2::placeholder {
    font-size: 18px;
    font-family: Concert One;
}

.textbox3::placeholder {
    font-size: 13.5px;
    font-family: Concert One;
}

    // - - SIGNUP COMPLETE - - //

.signupComplete {
    margin-top: 15%;
}

.signupComplete h1 {
    font-family: Quicksand;
    color: #F5EDA8;
}

.signupComplete h5 {
    margin-top: 15px;
    font-family: Quicksand;
    color: #F5EDA8;
}


.signupComplete button {
    margin-top: 20px;
    background-color: #F5EDA8;
    color: #08645B;
    font-family: Quicksand;
    border: 2px solid #F5EDA8;
    height: 50px;
    width: 190px;
    border-radius: 8px;
}





@media screen and (orientation:landscape) 
and (min-device-width: 319px) 
and (max-device-width: 480px) {


    // - - NAVBAR - - //

    .navCol {
        margin-top: 5%;
        width: 180%;
    }
    
    .navCol:after {
        content: "";
        display: table;
        clear: both;
    }
    
    .navRow {
        width: 150px; 
        float: center;
        width: 25%;
        text-align: center;
    }

    .navRow h1 {
        font-family: inspoMain;
        color: #FF8447;
        font-size: 130px;
    }
    
    .navRow h3 {
        margin-left: 100%;
        margin-right: 100%;
        font-family: Quicksand;
        margin-top: 40px;
        font-size: 50px;
    }

        // - - HEADER - - //

    .header {
        text-align: center;
        width: 200%;
        margin-top: 50px;
    }
    
    .header img {
        width: 100%;
    }
    
    .header h1 {
        font-size: 135px;
        font-family: inspoMain;
    }
    
    .header h3 {
        font-family: inspoSub2;
        font-size: 40px;
        color: #FF8447;
    }



        // - - SIGN UP BUTTON - - //

    .register {
        text-align: center;
        width: 200%;
        font-size: 32px;
    }

    .register button {
        width: 290px;
        height: 90px;
        border-radius: 20px !important;
        background-color: #F5EDA8;
        margin-top: 35px;
        color: #08645B;
        border 3px solid #ff8447;
    }

    .register h5 {
        margin-top: 20px;
        font-size: 35px;
    }



        // - - OUR COMMUNITY LABEL - - //


    .communityHeader {
        text-align: center;
        width: 200%;
    }

    .communityHeader h2 {
        font-size: 75px;
        margin-bottom: 20px;
    }

    .communityHeader h5 {
        font-size: 70px;
    }

    .endOfSection2 img {
        margin-top: 15px !important;
        width: 45px !important;
        margin-bottom: 47.5px !important;
    }


    .demoVid {
        margin-top: 30px !important;
        margin-bottom: 30px !important;
    }
    
        // - - PEOPLE - - //

    .demoRowPic {
        width: 1px;
        float: right;
        text-align: right;
    }

    .demoRowCap {
        width: 1px;
        float: left:
        text-align: center;
    }

        // - - NOT SURE YET BUTTON - - //

    .unsureBtn {
        margin-bottom: 15px;
    }

    .unsureBtn button {
        font-size: 17.5px;
        width: 180px;
        height: 45px;
        border-radius: 7.5px;
    }

        // - - SIGN UP COMPLETE - - //

    .signupComplete button {
        margin-top: 20px;
        background-color: #F5EDA8;
        color: #08645B;
        font-family: Quicksand;
        border: 2px solid #F5EDA8;
        height: 50px;
        width: 190px;
        border-radius: 14px;
        margin-bottom: 30px;
    }

         // - - SIGN UP BACK BUTTONN - - // 
    .backStep1Btn button {
        font-family: Quicksand;
        font-size: 20px;
        width: 200px;
        height: 55px;
        border-radius: 8px;
        background-color: #F5EDA8;
        margin-top: 15px !important;
        color: #08645B;
        border 2px solid #ff8447;
        margin-bottom: 12.5px;
    }
    
 }


@media screen and (max-width: 600px) {

    // - - NAVBAR - - //

    .navCol {
        margin-top: 5%;
        width: 200%;
    }
    
    .navCol:after {
        content: "";
        display: table;
        clear: both;
    }
    
    .navRow {
        width: 150px; 
        float: center;
        width: 25%;
        text-align: center;
    }

    .navRow h1 {
        font-family: inspoMain;
        color: #F5EDA8;
        font-size: 110px;
    }
    
    .navRow h3 {
        margin-left: 100%;
        margin-right: 100%;
        font-family: Quicksand;
        margin-top: 40px;
        font-size: 40px;
        color: #F5EDA8;
    }

    // - - NAVBAR  2- - //

    .navCol2 {
        margin-top: 5%;
        width: 100%;
    }
    
    .navCol2:after {
        content: "";
        display: table;
        clear: both;
    }
    
    .navRow2 {
        width: 150px; 
        float: center;
        width: 25%;
        text-align: center;
    }

    .navRow2 h1 {
        font-family: inspoMain;
        color: #FF8447;
        font-size: 110px;
    }
    
    .navRow2 h3 {
        margin-left: 100%;
        margin-right: 100%;
        font-family: Quicksand;
        margin-top: 40px;
        font-size: 40px;
    }

        // - - HEADER - - //

    
    .header {
        margin-top: 5%;
        width: 250%;
    }

    .header img{
        width: 100%;
    }

    .header h1 {
        font-size: 175px;
    }

    .header h3 {
        font-size: 60px;
    }

        // - - LOADING - - //

    .loading {

    }

    .loading img {
        margin-top: 55%;
        width: 200px;
    }
    
        // - - SIGN UP BUTTON - - //

    .register {
        width: 250%;
        font-size: 32px;
    }

    .endOfSection {
        // text-align: center !important;
        // float: center;
    }

    .endOfSection img {
        margin-top: 25px !important;
        width: 45px !important;
        margin-bottom: 35px !important;
    }

    .endOfSection2 img {
        margin-top: 15px !important;
        width: 45px !important;
        margin-bottom: 47.5px !important;
    }

    .ourCareers {
        margin-left: 5.5% !important;
        width: 80% !important;
    }

    .ourCareers h2 {
        text-align: center !important;
        margin-left: 15%;
    }

    .register img {
        margin-top: 35px !important;
        width: 45px !important;
        margin-bottom: 35px !important;
    }

    .register button {
        width: 350px;
        height: 97.5px;
        border-radius: 25px !important;
        background-color: #F5EDA8;
        margin-top: 35px;
        color: #00;
        border 5px solid #ff8447;
    }

    .register h5 {
        margin-top: 20px;
        font-size: 35px;
        margin-bottom: 27.5px;
    }



        // - - OUR COMMUNITY LABEL - - //


    .communityHeader {
        width: 250%;
    }

    .communityHeader h2 {
        font-size: 65px;
        margin-bottom: 40px;
        margin-top: 35px;
    }

    .startedHeader {
        margin-bottom: 60px !important;
    }

    .ourCommunityHeader {
        font-family: Arvo !important;
        margin-top: 25px !important;
    }

    .ourCommunityHeader2 {
        font-family: Arvo !important;
        margin-top: 25px !important;
        margin-bottom: 0px !important;
    }

    .ourCommunityHeader3 {
        font-family: Arvo !important;
        margin-top: 25px !important;
        margin-bottom: 30px !important;
    }

    .communityHeader h5 {
        font-size: 55px;
        margin-bottom: 20px !important;
    }

    .communityHeader img {
        width: 110%;
        margin-bottom: 30px;
    }

    .demoVid {
        width: 100% !important;
        margin-top: 30px;
        margin-bottom: 47.5px !important;
    }


    .commHeadCol {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .commHeadCol2 {
        margin-bottom: 0px;
    }
    
    .commHeadCol2:after {
        content: "";
        display: table;
        clear: both;
    }
    
    .commHeadCol:after {
        content: "";
        display: table;
        clear: both;
    }
    
    .commHeadRow {
        float: left;
        width: 100%;
        text-align: center;
    } 
    
    .commHeadRow2 {
        float: left;
        width: 100%;
        text-align: center;
    }
    
    .commHeadRow img {
        width: 85%;
    }
    
    .commHeadRow2 img {
        width: 90%;
    }


        // - - PEOPLE - - //

    .demoRowPic {
        width: 1px;
        float: right;
        text-align: right;
    }

    .demoRowCap {
        width: 1px;
        float: left:
        text-align: center;
    }

        // - - SIGN UP - - //

    .signUp input {
        width: 315px;
    }

        // - - SIGNUP COMPLETE - - //

    .signupComplete {
        margin-top: 50%;
    }
    
    .signupComplete h1 {
        font-family: Quicksand;
        color: #F5EDA8;
        margin-right: 20px;
        margin-left: 20px;
    }
    
    .signupComplete h5 {
        margin-top: 15px;
        font-family: Quicksand;
        color: #F5EDA8;
        margin-left: 20px;
        margin-right: 20px
    }

    .unsureBtn {
        margin-bottom: 15px;
    }
    .unsureBtn button {
        font-size: 17.5px;
        width: 180px;
        height: 45px;
        border-radius: 7.5px;
    }

    // - - FOOTER - - //

    .footerRow:after {
        content: "";
        display: table;
        clear: both;
    }
        
    .footerColumn {
        width: 200% !important;
    }



}


`


export default class LandingPg extends Component {
    constructor() {
        super()
        this.state = {
            frontpage: true,
            signupName: false,
            signUpProfile: false,
            signUpSpeaker: false,
            signUpVerify: false,
            signUpTopics: false,
            loadingScreen: false,
            showVerifyPage: false,
            signUpStep: 1,
            takenUsernames: [],

                // ERROR MESSAGES
            step1ErrorMsg: "",
            step2ErrorMsg: "",
            step3ErrorMsg: "",
            step4ErrorMsg: "",

            // ABOUT ME 

            fullName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",

            // CAREER / NATIONALITY

            nationality: "",
            career: "",

            // SPEAKER STATUS
            speaker: "none",
            setSpeakerBg: "white",
            setSpeakerTxt: "#FF8447",
            offsetSpeakerBg: "white",
            offsetSpeakerTxt: "#FF8447",

            // VERIFY

            link1: "",
            link2: "",

            // TOPICS

            topic1: "",
            topic2: "",
            topic3: ""

        }
    }

    componentDidMount = () => {
        fire.firestore().collection("newUser").get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data().username)
            this.setState({
                takenUsernames: data
            })
        })
    }

    switchToSignup = () => {
        this.setState({loadingScreen: true, frontpage: false}, () => {
            setTimeout(() => {
                this.setState({loadingScreen: false, signupName: true})
            }, 2500)
        })
    }

    backToSignup = () => {
        this.setState({
            signupName: true, signUpProfile: false, signUpStep: 1 
        })
    }

    switchToProfile = () => {
        if(!this.state.username == "" 
        && !this.state.email == "" 
        && !this.state.fullName == ""
        && this.state.password === this.state.confirmPassword 
        && !this.state.takenUsernames.includes(this.state.username)) {
            fire.firestore().collection("newUser").doc(this.state.username)
            .set({
                username: this.state.username,
                email: this.state.email,
                name: this.state.fullName
            })
            this.setState({loadingScreen: true, signupName: false, signUpStep: 2}, () => {
                setTimeout(() => {
                    this.setState({loadingScreen: false, signUpProfile: true})
                }, 0)
            })
            this.setState({
                step1ErrorMsg: "",
                step2ErrorMsg: "",
                step3ErrorMsg: "",
                step4ErrorMsg: ""
            })
        } else if (!this.state.username == "" 
        && !this.state.email == "" 
        && !this.state.fullName == ""
        && this.state.password !== this.state.confirmPassword 
        && !this.state.takenUsernames.includes(this.state.username)) {
            //* incorrect password
            this.setState({
                step1ErrorMsg: "Passwords do not match."
            })
        } else if (!this.state.username == "" 
        && !this.state.email == "" 
        && !this.state.fullName == ""
        && this.state.password === this.state.confirmPassword 
        && this.state.takenUsernames.includes(this.state.username)) {
            //* username already exists
            this.setState({
                step1ErrorMsg: "Oops. Looks like this username already exists."
            })
        } else if (!this.state.username == "" 
        && !this.state.email == "" 
        && !this.state.fullName == ""
        && this.state.password !== this.state.confirmPassword 
        && this.state.takenUsernames.includes(this.state.username)) {
            this.setState({
                step1ErrorMsg: "Passwords do not match."
            })
        } else {
            //* please make sure you've filled in all fields correctly
            this.setState({
                step1ErrorMsg: "Please make sure you fill in all fields correctly."
            })
        }
    }

    backToProfile = () => {
        this.setState({
            signUpProfile: true, signUpVerify: false, signUpStep: 2
        })
    }

    switchToSpeaker = () => {
        if(!this.state.speaker == "none"){
            fire.firestore().collection("newUser").doc(this.state.username)
            .update({
                username: this.state.username,
                email: this.state.email,
                name: this.state.fullName,
                speaker: this.state.speaker
            })
            this.setState({loadingScreen: true, signUpProfile: false, signUpStep:3}, () =>{
                setTimeout(() => {
                    this.setState({loadingScreen: false, signUpSpeaker: true})
                }, 0)
            })
            this.setState({
                step1ErrorMsg: "",
                step2ErrorMsg: "",
                step3ErrorMsg: "",
                step4ErrorMsg: ""
            })
        }
    }

    setSpeaker = () => {
        this.setState({
            speaker: "speaker",
            setSpeakerBg: "#FF8447",
            setSpeakerTxt: "white",
            offsetSpeakerBg: "white",
            offsetSpeakerTxt: "#FF8447"
        })
    }

    offsetSpeaker = () => {
        this.setState({
            speaker: "notSpeaker",
            offsetSpeakerTxt: "white",
            offsetSpeakerBg: "#FF8447",
            setSpeakerTxt: "#FF8447",
            setSpeakerBg: "white"
        })
        console.log(this.state.speaker)
    }

    switchToVerify = () => {
        if (!this.state.career == "" && !this.state.nationality == "") {
            fire.firestore().collection("newUser").doc(this.state.username)
            .update({
                username: this.state.username,
                email: this.state.email,
                name: this.state.fullName,
                career: this.state.career,
                nationality: this.state.nationality,
            })
            this.setState({loadingScreen: true, signUpProfile: false, signUpStep:3}, () =>{
                setTimeout(() => {
                    this.setState({loadingScreen: false, signUpVerify: true})
                }, 0)
            })
            this.setState({
                step1ErrorMsg: "",
                step2ErrorMsg: "",
                step3ErrorMsg: "",
                step4ErrorMsg: ""
            })
        } else {
            this.setState({
                step2ErrorMsg: "Please make sure you fill in all fields correctly."
            })
        }
    }

    backToVerify = () => {
        this.setState({
            signUpVerify: true, signUpTopics: false, signUpStep: 3
        })
    }

    switchToTopics = () => {
        if (!this.state.link1 =="" || !this.state.link2 == "") {
            fire.firestore().collection("newUser").doc(this.state.username)
            .set({
                username: this.state.username,
                email: this.state.email,
                name: this.state.fullName,
                career: this.state.career,
                nationality: this.state.nationality,
                llink1: this.state.link1,
                link2: this.state.link2
            })
            this.setState({loadingScreen: true, signUpVerify: false, signUpStep:4}, () => {
                setTimeout(() => {
                    this.setState({loadingScreen: false, signUpTopics: true})
                }, 0)
            })
            this.setState({
                step1ErrorMsg: "",
                step2ErrorMsg: "",
                step3ErrorMsg: "",
                step4ErrorMsg: ""
            })
        } else {
            this.setState({
                step3ErrorMsg: "Please give us at least one way to verify you."
            })
        }
        
    }

    backToFront = () => {
        this.setState({loadingScreen: true, signupName: false}, () => {
            setTimeout(() => {
                this.setState({loadingScreen: false, frontpage: true})
            }, 2500)
        })
    }

    finishSignup = () => {
        fire.firestore().collection("newUser").doc(this.state.username)
        .update({
            username: this.state.username,
            email: this.state.email,
            name: this.state.fullName,
            career: this.state.career,
            nationality: this.state.nationality,
            llink1: this.state.link1,
            link2: this.state.link2,
            topic1: this.state.topic1,
            topic2: this.state.topic2,
            topic3: this.state.topic3,
            password: this.state.password,
            loginCode: nanoid()
        })
        this.setState({
            step4ErrorMsg: "Please write at least three topics you want to share information about",
            signUpTopics: false,
            showVerifyPage: true
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    exitSignup = () => {
        this.setState({
            frontpage: true,
            showVerifyPage: false
        })
    }

    notSureTopics = () => {
        this.setState({
            topic1: "still",
            topic2: "figuring",
            topic3: "it out 🤔",
            step4ErrorMsg: "Press Finish to complete the sign up process!"
        })
    }

    stayHome = () => {
        window.location.href = "/"
        return false
    }

    navigateDemo = () => {
        window.location.replace="/demo"
        return false
    }
   
    goToAbout = () => {
        window.location.replace = "/about"
        return false
    }

    goToLogin = () => {
        window.location.href = "/login"
        return false
    }


    render () {

        let setSpeakrStyle = {
            fontFamily: "Quicksand",
            fontSize: "20px",
            width: "250px",
            height: "65px",
            borderRadius: "15px",
            backgroundColor: this.state.setSpeakerBg,
            marginTop: "35px",
            color: this.state.setSpeakerTxt,
            border: "2px solid #FF8447"
        }

        let offsetSpeakerStyle = {
            fontFamily: "Quicksand",
            fontSize: "20px",
            width: "250px",
            height: "65px",
            borderRadius: "15px",
            backgroundColor: this.state.offsetSpeakerBg,
            marginTop: "35px",
            color: this.state.offsetSpeakerTxt,
            border: "2px solid #FF8447"
        }

        let backBtnStyle = {
            marginBottom: "20px"
        }
        return(
            <Styles>
                <Helmet>
                    <style>{'body { background-color: #08645B; }'}</style>
                </Helmet>
                <meta name="viewport" content="width=device-width"/>
                {/* <span className="newNavbar"><LandingNavbar/></span> */}
                <div>
                {this.state.frontpage && 
                <div>
                    <div className="navCol">
                        <div className="navRow">
                            <img
                            src="assets/logo3.png"
                            onClick={this.stayHome}
                            />
                        </div>
                        <div className="navRow">
                            <h3
                            onClick={this.goToAbout}
                            ></h3>
                        </div>
                        <div className="navRow">
                            <h3
                            onClick={this.navigateDemo}
                            ></h3>
                        </div>
                        <div className="navRow">
                            <h3
                            onClick={this.goToLogin}
                            >Login</h3>
                        </div>
                    </div>
                    {/* <div className="endOfSection">
                            <img src="assets/dot.png"/>
                    </div> */}
                    <div className="header">
                        <img src="assets/coverInspo.png"/>
                        <img src = "assets/inspoCover2.5.png"/>
                        {/* <h1>inspo</h1> */}
                        {/* <h3>share, learn, inspire</h3> */}
                    </div>
                    <div className="communityHeader">
                        <h5>facilitating more career conversations! 🗣</h5>
                    </div>
                    <div className="register">
                        <button
                        onClick={this.switchToSignup}
                        ><b>Get Started</b></button>
                        <br/>
                        <h5>or <a href="/login"><b>Login</b></a></h5>
                        <img src="assets/dot.png"/>
                    </div>
                    <div className="communityHeader">
                        <div>
                            <img src="assets/headerTrial.gif"/>
                        </div>
                        <div className="commHeadCol2">
                            <div className="commHeadRow">
                                <img src="assets/videoCover.gif"/>
                            </div>
                            <div className="commHeadRow2">
                                <img src="/assets/videoCap1.png"/>
                            </div>
                        </div>
                        <div className="commHeadCol2">
                            <div className="commHeadRow">
                                <img src="assets/videoCap2.png"/>
                            </div>
                            <div className="commHeadRow2">
                                <img src="/assets/videoCover2.gif"/>
                            </div>
                        </div>
                        <div className="commHeadCol2">
                            <div className="commHeadRow">
                                <img src="assets/videoCover3.1.gif"/>
                            </div>
                            <div className="commHeadRow2">
                                <img src="/assets/videoCap3.png"/>
                            </div>
                        </div>
                        <div className="endOfSection">
                            <img src="assets/dot.png"/>
                        </div>
                        <img className="demoVid" src="assets/demoVisual4.gif"/>
                        {/* <div className="communityHeader"> */}
                            <h5>we don't have a mobile app yet, but we're mobile compatible! 🤳🏿</h5>
                        {/* </div> */}
                        <div className="endOfSection3">
                            <img src="assets/dot.png"/>
                        </div>
                        <h2 lassName="ourCommunityHeader3">Getting Started</h2>
                        <div className="commHeadCol2">
                            <div className="commHeadRow">
                                <img src="assets/commHeadBg2.png"/>
                            </div>
                            <div className="commHeadRow2">
                                <img src="/assets/commHeadTxt1.png"/>
                            </div>
                        </div>
                        <div className="commHeadCol">
                            <div className="commHeadRow">
                               <img src="assets/commHeadTxt2.png"/>
                            </div>
                            <div className="commHeadRow2">
                                <img src="assets/commHeadBg3.1.png"/>
                            </div>
                        </div>
                        <div className="commHeadCol2">
                            <div className="commHeadRow">
                                <img src="assets/commHeadBg4.1.png"/>
                            </div>
                            <div className="commHeadRow2">
                                <img src="assets/commHeadTxt3.png"/>
                            </div>
                        </div>
                        <div className="endOfSection2">
                            <img src="assets/dot.png"/>
                        </div>
                        <div className="ourCareers">
                            <h2 className="ourCommunityHeader">Careers & Degree Paths</h2>
                            <img  src="assets/ourCareers.gif"/>
                        </div>
                        <div className="endOfSection2">
                            <img src="assets/dot.png"/>
                        </div>
                        {/* <div className="endOfSection2">
                            <img src="assets/dot.png"/>
                        </div> */}
                        {/* <img src="assets/wfh.png"/> */}
                        <h2 className="ourCommunityHeader">Our Community</h2>
                    </div>
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic21.25.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap21.25.gif"/>
                        </div>
                    </div> 
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic20.25.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap20.25.gif"/>
                        </div>
                    </div> 
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic30.25.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap30.15.gif"/>
                        </div>
                    </div> 
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic19.25.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap19.25.gif"/>
                        </div>
                    </div> 
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic18.25.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap18.25.gif"/>
                        </div>
                    </div> 
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic17.25.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap17.25.gif"/>
                        </div>
                    </div> 
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic16.25.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap16.25.gif"/>
                        </div>
                    </div> 
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic15.25.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap15.25.gif"/>
                        </div>
                    </div> 
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic14.25.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap14.25.gif"/>
                        </div>
                    </div> 
                    {/* <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic14.35.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap15.15.gif"/>
                        </div>
                    </div>  */}
                    {/*<div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic6.15.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap6.25.gif"/>
                        </div>
                    </div> 
                    <div className="demo">
                        <div className="demoRowPic">
                            <img src="assets/demoPic7.1.gif"/>
                        </div>
                        <div className="demoRowCap">
                            <img src="assets/demoCap7.25.gif"/>
                        </div>
                    </div>  */}
                     {/* <div className="endOfSection">
                            <img src="assets/dot.png"/>
                    </div> */}
                    <Footer/>
                </div>
                }
                </div>
                {this.state.signupName && 
                    <div className="signUp">
                        <h1>Who You Are</h1>
                        <h6> & your email + a password </h6>
                        <p><b>{this.state.signUpStep}/4</b></p>
                        <input
                        id="fullName"
                        type="text"
                        className="textbox"
                        placeholder="Full Name"
                        value={this.state.fullName}
                        onChange={this.handleChange}
                        />
                        <br/>
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
                        id="username"
                        type="text"
                        className="textbox"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        />
                        <br/>
                        <input
                        id="password"
                        className="textbox"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                        <br/>
                        <input
                        id="confirmPassword"
                        name="confirmPasswprd"
                        type="password"
                        className="textbox"
                        placeholder="Re-type Password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        />
                        <p>{this.state.step1ErrorMsg}</p>
                        <button
                        onClick={this.switchToProfile}
                        ><b>Next</b></button>
                        <div className="backStep1Btn"><button
                        style={backBtnStyle}
                        onClick={this.backToFront}
                        ><b>Back</b></button></div>
                    </div>
                }
                {this.state.signUpProfile && 
                    <div className="signUp">
                        <h1>What You Do</h1>
                        <h6>& where you're from </h6>
                        <p><b>{this.state.signUpStep}/4</b></p>
                        <input
                        id="career"
                        type="text"
                        className="textbox2"
                        placeholder="I am studying/working as a.."
                        value={this.state.career}
                        onChange={this.handleChange}
                        />
                        <br/>
                        <input
                        id="nationality"
                        type="text"
                        className="textbox"
                        placeholder="Nationality"
                        value={this.state.nationality}
                        onChange={this.handleChange}
                        />
                        <p>{this.state.step2ErrorMsg}</p>
                        <button
                        onClick={this.switchToVerify}
                        ><b>Next</b></button>
                        <div className="backStep1Btn"><button
                        onClick={this.backToSignup}
                        ><b>Back</b></button></div>
                    </div>
                }
                {this.state.signUpSpeaker && 
                    <div className="signUp">
                        <h1>Do you want to be a speaker?</h1>
                        <div className="speakerBtn">
                            <button
                            style={setSpeakrStyle}
                            onClick={this.setSpeaker}
                            ><b>Yes, I have topics I'd like to speak about.</b></button> <br/>
                            <button
                            style={offsetSpeakerStyle}
                            onClick={this.offsetSpeaker}
                            ><b>No, I just want to see content for now.</b></button>
                        </div>
                        <button>Continue</button> <br/>
                        <button>Back</button>

                    </div>
                }
                {this.state.signUpVerify && 
                    <div className="signUp">
                        <h1>Where Can We Find You?</h1>
                        <h4>Leave a link to your Facebook/LinkedIn/YouTube Channel/Portfolio for us to verify you!</h4>
                        <p><b>{this.state.signUpStep}/4</b></p>
                        <input
                        id="link1"
                        type="text"
                        className="textbox3"
                        placeholder="Enter your name on LinkedIn/Facebook"
                        value={this.state.link1}
                        onChange={this.handleChange}
                        />
                        <br/>
                        <input
                        id="link2"
                        type="text"
                        className="textbox"
                        placeholder="or drop a link"
                        value={this.state.link2}
                        onChange={this.handleChange}
                        />
                        <p>{this.state.step3ErrorMsg}</p>
                        <button
                        onClick={this.switchToTopics}
                        ><b>Next</b></button>
                        <div  className="backStep1Btn"><button
                        onClick={this.backToProfile}
                        ><b>Back</b></button></div>
                    </div>
                }
                {this.state.signUpTopics && 
                    <div className="signUp">
                        <h1>What You'll Speak About</h1>
                        <h4>What topics do you want to speak about?</h4>
                        <h5>PS. You don't have to post if you sign up, you can just silently scroll - like you might do on all your other social media apps</h5>
                        <p><b>{this.state.signUpStep}/4</b></p>
                        <input
                        id="topic1"
                        type="text"
                        className="textbox"
                        placeholder="Topic 1"
                        value={this.state.topic1}
                        onChange={this.handleChange}
                        />
                        <br/>
                        <input
                        id="topic2"
                        type="text"
                        className="textbox"
                        placeholder="Topic 2"
                        value={this.state.topic2}
                        onChange={this.handleChange}
                        />
                        <br/>
                        <input
                        id="topic3"
                        type="text"
                        className="textbox"
                        placeholder="Topic 3"
                        value={this.state.topic3}
                        onChange={this.handleChange}
                        />
                        <br/>
                        <div className="unsureBtn">
                            <button
                            onClick={this.notSureTopics}
                            ><b>Not sure yet</b></button>
                        </div>
                        <p>{this.state.step4ErrorMsg}</p>
                        <button
                        onClick={this.finishSignup}
                        ><b>Finish</b></button>
                        <div  className="backStep1Btn"><button
                        onClick={this.backToVerify}
                        ><b>Back</b></button></div>
                    </div>
                }
                {this.state.showVerifyPage &&
                    <div className="signupComplete">
                        <h1>Thanks for signing up!</h1>
                        <h5>Our community is beginning to grow a little faster than we expected, so we are registering people in intervals.</h5>
                        <h5>Expect an email from "Norman Buruchara" with your verificaiton code (to finish your registration) in the next few days!</h5>
                        <button
                        onClick={this.exitSignup}
                        ><b>Back to Home</b></button>
                    </div>
                }
                {this.state.loadingScreen && 
                    <div className="loading">
                        <img src="/assets/loader.gif"/>
                    </div>
                }
            </Styles>
        )
    }
}