
import {Link} from 'react-router-dom'

export default function Nav() {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <nav className="nav">
      <ul>
        <Link to="/" style={navStyle}>
          <li>Home</li>
        </Link>

        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>

        <Link to="/posts" style={navStyle}>
          <li>Posts</li>
        </Link>
      </ul>
    </nav>
  )
}