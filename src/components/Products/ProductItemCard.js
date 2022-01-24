
import { Link, useLocation } from 'react-router-dom';
import classes from './ProductItemCard.module.css';


const ProductItemCard=()=>{

    
   let location=useLocation();
      console.log(location);
      return <div className={classes.container}>
        {location.state.map((obj,index)=>{
          return<Link className={classes.card_item_link} to={{pathname:'/items/post',state:obj}}key={obj._id}>
           <div  className={classes.productItemCard} >
           <img src={obj.url} alt='' />
           <i class="fas fa-heart f"></i>
           <div>
            <h4>{obj.name}</h4>
            <p>{obj.quality}</p>
            <p>{obj.price}</p>
            </div>
           </div>
           </Link>
        })}
     </div>
}

export default ProductItemCard;