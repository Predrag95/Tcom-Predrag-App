import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // First check if user logged in. If yes, navigate him back to home.
  const userLoggedIn = localStorage.getItem('userLogedIn')
  useEffect(() => {
    if (userLoggedIn) {
      navigate('/home')
    }
  }, [userLoggedIn, navigate])

  const updateUsername = (e) => {
    setUsername(e.target.value)
  }
  
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitUser = async (e) => {
    e.preventDefault()
    const response = await axios.get('http://localhost:3001/auth')
    const user = response.data.find(user => user.username === username)
  
    if (user) {
      if (user.password === password) {
        const formWrapper = document.querySelector('.form-wrapper')
        formWrapper.classList.add('active')
        setTimeout(() => {
          localStorage.setItem('userLogedIn', user.id)
          formWrapper.classList.remove('active')
          navigate('/home');
        }, 1500);
      } else {
        setError('Wrong Password')
      }
    } else {
      setError('User does not exist')
    }
  }

  
  return (
    <div className='form-wrapper'>
      <div className='form-image'>
        <img src="assets/images/illustration.png" alt="illustration" />
        <h3>Lorem Ipsum</h3>
      </div>

      <form className='form-login' onSubmit={submitUser}>
        <img className='frame' src="assets/images/Frame.png" alt="frame" />
        <h2>Prijava na sistem</h2>
        <div className='input-1-wrapper'>
          <label className='label-1'>Korisnicko Ime</label>
        <input 
          className='input-1' 
          type="text"
          value={username}
          onChange={updateUsername} 
        />
        <img className='icon icon-email' src="assets/icons/email.png" alt="email" />
        </div>
        <div className='input-2-wrapper'>
          <label className='label-2'>Lozinka</label>
        <input 
          className='input-2' 
          type="password" 
          value={password}
          onChange={updatePassword}
        />
        <img className='icon icon-password' src="assets/icons/password.png" alt="email" />
        </div>
        <div className='forgot-password'> 
          <input type="checkbox"/>
          <span>Zapamti</span>
          <p>Zaboravili sifru?</p>
        </div>
        <span className='error'>
          {error && <span>{ error }</span>}
        </span>  
          <button 
            className='form-button'
            type='submit'
          >Uloguj se</button>
      </form>
    </div>
  )
}

export default SignIn

