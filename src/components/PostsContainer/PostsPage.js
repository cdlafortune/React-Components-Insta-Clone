//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import data from "../../dummy-data";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [myData] = useState(data);

  return (
    <div className="posts-container-wrapper">
      {myData.map(el => {
        return <Post post = {el}/>
      })}
      
    </div>
  );
};

export default PostsPage;
