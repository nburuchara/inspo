import React, {Component, createRef} from 'react'
import styled from 'styled-components'
import fire from '../database/firebase'
import NavbarTool from '../navbar/Navbar'
import OtherUser from '../other_user/OtherUser'
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import Emoji from 'a11y-react-emoji'
import firebase from 'firebase'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Helmet} from 'react-helmet';
import Resource from '../resources/Resource'







const Styles = styled.div `

    // - - NAVBAR - - //

#brand {
    width: 25px;
}

.logoImg {
    width: 90px;
}

    // - - NAVBAR OPTIONS - - //

.navContainer img {
    width: 50px;
    margin-left: 45px;
    margin-right: 45px;
}

.navContainer figcaption {
    font-family: Quicksand;
    color: #F5EDA8;;
}

.navContainer figcaption:hover {
    color: #ff8447;
}


    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 1%;
    margin-bottom: 1%;
}

.header h1 {
    font-family: Quicksand;
    font-size: 45px;
    margin-top: 0%;
    color: #F5EDA8;
}

.header img {
    width: 150px;
}

.header button {
    height: 45px;
    border: 2px solid #F5EDA8;
    background-color: #08645B;
    color: #F5EDA8;
    font-family: Quicksand;
    border-radius: 8px;
    // margin-right: 25px;
    width: 160px;
}

.headerButton {
    // text-align: left !important;
}

    // - - MAIN PAGE - - //


.mainCol:after {
    content: "";
    display:table;
    clear: both;
}

.mainRow {
    float: left;
    width: 32%;
    text-align: left;
}

.mainRow2 {
    float: left;
    width: 48%;
    text-align: right;
}

.mainRow2 button {
    width: 200px !important;
}

.mainRow3 {
    float: right;
    width: 20%;
    text-align: center;
    margin-right: 3px;
}

.mainRow3 img {
    width: 50px;
}

.mainRow3 p {
    font-family: Arvo;
    color: #F5EDA8;
}

.allCareers {
    text-align: center !important;
}

.allCareers p {
    font-family: Quicksand;
    margin-bottom: 20px;
    color: #F5EDA8;
    font-size: 19.5px;
}

.allCareers a {
    color: #ff8447;
}

.mainRow3 span {
    display: inline-block;
    width: 100%;
    text-align: center !important;
    background-color: transparent !important;
    //border-radius: 10px;
    border-bottom: 1px solid #F5EDA8;
    margin-bottom: 7.5px;
    // margin-right: 15px !important;
}

.mainRow3 h4 {
    margin-top: 10px;
    font-family: Quicksand;
    font-size: 23.5px;
    text-align: center;
    color: #F5EDA8;
    margin-bottom: 12.5px;
    // border-bottom: 0.01px solid #ff8447;
}

.mainRow3 label {
    // background-color: #FF8447;
}

.careerContainer {
    text-align: center !important; 
    cursor: pointer;
}

.careerContainer p {
    color: white;
    font-family: Quicksand;
}

.fields {
    // width: 70%;
    text-align: right;
    cursor: pointer;
}

    // - - MAIN FEED - - //

.profileCol {
    text-align: left !important;
    background-color: #F5EDA8;
    padding-top: 17.5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 19px;
    margin-bottom: 20px;
    border: 3.5px solid #BC4700;; 
}

.profileCol h1 {
    font-family: Concert One;
    font-size: 22.5px;
    color: #08645B;;
}

.profileCol h5 {
    margin-top: 10px;
    font-family: Varela Round;
    font-size: 16px;
    color: #08645B;
    margin-left: 10px;
    // border-bottom: 1px solid #08645B;
    // margin-bottom: 10px;
}

.profileCol h6 {
    font-family: Varela Round;
    // margin-bottom: 15%;
    color: #08645B;;
}

.profileCol textarea {
    border-radius: 7px;
    border: 0.2px solid black;
    height: 55px;
    outline: none;
    margin-right: 10px;
    width: 80%;
    padding: 4px;

    resize:none;

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
}

.profileCol video {
    margin-top: 0px;
    background-color: #000 !important;
    border-radius: 7px;
    border-top: 3.5px solid #BC4700 !important;
    border: 3.5px solid #BC4700 !important;
    margin-bottom: 7.5px; 
}

.profileRow label {
    margin-left: 15px;
    font-size: 25px;
    margin-right: 15px;
    font-family: Varela Round;
    color: #08645B;
}

.profileInfo {
    background-color: #FFD5AB;
    padding: 6px;
    color: #08645B !important;
    padding-bottom: 15px !important;
    border-radius: 9px;
    margin-bottom: 12.5px;
    border: 1px solid #BC4700;
}

.profileInfo text {
    color: #ff8447;
}

.profileImageBorder {
    margin-left: 7.5px;
    margin-right: 7.5px;
    border-bottom: 1px solid #BC4700;;
    margin-top: 7.5px;
}

.videoInfo {
    margin-top: 13px;
    background-color: #FFD5AB;
    padding: 6px;
    padding-left: 10px !important;
    padding-top: 10px !important;
    border-radius: 9px;
    margin-bottom: 15px;
    border: 1px solid #BC4700;
}

.videoBorder {
    border-bottom: 2px solid #BC4700;
}

.videoBorder2 {
    float: center;
    border-bottom: 1px solid #FF8447;
    margin-bottom: 40px !important;
    width: 250px;
    margin: 0 auto;
}

.videoBorder3 {
    float: center;
    border-bottom: 0.5px solid #F5EDA8;
    margin-top: 27px !important;
    width: 210px;
    margin: 0 auto;
}

    // - - END OF POST - - //

.endOfPost {
    text-align: center;
}

.endOfPost img {
    width: 75px;
    margin-bottom: 25px;
    cursor: pointer;
}

.seeProfileBtn {
    text-align: left;
}
.seeProfileBtn button {
    margin-left: 2px;
    height: 45px;
    border: 2px solid #08645B;
    background-color: #08645B;
    color: #F5EDA8;
    font-family: Varela Round;
    border-radius: 10px;
    margin-right: 25px;
    width: 160px; 
}


.seeProfileBtn button:hover {
    background-color: #F5EDA8;
    color: #08645B;
    border: 2px solid #08645B;
}

.seeProfileBtn img {
    // margin-left: 50%;
    width: 30px;
}

.seeProfileBtn img {
    text-align: right;
}

.shareImg {
    margin-left: 10%;
    width: 50px !important;
}
    // - - RESOURCES - - // 

.resources {
    text-align: left;
}

.resources img {
    width: 20px;
    margin-bottom: 0px !important;
}

.resources text {
    margin-left: 10px;
    color: #08645B;
}

.resources a {
    color: #08645B;
    margin-left: 10px;
    cursor: pointer;
}

.resources button {
    height: 45px;
    border: 2px solid #08645B;
    background-color: #08645B;
    color: #F5EDA8;
    font-family: Quicksand;
    border-radius: 8px;
    margin-right: 25px;
    width: 160px;
}

    // - - EMOJI PICKER - - //

.emojiPicker {
    width: 100%;
    margin-top: 15px;
    text-align: center;
}

.emojiPicker img {
    width: 20px;
}

.emojiPicker span {
    font-size: 20px;
    background-color: transparent;
    padding-top: 3px;
    padding-bottom: 5px;
    padding-left: 9.5px;
    padding-right: 9.5px;
    border-radius: 15px;  
    border: 0.5px solid black;
    margin-left: 30px;
    margin-right: 30px;
}

.emojiPicker h4 {
    margin-top: 15px;
    font-size: 19.5px;
    font-family: Quicksand;
    color: #FF8447;
}

.emojiPicker button {
    margin-top: 20px;
    height: 45px;
    border: 2px solid #FF8447;
    background-color: #FF8447;
    color: white;
    font-family: Quicksand;
    border-radius: 8px;
    margin-right: 25px;
    width: 120px;
}

    // - - EMOJI PICKER - - //

.emojiPicker2 { 
    text-align: left;
    margin-top: 15px;
}

.emojiPicker2 span {
    font-size: 20px;
    background-color: transparent;
    padding-top: 3px;
    padding-bottom: 5px;
    padding-left: 9.5px;
    padding-right: 9.5px;
    border-radius: 15px;  
    border: 2px solid #ff8447;
    // margin-left: 30px;
    margin-right: 30px;
}

.emojiPicker2 p {
    margin-top: 10px;
    margin-bottom: 0px !important;
    color: #08645B;
    font-family: Quicksand;
}


    // - - REACTION MESSAGE - - //

.reactionMsg {
    text-align: center;
}

.reactionMsg h5 {
    font-size: 19px;
    color: #FA4620;
}

.reactionMsg span {
    font-size:30px;
    background-color: transparent;
    padding-top: 8px;
    padding-bottom: 7px;
    padding-left: 8.5px;
    padding-right: 8.5px;
    border-radius: 50px;  
    border: 0.5px solid black;
    // margin-right: 30px;
}

.reactionMsg p {
    margin-top: 10px;
    color: #FF8447;
    font-family: Quicksand;
    font-size: 17px;
}



.titleDiv {
    margin-bottom: 10px;
    border-bottom: 1px solid #BC4700;
    margin-right: 10px;
}

.captionDiv {
    margin-bottom: 30px !important;
    border-bottom: 0.5px solid black;
}

.userInfo div{
    text-align: left;
}

#proPic {
    width: 90px;
    border-radius: 10px;
    text-align: right;
    border: 3px solid #BC4700;
    aspect-ratio: 1 / 1;
    max-width: 90px;
    max-height: 110px;
    // margin-left: 30px;
    object-fit: cover;
    margin: auto;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 5px;
}

#country {
    width: 45px;
    border-radius: 10px;
}

.latestVid {
    width: 640px;
    hegiht: 480px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-top: 0.5px solid black;
    // border-bottom: 0.5px solid black;
}

    // - - EMPTY FEED - - //

.emptyFeed {
    text-align: left;
}
.emptyFeed h1 {
    font-family: Quicksand;
    color: #F5EDA8;
}

    // - - SELECTED USER - - //

.selectedUser button {
    height: 40px;
    border: 2px solid #F5EDA8;
    background-color: #F5EDA8;
    color: #08645B;
    font-family: Quicksand;
    border-radius: 8px;
    width: 60px;
}

    // - - DROP DOWN MENU - - //

.dropdown textarea {
    border-radius: 7px;
    background-color: #08645B;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 0.2px solid #F5EDA8;
    height: 40px;
    outline: none;
    margin-left: 30px;
    margin-right: 8px;
    color: #F5EDA8;
    width: 65%;
    padding: 4px;
    resize:none;
    font-family: 20px;
}

.dropdown textarea::placeholder {
    text-align: center;
    font-family: Quicksand;
    color: #F5EDA8;
}

.dropdown button {
    border: 2px solid #BC4700;
    border-radius: 10px;
    background-color: #F5EDA8;
    color: #08645B;
    font-family: Quicksand;
    height: 45px;
    width: 110px;
}

.dropdown img {
    margin-bottom: 15px;
    width: 200px;
}
.dropdown text {
    font-family: Arvo;
    color: #F5EDA8;
    font-size: 30px;
    margin-top: 20px;
}

.sideMenu {
    margin-top: 15px;
}

.sideMenu p {
    color: #F5EDA8;
    font-family: Arvo;
}

.interviewMe {
    border-top: 1px solid #F5EDA8;
    margin-bottom: 22.5px;
    margin-top: 10px;
}

    // - - USER CELL - - //

.userCell {
    margin-left: 25px;
    margin-bottom: 0px;
}

.userCell img {
    width: 100px;
    height: 95px;
    border-radius: 10px;
    text-align: right;
    border: 3px solid #FF8447;
    aspect-ratio: 1 / 1;
    max-width: 90px;
    max-height: 120px;
    // margin-left: 30px;
    object-fit: cover;
    margin: auto;
    margin-bottom: 62px;
}

.userCell label {
    margin-top: 20px;
    font-family: Quicksand;
    margin-left: 1%;
    color: white; 
    cursor: pointer;
}

.userCellRowTxt p {
    // margin-top: 50%;
}

.searchUserInfo {
    font-family: Quicksand;
    font-size: 15px;
}

.searchUserInfo span {
    font-size: 12.5px;
    background-color: #F5EDA8;
    color: #08645B;
    padding-top: 1px;
    padding-bottom: 3px;
    padding-left: 7.5px;
    padding-right: 7.5px;
    border-radius: 8px;  
    border: 2px solid #ff8447;
}

    // - - CAREER SEARCH - - //

.fields {
    text-align: center !important;
}

.headerCareerSearch {
    text-align: right !important;
    // margin-left:8%;
}

.headerCareerSearch label {
    // margin-left: 80px;
    // margin-right: 10px;
    color: #F5EDA8;
}

.headerCareerSearch p {
    text-align: center;
    font-family: Quicksand;
    color: #F5EDA8;
}

.selectedCareer {
    font-size: 18.5px;
}


.careerSearch {
    width : 100%;
    max-width: 100%;
    margin: 0 auto;
    border: 2.5px solid transparent;
    height: 105px;
    padding-bottom: 10px;
    text-alignment: left;
    z-index: 999;
    background-color: transparent;
    padding: 10px 10px 35px;
    border-radius: 8px;
    flex-direction: column;
    margin-top: 35px;
    margin-bottom: 20px;
}

.careerSearchRow {
    // display: inline-block;
    width: 100%;
    text-align: left;
    float: left;
    // margin-left:15.5%;
}

.careerSearchRow table td {
    // margin-top: 2%;
    // background-color: #08645B;
    padding: 2px;
}


.careerSearchRow label {
    background-color: transparent;
    width: 70%;
    float: right;
    // padding-left: 0px;
    max-width: 0px:
    max-height: 0px;
    // margin-bottom: 10px;
    margin-right: 15px;
    cursor: pointer;
    color: black;
    border-radius: 8px;
}

.careerSearchRow text {
    width: 100%;
    float: right;
    font-family: Quicksand;
    color: #BC4700;
    font-size: 12px;
    // padding-top: 5px;
    // padding-bottom: 20px;
    padding-left: 0px;
    // margin-bottom: 15px;
}


.careerSearch img {
    width: 80px;
    height: 80px;
    float:left;
    border-radius: 10px;
    border: 3px solid #08645B;
    max-width: 60px;
    max-height: 60px;
    aspect-ratio: 1 / 1;
    // margin-left: 30px;
    margin-bottom: 40px;
    object-fit: cover;
    margin: auto;
    margin-left: 0px;
}

.careerSearchBorder {
    cursor: pointer;
    background-color: #FFD5AB;
    border-radius: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 5px;
    border : 2px solid #BC4700;
}





@media screen and (orientation:landscape) 
and (min-device-width: 319px) 
and (max-device-width: 480px) {

        // - - MAIN DISPLAY - - //
    .mainRow {
        width: 100%;
        margin-bottom: 10%;
        margin-left: 0px;
    }

    .mainRow3 {
        width: 100%;
    }

    .mainRow3 span {
        // display: inline-block;
        width:  100%;
        text-align: center;
        // margin-right: 50%;
    }

    // - - CAREER SEARCH - - //


    .allCareers p {
        font-family: Quicksand;
        text-align: center;
        margin-bottom: 20px;
        color: #F5EDA8;
        font-size: 20px;
    }

    .headerCareerSearch {
        text-align: center;
        // margin-left:8%;
    }
        // - - SEE PROFILE BUTTON - - //

    .profileCol button {
       
    }

    .seeProfileBtn button {
        // margin-bottom: 15%;
        // margin-left: 10px;
        height: 45px;
        border: 2px solid #F5EDA8;
        background-color: #08645B;
        color: #F5EDA8 !important;
        font-family: Varela Round;
        border-radius: 8px;
        margin-right: 10px;
        width: 170px;
    }

    .see

        // - - SEARCH BUTTON - - //

    .dropdown button {
        border: 2px solid #F5EDA8;
        border-radius: 8px;
        background-color: #F5EDA8;
        color: #08645B;
        font-family: Quicksand;
        height: 45px;
        width: 150px;
    }

        // - - VIDEO CAPTION / TITLE - - //

    .profileCol h1 {
        margin-left: 10px;
        max-width: 640px;
    }

    .profileCol h5 {
        max-width: 640px;
    }

    .profileCol h6 {
        font-family: Varela Round;
        margin-left: 10px;
        margin-right: 10px;
        // margin-bottom: 20%;
        max-width: 640px;
    }

    .profileCol label {
        font-size: 20px;
        color: #08645B;
    }

        // - - VIDEO DIMENSIONS - - //

    .latestVid {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        border-top: 0px solid black !important;
        border-bottom: 0px solid black !important;
    }

        // - - USER CELL - - //

    .userCell {
        margin-left: 30px;
        margin-bottom: 20px;
    }
    
    .userCell img {
        height: 90px;
        width: 100px;
        border-radius: 10px;
        text-align: right;
        border: 3px solid #F5EDA8;
        aspect-ratio: 1 / 1;
        max-width: 90px;
        max-height: 120px;
        // margin-left: 30px;
        object-fit: cover;
        margin: auto;
        margin-bottom: 63px;
    }

    .dropdown button {
        border: 2px solid #ff8447;;
    }

        // - - EMPTY FEED - - //

    .emptyFeed {
        max-width: 75%;
        text-align: left;
        margin-left: 30px;
    }
    .emptyFeed h1 {
        font-family: Quicksand;
        color: #F5EDA8;
    }

    // - - CAREER SEARCH - - //

    .headerCareerSearch {
        text-align: center;
        padding-right: 10px;
        // margin-left:8%;
    }
    
    .headerCareerSearch label {
        // margin-left: 80px;
        // margin-right: 10px;
    }
    
    .careerSearchRow {
        display: inline-block;
        width: 100%;
        text-align: center;
        float: left;
        // margin-left:15.5%;
        // margin-left: 0%;
    }

    .careerSearchRow label {
        background-color: transparent;
        border: 2px solid transparent;
        width: 70%;
        text-align: left;
        border-radius: 8px;
        // display: flex;
        // justify-content: flex-end;
    }

    .fields {
        texct-align: center;
    }

    .careerSearch {
        width : 100%;
        max-width: 96%;
        margin: 0 auto;
        height: 115px;
        padding-bottom: 10px;
        text-alignment: center;
        z-index: 999;
        background-color: transparent;
        padding: 10px 10px 35px;
        border-radius: 8px;
        flex-direction: column;
        margin-top: 35px;
        margin-bottom: 20px;
    }

    .careerSearch text {
        font-size: 15px;
    }

    .careerSearch img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        border: 3px solid #BC4700;
        aspect-ratio: 1 / 1;
        max-width: 90px;
        max-height: 90px;
        margin-left: 10%;
        object-fit: cover;
        margin: auto;
        margin-bottom: 0px;
    }

    .careerSearchBorder {
        height: 115px;
        margin-top: 1%;
        cursor: pointer;
        background-color: #FFD5AB;
        border-radius: 16px;
        padding-top: 9px;
        padding-bottom: 1px;
        padding-left: 9px;
    }

    .videoBorder2 {
        float: center;
        border-bottom: 1px solid #FF8447;
        margin-top: 13px !important;
        width: 500px !important;
        margin-bottom: 50px !important;
        margin-left: 100px;
        // margin-right: 30px;
    }

    .videoBorder3 {
        float: center;
        border-bottom: 0.5px solid #F5EDA8;
        margin-top: 27px !important;
        width: 350px;
        margin: 0 auto;
        margin-bottom: 22.5px;
    }


}


@media screen and (max-width: 600px) {
    .mainRow {
        width: 100%;
        margin-bottom: 10%;
    }

    .mainRow3 {
        width: 100%;
    }

    .mainRow3 span {
        // display: inline-block;
        width:  95%;
        text-align: center;
        font-size: 15px;
        // margin-right: 50%;
        // margin-left: 10px;
        // margin-right: 10px;
    }

    .mainRow3 h4 {
        margin-top: 20px;
        font-family: Quicksand;
        font-size: 27.5px;
        text-align: center;
        color: #F5EDA8;
        margin-bottom: 20px;
        // border-bottom: 0.01px solid #ff8447;
    }

    .header h1 {
        color: #F5EDA8;
    }

    .header button {
        height: 45px;
        border: 2px solid #F5EDA8;
        background-color: #08645B;
        color: #F5EDA8;
        font-family: Quicksand;
        border-radius: 8px;
        // margin-right: 25px;
        width: 160px;
    }

    // - - CAREER SEARCH - - //


    .allCareers p {
        font-family: Quicksand;
        text-align: center;
        margin-bottom: 20px;
        color: #F5EDA8;
        font-size: 20px;
    }

    .headerCareerSearch {
        text-align: center;
        // margin-left:8%;
        color: #F5EDA8;
    }

    #proPic {
        margin-left: 10px;
    }

    .latestVid {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        border-top: 0px solid black !important;
        border-bottom: 0px solid black !important;
    }

    .profileCol {
        margin-left: 10px;
        margin-right: 10px;
        background-color: ##F4F4F4;
        border-radius: 19px;
        margin-bottom: 20px;
        padding-top: 17.5px;
    }

    .profileCol h5 {
        margin-left: 10px;
        margin-bottom: 3%;
        font-size: 14px;
    }
    .profileCol h1 {
        font-size: 21px;
        margin-left: 10px;
    }

    .profileCol h6 {
        font-family: Varela Round;
        margin-left: 10px;
        margin-right: 10px;
        // margin-bottom: 20%;
    }

    .profileCol label {
        margin-left: 7px;
        font-family: Varela Round;
        color: #08645B;
        font-size: 17px;
    }

    .profileCol button {
        // margin-bottom: 15%;
        // margin-left: 10px;
        height: 45px;
        border: 2px solid #08645B;
        background-color: #08645B;
        color: #F5EDA8 !important;
        font-family: Varela Round;
        font-size: 15px;
        border-radius: 8px;
        margin-right: 15px;
        width: 130px;
    }

    .profileCol button:hover {
        background-color: #F5EDA8;
        color: #08645B !important;
        border: 2px solid #08645B;;
    }

    .profileCol video {
        border-radius: 7px;
        height: 230px !important;
        border: 3px solid #BC4700 !important; 
        background: transparent url('/assets/videoBackground.png') no-repeat 0 0;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }


    .seeProfileBtn img {
        margin-left: 45%;
        width: 200px important;
        height: 30px !important;
    }

    .seeProfileBtn button {
        color: #F5EDA8 !important;
        
    }

    .resources {
        text-align: left;
    }
    
    .resources img {
        width: 24px !important;
        height: 24px !important;
        margin-bottom: 0px important;
        margin-top: 0px !important;
    }

    .resources p {
        font-family: Quicksand;
        color: #08645B;
        font-size: 18px;
    }
    
    .resources text {
        margin-left: 10px;
        color: #08645B;
    }
    
    .resources a {
        color: #08645B;
        margin-left: 10px;
        cursor: pointer;
    }

    .profileCol textarea {
        margin-left: 10px;
    }

    .profileCol img {
        height: 90px;
    }

    // - - EMPTY FEED - - //

    .emptyFeed {
        text-align: left;
        margin-left: 30px;
    }
    .emptyFeed h1 {
        font-family: Quicksand;
        color: #F5EDA8;
    }
        // - - SELECTED USED - - //

    .selectedUser {
        text-align: center;
    }

    .selectedUser button {
        height: 40px;
        border: 2px solid #F5EDA8;
        background-color: #F5EDA8;
        color: #08645B;
        font-family: Quicksand;
        border-radius: 8px;
        width: 60px;
    }

    // - - DROP DOWN MENU - - //

    .dropdown textarea {
        border-radius: 7px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid transparent;
        border-bottom: 0.2px solid #F5EDA8;
        height: 40px;
        background-color: #08645B;
        outline: none;
        margin-left: 30px;
        margin-right: 8px;
        width: 65%;
        color: #F5EDA8;
        padding: 4px;
        resize:none;
        font-family: 20px;
    }
    
    .dropdown textarea::placeholder {
        text-align: center;
        font-family: Quicksand;
        color: #F5EDA8;
    }
    
    .dropdown button {
        border: 2px solid #ff8447;;
        border-radius: 8px;
        background-color: #F5EDA8;
        color: #08645B;
        font-family: Quicksand;
        height: 45px;
        width: 95px;
    }

    // - - USER CELL - - //

    .userCell {
        margin-left: 15px;
        margin-bottom: 60px !important;
    }
    
    .userCell img {
        height: 90px;
        width: 100px;
        border-radius: 10px;
        text-align: right;
        border: 2.5px solid #ff8447;
        aspect-ratio: 1 / 1;
        max-width: 90px;
        max-height: 120px;
        // margin-left: 30px;
        object-fit: cover;
        margin: auto;
        margin-bottom: 62px;
    }
    
    .userCell label {
        font-family: Quicksand;
    }
    
    .userCellRowTxt p {
        // margin-top: 50%;
    }


        // - - SEARCHED USER INFO - - //


    .searchUserInfo {
        margin-top: 20px;
        font-family: Quicksand;
        font-size: 13px;
    }

    .searchUserInfo span {
        font-size: 12.5px;
        background-color: #F5EDA8;
        color: #08645B;
        padding-top: 0px;
        padding-bottom: 3px;
        padding-left: 7.5px;
        padding-right: 7.5px;
        border-radius: 8px;  
        border: 2px solid #ff8447;
    }

        // - - EMOJI PICKER - - //

    .emojiPicker img {
        width: 20px !important;
        height: 20px !important;
    }
    
    .emojiPicker span {
        font-size: 20px;
        background-color: transparent;
        padding-top: 2px;
        padding-bottom: 5px;
        padding-left: 9.5px;
        padding-right: 9.5px;
        border-radius: 15px;  
        border: 0.9px solid #ff8447;
        margin-left: 10px;
        margin-right: 10px;
    }

    // - - EMOJI PICKER 2 - - //

    .emojiPicker2 { 
        text-align: center;
        margin-top: 15px;
    }
    
    .emojiPicker2 span {
        font-size: 16px;
        background-color: transparent;
        padding-top: 3px;
        padding-bottom: 5px;
        padding-left: 6.5px;
        padding-right: 6.5px;
        border-radius: 15px;  
        border: 2px solid #ff8447;
        margin-left: 1.5%;
        margin-right: 1.5%;
        cursor: pointer;
    }

    .emojiPicker2 p {
        margin-top: 10px;
        margin-bottom: 0px !important;
        color: #08645B;
        font-size: 13.4px;
        font-family: Quicksand;
    }

        // - - SWAL NOTIFICATION - - //
    
    .swalNotification {
        font-size: 20px;
    }

    // - - CAREER SEARCH - - //

    .headerCareerSearch {
        text-align: right;
        padding-right: 10px;
        // margin-left:8%;
    }
    
    .headerCareerSearch label {
        // margin-left: 80px;
        // margin-right: 10px;
    }
    
    .careerSearchRow {
        display: inline-block;
        width: 100%;
        text-align: center;
        float: left;
        // margin-left:15.5%;
        // margin-left: 0%;
    }

    .careerSearchRow label {
        background-color: transparent;
        border: 2px solid transparent;
        width: 70%;
        text-align: left;
        border-radius: 8px;
        // display: flex;
        // justify-content: flex-end;
    }

    .fields {
        text-align: center;
        // margin-left: 20px;
    }

    .careerSearch {
        width : 100%;
        max-width: 96%;
        margin: 0 auto;
        height: 115px;
        padding-bottom: 10px;
        text-alignment: center;
        z-index: 999;
        background-color: transparent;
        padding: 10px 10px 35px;
        border-radius: 8px;
        flex-direction: column;
        margin-top: 35px;
        margin-bottom: 0px;
    }

    .careerSearchRow text {
        width: 100%;
        float: left;
        font-family: Quicksand;
        color: #BC4700;
        font-size: 12px;
        // padding-top: 5px;
        // padding-bottom: 20px;
        padding-left: 0px;
        // margin-bottom: 15px;
    }

    .careerSearch img {
        width: 65px;
        height: 65px;
        border-radius: 10px;
        border: 3px solid #BC4700;
        aspect-ratio: 1 / 1;
        max-width: 90px;
        max-height: 90px;
        object-fit: cover;
        margin: auto;
        // margin-bottom: 42px;
    }

    .careerSearchBorder {
        margin-top: 1%;
        cursor: pointer;
        background-color: #FFD5AB;
        border-radius: 16px;
        padding-top: 9px;
        padding-bottom: 12px;
        padding-left: 9px;
    }

    .careerSearchRow table td {
       text-align: left;
    }

    .videoBorder2 {
        float: center;
        border-bottom: 1px solid #FF8447;
        margin-top: 33px !important;
        width: 290px;
        margin-left: 60px;
        // margin-right: 30px;
    }

    .videoBorder3 {
        float: center;
        border-bottom: 0.5px solid #F5EDA8;
        margin-top: 27px !important;
        width: 260px;
        margin: 0 auto;
    }
}



`


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.scrollDiv = createRef()
        this.scrollDiv2 = createRef()
        this.state = {
            profiles: [],
            writeComment: false,
            commentBtn: true,
            userClicked: null,
            mainFeed: true,
            otherUser: false,
            showUsers: false,
            showSideMenu: true,
            emojiPicker: false,
            reactionMsg: false,
            userReactions: true,
            allCareers: true,
            filterField: false,
            viewResource: false,
            preUserName: "almost",
            name: "",
            career: "",
            education: "",
            nationality: "",
            nationalityTxt: "",
            topic1: "",
            topic2: "",
            topic3: "",
            profilePic:"",
            username: "",
            videos: [],
            userEmail: "",
            user: "",
            currentUser: "",
            email: "",
            following: [],
            searchBar: "",
            searchDatabase: [],
            foundUsers: [],
            previousProfiles: [],
            allTags: [],
            allFields: [],
            contentFields: [],
            selectedField: [],
            selectedCareer: "",
            filteredFieldSearch: [],
            reaction: "",
            emojiPicked: "",
            lastScroll: "",
            emojiPickedColor: "#FF8447",
            emojiPickedBrdColor: "#000000",
            likeColor: "transparent",
            likeBdrColor: "",
            likeReaction: "You liked the post!",
            coolColor: "transparent",
            coolBdrColor: "black",
            coolReaction: "You gave a shout out for this post!",
            celebrateColor: "transparent",
            celebrateBdrColor: "black",
            celebrateReaction: "You celebrated the post!",
            loveColor: "transparent",
            loveBdrColor: "black",
            loveReaction: "You loved the post!",
            inspireColor: "transparent",
            inspireBdrColor: "black",
            inspireReaction: "You marked the post as inspiring!",
            scrollDistance: 800,
            prevPosition: 0
        }
    }

    authListener () {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.state.userEmail = user.email
            }
        })
    }


    componentDidMount  = () => {
        // window.addEventListener('scroll', e => this.handleNavigation(e));
        this.authListener()
        class Profile {
            constructor(name, nationality, 
                nationalityTxt, email,
                latestPost, profilePic, 
                education, career,
                topic1, topic2, 
                topic3, latestTitle,
                latestCaption, username,
                hasContent, tags,
                celebrate, cool,
                like, love,
                inspire, id, field) {
                this.name = name
                this.nationality = nationality
                this.nationalityTxt = nationalityTxt
                this.email = email
                this.latestPost = latestPost
                this.profilePic = profilePic
                this.education = education
                this.career = career
                this.topic1 = topic1
                this.topic2 = topic2
                this.topic3 = topic3
                this.latestTitle = latestTitle
                this.latestCaption = latestCaption
                this.username = username
                this.hasContent = hasContent
                this.tags = tags
                this.celebrate = celebrate
                this.cool = cool
                this.like = like
                this.love = love
                this.inspire = inspire
                this.id = id
                this.field = field
            }
            toString () {
                return this.name + ', ' +
                this.nationality + ', ' +
                this.nationalityTxt + ', ' +
                this.email + ', ' + 
                this.latestPost + ', ' +
                this.profilePic + ', ' +
                this.education + ', ' +
                this.career + ', ' +
                this.topic1 + ', ' +
                this.topic2 + ', ' +
                this.topic3 + ', ' +
                this.latestTitle + ', ' +
                this.latestCaption + ', ' +
                this.username + ', ' + 
                this.hasContent + ', ' +
                this.tags + ', ' +
                this.celebrate + ', ' +
                this.cool + ', ' +
                this.like + ', ' +
                this.love + ', ' +
                this.inspire + ', ' +
                this.id + ', ' + 
                this.field
            }
        }
        var profileConverter = {
            toFirestore : function(profile) {
                return {
                    name : profile.name,
                    nationality : profile.nationality, 
                    nationalityTxt: profile.nationalityTxt,
                    email: profile.email,
                    latestPost : profile.latestPost,
                    profilePic : profile.profilePic,
                    education : profile.education,
                    career : profile.career,
                    topic1 : profile.topic1,
                    topic2 : profile.topic2,
                    topic3 : profile.topic3,
                    latestTitle : profile.latestTitle,
                    latestCaption: profile.latestCaption,
                    username: profile.username,
                    hasContent : profile.hasContent,
                    tags: profile.tags,
                    celebrate: profile.celebrate,
                    cool: profile.cool,
                    like: profile.like,
                    love: profile.love,
                    inspire: profile.inspire,
                    id: profile.id,
                    field: profile.field
                }
            },
            fromFirestore : function(snapshot, options) {
                const data = snapshot.data(options)
                return new Profile(data.name, data.nationality, 
                    data.nationalityTxt, data.email,
                    data.latestPost, data.profilePic,
                    data.education, data.career,
                    data.topic1, data.topic2, data.topic3,
                    data.latestTitle, data.latestCaption,
                    data.username, data.hasContent,
                    data.tags, data.celebrate,
                    data.cool, data.like,
                    data.love, data.inspire, 
                    data.id, data.field)
            }
        }

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                fire.firestore().collection("allUsers").doc(this.state.userEmail)
                .collection("following").get()
                .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data().username)
                    console.log(data)
                    this.setState({
                        following: data
                    })
                })

                fire.firestore().collection("temporaryPics")
                .get().then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data())
                    console.log(data)
                    this.setState({
                        tempPhotos: data
                    })
                    let shuffled = data
                    .sort( () => .5 - Math.random() )
                    console.log(shuffled)
        })

                fire.firestore().collection("allUsernames")
                .withConverter(profileConverter).get().then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data())
                    const tags = querySnapshot.docs.map(doc => doc.data().tags)
                    const fields  = querySnapshot.docs.map(doc => doc.data().field)
                    const commonFieldsObjects = data.filter(x => x.field !== undefined)
                    var noRepeatedObjects = [...new Set(fields)];
                    this.setState({
                        contentFields: commonFieldsObjects
                    })
                    this.setState({
                        searchDatabase: data,
                        allTags : tags,
                        allFields: noRepeatedObjects
                    })
                    let result = tags
                })
            }
        })
       
    }

    componentWillUpdate = () => {
        // this.prev = window.scrollY;
        // console.log(this.state.following)
        class Profile {
            constructor(name, nationality, 
                latestPost, profilePic, 
                education, career,
                topic1, topic2, 
                topic3, latestTitle,
                latestCaption, username,
                celebrate, cool,
                like, love,
                inspire, id,
                field) {
                this.name = name
                this.nationality = nationality
                this.latestPost = latestPost
                this.profilePic = profilePic
                this.education = education
                this.career = career
                this.topic1 = topic1
                this.topic2 = topic2
                this.topic3 = topic3
                this.latestTitle = latestTitle
                this.latestCaption = latestCaption
                this.username = username
                this.celebrate = celebrate
                this.cool = cool
                this.like = like
                this.love = love
                this.inspire = inspire
                this.id = id
                this.field = field
            }
            toString () {
                return this.name + ', ' +
                this.nationality + ', ' +
                this.latestPost + ', ' +
                this.profilePic + ', ' +
                this.education + ', ' +
                this.career + ', ' +
                this.topic1 + ', ' +
                this.topic2 + ', ' +
                this.topic3 + ', ' +
                this.latestTitle + ', ' +
                this.latestCaption + ', ' +
                this.username + ', ' +
                this.celebrate + ', ' +
                this.cool + ', ' +
                this.like + ', ' +
                this.love + ', ' +
                this.inspire + ', ' +
                this.id  + ', ' +
                this.field
                
            }
        }
        var profileConverter = {
            toFirestore : function(profile) {
                return {
                    name : profile.name,
                    nationality : profile.nationality,
                    latestPost : profile.latestPost,
                    profilePic : profile.profilePic,
                    education : profile.education,
                    career : profile.career,
                    topic1 : profile.topic1,
                    topic2 : profile.topic2,
                    topic3 : profile.topic3,
                    latestTitle : profile.latestTitle,
                    latestCaption: profile.latestCaption,
                    username: profile.username,
                    celebrate: profile.celebrate,
                    cool: profile.cool,
                    like: profile.like,
                    love: profile.love,
                    inspire: profile.inspire,
                    id: profile.id,
                    field: profile.field
                }
            },
            fromFirestore : function(snapshot, options) {
                const data = snapshot.data(options)
                return new Profile(data.name, data.nationality, 
                    data.latestPost, data.profilePic,
                    data.education, data.career,
                    data.topic1, data.topic2, data.topic3,
                    data.latestTitle, data.latestCaption,
                    data.username, data.celebrate,
                    data.cool, data.like,
                    data.love, data.inspire, 
                    data.id, data.field)
            }
        }


        if (this.state.profiles.length != 0) {
            return
        } else {
            //* - - FIGURE OUT HOW TO NOT CALL THIS REPEATEDLY - - //
            let checker = (arr, target) => target.every(v => arr.includes(v))
            fire.firestore().collection("recentPosts")
            .withConverter(profileConverter)
            .get().then(querySnapshot => {
                var data = querySnapshot.docs.map(doc => doc.data()).sort( () => .5 - Math.random())
                var updates = data.filter(d => this.state.following.includes(d.username))
                this.setState({
                    profiles: updates
                })
            })
        }
        
    }

    chosenColumn = (fedName) => {
       return this.state.preUserName = fedName
    }

    switchToWriteComment = (name) => {
        this.chosenColumn(name)
        console.log(this.state.preUserName)
        if (this.state.preUserName == name) {
            this.setState({
                writeComment: true,
                commentBtn: false
            })
        } else {
            console.log("not opening you todaaay")
        }
    }

    switchToBtns = () => {
        this.setState({
            commentBtn: true,
            writeComment: false
        })
    }

    handleTextChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    handleSearch = (event) => {
            this.setState({
                [event.target.id] : event.target.value,
                
            })
            if (event.target.value.length >= 1) {
                this.state.showUsers = true
                this.state.showSideMenu = false
                if (event.target.value.length > event.target.value.length-1 
                    && event.target.value.length < 50) {
                    this.updateItem(event.target.value, this.state.foundUsers)
                }
            } else {
                this.setState({
                    showUsers:false,
                    showSideMenu: true
                })
            }
    }

    findUser = () => {
        this.updateItem(this.state.searchBar, this.state.searchDatabase)
        this.setState({searchBar: ""})
    }

    updateItem = (newSearch,updatedItem) => {
        this.state.foundUsers = this.state.searchDatabase.map((item) => {
            if (item.name.includes(newSearch))
                var found = item 
                this.state.searchDatabase.sort(function(x,y){ return x == found ? -1 : y == found ? 1 : 0; });
                console.log(item)
                return item;
                return updatedItem;
            })
    }

    logout = () => {
        fire.auth().signOut();
    }

    renderUserSearch = () => {
        // this.state.foundUsers.m
    }


    renderTags = () => {
        this.setState({
            allTags:  this.state.searchDatabase.tags
        })
        console.log(this.state.searchDatabase)
    }


    onEmojiClick = () => {
        this.setState({
            commentBtn: true,
            emojiPicker: false
        })
    }

    postReaction = (emoji) => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            didOpen: () => {
                MySwal.clickConfirm()
            }
        }).then(() => {
            return MySwal.fire(
            <p>You reacted to the post! {emoji}</p>
            )
        })
    }

    removeReaction = (emoji) => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            didOpen: () => {
                MySwal.clickConfirm()
            }
        }).then(() => {
            return MySwal.fire(
            <p>Your removed your reaction {emoji}</p>
            )
        })
    }

    viewResources = (username) => {
        this.setState({
            mainFeed: false,
            viewResource: true
        })
        class UserProfile {
            constructor(name, nationality, nationalityTxt, profilePic, 
                education, career,
                topic1, topic2, 
                topic3,username, email) {
                this.name = name
                this.nationality = nationality
                this.nationalityTxt = nationalityTxt
                this.profilePic = profilePic
                this.education = education
                this.career = career
                this.topic1 = topic1
                this.topic2 = topic2
                this.topic3 = topic3
                this.username = username
                this.email = email
            }
            toString () {
                return this.name + ', ' +
                this.nationality + ', ' +
                this.nationalityTxt + ', ' +
                this.profilePic + ', ' +
                this.education + ', ' +
                this.career + ', ' +
                this.topic1 + ', ' +
                this.topic2 + ', ' +
                this.topic3 + ', ' +
                this.username + ', ' +
                this.email
            }
        }
        var profileConverter = {
            toFirestore : function(profile) {
                return {
                    name : profile.name,
                    nationality : profile.nationality,
                    nationalityTxt: profile.nationalityTxt,
                    profilePic : profile.profilePic,
                    education : profile.education,
                    career : profile.career,
                    topic1 : profile.topic1,
                    topic2 : profile.topic2,
                    topic3 : profile.topic3,
                    username: profile.username,
                    email: profile.email
                }
            },
            fromFirestore : function(snapshot, options) {
                const data = snapshot.data(options)
                return new UserProfile(data.name, data.nationality, 
                    data.nationalityTxt, data.profilePic,
                    data.education, data.career,
                    data.topic1, data.topic2, data.topic3,
                    data.username, data.email)
                }
            }
        this.setState({userClicked: username})
        console.log(username)
        fire.firestore().collection("allUsernames").doc(username)
        .withConverter(profileConverter).get().then(doc => {
            if(doc.exists) {
                console.log(doc.data())
                this.setState({
                    name: doc.data().name,
                    nationality: doc.data().nationality,
                    nationalityTxt: doc.data().nationalityTxt,
                    career: doc.data().career,
                    topic1: doc.data().topic1,
                    topic2: doc.data().topic2,
                    topic3: doc.data().topic3,
                    profilePic: doc.data().profilePic,
                    education: doc.data().education,
                    username: doc.data().username,
                    videos: doc.data().videos,
                    email: doc.data().email
                })
                console.log(doc.data().videos)
            } else {
                console.log("couldn't do it mayne")
            }
        })
        
    }

    renderPosts = () => {
        if (!this.state.profiles.length == 0) {
            return this.state.profiles.map((profiles) => {
                var { name, nationality, latestPost, profilePic,
                education, career, topic1, topic2, topic3, 
                latestTitle, latestCaption, username,
                id, like, love, cool, celebrate, inspire} = profiles

                var likeReacts
                var loveReacts
                var coolReacts
                var celebrateReacts
                var inspireReacts
                
                if (like || love || cool || celebrate || inspire) {
                    likeReacts = like.length
                    coolReacts = cool.length
                    loveReacts = love.length
                    celebrateReacts = celebrate.length
                    inspireReacts = inspire.length
                } else {
                    // this.state.userReactions = false
                }

                let likeBtnPressed = () => {
                    if (like && like.includes(this.state.userEmail)) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            like: firebase.firestore.FieldValue.arrayRemove(`${this.state.userEmail}`)
                        })
                        this.removeReaction("👍")
                    } else if (id) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            like: firebase.firestore.FieldValue.arrayUnion(`${this.state.userEmail}`)
                        })
                        this.postReaction("👍")
                    } 
                }

                let loveBtnPressed = () => {
                    if (love && love.includes(this.state.userEmail)) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            love: firebase.firestore.FieldValue.arrayRemove(`${this.state.userEmail}`)
                        })
                        this.removeReaction("❤️")
                    } else if (id) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            love: firebase.firestore.FieldValue.arrayUnion(`${this.state.userEmail}`)
                        })
                        this.postReaction("❤️")
                    } 
                }

                let coolBtnPressed = () => {
                    if (cool && cool.includes(this.state.userEmail)) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            cool: firebase.firestore.FieldValue.arrayRemove(`${this.state.userEmail}`)
                        })
                        this.removeReaction("😎")
                    } else if (id) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            cool: firebase.firestore.FieldValue.arrayUnion(`${this.state.userEmail}`)
                        })
                        this.postReaction("😎")
                    } 
                }

                
                let celebrateBtnPressed = () => {
                    if (celebrate && celebrate.includes(this.state.userEmail)) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            celebrate: firebase.firestore.FieldValue.arrayRemove(`${this.state.userEmail}`)
                        })
                        this.removeReaction("🎉")
                    } else if (id) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            celebrate: firebase.firestore.FieldValue.arrayUnion(`${this.state.userEmail}`)
                        })
                        this.postReaction("🎉")
                    } 
                }

                let inspireBtnPressed = () => {
                    if (inspire && inspire.includes(this.state.userEmail)) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            inspire: firebase.firestore.FieldValue.arrayRemove(`${this.state.userEmail}`)
                        })
                        this.removeReaction("🤩")
                    } else if (id) {
                        fire.firestore().collection("recentPosts").doc(id)
                        .update({
                            inspire: firebase.firestore.FieldValue.arrayUnion(`${this.state.userEmail}`)
                        })
                        this.postReaction("🤩")
                    } 
                }

                let emojiStyle = {
                    cursor: "pointer"
                }


                return(
                    <div className="endOfPost">
                    <div className="profileCol">
                        <div className="profileInfo">
                            <div className="profileRow">
                                <img id="proPic" src={profilePic}/>
                                <label><b>{name}</b></label>
                                {/* <img id="country" src={nationality}/> */}
                            </div>
                            <div className="profileImageBorder"></div>
                            {/* <h5><b>📍 Northfield, MN</b></h5> */}
                            <h5>🎓 {education}</h5>
                            <h5>🚀 {career}</h5>
                            <h5>💬 {topic1} <text>◉</text> {topic2} <text>◉</text> {topic3}</h5>
                            <div className="profileImageBorder"></div>
                        </div>
                        {/* <div className="videoBorder"></div> */}
                        <video 
                        className="latestVid" 
                        poster="assets/videoBackground.png"  
                        controls autoplay src={latestPost}>    
                        </video>
                        <div className="videoBorder"></div>
                        <div className="videoInfo">
                            <div className="titleDiv"><h1>{latestTitle}</h1></div>
                            <div className-="captionDiv"><h6>{latestCaption}</h6></div>
                        </div>
                        {this.state.commentBtn && 
                            <div className="seeProfileBtn">
                                <button
                                onClick={() => this.seeProfile(username)}
                                ><b>See Profile</b></button>
                                {/* <img 
                                onClick={() => showEmojiPicker(username)}
                                src="assets/heart.png"/> */}
                                <button
                                onClick={() => this.viewResources(username)}
                                ><b>Connect</b></button>
                                {/* <span>
                                    <img className="shareImg" src="assets/sharePost.png"/>
                                </span> */}
                            </div>
                        }
                        {this.state.writeComment && 
                            <div className="resources">
                               <p><u>Information</u></p>
                               <img src= "assets/office.png"/>
                               <text><b>Office Hours:</b> Not set</text><br/>
                               <img src= "assets/linkedIn.png"/>
                               <text><b>Connect via LinkedIn</b></text> <br/>
                               <img src= "assets/link3.png"/>
                               <a href="javascript:void(0);"
                               ><b>Resources</b></a> <br/>
                               <button
                               onClick={this.switchToBtns}
                               >Back</button>
                            </div>
                        }
                        {this.state.userReactions && 
                            <div className="emojiPicker2">
                                <Emoji style={emojiStyle} onClick={likeBtnPressed} symbol={'👍 ' + likeReacts}/>
                                <Emoji style={emojiStyle} onClick={coolBtnPressed} symbol={'😎 ' + coolReacts} />
                                <Emoji style={emojiStyle} onClick={celebrateBtnPressed} symbol={'🎉 ' + celebrateReacts} />
                                <Emoji style={emojiStyle} onClick={loveBtnPressed} symbol={'❤️ ' + loveReacts} />
                                <Emoji style={emojiStyle} onClick={inspireBtnPressed} symbol={'🤩 ' + inspireReacts} /> 
                                <br/>
                                <p><b>(Reactions are updated after you reload the page)</b></p>
                            </div>
                        }
                        <br/> 
                    </div>
                    <img 
                    src="assets/endOfPost.png"
                    onClick={() => {
                        this.scrollDiv2.current.scrollIntoView({ behavior: 'smooth' });
                    }}
                    />
                    </div>
                )
            })
        } else {
            return(
                <div className="emptyFeed">
                    <h1>Your feed is empty. Search for someone and follow them!</h1>
                </div>
            )
        }
    }

    renderNavbar = () => {
        return(
            <Styles>
                <div>
                    <Navbar expand="lg">
                        <Navbar.Brand href="/" id="brand"><img className="logoImg" src="assets/logo3.png"/></Navbar.Brand>
                        <Navbar.Toggle id="responsive-navbar-nav"/>
                        <Navbar.Collapse d="responsive-navbar-nav">
                            <Nav className="navContainer ml-auto">
                                <Nav.Item><Nav.Link href="/">
                                    <figure>
                                        <img src="/assets/inspoIcon.png"/>
                                        <figcaption><b>home</b></figcaption>
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
                                <Nav.Item><Nav.Link onClick={() => this.logout()}>
                                    <figure>
                                        <img src="/assets/logoutIcon.png"/>
                                        <figcaption><b>logout</b></figcaption>
                                    </figure> 
                                </Nav.Link></Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Styles>
        )
    }

    seeProfile = (username) => {
        this.setState({
            mainFeed: false,
            otherUser: true
        })
        class UserProfile {
            constructor(name, nationality, nationalityTxt, profilePic, 
                education, career,
                topic1, topic2, 
                topic3,username, email) {
                this.name = name
                this.nationality = nationality
                this.nationalityTxt = nationalityTxt
                this.profilePic = profilePic
                this.education = education
                this.career = career
                this.topic1 = topic1
                this.topic2 = topic2
                this.topic3 = topic3
                this.username = username
                this.email = email
            }
            toString () {
                return this.name + ', ' +
                this.nationality + ', ' +
                this.nationalityTxt + ', ' +
                this.profilePic + ', ' +
                this.education + ', ' +
                this.career + ', ' +
                this.topic1 + ', ' +
                this.topic2 + ', ' +
                this.topic3 + ', ' +
                this.username + ', ' +
                this.email
            }
        }
        var profileConverter = {
            toFirestore : function(profile) {
                return {
                    name : profile.name,
                    nationality : profile.nationality,
                    nationalityTxt: profile.nationalityTxt,
                    profilePic : profile.profilePic,
                    education : profile.education,
                    career : profile.career,
                    topic1 : profile.topic1,
                    topic2 : profile.topic2,
                    topic3 : profile.topic3,
                    username: profile.username,
                    email: profile.email
                }
            },
            fromFirestore : function(snapshot, options) {
                const data = snapshot.data(options)
                return new UserProfile(data.name, data.nationality, 
                    data.nationalityTxt, data.profilePic,
                    data.education, data.career,
                    data.topic1, data.topic2, data.topic3,
                    data.username, data.email)
                }
            }
        this.setState({userClicked: username})
        console.log(username)
        fire.firestore().collection("allUsernames").doc(username)
        .withConverter(profileConverter).get().then(doc => {
            if(doc.exists) {
                console.log(doc.data())
                this.setState({
                    name: doc.data().name,
                    nationality: doc.data().nationality,
                    nationalityTxt: doc.data().nationalityTxt,
                    career: doc.data().career,
                    topic1: doc.data().topic1,
                    topic2: doc.data().topic2,
                    topic3: doc.data().topic3,
                    profilePic: doc.data().profilePic,
                    education: doc.data().education,
                    username: doc.data().username,
                    videos: doc.data().videos,
                    email: doc.data().email
                })
                console.log(doc.data().videos)
            } else {
                console.log("couldn't do it mayne")
            }
        })
    }    

    backToMainFeed = () => {
        this.setState({
            mainFeed: true,
            otherUser: false,
            viewResource: false,
            name: "",
            nationality: "",
            profilePic: "",
            career: "",
            education: "",
            topic1: "",
            topic2: "",
            topic3: ""
        })
    }
    
    goToSearchedProfile = (
        name, career, education,
        nationality, nationalityTxt,
        profilePic, username,
        topic1, topic2, topic3, email
        ) => {
            console.log(email)
        this.setState({
            name: name,
            nationality: nationality,
            nationalityTxt: nationalityTxt,
            career: career,
            topic1: topic1,
            topic2: topic2,
            topic3: topic3,
            profilePic: profilePic,
            education: education,
            username: username,
            email: email,
            otherUser: true,
            mainFeed: false
        })
    }

    logout = () => {
        fire.auth().signOut();
    }

    goToCareers = () => {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
        });
    }

    filterFieldsPressed = (field) => {
        this.setState({
            selectedCareer: field,
            selectedField: this.state.contentFields.filter(x => x.field === field),
            allCareers: false,
            filterField: true
        })
    }

    backToCareers = () => {
        this.setState({
            allCareers: true,
            selectedCareer: "",
            filterField: false,
        })
    }

    
    render () {

        let containerStyle = {
            height: 55,
            width: '100%',
            backgroundColor: this.state.bqLabelBgColor,
            borderRadius: 50,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 3,
            marginTop: "10px"
        }

        const options = [
            {name: 'Swedish', value: 'sv'},
            {name: 'English', value: 'en'},
            {
                type: 'group',
                name: 'Group name',
                items: [
                    {name: 'Spanish', value: 'es'},
                ]
            },
        ];

        let dialogueStyle = {
            width : "62.5%",
            maxWidth: "92.5%",
            margin: "0 auto",
            height:"20px",
            textAlignment: "left",
            zIndex: "999",
            backgroundColor: "#FF8447",
            padding: "10px 10px 35px",
            borderRadius: "8px",
            flexDirection: "column",
            marginTop: "30px",
            marginBottom: "20px"
        }

        let careerSearchStyle = {
            width : "100%",
            maxWidth: "100%",
            margin: "0 auto",
            height:"95px",
            paddingBottom: "10px",
            textAlignment: "left",
            zIndex: "999",
            backgroundColor: "#F4F4F4",
            padding: "10px 10px 35px",
            borderRadius: "8px",
            flexDirection: "column",
            marginTop: "35px",
            marginBottom: "20px"
        }


        return(
            <Styles>
                <Helmet>
                    <style>{'body { background-color: #08645B; }'}</style>
                </Helmet>
                <NavbarTool/>
                {this.state.mainFeed && 
                    <div ref={this.scrollDiv2} >
                        <div className="header">
                            {/* <h1>feed</h1> */}
                            <div className="headerButton">
                                <button
                                onClick={() => {
                                    this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
                                }}
                                >See All Careers</button>
                            </div>
                        </div>
                        <div>
                            <p></p>
                            {/* <button
                            onClick={this.logout}
                            >Logout</button> */}
                        </div>
                        <div className="mainCol">
                            <div className="mainRow">
                                <div className="dropdown">
                                    <textarea
                                    id="searchBar"
                                    type="text"
                                    placeholder="Search for people"
                                    value={this.state.searchBar}
                                    onChange={this.handleSearch}
                                    />
                                    <button
                                    onClick={this.findUser}
                                    ><b>Search</b></button>
                                    {this.state.showSideMenu && 
                                        <div className="sideMenu">
                                            <table>
                                                <tr> 
                                                    <td><img src="assets/officeHours.png
                                                    "/></td> 
                                                    <td>
                                                        <tr className="careerSearchTxt"> 
                                                        <td >
                                                            <text><b>Office Hours</b></text>
                                                            <p>See who has available office hours</p>
                                                        </td></tr>
                                                    </td>
                                                </tr>         
                                            </table>
                                            <div className="interviewMe"></div>
                                            <table>
                                                <tr> 
                                                    <td><img src="assets/interviewMe.png
                                                    "/></td> 
                                                    <td>
                                                        <tr className="careerSearchTxt"> 
                                                        <td>
                                                            <text><b>Interview Me</b></text>
                                                            <p>Request an interview with us</p>
                                                        </td></tr>
                                                    </td>
                                                </tr>         
                                            </table>
                                            <div className="interviewMe"></div>
                                            <table>
                                                <tr> 
                                                    <td><img src="assets/reportUs.png
                                                    "/></td> 
                                                    <td>
                                                        <tr className="careerSearchTxt"> 
                                                        <td>
                                                            <text><b>Report</b></text>
                                                            <p>Report anything to us directly here</p>
                                                        </td></tr>
                                                    </td>
                                                </tr>         
                                            </table>
                                            <div className="interviewMe"></div>
                                            <table>
                                                <tr> 
                                                    <td><img src="assets/sendInvite.png
                                                    "/></td> 
                                                    <td>
                                                        <tr className="careerSearchTxt"> 
                                                        <td>
                                                            <text><b>Invite</b></text>
                                                            <p>Send an invite to someone & attach your favorite video</p>
                                                        </td></tr>
                                                    </td>
                                                </tr>         
                                            </table>
                                        </div>
                                    }
                                    {this.state.showUsers && 
                                        <div>
                                            <div>
                                                {this.state.foundUsers.map(user => (
                                                    <div className="userCell">
                                                        <img src={user.profilePic}/>
                                                        <label>
                                                            <div onClick={() => this.goToSearchedProfile(
                                                                user.name, user.career, 
                                                                user.education, user.nationality,
                                                                user.nationalityTxt, user.profilePic,
                                                                user.username, user.topic1,
                                                                user.topic2, user.topic3, 
                                                                user.email, user.hasContent,
                                                                user.tags
                                                            )} className="searchUserInfo">
                                                                <b>{user.name}</b><br/>
                                                                🚀 {user.career} <br/>
                                                                {user.hasContent ? '🎬 New posts' : '⏳ No posts yet'} <br/>
                                                                <span><b>{user.tags}</b></span>
                                                            </div>
                                                        </label>
                                                        <div className="videoBorder2"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        <div className="mainRow">
                            {/* <button
                            onClick={this.logout}
                            >Logout</button> */}
                            <table >
                                <tbody>
                                    {this.renderPosts()}
                                </tbody>
                            </table>
                        </div>
                            <div className="mainRow3">
                                <span>
                                    <h4>Careers & Degree Paths</h4>
                                    <img src="assets/careerPosts2.gif"/>
                                    <p><b>People with posts up!</b></p>
                                </span>
                                {this.state.allCareers && 
                                    <div className="allCareers">
                                        {this.state.allFields.map(field => (
                                            <div ref={this.scrollDiv} onClick={() => this.filterFieldsPressed(field)} className="fields">
                                                <b><a href="javascript:void(0);"><p>{field}</p></a></b>
                                            </div>
                                        ))}
                                    </div>
                                }
                                {this.state.filterField && 
                                    <div className="headerCareerSearch">
                                        {/* <label>{this.state.selectedCareer}</label> */}
                                        <label>
                                            <a href="javascript:void(0);" onClick={this.backToCareers}>
                                                <p>Close</p>
                                            </a>
                                        </label>
                                        <p className="selectedCareer"><u>{this.state.selectedCareer}</u></p>
                                        {this.state.selectedField.map(user => (
                                            <div ref={this.scrollDiv} className="careerSearch">
                                                <div className="careerSearchRow">
                                                    <div 
                                                    className="careerSearchBorder"
                                                    onClick={() => this.seeProfile(user.username)}
                                                    >
                                                        <table>
                                                            <tr> 
                                                                <td><img src={user.profilePic}/></td> 
                                                                <td>
                                                                    <tr className="careerSearchTxt"> <td><text>👤 <b>{user.name}</b></text></td></tr>
                                                                    <tr className="careerSearchTxt"> <td><text>🚀 <b>{user.career}</b></text></td></tr>
                                                                </td>
                                                            </tr>         
                                                        </table>
                                                    </div>
                                                    <div className="videoBorder3"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }
                {this.state.otherUser && 
                    <div>
                        <div className="selectedUser">
                            <button
                            onClick={this.backToMainFeed}
                            ><b>⇦</b></button>
                        </div>
                        <OtherUser 
                        dataSentFromParent = {this.state.userClicked}
                        name = {this.state.name}
                        username = {this.state.username}
                        nationality = {this.state.nationality}
                        nationalityTxt = {this.state.nationalityTxt}
                        education = {this.state.education}
                        career = {this.state.career}
                        topic1 = {this.state.topic1}
                        topic2 = {this.state.topic2}
                        topic3 = {this.state.topic3}
                        profilePic = {this.state.profilePic}
                        email = {this.state.email}
                        />
                    </div>
                }
                {this.state.viewResource && 
                    <div>
                        <div className="selectedUser">
                            <button
                            onClick={this.backToMainFeed}
                            ><b>⇦</b></button>
                        </div>
                        <Resource
                        name = {this.state.name}
                        profilePic = {this.state.profilePic}
                        email = {this.state.email}
                        />
                    </div>
                }
            </Styles>
        )
    }
}