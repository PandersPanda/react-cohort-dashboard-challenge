import { useState } from "react"
import '../styling/postInput.css'
import ColouredCircle from "./ColouredCircle"
/* eslint react/prop-types: 0 */

function PostInput( {updateUserPosts} ){
    //If this one does not work, a contact id with the id 16 has to be made
    const initialPost = {
        title: "Test Post",
        content: "",
        contactId: 16 //Don't have login function so I use one I put in of myself
    }

    const [postInput, setInput] = useState(initialPost)

    const onChange = (event) => {
        setInput({...postInput, content: event.target.value})
    }

    const handlePost = () => {
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postInput)
            };
            fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/post", requestOptions)
                .then(response => response.json())
                .then(data => updateUserPosts(data))
        }
        catch(e){
            console.error(e)    
        }
     }

    return(
        <div className="postInput">
            <div className="postInput__container">
                <ColouredCircle firstName={"Anders"} lastName={"Ottersland"} color={"#e84778"}/>
                <input
                placeholder="What's on your mind?"
                rows="3"
                onChange={onChange}
                />
                <button className="postInput__button" onClick={handlePost}>
                Post
                </button>
            </div>
        </div>
    )
}

export default PostInput