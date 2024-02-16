import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import './register.css'
function RegisterPage() {
    const navigate = useNavigate();
    const passwordRef = useRef();

    const registerDone = async (event) => {
        console.log(event.target)
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const surName = document.getElementById('surName').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        const gender = document.querySelector('input[name="Gender"]:checked').value;
        const email = document.getElementById('email').value;
        const userName = document.getElementById('userName').value;
        const passWord = document.getElementById('passWord').value;
    
        const userData = {
            firstName,
            surName,
            dateOfBirth,
            gender,
            email,
            userName,
            passWord
        };
        console.log(userData)
    
        if (passWord.length < 8) {
            alert('Your password must be more than or equal to 8 characters');
        } else {
            try {
                await axios.post('http://localhost:3001/register', userData);
                navigate('/login');
            } catch (error) {
                console.error('Error registering user: ', error);
            }
        }
    };
    

    return (
        <div className='wrapper'>
            <title>Register</title>
            <h1>Register Form</h1>
            <form onSubmit={registerDone}>
                <div className='input-box'>
                    <strong>Name</strong>
                    <input
                        type='text'
                        id='firstName'
                        placeholder='Paramet'
                        required
                    />
                </div>
                <div className='input-box'>
                    <strong>Surname</strong>
                    <input
                        type='text'
                        id='surName'
                        placeholder='Kitchanwit'
                        required
                    />
                </div>
                <div className='input-box'>
                    <strong>Date of Birth</strong>
                    <input
                        type='date'
                        id='dateOfBirth'
                        required
                    />
                </div>
                <div className='gender-box'>
                    <strong>Gender </strong>
                    <input type='radio' id='maleGender' value='Male' name='Gender' required />
                    <label>Male </label>
                    <input type='radio' id='femaleGender' value='Female' name='Gender' required />
                    <label>Female</label>
                </div>
                <div className='input-box'>
                    <strong>E-mail</strong>
                    <input
                        type='text'
                        id='email'
                        placeholder='xxxxxx@gmail.com'
                        required
                    />
                </div>
                <div className='input-box'>
                    <strong>Username</strong>
                    <input
                        type='text'
                        id='userName'
                        placeholder='EmeraldHippo'
                        required
                    />
                </div>
                <div className='input-box'>
                    <strong>Password</strong>
                    <input
                        type='password'
                        id='passWord'
                        ref={passwordRef}
                        required
                    />
                </div>
                <div className='submit-button'>
                    <button type='submit' id = "register" >Done</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
