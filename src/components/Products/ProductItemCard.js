
import { useLocation } from 'react-router-dom';
import { useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import tesImage from '../images/test2.jpg';
import classes from './ProductItemCard.module.css';

const CardItems=[
   {
      id:1,
      url:tesImage,
      title:'imageTitle',
      type:'cotton Denim',
      price:'Rs 399 (Flat 20% off)'

   },
   {
      id:1,
      url:tesImage,
      title:'imageTitle',
      type:'cotton Denim',
      price:'Rs 399 (Flat 20% off)'

   },
   {
      id:1,
      url:tesImage,
      title:'imageTitle',
      type:'cotton Denim',
      price:'Rs 399 (Flat 20% off)'

   },{
      id:1,
      url:tesImage,
      title:'imageTitle',
      type:'cotton Denim',
      price:'Rs 399 (Flat 20% off)'

   }
]

const ProductItemCard=()=>{

   const history=useHistory();
   const location=useLocation();
    
   console.log(location.state);
   
    const ItemsClickHandler=()=>{
       history.push('/items/xyz');
    }


    return<div  className={classes.container}>
        {CardItems.map((obj,index)=>{
           return<div onClick={ItemsClickHandler} name className={classes.productItemCard}>
           <img src={obj.url} alt='' />
           <i class="fas fa-heart f"></i>
           <div>
            <h4>{obj.title}</h4>
            <p>{obj.type}</p>
            <p>{obj.price}</p>
            </div>
           </div>
        })}
    </div>
}

export default ProductItemCard;