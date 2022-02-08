import { Fragment, useEffect, useState } from "react";
import ProductCard from "./ProductCard";



const MainProduct=()=>{
     const [Data1,setData1]=useState([]);
     const [Data2,setData2]=useState([])
     
    useEffect(()=>{
         const fetchData=async()=>{
            const response1=await fetch(`${process.env.REACT_APP_BACKEND_URL}/Men`);
            const response2=await fetch(`${process.env.REACT_APP_BACKEND_URL}/Women`);
            const data1=await response1.json();
            const data2=await response2.json();
            setData1([data1[2],data1[1]]);
            setData2([data2[2],data2[3]]);
            if(!response1.ok){
                console.log( 'wrong');
            }
            if(!response2.ok){
                console.log( 'wrong');
            }
          
           
            
        }
        fetchData();
    },[])

    return <Fragment>
        <ProductCard collections={Data1} type={'Men'}/>
        <ProductCard collections={Data2} type={'Women'}/>
    </Fragment>
}

export default MainProduct;