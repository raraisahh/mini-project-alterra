import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRouting() { 
    const navigate = useNavigate();

    // Fungsi untuk memeriksa apakah pengguna sudah login
    function checkLogin() {
        return localStorage.getItem('token') ? true : false;
    }

    useEffect (() => {
        // Check login saat komponen dimuat
        if (!checkLogin()) {
            navigate('/login');
        }
    }, [navigate]);
    
    // Render Outlet jika user sudah login
    return (
        <div>
            <Outlet />
        </div>
    )
}
