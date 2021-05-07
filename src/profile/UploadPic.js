import React, {useEffect, useState} from 'react'
import fire from '../database/firebase'
import styled from 'styled-components'
import NavbarTool from '../navbar/Navbar'
import userEvent from '@testing-library/user-event'
import { nanoid } from 'nanoid'



const Styles = styled.div `

    // - - MAIN - - //

.main {
    text-align: center;
}

.main img {
    width: 200px;
}

.main input {
    margin-top: 20px;
}

.main button {
    height: 45px;
    width: 105px;
    border-radius: 8px;
    border: 2px solid #FF8447;
    background-color: #FF8447;
    color: white;
    font-family: Quicksand;
}


`



export default function UploadPic(props) {
    const receivedUsername = props.passedUserName
    const [file, setFile] = useState(null)
    const [url, setURl] = useState("")
    const [photoErroMsg, setPhotoErroMsg] = useState("")
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

    function handleChange (e) {
        setFile(e.target.files[0])
    }

    function handleUpload (e) {
        pictureExists()
            e.preventDefault();
            const uploadTask  = fire.storage().ref(`/${props.passedUserName}/profile/${file.name}`).put(file)
            uploadTask.on("state_changed", console.log, console.error, ()=> {
                fire.storage().ref(`/${props.passedUserName}/profile/`)
                .child(file.name)
                .getDownloadURL()
                .then((url) => {
                    console.log("we've reached this far")
                    setFile(null)
                    setURl(url)
                    // console.log(`Username: ${username} Url: ${url}`)
                    fire.firestore().collection("allUsernames")
                    .doc(props.passedUserName).set({
                        profilePic: url.toString()
                    })
                })
            })   
    }

    function pictureExists () {
        if(!file){
            setPhotoErroMsg("Please upload a phptp")
            return false
        } else {
            setPhotoErroMsg("")
            return true
        }
    }

    return(
        <Styles>
            <div className="main">
               <img src="/assets/noPic.png"/>
               <br/>
               <input type="file" onChange={handleChange}/>
               <p>{photoErroMsg}</p>
               <button
               onClick={handleUpload}
               >Upload</button>
            </div>
        </Styles>
    )
}