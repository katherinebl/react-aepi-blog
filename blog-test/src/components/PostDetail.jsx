import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function PostDetail({ match }) {

  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get('../../api/data.json')
      .then(response => {
        const posts = response.data.posts;
        const selected = posts.find(post => post.id == match.params.id);
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

          <Link to="/posts">
            <div className="back-link">Go back</div>
          </Link>
        </div>
      }
    </>
  )
}

export default PostDetail;