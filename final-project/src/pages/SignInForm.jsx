// SignInForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = () => {
    // Perform sign-in logic here
    // For simplicity, let's assume sign-in fails
    setSignInError('Invalid email or password');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md mt-24">
        <h3 className="text-2xl font-semibold mb-4">Sign In</h3>
        {signInError && (
          <div className="bg-red-200 text-red-800 px-4 py-2 mb-4 rounded">
            {signInError}
          </div>
        )}
        <form>
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
          <button
            type="button"
            onClick={handleSignIn}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Sign In
          </button>
          <Link to="/register" className="text-green-500 hover:underline">
            Are you new here? Register here.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;


