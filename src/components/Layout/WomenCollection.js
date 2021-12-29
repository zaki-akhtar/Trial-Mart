
import ProductCard from "../Products/ProductCard";
import classes from './WomenCollection.module.css'

import shoesCollections from '../images/shoesCollection.jpg';
import tshirt from '../images/t-shirts.jpg';

const CardData=[
    {
       id:1,
       url:tshirt,
       title:'Tshirt'
    },
    {
       id:2,
       url:shoesCollections,
       title:'shoes'
    },
    {
       id:1,
       url:tshirt,
       title:'Tshirt'
    },
    {
       id:2,
       url:shoesCollections,
       title:'shoes'
    }
   
 ]
 
 

const WomenCollection=()=>{
    return<div className={classes.Collection_container}>
        <ProductCard  collections={CardData}/>
    </div> ;
}

export default WomenCollection;