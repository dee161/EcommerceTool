// SignupForm.js

import React, { useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const projectKey = '12345678';
  const region = 'eu-central-1.aws';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a signup API request to Commerce Tools
      const response = await axios.post(
        `https://api.${region}.commercetools.com/${projectKey}/me/signup`,
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: {
            'Authorization': 'Bearer VJk8VqIITAzugNLrMf19uOstRIA12hjO',
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle the response (for example, show a success message)
      console.log('Signup successful:', response.data);
      navigate('/');

    } catch (error) {
      // Handle errors (for example, show an error message)
      console.error('Signup failed:', error);
    }
  };
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSubmit}>signup</button>
      </form>
    </div>
  );
};

export default Signup;
