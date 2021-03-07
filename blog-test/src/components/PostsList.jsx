import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import PostDetail from './PostDetail';

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
          <div
            className="post-card"
            key={post.id}
          >
            <Link to={`posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>

          </div>
      )
    })
  }

  return (
    <>
      <div className="container">{postsList}</div>
    </>
  )
}

export default PostsList;