import React, {Component} from 'react'
import styled from 'styled-components'
import fire from '../database/firebase'
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
}

`

export default class Resource extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userEmail: "",
            workInProgress: false,
            resourcePage: true,
            name: "",
            profilePic: ""
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
                console.log(this.props.username)
                // this.getUserData(this.props.userName)
                // fire.firestore().collection("allUsers").doc(user.email)
                // .collection("connections").doc("selectedResource")
                // .get().then((doc) => {
                //     if (doc.exists) {
                //         console.log(doc.data().username)
                //         this.getUserData(doc.data().username)
                //     } else {
                //         console.log("sorry bud, no data")
                //     }
                // })
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

    componentWillUpdate = () => {

    }

    render() {

    const list = {
        items: [
            {
                primaryText: 'Eric Hoffman',
                rightAvatar: <img src="assets/endOfPost.png" />,
            },
            {
                primaryText: 'Grace Ng',
                rightAvatar: <img src="assets/endOfPost.png" />,
            },
            {
                primaryText: 'Kerem Suer',
                rightAvatar: <img src="assets/endOfPost.png" />,
            },
            {
                primaryText: 'Raquel Parrado',
                rightAvatar: <img src="assets/endOfPost.png" />,
            },
            {
                primaryText: 'Write',
                rightAvatar: <img src="assets/endOfPost.png" />,
            },
        ],
    };
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
                        {/* <SpeedDial>
                            <BubbleList>
                                {list.items.map((item, index) => {
                                    return <BubbleListItem key={index} {...item} />;
                                })}
                            </BubbleList>
                        </SpeedDial> */}
                        <img src={this.props.profilePic}/>
                        <h2>{this.props.name}</h2>
                        <div className="letsConnect"></div>
                        <table className="connectBox">
                                <tr> 
                                    <td><img className="linkedin" src="assets/messageMe5.png"/>
                                    </td> 
                                    <td>
                                        <tr className="careerSearchTxt"> 
                                        <td>
                                            <text><b>Send me a Message</b></text>
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
            </Styles>
        )
    }
}