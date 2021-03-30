import { useDispatch, useSelector } from 'react-redux';
import React from 'react'

import { startLogout } from '../../actions/auth';

export const Navbar = () => {

  const { name } = useSelector( state => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span>
        {name}
      </span>

      <button
        className="btn btn-danger"
        onClick={ handleLogout }
        >
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  )
}
