import React, {useEffect, useState} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
import NavbarTool from '../navbar/Navbar'
import userEvent from '@testing-library/user-event'
import { nanoid } from 'nanoid'



const Styles = styled.div `


    // - - HEADER  - - //

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

    // - - UPLOAD - - //

.upload {
    margin-top: 3%;
}

.upload input {
    width: 40%;
    margin-bottom: 20px;
    height: 40px;
    outline: none;
    border: 0.2px solid black;
    border-radius: 8px;
    padding: 5px;
}

.upload input::placeholder {
    font-family: Quicksand;
    text-align: left;
}

.upload textarea {
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

.upload textarea::placeholder {
    font-family: Quicksand;
}

.upload p {
   
    color: #FF8447;
    font-family: Quicksand;
    font-size: 17px;
    margin-top: 8px;
}

.uploadVideo {
    text-align: center;
}

.uploadVideo p {
    color: #FF8447;
    font-family: Quicksand;
    font-size: 17px;
    margin-top: 8px;
}

.uploadVideo button {
    margin-left: 15px;
    border-radius: 8px;
    border: 2px solid #FF8447;
    width: 90px;
    height: 45px;
    background-color: #FF8447;
    color: white;
    font-family: Quicksand; 
    margin-top: 20px;
    margin-bottom: 40px;
}

.uploadVideo video {
    margin-top: 0.5%;
    width: 640px;
    height: 360px;
}

.uploadVideo input {
    margin-bottom: 0px;
    width: 40%;
}

    // - - UPLOADED MESSAGE - - //

.uploaded {
    margin-top: 15%;
    color: #FF8447;
    font-family: Quicksand;
}

.uploaded button {
    background-color: #FF8447;
    color: white;
    font-family: Quicksand;
    border: 2px solid #FF8447;
    border-radius: 8px;
    height: 47.5px;
    width: 200px;
    margin-top: 17.5px;
}

@media screen and (max-width: 600px) {


    .upload input {
        width: 90%;
    }
    .upload textarea {
        width: 90%;
    }

    .uploadVideo input {
        width: 90%;
    }
    
    .uploadVideo video {
        width: 100%;
        height: 300px;
    }

    .uploadVideo button {
        width: 100px;
        height: 50px;
    }

        // - - UPLOADED MESSAGE - - //

    .uploaded {
        margin-top: 20%;
    }
    .uploaded h1 {
        margin-left: 15px;
        margin-right: 15px;
    }

    .uploaded button {
       width: 220px;
    }
}


`



export default function Upload() {
    const [file, setFile] = useState(null)
    const [url, setURl] = useState("")
    const [videoTitle, setVideoTitle] = useState("")
    const [videoDescript, setVideoDescript] = useState("")
    const [uploaded, setUploaded] = useState(false)
    const [textErrorMsg, setTextErroMsg] = useState("")
    const [videoErrorMsg, setVideoErroMsg] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [username, setUsername] = useState("")

    function authListener () {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email)
                fire.firestore().collection("allUsernames")
                .where('email', '==', userEmail)
                .get().then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data().username)
                    setUsername(data)
                    console.log(data)
                })
                console.log(user.email)
            }
        })
    }

    useEffect(() => {
        authListener()
    }, [])
  

    const onChangeHandler = event => {
        setVideoTitle(event.target.value)
        console.log(event.target.value)
    }

    const onChangeHandler2 = event => {
        setVideoDescript(event.target.value)
        console.log(event.target.value)
    }
    function handleChange (e) {
        setFile(e.target.files[0])
    }

    function changeScreen() {
        setUploaded(true)
    }

    function uploadAnotherVideo () {
        setUploaded(false)
        setVideoTitle("")
        setVideoDescript("")
        setFile("")
    }

    function handleUpload (e) {
        videoExists()
        if (!videoTitle == "" && !videoDescript == "" && file!= null) {
            e.preventDefault();
            const uploadTask  = fire.storage().ref(`/${username}/posts/${userEmail} ${Date().toLocaleLowerCase()}`).put(file)
            uploadTask.on("state_changed", console.log, console.error, ()=> {
                fire.storage().ref("normanburuchara/allPosts")
                .child(file.name)
                .getDownloadURL()
                .then((url) => {
                    setFile(null)
                    setURl(url)
                })
                fire.firestore().collection("allUsers").doc(userEmail)
                .collection("videos").add({
                    id: nanoid(),
                    video: url,
                    title: videoTitle,
                    description: videoDescript
                })
            })
            changeScreen()
            setTextErroMsg("")
        } else if (!videoTitle == "" && !videoDescript == "" && file== null) {
            setTextErroMsg(null)
            setVideoErroMsg("Please upload a video")
        } else {
            setTextErroMsg("Please fill out the title and the description")
        }
    }

    function videoExists () {
        if(!file){
            setVideoErroMsg("Please upload a video")
            return false
        } else {
            setVideoErroMsg("")
            return true
        }
    }


    function uploadForm() {
        return(
            <div className="">
                <div className="header">
                    <h1>upload</h1>
                </div>
                <div className="upload">
                    <input
                    type="text"
                    name="name"
                    placeholder="Video Title"
                    onChange={onChangeHandler}
                    value={videoTitle}
                    />
                    <br/>
                    <textarea
                    type="text"
                    name="name"
                    placeholder="Quick video description"
                    onChange={onChangeHandler2}
                    value={videoDescript}
                    />
                    <p>{textErrorMsg}</p>
                </div>
                <div className="uploadVideo"> 
                        <input type="file" onChange={handleChange}/>
                        <p>{videoErrorMsg}</p>
                        {/* <video className="latestVid" controls autoplay src={url} type="video/mp4"/>   <br/> */}
                        <button onClick={handleUpload}><b>Upload</b></button>
                </div>
            </div>
        )
    }

    function uploadFinished () {
        return(
            <div className="uploaded">
                <h1>You're video has been successfully uploaded! </h1>
                <button
                onClick={uploadAnotherVideo}
                ><b>Upload Another Video</b></button>    
            </div>
        )
    }

    return(
        <Styles>
            <NavbarTool/>
            <div>
                { uploaded ? (<div>{uploadFinished()}</div>): (<div>{uploadForm()}</div>)}
            </div>
        </Styles>
    )
}