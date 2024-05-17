import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabase/client';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    // console.log(form);

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
        if (!form.email || !form.password || !form.username) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            });
            return;
        }

        try {
            // Melakukan proses sign up
            const { data, error } = await supabase.auth.signUp(
                {
                    email: form.email,
                    password:  form.password,
                    username: form.username                
                }
            )
            console.log(data)
            // Menampilkan alert jika terjadi error saat sign up
            if (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                });
            } else {
                // Sign up berhasil
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Check your email for verification link.',
                });

                // Mengosongkan nilai formulir setelah submit
                setForm({
                    username: '',
                    email: '',
                    password: ''
                });
            }
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-scribbles-light py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-md p-8">
                <div>
                    <h2 className="mt-6 mb-16 text-center text-2xl font-extrabold text-scribbles-dark-purple">
                        Sign Up for an account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input 
                            type="text" 
                            className="grow" 
                            placeholder="username" 
                            name="username"
                            value={form.username} 
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input 
                            type="text" 
                            className="grow" 
                            placeholder="email"
                            name="email"
                            value={form.email} 
                            onChange={handleChange}
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
                        />
                    </label>

                    <div>
                        <button 
                            type="submit" 
                            className="group relative mt-16 w-full flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-scribbles-light-purple hover:bg-scribbles-dark-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center">
                    <span className="text-scribbles-dark-purple mr-1">Already have an account? </span>
                    <Link to="/login" className="text-scribbles-dark-purple hover:text-scribbles-light-purple">Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
