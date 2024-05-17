import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/client';
import Swal from 'sweetalert2';

function Login () {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    console.log(form);

    // Handler untuk mengubah state form ketika nilai input berubah
    function handleChange(e) {
        setForm({
           ...form,
            [e.target.name]: e.target.value
        });
    }
    
    async function handleSubmit(e) {
        e.preventDefault();

        // Validasi form
        if (!form.email || !form.password) {
            // Menampilkan alert error 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email and password are required!',
            });
            return;
        }
        
        try {
            // Melakukan proses login
            const { data, error } = await supabase.auth.signInWithPassword(
            {
                email: form.email,
                password:  form.password,
            })
            // console.log(data);
            if (error) {
                // Menampilkan alert jika terjadi kesalahan saat login
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                });
            } else {
                // Login berhasil
                const accessToken = data.session.access_token; 
                if (accessToken) {
                    // Menyimpan token ke local storage
                    localStorage.setItem("token", accessToken);
                    
                    // Menampilkan alert jika login berhasil
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'You have successfully logged in.',
                        timer: 2000, 
                        showConfirmButton: false 
                    }).then(() => {
                        navigate('/mainpage');
                    });
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-scribbles-light py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-md p-8">
                <div>
                    <h2 className="mt-6 mb-16 text-center text-2xl font-extrabold text-scribbles-dark-purple">
                        Log in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input 
                            type="text" 
                            className="grow" 
                            placeholder="email"
                            name="email"
                            value={form.email} 
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input 
                            type="password" 
                            className="grow" 
                            placeholder="password"
                            name="password"
                            value={form.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>

                    <div>
                        <button 
                            type="submit" 
                            className="group relative mt-16 w-full flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-scribbles-light-purple hover:bg-scribbles-dark-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center">
                    <span className="text-scribbles-dark-purple mr-1">Do not have an account?</span>
                    <Link to="/signup" className="text-scribbles-dark-purple hover:text-scribbles-light-purple">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
