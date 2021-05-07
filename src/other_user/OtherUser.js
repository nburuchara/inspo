import React, {Component} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'


const Styles = styled.div `

        // - - PROFILE - - //

    .profile {
        // margin-right: 27.5px;
    }

    .profile img {
        margin-top: 5%;
        width: 175px;
        border-radius: 10px;
        border: 3px solid #FF8447;
    }

    .profile h2 {
        font-family: Quicksand;
        margin-top: 3%;
    }

    .profile h6 {
        font-family: Nunito;
    }

    .profile h5 {
        font-family: Nunito;
        font-size: 18px;
    }

    .profile button {
        
    }

    .profile label {
        font-size: 18px;
        font-family: Quicksand;
        margin-bottom: 20px;
    }

    .country {
        width: 70px !important;
        margin-top: 0px !important;
        margin-right: 10px !important;
        // margin-bottom: 20px !important;
        border: 3px solid transparent !important;
    }


    .profileInfo {
        text-align: center;
    }

        // - - MESSAGE BUTTON - - //

    .messageBtn {

    }

    .messageBtn button {
        margin-top: 1%;
        background-color: #FF8447;
        color: white;
        font-family: Quicksand;
        height: 45px;
        width: 200px;
        border-radius: 8px;
        border: 2px solid #FF8447;
        margin-bottom: 1.5%;
    }

        // - - MESSAGE - - //

    .message {

    }

    .message textarea {
        width: 40%;
        margin-bottom: 5px;
        outline: none;
        border-radius: 7px;
        border: 0.2px solid black;
        height: 75px;
        padding: 4px;
        resize:none;
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
    }

        // - - MY VIDEOS - - //

    .myVideos {
        margin-left: 0% !important;
    }
        
    .myVideos h5 {
        font-size: 22.5px;
    }

        // - - SINGLE VIDEO - - //

    .oneVideo {
        margin-top: 1%;
    }

    .oneVideo video {
        width: 340px;
        height: 240px;
        border-radius: 8px;
        border: 3px solid #D6C9C7;
    }

    .oneVideo h5 {
       font-family: Overpass;
       color: #FF8447;
       font-family: 25px;
    }

    .oneVideo p {
        ont-family: Quicksand;
        color: #000;
        text-align: justify center;
        margin-left: 10%;
        margin-right: 10%;
    }




    @media screen and (max-width: 600px) {

            // - - PROFILE - - //

        .profile button {
            height: 45px;
            border: 2px solid #FF8447;
            background-color: white;
            color: black;
            font-family: Quicksand;
            width: 70px;
            border-radius: 8px;
            width: 150px;
            margin-top: 5%;
        }

        .profile h5 {
            margin-left: 10%;
            margin-right: 5%;
            text-align: justify;
            font-family: Nunito;
            font-size: 15px;
        }

            // - - MY VIDEOS - - //

        .myVideos {
            margin-left: 0% !important;
        }
            
        .myVideos h5 {
            text-align: center;
            font-size: 22.5px;
            margin-left: 0px;
            margin-right: 0px;
        }


            // - - MESSAGE BUTTON - - //

        .messageBtn {
    
        }
    
        .messageBtn button {
            margin-top: 1%;
            background-color: #FF8447;
            color: white;
            font-family: Quicksand;
            height: 50px;
            width: 220px;
            border-radius: 8px;
            border: 2px solid #FF8447;
            margin-bottom: 2%;
        }
    }


`

export default class OtherUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileInfo: [],
            clickedUser: "",
            notFollowing: "Follow",
            notFollowingBg: "white",
            notFollowingTxt: "black",
            followingBg: "#FF8447",
            folllowingTxt: "white",
            userVideos: [],
            showVideos : true,
            showMessage : false,
            messageSent: false,
            userEmail: "",
            userName: ""
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

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userEmail: user.email})
                fire.firestore().collection("allUsernames")
                .where('email', '==', this.state.userEmail)
                .get().then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data().username)
                    this.setState({userName: data})
                    console.log(`username is: ${this.state.userName}`)
                })
                fire.firestore().collection("allUsers")
                .doc(this.state.userEmail).collection("following")
                .get().then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data().username)
                    console.log(data)
                    //* Set Following Button if user is following:
                    if (data.includes(this.props.username)) {
                        this.setState({
                            notFollowingBg: "#FF8447",
                            notFollowingTxt: "white",
                            notFollowing: "Following"
                        })
                    } else {
                        this.setState({
                        notFollowingBg: "white",
                        notFollowingTxt: "black",
                        notFollowing: "Follow"
                    })
                    }
                })
            } else {
                this.setState({user:null})
            }
        })
        setTimeout (() => {
            fire.firestore().collection("allUsers").doc(this.props.email)
            .collection("videos").withConverter(videoConverter)
            .get().then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data())
                console.log(data)
                this.setState({
                    userVideos: data
                })
            })
        }, 1000)

        // fire.firestore().collection("wassup")
        // .where('username', '==', this.props.username)
        // .get().then(querySnapshot => {
        //     querySnapshot.forEach(doc => {
        //         this.setState({
        //             userVideos: doc.data().videos
        //         })
        //     })
        // })
    }

    renderVideos = () => {
        // for (var i = 0; i < this.state.userVideos.length();i++) {
        //     this.state.userVideos.map(video => { 
        //         return(
        //             <div className="oneVideo col md-4">
        //                 <video controls autoplay src={video.video[i]} type="video/mp4"/>
        //                 <h5><b>{video.title [i]}</b></h5>
        //                 <p>{video.description [i]}</p>
        //             </div>
        //         )
        //     })
        // }
    }


    followBtnClicked = () => {
        console.log(this.state.userName)
            //* Change follow color button
        if (this.state.notFollowingBg == "white") {
            fire.firestore().collection("allUsers")
            .doc(this.state.userEmail).collection("following")
            .add({
                username: this.props.username,
            })
            this.setState({
                notFollowingBg: "#FF8447",
                notFollowingTxt: "white",
                notFollowing: "Following"
            })
        } else {
            var unfollowProfile = fire.firestore().collection("allUsers")
            .doc(this.state.userEmail).collection("following")
            .where('username', '==', this.props.username)
            unfollowProfile.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.delete()
                })
            })
            this.setState({
                notFollowingBg: "white",
                notFollowingTxt: "black",
                notFollowing: "Follow"
            })
        }
            //* Add username to person's following
    }

    switchToMessage = () => {
        this.setState({
            showVideos: false,
            showMessage: true
        })
    }
    

    render () {

        let followBtn = {
            height: "45px",
            border: "2px solid #FF8447",
            backgroundColor: this.state.notFollowingBg,
            color: this.state.notFollowingTxt,
            fontFamily: "Quicksand",
            width: "70px",
            borderRadius: "8px",
            width: "150px",
            marginTop: "2%"
        }
        
        const videos = this.state.userVideos.map(video => { 
            return(
                <div className="oneVideo col md-4">
                    <video controls autoplay src={video.video} type="video/mp4"/>
                    <h5><b>{video.title}</b></h5>
                    <p>{video.description}</p>
                </div>
            )
        })

        return(
            <Styles>
                <div className="profile">
                    <img src={this.props.profilePic}/>
                    <br/>
                    <button 
                    style = {followBtn}
                    onClick={this.followBtnClicked}
                    ><b>{this.state.notFollowing}</b></button>
                    <h2>{this.props.name}</h2>
                    <h6>@{this.props.username}</h6>
                    <img className="country" src={this.props.nationality}/>
                    <label>|   {this.props.nationalityTxt}</label>
                    <br/>
                    {/* <p>📍 Northfield, MN</p> */}
                    <div className="profileInfo">
                        <h5><b>🎓 {this.props.education}</b></h5>
                        <h5><b>🚀 {this.props.career}</b></h5>
                        <h5><b>🗣 {this.props.topic1} | {this.props.topic2} | {this.props.topic3}</b></h5>
                    </div>
                    {/* <div className="messageBtn">
                        <button
                        onClick={this.switchToMessage}
                        ><b>Send Message</b></button>
                    </div> */}
                    {this.state.showVideos && 
                        <div className="myVideos row">
                            {videos}
                        </div>
                    }
                    {this.state.showMessage && 
                        <div className="message">
                            <textarea
                            />
                            <br/>
                            <button>Send</button>
                            <button>Cancel</button>
                        </div>
                    }
                    {this.state.messageSent && 
                        <div>

                        </div>
                    }
                </div>
            </Styles>
        )
    }
}