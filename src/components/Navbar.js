import React from 'react'
import { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const toggleClose = useRef()
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }
  const closeNavbar = () => {
    toggleClose.current.click()
  }
  return (
    <><nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"><div className="container-fluid">
      <Link className="navbar-brand" to="/">iNotebook</Link>
      <button ref={toggleClose} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${useLocation().pathname === '/' ? 'active' : ''}`} aria-current="page" to="/" onClick={closeNavbar}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${useLocation().pathname === '/about' ? 'active' : ''}`} to="/about" onClick={closeNavbar}>about</Link>
          </li>
        </ul>
        <div className="d-flex">
          {localStorage.getItem('token') ?
            <>
              <Link className='btn btn-outline-primary text-white ' to="/profile" onClick={closeNavbar}>Profile</Link>
              <button className="btn btn-primary mx-1" onClick={() => {
                handleLogout()
                closeNavbar()
              }}>Logout</button>
            </> :
            <>
              <Link className="btn btn-primary mx-1" to="/login" onClick={closeNavbar}>Login</Link>
              <Link className="btn btn-outline-primary mx-1" to="/signup" onClick={closeNavbar}>Sign Up</Link>
            </>
          }
        </div>
      </div>
    </div></nav></>
  )
}

export default Navbar