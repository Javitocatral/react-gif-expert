import React, { useState } from 'react'
import { Addcategori, GiftGrid } from './componentes';


export const GifExpertApp = () => {

  const[categoria,setcategoria]= useState(['one Punch',]);
  const onAddCategory = (newCategori) => {
    if(categoria.includes(newCategori)) return;
    
   
    setcategoria([newCategori, ...categoria])
  
  }

  return (
    <>
    
    <h1>
       GifExpertApp 
    </h1>


   <Addcategori 
 
       onNewcategory={ onAddCategory }
   />

     {categoria.map(cadacategoria =>(
        <GiftGrid 
        key={cadacategoria} 
        cadacategoria= {cadacategoria}
        />
     ))
     }
   
     
    </>
  )
}
