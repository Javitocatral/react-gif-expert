import React, { useState } from 'react'

export const Addcategori = ({onNewcategory}) => {

   const[inputValue, setinputValue] = useState ('')
   const onInputChange =(event )=> {
    // console.log(event.target.value)
    setinputValue(event.target.value);
        
   }

   const onSubmit = (event) =>{
        event.preventDefault();
      if(inputValue.trim().length<= 1) return;
        // setcategoria(categoria => [inputValue, ...categoria]);
        onNewcategory(inputValue.trim())
        setinputValue('')
   }

  return (
    <form onSubmit={onSubmit}>
   <input type="text" 
   placeholder='Busacar gift'
   value={inputValue}
   onChange={ onInputChange }
   />
   </form>
  )
}
