import "../styling/PostList.css"
import PostItem from "./PostItem"
/* eslint react/prop-types: 0 */
function PostList({userPosts}){
    
    return(
        <>
        {userPosts.toReversed().map((post, i) => (
            <PostItem post={post} key={i}/>
        ))}       
        </>
    )
}

export default PostList