import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostDetail({ match }) {
  // console.log('lo que llega: ', url)

  console.log('id?: ', match.params.id);
  const [post, setPost] = useState({});

  //  useEffect(() => {
  //    setPost(url)
  //  }, [url])

  useEffect(() => {
    axios.get('../../api/data.json')
      .then(response => {
        const posts = response.data.posts;
        console.log('POSTS: ', posts);

        const selected = posts.find(post => post.id == match.params.id);
        console.log('selected is: ', selected);
        setPost(selected)
      })
  }, [])

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