import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../contexts/UserContext';


const Login = () => {

    const{signIn}=useContext(AuthContext);
    
    
    const navigate=useNavigate();
    const location = useLocation();
    const from =location.state?.from?.pathname || '/';
    
    const handleSubmit= event =>{
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const password =form.password.value;

        signIn(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            form.reset();
            navigate(from ,{replace:true});
        })
        .catch(error=>console.error(error));
    }
  

  return (
    <section className='login__register__form container'>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email Address'
          />
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Your Password'
          />
          <input type='submit' value='Log In' />
        </form>
        <p>
          New to Ema John ? <Link to='/register'>Register</Link>
        </p>
        <h3>------------------- OR -------------------</h3>
        {/* <button onClick={handleGoogleSignIn}>google</button> */}
      </div>
    </section>
  );
};

export default Login;