import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to="/" className="header">
      <h1>New York Times Top Stories</h1>
      <h2>Date: </h2>
    </Link>
  )
}

export default Header;