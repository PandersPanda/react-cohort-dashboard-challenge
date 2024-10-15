import { useContext, useEffect, useState } from "react";
import ColouredCircle from "./ColouredCircle";
import "../styling/CommentItem.css"
import { UserContext } from "../App";
/* eslint react/prop-types: 0 */
function CommentItem( {comment} ){
    const [contact, setContact] = useState(null)
    const { userLoggedIn } = useContext(UserContext)

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/contact/" + comment.contactId)
            const jsonData = await response.json();
            setContact(jsonData)
         };
         fetchdata();
    }, [comment.contactId])

    if(!contact) return <></>

    return(
        <div className="comment">
            <ColouredCircle firstName={contact.firstName} lastName={contact.lastName} color={contact.favouriteColour} />
            <div className="comment_content">
                <p style={{fontWeight: "bold"}}>{contact.firstName} {contact.lastName}</p>
                <p>{comment.content}</p>
            </div>
            {(comment.contactId == userLoggedIn.id) && <div className="comment_delete">Delete</div>}
        </div>
    )
}

export default CommentItem