/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const dummyAccess = { username: "admin", password: "admin" };
        if (username === dummyAccess.username && password === dummyAccess.password) {
            localStorage.setItem("user", JSON.stringify(dummyAccess)); // "user" itu key, kanan user, adalah value nya
            localStorage.setItem("isLoggedIn", true);
            navigate('/mainpage');
        } 
        else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-scribbles-light py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-scribbles-dark-purple">
                        Log in to your account
                    </h2>
                </div>
                {error && 
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative">
                        {error}
                    </div>
                }
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label 
                                htmlFor="username" 
                                className="sr-only"
                            >
                                Username
                            </label>
                            <input 
                                id="username" 
                                name="username" 
                                type="text" 
                                autoComplete="username" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                                placeholder="Username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label 
                                htmlFor="password" 
                                className="sr-only"
                            >
                                Password
                            </label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                autoComplete="current-password" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <p className="font-medium text-scribbles-dark-purple">
                                Username: admin <br />
                                Password: admin
                            </p>
                        </div>
                    </div>

                    <div>
                        <button 
                            type="submit" 
                            className="group relative w-full flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-scribbles-light-purple hover:bg-scribbles-dark-purple"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
