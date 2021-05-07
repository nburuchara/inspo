import React, {Component} from 'react'
import styled from 'styled-components'
import fire from '../database/firebase'
import NavbarTool from '../navbar/Navbar'
import OtherUser from '../other_user/OtherUser'
import SelectSearch from 'react-select-search';
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import detectZoom from 'detect-zoom';



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
}

.navContainer figcaption:hover {
    color: #FF8447;
}


    // - - HEADER - - //

.header {
    text-align: center;
    margin-top: 1%;
    margin-bottom: 3%;
}

.header h1 {
    font-family: inspoMain;
    font-size: 75px;
    margin-top: 3%;
}

.header img {
    width: 150px;
}

    // - - MAIN PAGE - - //


.mainCol:after {
    content: "";
    display:table;
    clear: both;
}

.mainRow {
    float: left;
    width: 33%;
    text-align: left;
}

    // - - MAIN FEED - - //



.profileRow label {
    margin-left: 15px;
    font-size: 20px;
    margin-right: 15px;
    font-family: Quicksand;
}

.profileCol h1 {
    font-family: Concert One;
    font-size: 27.5px;
}

.profileCol h5 {
    margin-top: 10px;
    font-family: Nunito;;
    font-size: 15px;
}

.profileCol h6 {
    font-family: Quicksand;
    // margin-bottom: 15%;
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

.profileCol button {
    margin-bottom: 15%;
    height: 45px;
    border: 2px solid #FF8447;
    background-color: #FF8447;
    color: white;
    font-family: Quicksand;
    border-radius: 8px;
    margin-right: 25px;
    width: 160px;
}

.userInfo div{
    text-align: left;
}

#proPic {
    width: 100px;
    border-radius: 10px;
    text-align: right;
    border: 3px solid #FF8447;
    aspect-ratio: 1 / 1;
    max-width: 90px;
    max-height: 120px;
    // margin-left: 30px;
    object-fit: cover;
    margin: auto;
}

#country {
    width: 45px;
    border-radius: 10px;
}

.latestVid {
    width: 640px;
    hegiht: 480px;
}

    // - - EMPTY FEED - - //

.emptyFeed {
    text-align: left;
}
.emptyFeed h1 {
    font-family: Quicksand;
    color: #FF8447;
}

    // - - SELECTED USER - - //

.selectedUser button {
    height: 40px;
    border: 2px solid #FF8447;
    background-color: #FF8447;
    color: white;
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
    border-bottom: 0.2px solid black;
    height: 40px;
    outline: none;
    margin-left: 30px;
    margin-right: 8px;
    width: 65%;
    padding: 4px;
    resize:none;
    font-family: 20px;
}

.dropdown textarea::placeholder {
    text-align: center;
    font-family: Quicksand;
}

.dropdown button {
    border: 2px solid #FF8447;
    border-radius: 8px;
    background-color: #FF8447;
    color: white;
    font-family: Quicksand;
    height: 45px;
    width: 110px;
}

    // - - USER CELL - - //

.userCell {
    margin-left: 30px;
    margin-bottom: 20px;
}

.userCell img {
    width: 100px;
    border-radius: 10px;
    text-align: right;
    border: 3px solid transparent;
    aspect-ratio: 1 / 1;
    max-width: 90px;
    max-height: 120px;
    // margin-left: 30px;
    object-fit: cover;
    margin: auto;
    margin-bottom: 25px;
}

.userCell label {
    font-family: Quicksand;
}

.userCellRowTxt p {
    // margin-top: 50%;
}

.searchUserInfo {
    font-family: Quicksand;
    font-size: 15px;
}



@media screen and (orientation:landscape) 
and (min-device-width: 319px) 
and (max-device-width: 480px) {

        // - - MAIN DISPLAY - - //
    .mainRow {
        width: 100%;
        margin-bottom: 10%;
    }
        // - - SEE PROFILE BUTTON - - //

    .profileCol button {
        // margin-bottom: 15%;
        margin-left: 10px;
        height: 45px;
        border: 2px solid #FF8447;
        background-color: #FF8447;
        color: white;
        font-family: Quicksand;
        border-radius: 8px;
        margin-right: 10px;
        width: 170px;
    }

        // - - SEARCH BUTTON - - //

    .dropdown button {
        border: 2px solid #FF8447;
        border-radius: 8px;
        background-color: #FF8447;
        color: white;
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
        font-family: Quicksand;
        margin-left: 10px;
        margin-right: 10px;
        // margin-bottom: 20%;
        max-width: 640px;
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
        border: 3px solid transparent;
        aspect-ratio: 1 / 1;
        max-width: 90px;
        max-height: 120px;
        // margin-left: 30px;
        object-fit: cover;
        margin: auto;
        margin-bottom: 25px;
    }

        // - - EMPTY FEED - - //

    .emptyFeed {
        max-width: 75%;
        text-align: left;
        margin-left: 30px;
    }
    .emptyFeed h1 {
        font-family: Quicksand;
        color: #FF8447;
    }


}


@media screen and (max-width: 600px) {
    .mainRow {
        width: 100%;
        margin-bottom: 10%;
    }

    #proPic {
        margin-left: 10px;
    }

    .latestVid {
        width: 100%;
    }

    .profileCol h5 {
        margin-left: 10px;
        margin-bottom: 3%;
        font-family: 30px;
    }
    .profileCol h1 {
        margin-left: 10px;
    }

    .profileCol h6 {
        font-family: Quicksand;
        margin-left: 10px;
        margin-right: 10px;
        // margin-bottom: 20%;
    }

    .profileCol button {
        // margin-bottom: 15%;
        margin-left: 10px;
        height: 45px;
        border: 2px solid #FF8447;
        background-color: #FF8447;
        color: white;
        font-family: Quicksand;
        border-radius: 8px;
        margin-right: 10px;
        width: 140px;
    }

    .profileCol textarea {
        margin-left: 10px;
    }

    // - - EMPTY FEED - - //

    .emptyFeed {
        text-align: left;
        margin-left: 30px;
    }
    .emptyFeed h1 {
        font-family: Quicksand;
        color: #FF8447;
    }
        // - - SELECTED USED - - //

    .selectedUser {
        text-align: center;
    }

    .selectedUser button {
        height: 40px;
        border: 2px solid #FF8447;
        background-color: #FF8447;
        color: #FFF;
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
        border-bottom: 0.2px solid black;
        height: 40px;
        outline: none;
        margin-left: 30px;
        margin-right: 8px;
        width: 65%;
        padding: 4px;
        resize:none;
        font-family: 20px;
    }
    
    .dropdown textarea::placeholder {
        text-align: center;
        font-family: Quicksand;
    }
    
    .dropdown button {
        border: 2px solid #FF8447;
        border-radius: 8px;
        background-color: #FF8447;
        color: white;
        font-family: Quicksand;
        height: 45px;
        width: 95px;
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
        border: 3px solid transparent;
        aspect-ratio: 1 / 1;
        max-width: 90px;
        max-height: 120px;
        // margin-left: 30px;
        object-fit: cover;
        margin: auto;
        margin-bottom: 25px;
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

    .searchUserInfo
    
    

}



`


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [],
            writeComment: false,
            commentBtn: true,
            userClicked: null,
            mainFeed: true,
            otherUser: false,
            showUsers: false,
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
            email: "",
            following: [],
            searchBar: "",
            searchDatabase: [],
            foundUsers: [],
            previousProfiles: [],
            allTags: []
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
        this.authListener()
        class Profile {
            constructor(name, nationality, 
                nationalityTxt, email,
                latestPost, profilePic, 
                education, career,
                topic1, topic2, 
                topic3, latestTitle,
                latestCaption, username,
                hasContent, tags) {
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
                this.tags
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
                    tags: profile.tags
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
                    data.tags)
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
                    console.log(data)
                    this.setState({
                        searchDatabase: data,
                        allTags : tags
                    })
                    let result = tags
                    console.log(result)
                })
            }
        })
       
    }

    componentWillUpdate = () => {
        // console.log(this.state.following)
        class Profile {
            constructor(name, nationality, 
                latestPost, profilePic, 
                education, career,
                topic1, topic2, 
                topic3, latestTitle,
                latestCaption, username) {
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
                this.username
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
                    username: profile.username
                }
            },
            fromFirestore : function(snapshot, options) {
                const data = snapshot.data(options)
                return new Profile(data.name, data.nationality, 
                    data.latestPost, data.profilePic,
                    data.education, data.career,
                    data.topic1, data.topic2, data.topic3,
                    data.latestTitle, data.latestCaption,
                    data.username)
            }
        }

        // fire.firestore().collection("temporaryPics")
        //         .get().then(querySnapshot => {
        //             const data = querySnapshot.docs.map(doc => doc.data())
        //             console.log(data)
        //             this.setState({
        //                 tempPhotos: data
        //             })
        //             let shuffled = data
        //             .sort( () => .5 - Math.random() )
        // })


        if (this.state.profiles.length != 0) {
            return
        } else {
            //* - - FIGURE OUT HOW TO NOT CALL THIS REPEATEDLY - - //
            var scanForNew = false
            let checker = (arr, target) => target.every(v => arr.includes(v))
            fire.firestore().collection("recentPosts")
            .withConverter(profileConverter)
            .get().then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data())
                var updates = data.filter(d => this.state.following.includes(d.username))
                this.setState({
                    profiles: updates
                })
            })
        }
        
    }

    switchToWriteComment = () => {
        this.setState({
            writeComment: true,
            commentBtn: false
        })
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
                if (event.target.value.length > event.target.value.length-1 
                    && event.target.value.length < 50) {
                    this.updateItem(event.target.value, this.state.foundUsers)
                }
            } else {
                this.setState({showUsers:false})
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
        // return(
        //     <Styles>
        //         <div>
                    
        //         </div>
        //     </Styles>
        // )    
    }


    renderPosts = () => {
        if (!this.state.profiles.length == 0) {
            return this.state.profiles.map((profiles) => {
                var { name, nationality, latestPost, profilePic,
                education, career, topic1, topic2, topic3, 
                latestTitle, latestCaption, username} = profiles
                console.log(profilePic)
                if (profilePic == "") {
                    this.state.tempPhotos.map(pic => {
                        profilePic = pic.profilePic
                    })
                }  else {
                }
                return(
                    <div className="profileCol">
                        <div className="profileRow">
                            <img id="proPic" src={profilePic}/>
                            <label><b>{name}</b></label>
                            {/* <img id="country" src={nationality}/> */}
                        </div>
                        {/* <h5><b>📍 Northfield, MN</b></h5> */}
                        <h5>🎓 {education}</h5>
                        <h5>🚀 {career}</h5>
                        <h5>🗣 {topic1} | {topic2} | {topic3}</h5>
                        <video className="latestVid" controls autoplay src={latestPost}>    
                        </video>
                        <h1>{latestTitle}</h1>
                        <h6>{latestCaption}</h6>
                        {this.state.commentBtn && 
                            <div className="seeProfileBtn">
                                <button
                                onClick={() => this.seeProfile(username)}
                                ><b>See Profile</b></button>
                                {/* <button
                                onClick={this.switchToWriteComment}
                                ><b>Connect</b></button> */}
                            </div>
                        }
                        {this.state.writeComment && 
                            <div>
                                <textarea
                                onChange={this.handleSearch}
                                /> 
                                <br/>
                                <button
                                ><b>Post</b></button>
                                <button
                                onClick={this.switchToBtns}
                                ><b>Back</b></button>
                            </div>
                        }
                        <br/> 
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
                        <Navbar.Brand id="brand"><img className="logoImg" src="assets/logo.png"/></Navbar.Brand>
                        <Navbar.Toggle id="responsive-navbar-nav"/>
                        <Navbar.Collapse d="responsive-navbar-nav">
                            <Nav className="navContainer ml-auto">
                                <Nav.Item><Nav.Link href="/">
                                    <figure>
                                        <img src="/assets/inspoIcon.png"/>
                                        <figcaption><b>feed</b></figcaption>
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


        return(
            <Styles>
                <NavbarTool/>
                {this.state.mainFeed && 
                    <div>
                        <div className="header">
                            <h1>feed</h1>
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
                                    >Search</button>
                                    {this.state.showUsers && 
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
                                                            {user.hasContent ? '🎬 New posts' : '⏳ Content coming soon'}
                                                            {/* 🗣 {user.topic1} | {user.topic2} | {user.topic3} */}
                                                        </div>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </div>
                            </div>
                        <div className="mainRow">
                            {/* <button
                            onClick={this.logout}
                            >Logout</button> */}
                            <table>
                                <tbody>
                                    {this.renderPosts()}
                                </tbody>
                            </table>
                        </div>
                            <div className="mainRow">
                                <span></span>
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
            </Styles>
        )
    }
}