
import classes from './MenCollection.module.css';


import shoesCollections from '../images/shoesCollection.jpg';
import tshirt from '../images/t-shirts.jpg';
import ProductCard from "../Products/ProductCard";


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

const MenCollection=()=>{
    return <div className={classes.Collection_container}>
        <ProductCard collections={CardData}/>
    </div>;
}

export default MenCollection;