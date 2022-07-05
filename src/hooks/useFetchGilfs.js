import  { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGisf'

export const useFetchGilfs = (cadacategoria) => {
   const [images, setimages] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   
     const getimages = async() => {
       const newImages = await getGifs(cadacategoria)
        setimages(newImages)
       
     }
    useEffect(() => {

        getimages()
    },[]);
return{
    images,
    isLoading
}

}
