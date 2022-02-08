
import classes from './MenCollection.module.css';

import ProductCard from "../Products/ProductCard";
//  import Data from '../../Data';
import { useEffect, useState } from 'react';


const MenCollection=()=>{
    const [Data,setData]=useState([]);
    useEffect(()=>{
     const fetchData=async()=>{
        const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/Men`);
        const data=await response.json();
        setData([...data]);
     }
     fetchData();
    
    },[]);


    return <div className={classes.Collection_container}>
        <ProductCard collections={Data} type='Men'/>
    </div>;
}

export default MenCollection;