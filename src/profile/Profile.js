import React, {Component} from 'react'
import fire from 'firebase'
import styled from 'styled-components'
import NavbarTool from '../navbar/Navbar'
import UploadPic from '../profile/UploadPic'
import {Helmet} from 'react-helmet';
import DateTimePicker from 'react-datetime-picker';


const Styles = styled.div `

        // - - PROFILE - - //
    
    .profile {
        color: #F5EDA8;
    }


    .profile img {
        margin-top: 2%;
        width: 200px;
        border-radius: 7px;
        border: 5px solid #FF8847;
    }

    .profile h2 {
        font-family: Quicksand;
        margin-top: 1%;
    }

    .profile h3 {
        margin-top: 25px;
        font-family: Quicksand;
        color: #FF8847;
    }

    .profile h6 {
        font-family: Nunito;
    }

    .profile h5 {
        font-family: Nunito;
    }

    .profile button {
        border: 2px solid #F5EDA8;
        background-color: #F5EDA8;
        color: white;
        font-family: Avro;
        width: 200px;
        border-radius: 8px;
        margin-top: 15px;
        margin-bottom: 25px;
    }

    // .editBtn {
    //     margin-bottom: 0px !important;
    //     border: 2px solid #F5EDA8 !important;
    //     background-color: #08645B !important;
    //     color: #F5EDA8 !important;
    // }

    .profile label {
        font-size: 18px;
        font-family: Quicksand;
        margin-bottom: 20px;
    }

    .profile table {
        margin-left: auto;
        margin-right: auto;
    }

    .profileSection {
        margin-bottom: 0px;
    }
    

    .profileSection button {
        height: 45px;
        border: 2px solid #F5EDA8;
        background-color: #F5EDA8; 
        color: #08645B;
        font-family: Varela Round;
        border-radius: 10px;
        width: 160px; 
        margin-top: 30px;
    }


    .profileSection button:hover {
        background-color: #08645B;
        color: #F5EDA8; 
        border: 2px solid #F5EDA8;
    }

    .country {
        width: 70px !important;
        margin-top: 0px !important;
        margin-right: 10px !important;
        // margin-bottom: 20px !important;
        border: 3px solid transparent !important;
    }

    .profileInfo span {
        background-color: #000;
    }

        // - - LET'S CONNECT - - //

    .letsConnect {
        margin-top: 35px;
        margin-left: 20%;
        margin-right: 20%;
        border-bottom: 0.5px solid #F5EDA8;
    }

    .letsConnect2 {
        margin-top: 15px;
        margin-bottom: 0px;
        margin-left: 20%;
        margin-right: 20%;
        border-bottom: 0.5px solid #F5EDA8;
    }

    .videosHeader {
        color: #FF8847;
        font-family: Quicksand;
        margin-top: 20px;
        margin-bottom: 50px;
    }

    .linkedin {
        margin-top: 10px !important;
        width: 50px !important;
        border: 0px solid transparent !important;
        margin-bottom: 10px;
    }

    .connectBox {
        text-align: center;
    }

    .connectBox text {
        // margin-left: 20px;
        font-family: Arvo;
    }

    .officeHours h4 {
        font-family: Arvo;
        font-size: 17.5px;
        margin-left: 10px;
        margin-right: 10px;
    }

    // .privateLinkedin {
    //     text-align: center;
    //     width: 150px !important;
    //     background-color: #08645B !important;
    //     color: #F5EDA8 !important;
    //     margin-top: 0px !important;
    //     height: 30px !important;
    //     margin-bottom: 0px !important;
    // }

        // - - EDIT PROFILE - - //

    .editConnectMaster table {
        margin-left: auto;
        margin-right: auto;
    }

    .editConnectMaster text {
        color: #F5EDA8;
        font-family: Arvo;
        margin-left: 20px;
    }

    .editConnectMaster h6 {
        font-family: Arvo !important;
        font-size: 18px !important;
        color: #F5EDA8;
    }


    .editConnect button {
        border: 0px solid transparent;
        width: 30.5px;
        background-color: white;
        color: black;
        height: 39.5px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px !important;
        margin-bottom: 5px;
    }

    .editConnect button:hover {
        color: black;
        border: 0 solid transparent;
        background-color: #FF8847;
    }

    .officeStep1 {
        text-align: center;
        width: 150px !important;
        background-color: #08645B !important;
        color: #F5EDA8 !important;
        margin-top: 27.5px !important;
        height: 40px !important;
        margin-bottom: 20px !important;
    }

    .officeStepBack {
        text-align: center;
        width: 150px !important;
        background-color: #08645B !important;
        color: #F5EDA8 !important;
        margin-top: 40px !important;
        height: 40px !important;
        margin-bottom: 20px !important;
    }

    .editBtnOffice {
        margin-top: 0px !important;
    }

    .editMsgDiv {
        // margin-left: 25px;
    }

    .editText {
        // margin-left: 0px !important;
        // font-size: 14px !important;
        // margin-left: 25px !important;
    }

    .notPublic {
        color: #CACACA !important;
    }

        // - - DURATION - - //

    .duration p {
        margin-left: 10%;
        margin-right: 10%;
        font-size: 13px !important;
        color: #F5EDA8;
        font-family: Arvo;
    }

        // - - MEETING LINK - - //

    .meetingLink text {
        margin-left: 10%;
        margin-right: 10%;
        font-size: 13px !important;
        color: #F5EDA8;
        font-family: Arvo;
        margin-bottom: 15px !important;
    }

    .meetingLink h5 {
        margin-top: 15px;
        color: #F5EDA8;
        font-family: Arvo;
        margin-bottom: 10px;
    }

    .meetingLink p {
        margin-top: 20px;
        color: #F5EDA8;
        font-family: Arvo;
    }

    .meetingLink input {
        height: 35.5px;
        border-radius: 8px;
        outline: none;
        border: 2px solid transparent;
        width: 287.5px;
        padding: 5px;
    }

    .codeOrPassword {
        text-align: center;
    }


        // - - MY VIDEOS - - //
        
    .myVideos {
        width: 
    }

        // - - SINGLE VIDEO - - //

    .oneVideo {
        // margin-top: 1%;
        // background-color: #00;
        // border-top: 3.5px solid #FF8847;
    }

    .oneVideo video {
        width: 340px;
        height: 240px;
        border-radius: 8px;
        border: 3px solid #F5EDA8;
    }

    .oneVideo h5 {
       font-family: Quicksand !important;
       color: #F5EDA8 !important; 
    }

    .oneVideo p {
        font-family: Quicksand;
        color: #F5EDA8;
        text-align: justify center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .profileVideo {
        background-color: 
    }

        // - - CHANGE PROFILE PIC - - //

    .profilePic {

    }

    .profilePic h4 {
        font-family: inspoSub2;
        font-size: 55px;
    }


    @media screen and (max-width: 600px) {


    }


`

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            profileInfo: [],
            myVideos: [],
            userEmail: "",
            username: "",
            messageUpdate: "Disable incoming messages",
            messageSetting: "Currently not receiving messages",
            picExists: false,
            tempPhotos: [],
            profilePage: true,
            changePic: false,
            editProfile: false,
            checked: false,
            connectWithMe: true,
            connectEdit: false,
            showLinkedin: true,
            hideLinkedin: false,
            showMessage: true,
            hideMessage: false,
            showOffice: false,
            hideOffice: true,
            showHours: true,
            showTimeChoice: true,
            showMeetingChoice: false,
            showNextOfficeBtn: true,
            showMeetingDuration: false,
            showMeetingLink: false,
            showVerifyMeeting: false,
            officeHourDate: "",
            pLinkedinBg: "#08645B",
            pLinkedinTxt: "#F5EDA8",
            privateLinkedinTxt: "Hide",
            pMessageBg: "#08645B",
            pMessageTxt: "#F5EDA8",
            privateMessageTxt: "Close inbox",
            officeHr1: "",
            officeHr2: "",
            officeHr3: "",
            officeHr4: "",
            officeHr5: "",
            officeErrMsg: "Set a date and time",
            meetingSelected: "",
            durationSelected: "",
            meetingLinkPlaceholder: "",
            meetingLink: "",
            zoomID: "",
            zoomPassword: ""
        }
    }
    
    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userEmail: user.email})
            } else {
                this.setState({user:null})
            }
        })
    }

    componentDidMount = () => {
        if (this.state.checked) {
            this.setState({
                messageSetting: "Currently not receiving messages"
            })
        } else {
            this.setState({
                messageSetting: "Send me a Message"
            })
        }
        this.authListener()
        class MyVideos {
            constructor(id, description, title, video) {
                this.id = id
                this.description = description
                this.title = title
                this.video = video
            }
            toString () {
                return this.id + ', ' +
                this.description + ', ' +
                this.title + ', ' +
                this.video
            }
        }
        var videoConverter = {
            toFirestore : function(video) {
                return {
                    id : video.id,
                    description: video.description,
                    title : video.title,
                    video: video.title
                }
            },
            fromFirestore : function(snapshot, options) {
                const data = snapshot.data(options)
                return new MyVideos(data.id, data.description, data.title, data.video)
            }
        }
        class UserProfile {
            constructor(name, nationality, nationalityTxt, latestPost, profilePic,
                education, career, topic1, topic2, topic3, username) {
                this.name = name
                this.nationality = nationality
                this.nationalityTxt = nationalityTxt
                this.latestPost = latestPost
                this.profilePic = profilePic
                this.education = education
                this.career = career
                this.topic1 = topic1
                this.topic2 = topic2
                this.topic3 = topic3
                this.username = username
            }
            toString () {
                return this.name + ', ' +
                this.nationality + ', ' +
                this.nationalityTxt + ', ' +
                this.latestPost + ', ' +
                this.profilePic + ', ' +
                this.education + ', ' +
                this.career + ', ' +
                this.topic1 + ', ' +
                this.topic2 + ', ' +
                this.topic3 + ', ' +
                this.username
            }
        }
        var profileConverter = {
            toFirestore : function(profile) {
                return {
                    name : profile.name,
                    nationality : profile.nationality,
                    nationalityTxt: profile.nationalityTxt,
                    latestPost : profile.latestPost,
                    profilePic : profile.profilePic,
                    education : profile.education,
                    career : profile.career,
                    topic1 : profile.topic1,
                    topic2 : profile.topic2,
                    topic3 : profile.topic3,
                    username : profile.username
                }
            },
            fromFirestore : function(snapshot, options) {
                const data = snapshot.data(options)
                return new UserProfile(data.name, data.nationality, 
                    data.nationalityTxt, data.latestPost, 
                    data.profilePic, data.education, 
                    data.career,data.topic1, 
                    data.topic2,data.topic3,
                    data.username)
            }
        }
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userEmail: user.email})
                fire.firestore().collection("allUsernames")
                .where('email', '==', this.state.userEmail)
                .withConverter(profileConverter)
                .get().then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data())
                    const userName = querySnapshot.docs.map(doc => doc.data().username)
                    this.setState({
                        profileInfo: data,
                        username: userName
                    }) 
                })

                fire.firestore().collection("temporaryPics")
                .get().then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data())
                    this.setState({
                        tempPhotos: data
                    })
                    let shuffled = data
                    .sort( () => .5 - Math.random() )
                })

                fire.firestore().collection("allUsers").doc(this.state.userEmail)
                .collection("videos").withConverter(videoConverter)
                .get().then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data())
                    this.setState({
                        myVideos: data
                    })
                })
            } else {
                this.setState({user:null})
            }
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    changeProfilePic = () => {
        this.state.profileInfo.map(detail => {
            if (detail.profilePic == "") {
                this.setState({
                    profilePage: false,
                    changePic: true
                })
            } else {
            }
        })
    }

    onOfficeHourChange = (officeHourDate) => {
        this.setState({officeHourDate})
    }

    editConnect = () => {
        this.setState({
            connectWithMe: false,
            connectEdit: true
        })
    }

    backToConnectView = () => {
        this.setState({
            connectWithMe: true,
            connectEdit: false,
            showOffice: false,
            hideOffice: true,
            // showNextOfficeBtn: true
        })
    }

    removeLinkedin = () => {
        if (this.state.pLinkedinTxt == "#F5EDA8") {
            this.setState({
                showLinkedin: false,
                hideLinkedin: true,
                pLinkedinBg: "#F5EDA8",
                pLinkedinTxt: "#08645B",
                privateLinkedinTxt: "Make Public"
            })
        } else {
            this.setState({
                showLinkedin: true,
                hideLinkedin: false,
                pLinkedinBg: "#08645B",
                pLinkedinTxt: "#F5EDA8",
                privateLinkedinTxt: "Make Private"
            })
        }
    }


    removeMessage = () => {
        if (this.state.pMessageTxt == "#F5EDA8") {
            this.setState({
                showMessage: false,
                hideMessage: true,
                pMessageTxt: "#08645B",
                pMessageBg: "#F5EDA8",
                privateMessageTxt: "Open inbox"
            })
        } else {
            this.setState({
                showMessage: true,
                hideMessage: false,
                pMessageTxt: "#F5EDA8",
                pMessageBg: "#08645B",
                privateMessageTxt: "Close inbox"
            })
        }
    }

    completeOffice1 = () => {
        if (this.state.officeHourDate) {
            this.setState({
                showTimeChoice: false,
                showMeetingDuration: true,
                officeErrMsg: "Select a duration for your office hours",
                showNextOfficeBtn: false
            })   
        } else {
            this.setState({
                officeErrMsg: "Oops, something wasn't input correctly",
            })
        }
    }

    backToCompleteOffice1 = () => {
        this.setState({
            showMeetingDuration: false,
            showTimeChoice: true,
            officeErrMsg: "Select a time and date",
            showNextOfficeBtn: true
        })
    }

    backToCompleteOffice2 = () => {
        this.setState({
            showMeetingChoice: false,
            showMeetingDuration: true,
            officeErrMsg: "Select a duration for your office hours"
        })
    }

    backToCompleteOffice3 = () => {
        if (this.state.meetingSelected === "Zoom"){
            this.setState({
                showMeetingLink: false,
                showMeetingChoice: true,
                showZoomDetails: false
            })
        } else {
            this.setState({
                showMeetingLink: false,
                showMeetingChoice: true
            })
        }
    }

    duration15 = () => {
        this.setState({
            durationSelected: "15 min",
            showMeetingDuration: false,
            showMeetingChoice: true,
            officeErrMsg: "Select a platform to host your office hours"
        })
    }

    duration20 = () => {
        this.setState({
            durationSelected: "20 min",
            showMeetingDuration: false,
            showMeetingChoice: true,
            officeErrMsg: "Select a platform to host your office hours"
        })
    }

    duration30 = () => {
        this.setState({
            durationSelected: "30 min",
            showMeetingDuration: false,
            showMeetingChoice: true,
            officeErrMsg: "Select a platform to host your office hours"
        })
    }

    duration60 = () => {
        this.setState({
            durationSelected: "60 min",
            showMeetingDuration: false,
            showMeetingChoice: true,
            officeErrMsg: "Select a platform to host your office hours"
        })
    }

    selectedMeets = () => {
        this.setState({
            showMeetingChoice: false,
            showMeetingLink: true,
            meetingSelected: "Google Meets",
            meetingLinkPlaceholder: "https://meet.google.com/abc-def-ghi"
        })
    }

    selectedZoom = () => {
        this.setState({
            showMeetingChoice: false,
            showMeetingLink: true,
            showZoomDetails: true,
            meetingSelected: "Zoom",
            meetingLinkPlaceholder:"e.g. https://us04web.zoom.us/j/1234567890?pwd=abCdEfghIJKlmNOPqRSTUvwxY0zABc12"
        })
    }

    verifyDetails = () => {
        this.setState({
            showMeetingLink: false,
            showVerifyMeeting: true
        })
    }


    renderProfile = () => {
        return this.state.profileInfo.map((profiles) => {
            var {name, nationality, nationalityTxt, profilePic,
            education, career, topic1, topic2, topic3, username} = profiles
            // this.state.tempPhotos.map(pic => {
            // })
            
            if (profilePic == "") {
                this.state.tempPhotos.map(pic => {
                    profilePic = pic.profilePic
                })
            }  
    
            const linkedinPrivate = {
                color: this.state.pLinkedinTxt,
                backgroundColor: this.state.pLinkedinBg,
                height: "35px",
                width: "150px",
                marginTop: "0px",
                marginBottom: "0px"
            }

            const messagePrivate = {
                color: this.state.pMessageTxt,
                backgroundColor: this.state.pMessageBg,
                height: "35px",
                width: "150px",
                marginTop: "0px",
                marginBottom: "0px"
            }


            return (
                <div>
                    <div className="profile">
                            <img onClick={this.changeProfilePic} src={profilePic}/> <br/>
                            <button
                            className="editBtn"
                            ><b>Edit Profile</b></button>
                            <h2><b>{name}</b></h2>
                            <h6>@{username}</h6>
                            <img className="country" src={nationality}/>
                            <label>|   <b>{nationalityTxt}</b></label>
                            <br/>
                            {/* <p>📍 Northfield, MN</p> */}
                            <div className="profileInfo">
                                <h5><b>🎓 {education}</b></h5>
                                {/* <button>Edit</button> */}
                                <h5><b>🚀 {career}</b></h5>
                                {/* <button>Edit</button> */}
                                <h5><b>🗣 {topic1} | {topic2} | {topic3}</b></h5>
                                {/* <button>Edit</button> */}
                            </div>
                            <div className="letsConnect"></div>
                    </div>
                    {this.state.connectWithMe && 
                        <div className="profile">
                            <h3><u><b>Let's Connect</b></u></h3>
                                <table className="connectBox">
                                    {this.state.showMessage && 
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
                                    }
                                    {this.state.hideMessage && 
                                       <tr> 
                                            <td><img className="linkedin" src="assets/messageHide.png"/>
                                            </td> 
                                            <td>
                                                <tr className="careerSearchTxt"> 
                                                <td>
                                                    <text className="notPublic"><b>Temporarily closed</b></text>
                                                </td></tr>
                                            </td>
                                        </tr>  
                                    }
                                     <tr> 
                                            <td>
                                            </td> 
                                            <td>
                                                <tr className="careerSearchTxt"> 
                                                <td>
                                                    <button 
                                                    style={messagePrivate}
                                                    onClick={this.removeMessage}
                                                    className="privateLinkedin"
                                                    ><b>{this.state.privateMessageTxt}</b></button>
                                                </td></tr>
                                            </td>
                                        </tr>
                                    {this.state.showLinkedin && 
                                        <tr> 
                                            <td><img className="linkedin" src="assets/linkedin.png"/>
                                            </td> 
                                            <td>
                                                <tr className="careerSearchTxt"> 
                                                <td>
                                                    <text><b>Find me on LinkedIn</b></text><br/>
                                                </td></tr>
                                            </td>
                                        </tr>
                                    }     
                                    {this.state.hideLinkedin && 
                                        <tr> 
                                            <td><img className="linkedin" src="assets/linkedinHide.png"/>
                                            </td> 
                                            <td>
                                                <tr className="careerSearchTxt"> 
                                                <td>
                                                    <text className="notPublic"><b>Not public</b></text><br/>
                                                </td></tr>
                                            </td>
                                        </tr>
                                    }     
                                    <tr> 
                                        <td>
                                        </td> 
                                        <td>
                                            <tr className="careerSearchTxt"> 
                                            <td>
                                                <button
                                                style={linkedinPrivate} 
                                                onClick={this.removeLinkedin}
                                                className="privateLinkedin"
                                                ><b>{this.state.privateLinkedinTxt}</b></button>
                                            </td></tr>
                                        </td>
                                    </tr>
                                    {this.state.showOffice && 
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
                                    }
                                    {this.state.hideOffice && 
                                        <tr> 
                                            <td><img className="linkedin" src="assets/officeHide.png"/>
                                            </td> 
                                            <td>
                                                <tr className="careerSearchTxt"> 
                                                <td>
                                                    <text><b>Office Hours</b></text>
                                                </td></tr>
                                            </td>
                                        </tr> 
                                    }       
                                </table>
                            <button
                            className="editBtnOffice"
                            onClick={this.editConnect}
                            ><b>Add</b></button>
                            {this.state.showHours && 
                                <table className="officeHours">
                                    <tr> 
                                        <td><h4><b></b></h4>
                                        </td> 
                                        <td>
                                            <tr className="careerSearchTxt"> 
                                            <td>
                                                <h4><b>{this.state.officeHr1}</b></h4>
                                            </td></tr>
                                        </td>
                                    </tr>  
                                    <tr> 
                                        <td><h4><b></b></h4>
                                        </td> 
                                        <td>
                                            <tr className="careerSearchTxt"> 
                                            <td>
                                                <h4><b>{this.state.officeHr2}</b></h4>
                                            </td></tr>
                                        </td>
                                    </tr>    
                                    <tr> 
                                        <td><h4><b></b></h4>
                                        </td> 
                                        <td>
                                            <tr className="careerSearchTxt"> 
                                            <td>
                                                <h4><b>{this.state.officeHr3}</b></h4>
                                            </td></tr>
                                        </td>
                                    </tr>  
                                    <tr> 
                                        <td><h4><b></b></h4>
                                        </td> 
                                        <td>
                                            <tr className="careerSearchTxt"> 
                                            <td>
                                                <h4><b>{this.state.officeHr4}</b></h4>
                                            </td></tr>
                                        </td>
                                    </tr>  
                                    <tr> 
                                        <td><h4><b></b></h4>
                                        </td> 
                                        <td>
                                            <tr className="careerSearchTxt"> 
                                            <td>
                                                <h4><b>{this.state.officeHr5}</b></h4>
                                            </td></tr>
                                        </td>
                                    </tr>      
                                </table>
                            }
                                
                        </div>
                    }
                    {this.state.connectEdit && 
                        <div className="editConnectMaster">
                            <button
                            onClick={this.backToConnectView}
                            ><b>Cancel</b></button>
                            <table>
                                <tr> 
                                    <td><img className="linkedin" src="assets/myOfficeHours2.png"/>
                                    </td> 
                                    <td>
                                        <tr className="careerSearchTxt"> 
                                        <th>
                                            <text><b>Office Hours</b></text>
                                        </th></tr>
                                    </td>
                                </tr>    
                            </table>
                            {this.state.showTimeChoice && 
                                <div className="editConnect">
                                    <DateTimePicker
                                        onChange={this.onOfficeHourChange}
                                        value={this.state.officeHourDate}
                                    />
                                </div>
                            }
                            {this.state.showMeetingDuration && 
                                <div className="duration">
                                    <p>** The duration of the meeting is actually entirely up to you, <br/> 
                                        this just gives your attendees a rough idea of how long a meeting will be</p>
                                    <button
                                    onClick={this.duration15}
                                    >15 min</button> <br/>
                                    <button
                                    onClick={this.duration20}
                                    >20 min</button> <br/>
                                    <button
                                    onClick={this.duration30}
                                    >30 min</button> <br/>
                                    <button
                                    onClick={this.duration60}
                                    >Up to an hour</button> <br/>
                                    <button
                                    onClick={this.backToCompleteOffice1}
                                    className="officeStepBack"
                                    >Back</button>
                                </div>
                            }
                            {this.state.showMeetingChoice && 
                                <div>
                                    <button
                                    onClick={this.selectedZoom}
                                    >Zoom</button> <br/>
                                    <button
                                    onClick={this.selectedMeets}
                                    >Google Meets</button><br/>
                                    <button
                                    onClick={this.backToCompleteOffice2}
                                    className="officeStepBack"
                                    >Back</button>
                                </div>
                            }
                            {this.state.showNextOfficeBtn && 
                                <button
                                onClick={this.completeOffice1}
                                className="officeStep1">Next</button>
                            }
                            {this.state.showMeetingLink && 
                                <div className="meetingLink">
                                    <text>** Meeting details will only be made public to people that sign up for your office hours</text>
                                    <h5>Paste your {this.state.meetingSelected} meeting link here</h5>
                                    <input
                                    // onChange={this.handleChange}
                                    id="meetingLink"
                                    value={this.state.meetingLink}
                                    placeholder={this.state.meetingLinkPlaceholder}
                                    /> <br/>
                                    {this.state.showZoomDetails && 
                                        <div>
                                            <p>Or enter your meeting ID</p>
                                            <input
                                            // onChange={this.handleChange}
                                            id="zoomID"
                                            value={this.state.zoomID}
                                            placeholder="e.g. 123 456 7890"
                                            className="codeOrPassword"
                                            /> <br/>
                                            <p>Enter your meeting password (if applicable)</p>
                                            <input
                                            // onChange={this.handleChange}
                                            id="zoomPassword"
                                            value={this.state.zoomPassword}
                                            placeholder="e.g. 123456"
                                            className="codeOrPassword"
                                            /> <br/>
                                        </div>
                                    }
                                    <button
                                    onClick={this.verifyDetails}
                                    >Done</button> <br/>
                                    <button
                                    onClick={this.backToCompleteOffice3}
                                    className="officeStepBack"
                                    >Back</button>
                                </div>
                            }
                            <h6>{this.state.officeErrMsg}</h6>
                        </div>
                    }
                </div>  
            )
        })
    }

    
    

    render () {
        let videoHeaderStyle = {
            fontFamily: "Overpass",
            fontSize: "25px",
            color: "#FF8447"
        }
        const videos = this.state.myVideos.map(video => { 
            return(
                <div className="oneVideo col md-4">
                    <video controls autoplay src={video.video} type="video/mp4"/>
                    <h5 style={videoHeaderStyle}><b>{video.title}</b></h5>
                    <p>{video.description}</p>
                </div>
            )
        })
        return(
            <Styles>
                <Helmet>
                    <style>{'body { background-color: #08645B; }'}</style>
                </Helmet>
                <NavbarTool/>
                {this.state.profilePage && 
                 <div>
                      <div className="profileSection">
                          {this.renderProfile()}
                            {/* <button
                            onClick={event => window.location.href="/resources"}
                            >
                              <b>Resources</b>
                            </button> */}
                      </div>
                      <div className="letsConnect2"></div>
                      <h3 className="videosHeader"><u><b>Videos</b></u></h3>
                      <div className="myVideos row">
                          {videos}
                      </div>
                  </div>
                }
                {this.state.editProfile &&
                    <div className="editProfile">
                        
                    </div>
                }
                {this.state.changePic && 
                    <div className="profilePic">
                        <h4>Change Profile Pic</h4>
                        <UploadPic
                        passedUserName = {this.state.username}
                        />
                    </div>
                }
            </Styles>

        )
    }
}