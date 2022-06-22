import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

import Sidebar from './Sidebar';
import View from './View';

const Home = () => {
  const [activeUser, setActiveUser] = useState({})
  const [companies, setCompanies] = useState([])
  const navigate = useNavigate();
  // First check if user logged in. If not, navigate him back to login.
  const userLoggedIn = localStorage.getItem('userLogedIn')
  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/')
    }
  }, [userLoggedIn, navigate])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await axios.get('http://localhost:3001/users')
        const loggedInUser = localStorage.getItem('userLogedIn')
        const user = users.data[loggedInUser]
        setActiveUser(user)
      } catch (e) {
        console.log('Failed fetching users: Error:', e)
      }
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const companies = await axios.get('http://localhost:3001/companies')
        setCompanies(companies.data)
      } catch (e) {
        console.log('Failed fetching companies: Error:', e)
      }
    }
    fetchCompanies()
  }, [])

  function logout () {
    localStorage.removeItem('userLogedIn')
    navigate('/')
  }

  return (
    <div className="home">
     <div className='sidebar'>
      <Sidebar activeUser={activeUser} logout={() => logout()} />
     </div>
     <div className='view'>
      <View companies={companies} activeUserName={activeUser.name} />
     </div>
     <img src="assets/icons/line.png" className='line' alt="" />
    </div>
  )
}

export default Home

