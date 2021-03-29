import React, { useRef } from 'react';

import './examples.css'


export const FocuseScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1> Use Ref</h1>
      <hr/>

      <input
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={ handleClick }
        >
        focuse
      </button>

    </>
  )

}
