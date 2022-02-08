import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ProductCard from "./ProductCard";
import classes from './FetchProduct.module.css';

const FetchProduct=()=>{
    let location=useLocation();
    const[Data1,setData1]=useState([]);
    const[Data2,setData2]=useState([]);

  useEffect(()=>{
      const fetchData=async()=>{
         const response1= await fetch(process.env.REACT_APP_BACKEND_URL+'/Men');
         const response2= await fetch(process.env.REACT_APP_BACKEND_URL+'/Women');
         const data1=await response1.json();
         const data2=await response2.json();
         console.log(data1,data2);
         if(location.state.name==='All'){
            setData1([...data1]);
            setData2([...data2]);

         }
         else{
         const newData1=data1.filter(obj=>obj.name===location.state.name);
         const newData2=data2.filter(obj=>obj.name===location.state.name);
            setData1([...newData1]);
            setData2([...newData2]);
         }
      }
      fetchData();

  },[]);

   return<div className={classes.Collection_container}>
       <ProductCard  collections={Data1} type='men'/>
       <ProductCard  collections={Data2} type='women'/>
   </div>;
}

export default FetchProduct;