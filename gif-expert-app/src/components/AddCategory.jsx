import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  
    const [ inputValue, setInputValue ] = useState('One Punch');
    
    const onInputChange = ({ target }) => {
        setInputValue( target.value ); 
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //condiicon si tenemos mas d eun caracter
        if(inputValue.trim().length <= 1) return;
        //setCategories( categories => [inputValue,...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return(
       <form onSubmit={ onSubmit } aria-label="form">
        <input
    type= "text"
    placeholder="Buscar Gifs"
    value={ inputValue }
    onChange={ onInputChange }
     />
     </form>
       )

}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}