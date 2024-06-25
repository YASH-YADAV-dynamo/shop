import { Link, NavLink } from "react-router-dom";


const Header = () => {


  return(
    <>
    <div className="bg-dark text-white">
      <h1 className="container display-4 py-4">Shopie</h1>
      <ul className="nav container">
        <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/products" className="nav-link">Products</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
      </ul>
    </div>
    </>
  )
}

export default Header;