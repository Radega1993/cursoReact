import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if ( inputValue.trim().length > 2 ){
      setCategories( categ => [inputValue, ...categ ] );
      setInputValue('');
    }
  }

  return (
    <>
      <h2>Add Category</h2>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
        />
    </form>
    </>
  );

}
AddCategory.propTypes = {
setCategories: PropTypes.func.isRequired
}
