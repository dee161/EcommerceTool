// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const authenticateUser = async (email, password) => {
//     try {
//       const projectKey = '12345678';
//       const region = 'eu-central-1.aws';
//       const authApiUrl = `https://api.${region}.commercetools.com/${projectKey}/me/login`;
  
//       const headers = {
//         'Authorization': 'Bearer 0GPUVarHSHZ5XiEXqwY06L0amkAt4AIu',
//         'Content-Type': 'application/json',
//       };
  
//       console.log('Request URL:', authApiUrl);
//       console.log('Request Headers:', headers);
//       console.log('Request Payload:', { email, password });
  
//       const response = await axios.post(authApiUrl, { email, password }, { headers });
  
//       console.log('Response Status:', response.status);
//       console.log('Response Data:', response.data);
  
//       // Assuming Commerce Tools returns a token on successful authentication
//       const authToken = response.data.token;
//       console.log('Authentication successful. Token:', authToken);
  
//       // You can store the token in your application for subsequent authenticated requests
  
//       return authToken;
//     } catch (error) {
//       console.error('Error during authentication:', error);
  
//       if (error.response) {
//         console.error('Response Status:', error.response.status);
//         console.error('Response Data:', error.response.data);
//       }
  
//       throw error;
//     }
//   };
  
//   const handleLogin = async () => {
//     try {
//       console.log('Attempting to log in with email:', email);
//       const authToken = await authenticateUser(email, password);
//       console.log('Authentication successful. Token:', authToken);
//       // Store the token or perform further actions
//     } catch (error) {
//       console.error('Authentication failed:', error.message || error);
//     }
//   };
//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       <div className="form-group">
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />
//       </div>
//       <div className="form-group">
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//         />
//       </div>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useUser } from './UserContext';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const { updateUser,userData } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const authenticateUser = async (email, password) => {
    try {
      const projectKey = '12345678';
      const region = 'eu-central-1.aws';
      const authApiUrl = `https://api.${region}.commercetools.com/${projectKey}/me/login`;

      const headers = {
        'Authorization': 'Bearer VJk8VqIITAzugNLrMf19uOstRIA12hjO',
        'Content-Type': 'application/json',
      };

      console.log('Request URL:', authApiUrl);
      console.log('Request Headers:', headers);
      console.log('Request Payload:', { email, password });

      const response = await axios.post(authApiUrl, { email, password }, { headers });

      console.log('Response Status:', response.status);
      console.log('Response Data:', response.data);

      // Assuming Commerce Tools returns a token on successful authentication
      const authToken = response.data.customer.token; // Update this based on the actual structure
      console.log('Authentication successful. Token:', authToken);

      // You can store the token in your application for subsequent authenticated requests

      return authToken, response.data;
    } catch (error) {
      console.error('Error during authentication:', error);

      if (error.response) {
        console.error('Response Status:', error.response.status);
        console.error('Response Data:', error.response.data);
      }

      throw error;
    }
  };
  const getUserData = async (authToken) => {
    try {
      if (authToken && authToken.customer) {
        // Assuming your user data is directly available in the login response
        // Adjust this line based on the actual structure of your response data
        const userData = authToken.customer; // Update this based on the actual structure
  
        console.log('User Data:', userData);
  
        return userData;
      } else {
        throw new Error('Invalid user data in authToken');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };
  const handleLogin = async () => {
    try {
      console.log('Attempting to log in with email:', email);
      const authToken = await authenticateUser(email, password);

      // Assuming Commerce Tools returns user data on successful authentication
      const userData = getUserData(authToken); // Implement this function
      updateUser(userData);

      console.log('Authentication successful. Token:', authToken);
      alert('Authentication successful!');
      navigate('/');
    } catch (error) {
      console.error('Authentication failed:', error.message || error);
    }
  }; 

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
