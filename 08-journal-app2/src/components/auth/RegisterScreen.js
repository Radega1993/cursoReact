import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui);

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if ( isFormValid() ) {
      dispatch(startRegisterWithEmailPasswordName(name, email, password))
    }
  }

  const isFormValid = ( ) => {
    if (name.trim().length === 0) {
      dispatch( setError('Name is required') );
      return false;
    } else if ( !validator.isEmail( email ) ) {
      dispatch( setError('Email is not valid') );
      return false;
    } else if ( password !== password2 || password.length < 5){
      dispatch( setError('password should be at least 6 char and must match ') );
      return false;
    }
    dispatch( removeError() );
    return true;
  }


  return (
    <>

      <h3 className="auth__title mb-5">Register</h3>

      <form
        onSubmit={ handleRegister }
        className="animate__animated animate__fadeIn animate__faster"
      >

        {
          msgError &&
          (
            <div className="auth__alert-error">
              { msgError }
            </div>
          )
        }

        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
          className="auth__input"
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          onChange={ handleInputChange }
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={ password2 }
          onChange={ handleInputChange }
          className="auth__input"
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>

        <Link
          to="/auth/login"
          className="link "
        >
          Alredy registered?
        </Link>
      </form>

    </>
  )

}
