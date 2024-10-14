import "../styling/CommentInput.css"
import ColouredCircle from "./ColouredCircle"
import { useState } from "react"
/* eslint react/prop-types: 0 */
function CommentInput({ post, updateComments }){

    const url = "https://boolean-uk-api-server.fly.dev/PandersPanda/post/" + post.id + "/comment";

    const initalComment = {
        postId: post.id,
        content: "",
        contactId: 16
    }

    const [comment, setComment] = useState(initalComment)

    const onChange = (event) => {
        setComment({...comment, content: event.target.value})
    }

    const PostComment = () => {
        console.log(url)
        console.log(comment)
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(comment)
            };
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(updateComments())
        }
        catch(e){
            console.error(e)    
        }

    }


    return (
        <div className="comment_input">
            <ColouredCircle firstName={"Anders"} lastName={"Ottersland"} color={"#e84778"}/>
            <input type="text" placeholder="Add a comment..." onChange={onChange}/>
            <button onClick={PostComment} className="comment_button">Comment</button>
        </div>
    )
}

export default CommentInput