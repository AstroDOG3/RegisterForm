import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
	console.log(username)
	console.log(password)
	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === 'mixzas123' && username === 'mixzapop153') {
		  navigate('/homepage');
		} else {
		  alert("incorrect password");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='input-box'>
          <strong>Password</strong>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
