import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
    const userLog = document.getElementById('userNameLogin').value;
    const passLog = document.getElementById('passWordLogin').value;

    const loginData = {
      userLog,
      passLog
    };
    console.log(loginData);
    try {
      const response = await axios.post('http://localhost:3001/auth', loginData);
      const isAuthenticated = response.data.authenticated; // Assuming your server sends back an 'authenticated' field
      console.log(isAuthenticated)
      if (isAuthenticated) {
        const userData = response.data.user;
        navigate('/homepage', { state: { user: userData} });
      } else {
        alert("Incorrect Username or password");
      }
    } catch (error) {
      console.error('Error authenticating user: ', error);
      // Handle error, such as showing an error message to the user
    }
    
	  };
	  

  return (
    <div className='wrapper'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <strong>Username</strong>
          <input
            type='text'
            placeholder='EmeraldHippo'
            id = "userNameLogin"
            required
          />
        </div>
        <div className='input-box'>
          <strong>Password</strong>
          <input
            type='password'
            id = "passWordLogin"
            required
          />
        </div>
        <div className='submit-button'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
