import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <AlertCircle className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">CivicEngage</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/report" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Report Issue
            </Link>
            <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link to="/register" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <UserPlus className="h-5 w-5" />
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}