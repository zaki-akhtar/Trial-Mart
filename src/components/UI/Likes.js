import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UiActions } from '../../Redux-store/UiSlice';
import classes from './Likes.module.css';
import Card from './Card';

const Likes=(props)=>{
    const [isRed,setRed]=useState(false);
    const [isCardShown,setisCardShown]=useState(false);
  
    let dispatch=useDispatch();



    useEffect(()=>{
        const userId=sessionStorage.getItem('id');

        const fetchLikesItem=async()=>{
            const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/Likes/${userId}`);
            const data=await response.json();
            console.log(data);
            console.log(props.id);
            if(!response.ok){
                console.log('something error');
            }
                let res=data.findIndex(obj=>obj.likesId===props.id);
                if(res!==-1){
                    setRed(true);
                }
        }
        if(userId!==null){
            fetchLikesItem();
        }
        
    },[])


    const clickIconHandler=(e,id)=>{
         e.preventDefault();
         

       
         let userId=sessionStorage.getItem('id');
        
         if(userId===null){
           
            dispatch(UiActions.uimessage('Please Login or SignUp first'));
            setisCardShown(true);
         }
         else if(userId!==null){
            console.log(userId);
             const setLikesItem=async()=>{
                console.log(id);
                const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/Likes/${userId}`,{
                    method:'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body:JSON.stringify({'ItemId':id}),
                });
                if(!response.ok){
                   console.log('something worng');
                }
                setRed(prev=>!prev);
              
             }
             setLikesItem();
         }
    }
 
    const hideCardHandler=(e)=>{
        e.preventDefault();
        setisCardShown(false);
    }

    return <Fragment>
              <div onClick={(e)=>clickIconHandler(e,props.id)} className={isRed===true?classes.card_likes_icon_after:classes.card_likes_icon}>
               <i class="fas fa-heart f"></i>
             </div>
             {isCardShown && <Card onClose={hideCardHandler}/> }
       </Fragment>
}

export default Likes;