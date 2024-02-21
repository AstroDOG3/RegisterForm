import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const user = location.state.user[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="wrapper">
      <h1>Homepage</h1>
      <form onSubmit={handleSubmit}>
        <div className="personalInfo">
          <strong>Username : </strong><br></br>
          <p id="userName">{user.userName}</p>
          <strong>Name : </strong>
          <p id="firstName">{user?.firstName}</p>
          <strong>Surname : </strong>
          <p id="surName">{user?.surName}</p>
          <strong>Gender : </strong>
          <p id="gender">{user?.gender}</p>
          <strong>Date of Birth : </strong>
          <p id="dateOfBirth">{user?.dateOfBirth}</p>
          <strong>E-Mail : </strong>
          <p id="eMail">{user?.email}</p>
        </div>
        <div className="logout-button">
          <button type="submit" id="logout">Log out</button>
        </div>
      </form>
    </div>
  );
}

export default Homepage;
