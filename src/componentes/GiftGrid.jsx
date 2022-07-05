import { Gifitem } from './Gifitem';
import { useFetchGilfs } from '../hooks/useFetchGilfs';


export const GiftGrid = ({cadacategoria}) => {

    const{images, isLoading } = useFetchGilfs(cadacategoria);
  
  return (
    <>
        <h3>{cadacategoria}</h3>
        {
          isLoading && (<h2> Cargando....</h2>)
        }
        
        <div className='card-grid'>
          {
            images.map((image) => (

              <Gifitem 
              key={image.id}
              {...image}/>
            ))
          }
          
        </div>
    </>
  )
}
