
import { Link } from 'react-router-dom'
import { AuthContext } from './Authentication/ContextApi/AuthProvider'
import { useContext } from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(()=>{ })
    .catch(console.error(error))
  }

  return (
    <div>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl" href='/'>
        <img className='logo' src="https://i.ibb.co.com/wNMGSBL/Untitled-design.png" alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={"/dashboard"}>DASHBOARD</Link></li>
 
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? <div>  <Link className="btn btn-ghost text-xl" onClick={handleLogOut}><FaRegUserCircle /> Logout</Link></div> : <div>  <Link className="btn btn-ghost text-xl" to="/login"> Login</Link></div>
  }
  </div>
</div>
    </div>
  )
}

export default Navbar
