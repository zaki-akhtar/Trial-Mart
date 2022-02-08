
import classes from './Main.module.css';
import mainSectionImages from '../images/mainSection2.jpg';
import { Link } from "react-router-dom";
import WomensImage from '../images/WOMEN.jpg';
import MensImage from '../images/MEN.jpg';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MainProduct from "../Products/MainProduct";
import { useState } from "react";
import Spinner from "../UI/Spinner";
import Information from "./Information";


const Main=()=>{

    let history=useHistory();
    const [isSpinner,setSpinner]=useState(false);

 const backgroundImage={backgroundImage:`url(${mainSectionImages})`,
                        backgroundPosition:`center`,
                        backgroundSize:`cover`,
                        backgroundRepeat:`no-repeat`}
 const backgroundWomenImage={backgroundImage:`url(${WomensImage})`,
                        backgroundPosition:`center`,
                        backgroundSize:`cover`,
                        backgroundRepeat:`no-repeat`
 }
 const backgroundMenImage={backgroundImage:`url(${MensImage})`,
                        backgroundPosition:`center`,
                        backgroundSize:`cover`,
                        backgroundRepeat:`no-repeat`
 }

 const ChangeRouteclickHandler=(e)=>{
     setSpinner(true);
    e.target.innerText==='MENS'?history.push('/home/Men'):history.push('/home/Women');
    setSpinner(false);
 }


    return<div className={classes.main}>
        <div className={classes.main_section1} style={backgroundImage}>
            <div>
              <Link to='/home/Men'><button className={classes.mens}>Mens</button></Link>
              <Link to='/home/Women'><button className={classes.womens}>Womens</button></Link>
            </div>
        </div>

        <div className={classes.main_section2}>
         <Information/>
       </div>

        <div className={classes.main_section3}>
         <MainProduct/>
        </div>

        <div className={classes.main_section4}>
          <div onClick={ChangeRouteclickHandler} name='womens'style={backgroundWomenImage}><h1>WOMENS</h1></div>
          <div onClick={ChangeRouteclickHandler} name='mens'style={backgroundMenImage}><h1>MENS</h1></div>
        </div>
        {/* <div className={classes.main_section5}>

        </div> */}
       {isSpinner && <Spinner/>}
    </div> ;
}

export default Main;