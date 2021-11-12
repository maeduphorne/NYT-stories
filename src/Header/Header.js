import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to="/" className="header">
      <div className="header-style">
        <h1>New York Times Top Stories</h1>
        <h2>11/12/21</h2>
      </div>
    </Link>
  )
}

export default Header;