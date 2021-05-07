import React, {Component} from 'react'
import fire from 'firebase'
import styled from 'styled-components'
import NavbarTool from '../navbar/Navbar'
import UploadPic from '../profile/UploadPic'

const Styles = styled.div `

        // - - PROFILE - - //


    .profile img {
        margin-top: 10%;
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
    }

    .profile button {
        border: 2px solid #FF8447;
        background-color: #FF8447;
        color: white;
        font-family: Quicksand;
        width: 200px;
        border-radius: 8px;
        margin-top: 15px;
        margin-bottom: 25px;
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
        margin-
    }

        // - - MY VIDEOS - - //
        
    .myVideos {
        width: 
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
       font-family: Overpass !important;
       color: #45464;
       font-size: 25px;
    }

    .oneVideo p {
        font-family: Quicksand;
        color: #000;
        text-align: justify center;
        margin-left: 10%;
        margin-right: 10%;
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
            picExists: false,
            tempPhotos: [],
            profilePage: true,
            changePic: false
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
            }  else {
            }
            return(
                <div className="profile">
                    <img onClick={this.changeProfilePic} src={profilePic}/>
                    <h2>{name}</h2>
                    <h6>@{username}</h6>
                    <img className="country" src={nationality}/>
                    <label>|   {nationalityTxt}</label>
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
                    {/* <button
                    ><b>Tell Us What Content You Want To See</b></button> */}
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
                <NavbarTool/>
                {this.state.profilePage && 
                 <div>
                      <div>
                          {this.renderProfile()}
                      </div>
                      <div className="myVideos row">
                          {videos}
                      </div>
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