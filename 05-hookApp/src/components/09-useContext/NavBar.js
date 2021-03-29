import React from 'react'
import { NavLink } from "react-router-dom";
export const NavBar = () => {

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">UseConte</NavLink>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
                <NavLink exact activeclasslink="active" className="nav-link nav-item" to="/">Home</NavLink>
                <NavLink exact activeclasslink="active" className="nav-link nav-item" to="/about">About</NavLink>
                <NavLink exact activeclasslink="active" className="nav-link nav-item" to="/login">Login</NavLink>
            </div>
          </div>
      </nav>
    )
}
