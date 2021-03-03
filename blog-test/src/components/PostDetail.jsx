import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostDetail({url}) {

  // console.log('lo que llega: ', url)

  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(url)
  }, [url])

  return (
    <>
      {post &&
        <div className="post-detail">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <samp>{post.author}</samp>
        </div>
      }
    </>
  )
}

export default PostDetail;