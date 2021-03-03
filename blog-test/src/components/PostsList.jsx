import { useEffect, useState } from 'react';
import axios from 'axios';
import PostDetail from './PostDetail';

function PostsList () {

  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(null)

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
            key={post.authorID}
            onClick={() => setSelected(post)}
          >
            <h3>{post.title}</h3>
            <samp>{post.author}</samp>
          </div>
      )
    })
  }

  return (
    <>
      <h1>Blog App</h1>
      <div className="container">{postsList}</div>
      {selected &&
        <PostDetail url={selected}/>}
     </>
  )
}

export default PostsList;