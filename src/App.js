import React, { useState } from 'react';
import Login from './Components/Login';   // Correct path to Login component
import Signup from './Components/Signup'; // Correct path to Signup component

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // Simulate successful login (set user data and logged in state)
    setUser(userData);
    setLoggedIn(true);
  };

  const handleSignup = (userData) => {
    // Simulate successful signup (set user data and logged in state)
    setUser(userData);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear user data and set logged in state to false
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>My Login and Signup App</h1>
      {/* Conditional rendering based on loggedIn state */}
      {!loggedIn ? (
        <>
          <Login handleLogin={handleLogin} />
          <Signup handleSignup={handleSignup} />
        </>
      ) : (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;