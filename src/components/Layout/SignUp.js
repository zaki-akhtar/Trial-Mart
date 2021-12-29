 
import { NavLink } from 'react-router-dom';
import classes from './Signup.module.css';

 const SignUp=()=>{
     return <div className={classes.signupContainer}>
         <form>
             <h1>SignUp</h1>
             <input type='text' placeholder=' Username'/>
             <input type='email'placeholder=' Email'/>
             <input type='password' placeholder=' Password'/>
             <button type='submit'>Submit</button>
             <p>Already User ? <NavLink to='/Login'>Login</NavLink></p>
         </form>
     </div>;
 }

export default SignUp;
