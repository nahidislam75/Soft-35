import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';


const SignUp = () => {
    const[error,setError]=useState(null);
    const {createUser}= useContext(AuthContext);

    const handleSubmit =(event) =>{
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const password =form.password.value;
        const confirm = form.confirm.value;

        if(password.length < 6){
            setError('password should be 6 or more characters');
            return;
        }
        if(password!==confirm){
            setError('your password did not match');
            return;
        }
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>console.error(error));
    }
    return (
        <section className='login__register__form container'>
      <div>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email Address...'
          />
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Your Password...'
          />
          <label htmlFor='confirm'>Re-Type Password</label>
          <input
            type='password'
            name='confirm'
            id='checkPassword'
            placeholder='Re-type Password...'
          />
          <input type='submit' value='Sign In' />
        </form>
        <p>
          Already have an Account ? <Link to='/login'>Log In</Link>
        </p>
        <h3>------------------- OR -------------------</h3>
        <button>Google Sign In</button>
      </div>
    </section>
    );
};

export default SignUp;
