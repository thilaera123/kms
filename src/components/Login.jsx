import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import logoImage from '../assets/OIP.png'; // Import the logo image

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Sample credentials check from localStorage
    const storedUser = localStorage.getItem('user');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUser && password === storedPassword) {
      // Successful login, redirect to the dashboard
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-900"> {/* Dark blue background */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Header Section with Logo */}
        <header className="flex flex-col items-center justify-center mb-6">
          <img src={logoImage} alt="Logo" className="w-20 h-20 mb-4 rounded-full shadow-md" />
          <h1 className="text-2xl font-extrabold text-center text-gray-800">
            Kitchen Management System
          </h1>
        </header>

        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          <FaSignInAlt className="inline-block mr-2" />
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <div className="flex items-center border border-gray-300 rounded mt-1">
              <FaUser className="text-gray-500 ml-2" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 pl-4 border-none rounded-r-lg"
                placeholder="Username"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded mt-1">
              <FaLock className="text-gray-500 ml-2" />
              <input
                type={showPassword ? 'text' : 'password'} // Toggle input type based on state
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 pl-4 border-none rounded-r-lg"
                placeholder="Password"
              />
              {/* Toggle show password icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                className="text-gray-500 mr-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <button onClick={() => navigate('/register')} className="text-blue-500 hover:underline">
              Register here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
