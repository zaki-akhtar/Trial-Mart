import { Fragment } from 'react/cjs/react.production.min';
import classes from './ProductCard.module.css';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const ProductCard=(props)=>{
    
   let history=useHistory();

   const CardClickHandler=(e)=>{
      history.push({pathname:'/items',state:JSON.parse(e.target.name)});
   }

    return <Fragment>
         {props.collections.map((obj,index)=>{
           return<div onClick={CardClickHandler} name={JSON.stringify(obj)} className={classes.productCard}>
              <img src={obj.url} name={JSON.stringify(obj)}alt=''/>
              <h2 name={JSON.stringify(obj)}>{obj.title}</h2>
           </div>})}
    </Fragment>;
}

export default ProductCard;