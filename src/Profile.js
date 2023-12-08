// Profile.js

import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { useUser } from './UserContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { userData: userDataPromise } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await userDataPromise;
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userDataPromise]);

  console.log('User Data in Profile:', userData);

  return (
    <div className="profile-card">
      {userData ? (
        <>
          <h2>User Profile</h2>
          <div className="profile-field">
            <strong>Name:</strong> {userData.firstName} {userData.lastName}
          </div>
          <div className="profile-field">
            <strong>Email:</strong> {userData.email}
          </div>
          {/* Add more fields based on your userData structure */}
        </>
      ) : (
        <p>
          <ul>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </p>
      )}
    </div>
  );
};

export default Profile;
