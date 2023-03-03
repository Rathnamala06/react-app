import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link text-light active" to={'/'}>Owners</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" to={'/products'}>Products</Link></li>
            </ul>
          </div>         
        </nav>
      </div>
      
    )
};

export default Header;