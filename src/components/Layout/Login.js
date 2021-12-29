
import { NavLink } from 'react-router-dom';
import classes from './Login.module.css';

const Login=()=>{
    return <div className={classes.loginContainer}>
        <form>
            <h1>Login Here</h1>
            <input type='text' placeholder=' Username' />
            <input type='password' placeholder=' Password'/>
            <button type='submit'>Log In</button>
            <div>
                <NavLink to='/signUp'>create Acount</NavLink>
                <NavLink to='/'>Help</NavLink>
            </div>
        </form>
    </div>;
}

export default Login;