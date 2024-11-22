import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa'; // Import icons
import logoImage from '../assets/OIP.png'; // Add logo import (replace path if needed)

function Register() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Simple validation
    if (!fullName || !username || !email || !password) {
      setError('All fields are required!');
      return;
    }

    // Save user data to local storage for testing
    const user = { fullName, username, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to login page after successful registration
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-900"> {/* Dark blue background */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Header Section with Logo */}
        <header className="flex flex-col items-center justify-center mt-6 mb-10">
          <img src={logoImage} alt="Logo" className="w-20 h-20 mb-4 rounded-full shadow-md" />
          <h1 className="text-4xl font-extrabold text-center text-gray-800">Kitchen Management System</h1>
        </header>

        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          <FaUserPlus className="inline-block mr-2" />
          Register
        </h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaUser className="text-gray-500 ml-2" />
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 pl-4 border-none rounded-r-lg"
              placeholder="Full Name"
            />
          </div>
        </div>

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
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaEnvelope className="text-gray-500 ml-2" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-4 border-none rounded-r-lg"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaLock className="text-gray-500 ml-2" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-4 border-none rounded-r-lg"
              placeholder="Password"
            />
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
