import CommentItem from "./CommentItem"

/* eslint react/prop-types: 0 */
function CommentList( {comments} ){
    return(
        <div className="comments">
            {comments.map((comment, i) => 
                <CommentItem comment={comment} key={i}/>
            )}
        </div>
    )
}

export default CommentList