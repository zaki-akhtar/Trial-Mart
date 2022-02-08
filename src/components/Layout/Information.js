import { Fragment } from "react/cjs/react.production.min"
import classes from './Information.module.css';

const Information=()=>{
    return<Fragment>
    <div className={`${classes.main_section2_child} ${classes.s2_c1}`}>
        <i class="fas fa-truck-moving fa-3x"></i>
        <h3>Free shippping and Return</h3>
        <p>Lorem ipsum is simple dummy text with printing and typesetting industry</p>
    </div>
    <div className={`${classes.main_section2_child} ${classes.s2_c2}`}>
        <i class="fas fa-check-circle  fa-3x"></i>
        <h3>Secure Transaction</h3>
        <p>Lorem ipsum is simple dummy text with printing and typesetting industry</p>
       
    </div>
    <div className={`${classes.main_section2_child} ${classes.s2_c3}`}>
        <i class="fas fa-gift fa-3x"></i>
        <h3>Sale of 20%</h3>
        <p>Lorem ipsum is simple dummy text with printing and typesetting industry</p>
       
     </div>
    </Fragment>
}

export default Information;