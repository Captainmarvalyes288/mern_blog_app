import React from 'react'
import { Link } from "react-router-dom"
import PostAuthor  from "./components/PostAuthor"

const PostItem = ({id, artist, songName, firstName, genre , postID}) => {
  return (
       <div className="post">
          <div class="post_thumbnail">
              <img src={artist} alt={songName} />
          </div> 
          <div class="post_content">
              <Link to={`/post/${postID}`}>
                  <h2>{songName}</h2>
              </Link>
              <h3> {firstName} </h3>
          </div> 
          <div class="post_footer">
              <PostAuthor />
              <link to={`/post/categaries/${genre}`}></link>
          </div> 
       </div>
  )
}

export default PostItem;