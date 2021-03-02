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


  let postsList = <h3>No posts...</h3>

  if(posts && posts.length > 0) {
    postsList = posts.map(post => {
      return (
          <div className="post-card" key={post.authorID}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <samp>{post.author}</samp>
          </div>
      )
    })
  }

  return (
    <div className="container">{postsList}</div>
  )
}

export default PostsList;