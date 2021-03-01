import { useEffect, useState } from 'react';
import axios from 'axios';

function PostsList () {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('../../api/data.json')
      .then(response => {
        setPosts(response.data.posts)
      })
  }, [])


  let postsList = []

  postsList = posts.map(post => {
    return (
        <div className="post-card">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>{post.author}</small>
        </div>
    )
  })



  return (
    <div className="container">{postsList}</div>
  )
}

export default PostsList;