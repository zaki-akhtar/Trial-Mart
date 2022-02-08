
import { useEffect,useState } from "react";
import ProductCard from "../Products/ProductCard";
import classes from './WomenCollection.module.css'

// import shoesCollections from '../images/shoesCollection.jpg';
// import tshirt from '../images/t-shirts.jpg';
// import Data from '../../Data';


 

const WomenCollection=()=>{
   const [Data,setData]=useState([]);

   useEffect(()=>{
        const fetchData=async()=>{
           const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/Women`);
           const data=await response.json();
           setData([...data])
        }
        fetchData();
       
       },[]);

    return<div className={classes.Collection_container}>
        <ProductCard  collections={Data} type='women'/>
    </div> ;
}

export default WomenCollection;