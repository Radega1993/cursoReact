import React, { useState, useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './examples.css'


export const LayoutEffect = () => {

  const {counter, increment } = useCounter(1);

  const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize ] = useState({});
  useLayoutEffect( () => {
      setBoxSize(pTag.current.getBoundingClientRect());

  }, [quote])

  return (
    <>
      <h1> LayoutEffect </h1>
      <hr/>

      <blockquote className="blockquote text-right">
        <p
          className="mb-3"
          ref={pTag}
        > { quote } </p>
      </blockquote>
      <pre>
        { JSON.stringify(boxSize, null, 3)}
      </pre>


      <button
        className="btn btn-primary"
        onClick={ increment }
      >
        siguiente quote
      </button>

    </>
  )

}
