// Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = () => {
    // Input validation and registration logic

    // Assuming registration is successful
    setRegistrationSuccess(true);

    // Redirect to the sign-in page
    navigate('/farmer');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md mt-24">
        <h3 className="text-2xl font-semibold mb-4">Register</h3>
        {registrationSuccess && (
          <div className="bg-green-200 text-green-800 px-4 py-2 mb-4 rounded">
            Registration successful! You can now sign in.
          </div>
        )}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value.replace(/[^A-Za-z]/g, ''))}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value.replace(/[^A-Za-z]/g, ''))}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleRegistration}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Register
          </button>
          <Link to="/farmer" className="text-blue-500 hover:underline">
  Already have an account? Sign in.
</Link>

        </form>
      </div>
    </div>
  );
};

export default Register;

