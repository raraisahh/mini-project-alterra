import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRouting({ adminOnly = false }) { 
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const adminStatus = localStorage.getItem('isAdmin') === "true"; // Perbaikan: Cek sebagai string "true"

        if (!token) {
            navigate('/login'); // Jika tidak login, arahkan ke login
        } else {
            setIsAuthenticated(true);
            setIsAdmin(adminStatus);

            if (adminOnly && !adminStatus) {
                navigate('/mainpage'); // Jika bukan admin, arahkan ke halaman utama
            }
        }
    }, [navigate, adminOnly]);

    return isAuthenticated ? <Outlet /> : null;
}