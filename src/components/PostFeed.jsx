//import './PostFeed.css';
import PostInput from "./PostInput";
import PostList from "./PostList";
import { useEffect, useState } from "react";

function PostFeed() {
   
   const [userPosts, setUserPosts] =  useState([])

   useEffect(() => {
    updateUserPosts();
   }, [userPosts])

   const updateUserPosts = () => {
    const fetchdata = async () => {
        const response = await fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/post")
        const jsonData = await response.json();
        setUserPosts(jsonData)
     };
     fetchdata();
   }

  return (
    <div className="postFeed">
      <PostInput updateUserPosts={updateUserPosts}/>
      <PostList userPosts={userPosts}/>
    </div>
  );
}

export default PostFeed;