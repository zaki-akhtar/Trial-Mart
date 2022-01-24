import { Fragment } from "react/cjs/react.production.min";

import classes from './Main.module.css';
import mainSectionImages from '../images/mainSection2.jpg';
import { Link } from "react-router-dom";
import ProductAll from "../Products/ProductAll";
import WomensImage from '../images/WOMEN.jpg';
import MensImage from '../images/MEN.jpg';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MainProduct from "../Products/MainProduct";


const Main=()=>{

    let history=useHistory();

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
    e.target.innerText==='MENS'?history.push('/home/Men'):history.push('/home/Women');
 }


    return<div className={classes.main}>
        <div className={classes.main_section1} style={backgroundImage}>
            
            <div>
            <Link to='/home/Men'><button className={classes.mens}>Mens</button></Link>
            <Link to='/home/Women'><button className={classes.womens}>Womens</button></Link>
            </div>
        </div>
        <div className={classes.main_section2}>
           
        </div>
        <div className={classes.main_section3}>
         {/* <ProductAll/> */}
         <MainProduct/>
        </div>
        <div className={classes.main_section4}>
          <div onClick={ChangeRouteclickHandler} name='womens'style={backgroundWomenImage}><h1>WOMENS</h1></div>
          <div onClick={ChangeRouteclickHandler} name='mens'style={backgroundMenImage}><h1>MENS</h1></div>
        </div>
        {/* <div className={classes.main_section5}>

        </div> */}
    </div> ;
}

export default Main;