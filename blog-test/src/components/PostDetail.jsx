import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostDetail({url}) {

  console.log('lo que llega: ', url)

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(response => {
      console.log('pasa por aqui? :', response.url);
      setPost(response);
    });

  }, [url]);

  return (
    <>
      <h6>POST DETAIL</h6>
      {post &&
        <div className="post-detail">
          <h6>{post.url}</h6>
        </div>
      }
    </>
  )
}

export default PostDetail;