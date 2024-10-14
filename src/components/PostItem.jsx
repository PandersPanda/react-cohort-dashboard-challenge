import { useEffect, useState } from "react"
import "../styling/PostItem.css"
import ColouredCircle from "./ColouredCircle";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import { Link } from "react-router-dom";

/* eslint react/prop-types: 0 */
function PostItem({post}){
    const [contact, setContact] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/contact/" + post.contactId)
            const jsonData = await response.json();
            setContact(jsonData)
         };
         fetchdata();
    }, [post.contactId])

    useEffect(() => {
            updateComments();
        }, [post.id, comments])

    const updateComments = () => {
        const fetchdata = async () => {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/post/" + post.id + "/comment")
            const jsonData = await response.json();
            setComments(jsonData)
         };
         fetchdata();

    }

    const postUrl = "/view/" + post.id

    if (!contact){
        return <></>
    }

    return(    
        <div className="post">
            <div className="post__header">
                <ColouredCircle firstName={contact.firstName} lastName={contact.lastName} color={contact.favouriteColour}/>
                <Link to={postUrl}><p>{contact.firstName} {contact.lastName}</p></Link>
            </div>
            <div className="post_content">
                <span>{post.title}</span>
                <p>{post.content}</p>
            </div>
            <div className="post__commentSection">
                <CommentList comments={comments}/>
                <CommentInput post={post} updateComments={updateComments}/>
            </div>
        </div>
)
}

export default PostItem