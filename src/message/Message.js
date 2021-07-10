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

    // - - MESSAGES  - - //


.msgRow:after {
    content: "";
    display: table;
    clear: both;
}

.msgColAll {
    float: left;
    width: 40%;
    text-align: center;
}

.msgColOne {
    float: left; 
    width: 60%;
    text-align: center;
}




`

export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            userEmail: "",
            myMessages: []
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
        class Message {
            constructor (sender, timeSent, recipient, conversation ) {
                this.sender = sender;
                this.timeSent = timeSent
                this.recipient = recipient;
                this.conversation = conversation;
            }
            toString() {
                return this.sender + ', ' 
                + this.timeSent + ', ' 
                + this.recipient + ', ' 
                + this.conversation
            }
        }
                // Firestore data converter
        var messageConverter = {
            toFirestore: function(message) {
                return {
                    sender: message.sender,
                    timeSent: message.timeSent,
                    recipient: message.recipient,
                    conversation: message.conversation
                    };
            },
            fromFirestore: function(snapshot, options){
                const data = snapshot.data(options);
                return new Message(data.sender, data.timeSent, 
                    data.recipient, data.conversation);
            }
        };

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userEmail: user.email})
                fire.firestore().collection("allUsers").doc(user.email)
                .collection("messages").withConverter(messageConverter)
                .get().then(qs => {
                    const data = qs.docs.map(doc => doc.data())
                    this.setState({
                        myMessages: data
                    })
                })
            } else {
                this.setState({user: null})
            }
        })
    }

    renderMessages = () => {
        if (!this.state.myMessages.length == 0) {
            return this.state.myMessages.map((messages) => {
                var { sender, timeSent, recipient, conversation } = messages


                return(
                    <div>
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
                )
            })
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
                <div className="msgRow">
                    <div className="msgColAll">
                        <h2>Messages</h2>
                    </div>
                    <div className="msgColOne">
                        <h2>Message</h2>
                    </div>
                </div>
            </Styles>
        )
    }
}