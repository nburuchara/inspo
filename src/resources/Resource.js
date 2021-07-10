import React, {Component} from 'react'
import styled from 'styled-components'
import fire from '../database/firebase'
import firebase from 'firebase'
import {Helmet} from 'react-helmet';
import NavbarTool from '../navbar/Navbar'
import { Link } from 'react-router-dom';
// import { SpeedDial, BubbleList, BubbleListItem } from 'react-speed-dial';



const Styles = styled.div `

    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 2.75%;
}

.header img {
    width: 70%;
}

.userImg {
    
}

.header button {
    width: 200px;
    height: 55px;
    border-radius: 14px;
    background-color: #F5EDA8;
    color: #08645B;
    font-family: Quicksand;
    font-size: 17.5px;
    border 2px solid #ff8447;
    margin-bottom: 30px;
}

.header button:hover {
    background-color: #08645B;
    color: #F5EDA8;
    border-color: black;
    border: 2px solid #F5EDA8;
}

    // - - MAIN PAGE = = //

.mainPage {
    text-align: center;
}


.mainPage img {
    margin-top: 2%;
    width: 200px;
    border-radius: 7px;
    border: 5px solid #FF8847;
}

.mainPage h2 {
    margin-top: 1.5%;
    color: #F5EDA8;
    font-family: Arvo;
}

.mainPage table {
    margin-left: auto;
    margin-right: auto;
}

.mainPage div {
    text-align:
}


    // - - LET'S CONNECT - - //

.letsConnect {
    text-align: center;
    margin-top: 35px;
    margin-left: 30%;
    margin-right: 30%;
    border-bottom: 0.5px solid #FF8847;
}

.linkedin {
    margin-top: 10px !important;
    width: 50px !important;
    border: 0px solid transparent !important;
    margin-bottom: 10px;
}

.connectBox {
    color: #F5EDA8;
    text-align: center;
}

.connectBox text {
    margin-left: 20px;
    font-family: Arvo;
}

.officeHours h4 {
    color: #F5EDA8;
    font-family: Arvo;
    font-size: 17.5px;
    margin-left: 10px;
    margin-right: 10px;
}

    // - - SEND MESSAGE - - //

.careerSearchTxt a {
    color: #F5EDA8 !important; 
}

.sendMessage h5 {
    font-family: Arvo;
    margin-top: 25px;
    color: #F5EDA8;
}

.sendMessage textarea {
    width: 500px;
    margin-top: 20px;
    border-radius: 8px;
    outline: none;
    height: 150px;
    padding: 10px;
    background-color: #F5EDA8;
    color:  #08645B;
    font-family: Arvo;
}

.sendMessage button {
    height: 45px;
    border: 2px solid #F5EDA8;
    background-color: #F5EDA8; 
    color: #08645B;
    font-family: Varela Round;
    border-radius: 10px;
    width: 160px; 
    margin-top: 20px;
}

.sendMessage button:hover {
    background-color: #08645B;
    color: #F5EDA8; 
    border: 2px solid #F5EDA8;
}

.messageSent img {
    width: 200px;
    border: 0px solid transparent !important;
}

.messageSent h6 {
    color: #F5EDA8;
    font-family: Arvo;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 20.5px;
}

.messageSent button {
    height: 45px;
    border: 2px solid #F5EDA8;
    background-color: #F5EDA8; 
    color: #08645B;
    font-family: Varela Round;
    border-radius: 10px;
    width: 160px; 
    margin-top: 20px;
    margin-bottom: 35px;
}

.messageSent button:hover {
    background-color: #08645B;
    color: #F5EDA8; 
    border: 2px solid #F5EDA8;
}



.backBtn {
    margin-bottom: 35px;
}

@media screen and (max-width: 600px) {

    // - - HEADER - - //

    .header {
        text-align: center;
        margin-top: 25.75%;
    }
    
    .header img {
        width: 100%;
    }

    .header button {
        width: 225px;
        height: 63.5px;
        border-radius: 14px !important;
        background-color: #F5EDA8;
        margin-top: 35px;
        color: #08645B;
        font-family: Quicksand;
        font-size: 17.5px;
        border 3px solid #ff8447;
    }

        // - - MAIN PAGE = = //

    .mainPage {
        text-align: center;
    }
    
    
    .mainPage img {
        margin-top: 5%;
        width: 200px;
        border-radius: 7px;
        border: 5px solid #FF8847;
    }
    
    .mainPage h2 {
        margin-top: 4.5%;
        color: #F5EDA8;
        font-family: Arvo;
    }


        // - - LET'S CONNECT - - //

    .letsConnect {
        text-align: center;
        margin-top: 35px;
        margin-left: 15%;
        margin-right: 15%;
        border-bottom: 0.5px solid #FF8847;
    }
    
    .linkedin {
        margin-top: 10px !important;
        width: 50px !important;
        border: 0px solid transparent !important;
        margin-bottom: 10px;
    }
    
    .connectBox {
        color: #F5EDA8;
        text-align: center;
    }
    
    .connectBox text {
        margin-left: 20px;
        font-family: Arvo;
    }
    
    .officeHours h4 {
        color: #F5EDA8;
        font-family: Arvo;
        font-size: 17.5px;
        margin-left: 10px;
        margin-right: 10px;
    }



    // - - SEND MESSAGE - - //

    .sendMessage textarea {
        width: 85%;
        margin-top: 20px;
        border-radius: 8px;
        outline: none;
        height: 150px;
        padding: 10px;
        background-color: #F5EDA8;
        color:  #08645B;
        font-family: Arvo;
    }


    // - - MESSAGE SENT - - //

    .messageSent img {
        width: 250px;
    }


}

`

export default class Resource extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userEmail: "",
            workInProgress: false,
            resourcePage: true,
            resourceInfo: true,
            showSendMessage: false,
            name: "",
            profilePic: "",
            sendMsgErr: "Send a quick message",
            message: "",
            currUsername: ""
        }
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userEmail: user.email})
            } else {
                this.setState({user: null})
            }
        })
    }

    componentDidMount () {
        this.authListener()
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userEmail: user.email})
                fire.firestore().collection("allUsers")
                .doc(user.email).get().then(doc => {
                    if (doc.exists) {
                        const data = doc.data().username
                        this.setState({
                            currUsername: data
                        })
                    }
                })
                
            } else {
                this.setState({user:null})
            }
        })
    }

    getUserData = (currentUser) => {
        fire.firestore().collection("allUsernames")
        .doc(currentUser).get().then(doc => {
            if (doc.exists) {
                this.setState({
                    name: doc.data().name,
                    profilePic: doc.data().profilePic
                })
            }
        })
    }  
    
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.id] : event.target.value
        })
    }


    clickSendMessage = () => {
        this.setState({
            resourceInfo: false,
            showSendMessage: true
        })
    }



    sendMessage = () => {

        class Message {
            constructor (sender, timeSent, recipient, conversation, proPic) {
                this.sender = sender;
                this.timeSent = timeSent
                this.recipient = recipient;
                this.conversation = conversation;
                this.proPic = proPic;
            }
            toString() {
                return this.sender + ', ' 
                + this.timeSent + ', ' 
                + this.recipient + ', ' 
                + this.conversation + ', '
                + this.proPic
            }
        }
                // Firestore data converter
        var messageConverter = {
            toFirestore: function(message) {
                return {
                    sender: message.sender,
                    timeSent: message.timeSent,
                    recipient: message.recipient,
                    conversation: message.conversation,
                    proPic: message.proPic
                    };
            },
            fromFirestore: function(snapshot, options){
                const data = snapshot.data(options);
                return new Message(data.sender, data.timeSent, 
                    data.recipient, data.conversation,
                    data.proPic);
            }
        };


        if (!this.state.message == "") {
            this.setState({
                showMessageSent: true,
                showSendMessage: false
            })
            fire.firestore().collection("allUsers").doc(this.props.email)
            .collection("messages").withConverter(messageConverter).add(
                new Message(
                    this.state.currUsername, 
                    new Date(),
                    this.props.username,
                    this.state.message,
                    this.props.profilePic)
            )
        } else {
            this.setState({
                sendMsgErr: "We can't send empty messages 😩"
            })
        }
    }

    backToResourceInfo = () => {
        this.setState({
            showMessageSent: false,
            showSendMessage: false,
            resourceInfo: true
        })
    }

    render() {

        return(
            <Styles>
                <Helmet>
                    <style>{'body { background-color: #08645B; }'}</style>
                </Helmet>
                {/* <NavbarTool/> */}
                {this.state.workInProgress && 
                    <div className="header">
                        <div className="userImg">
                        <img src="assets/resource.png"/></div><br/>
                        <button
                        onClick={event => window.location.href="/"}
                        ><b>Back to Home</b></button>
                    </div>
                }
                {this.state.resourcePage && 
                    <div className="mainPage">
                        <img src={this.props.profilePic}/>
                        <h2>{this.props.name}</h2>
                        <div className="letsConnect"></div>
                        {this.state.resourceInfo && 
                        <div>
                            <table className="connectBox">
                                <tr> 
                                    <td><img className="linkedin" src="assets/messageMe5.png"/>
                                    </td> 
                                    <td>
                                        <tr className="careerSearchTxt"> 
                                        <td>
                                            <text
                                            onClick={this.clickSendMessage}
                                            ><b><a href="javascript:void(0);">Send me a Message</a></b></text>
                                        </td></tr>
                                    </td>
                                </tr>       
                                <tr> 
                                    <td><img className="linkedin" src="assets/linkedin.png"/>
                                    </td> 
                                    <td>
                                        <tr className="careerSearchTxt"> 
                                        <td>
                                            <text><b>Find me on LinkedIn</b></text>
                                        </td></tr>
                                    </td>
                                </tr>
                                <tr> 
                                    <td><img className="linkedin" src="assets/myOfficeHours2.png"/>
                                    </td> 
                                    <td>
                                        <tr className="careerSearchTxt"> 
                                        <td>
                                            <text><b>Office Hours</b></text>
                                        </td></tr>
                                    </td>
                                </tr>           
                            </table>
                            <table className="officeHours">
                                <tr> 
                                    <td><h4><b>Tue. July 6th</b></h4>
                                    </td> 
                                    <td>
                                        <tr className="careerSearchTxt"> 
                                        <td>
                                            <h4><b>10:00 - 10:30 AM</b></h4>
                                        </td></tr>
                                    </td>
                                </tr>  
                                <tr> 
                                    <td><h4><b>Fri. July 16th</b></h4>
                                    </td> 
                                    <td>
                                        <tr className="careerSearchTxt"> 
                                        <td>
                                            <h4><b>2:00 - 2:45 PM</b></h4>
                                        </td></tr>
                                    </td>
                                </tr>        
                            </table>
                        </div>
                        }   
                        {this.state.showSendMessage && 
                            <div className="sendMessage">
                                <h5>{this.state.sendMsgErr}</h5>
                                <textarea
                                id="message"
                                value={this.state.message}
                                onChange={this.handleChange}
                                /> <br/>
                                <button
                                onClick={this.sendMessage}
                                >Send</button> <br/>
                                <button
                                className="backBtn"
                                onClick={this.backToResourceInfo}
                                >Back</button>
                            </div>
                        }
                        {this.state.showMessageSent && 
                            <div className="messageSent">
                                <img className="messageSentImg" src="assets/messageSent2.gif"/> <br/>
                                <h6>Your message has been sent!</h6>
                                <button
                                onClick={this.backToResourceInfo}
                                >Back</button>
                            </div>
                        }
                    </div>
                }
                
            </Styles>
        )
    }
}