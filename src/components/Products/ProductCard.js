import { Fragment } from 'react/cjs/react.production.min';
import classes from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard=(props)=>{
    console.log(props);
  
    return <Fragment>{props.collections.map((obj,index)=>{
           return <Link className={classes.card_link} to={{pathname:`/${props.type}/Items`,state:obj.Items}} key={obj._id}>
              <div   className={classes.productCard}  >
              <img src={process.env.PUBLIC_URL+ `${obj.url}`} alt='' />
              <h2>{obj.name}</h2>
              </div>
           </Link>
         })}
        </Fragment>
}

export default ProductCard;