import React, { useState, useEffect } from 'react';
import { Message } from './Message';

import './effects.css'


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect( () => {
    //console.log('HEY!!');
  }, []);

  useEffect( () => {
    //console.log('FormState');
  }, [formState]);

  useEffect( () => {
    //console.log('Email cambio');
  }, [email]);

  const handleInputChange = ({ target }) => {

    setFormState({
      ...formState,
      [ target.name ]: target.value
    })
  }

  return (
    <>
      <h1> useEffect </h1>
      <hr/>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="tu nombre"
          autoComplete="off"
          value={ name }
          onChange = { handleInputChange }
        />
      </div>
      <br/>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="tu email"
          autoComplete="off"
          value={ email }
          onChange = { handleInputChange }
        />
      </div>

      { name === '123' && <Message /> }
    </>
  )
}
