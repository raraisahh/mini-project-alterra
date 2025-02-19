import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabase/client";
import { MdSettings } from 'react-icons/md';
import Logo from './assets/Logo1.png';
import Footer from '../../components/Footer/footer';
import Swal from "sweetalert2";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase.from("profiles").select("id, email, role");

            if (error) {
                console.error("Error fetching users:", error.message);
                Swal.fire("Error", "Gagal mengambil daftar user.", "error");
            } else {
                // Filter agar admin tidak muncul di daftar user
                const filteredUsers = data.filter(user => user.role !== "admin");
                setUsers(filteredUsers);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {/* Navbar */}
            <div className="navbar bg-scribbles-light shadow px-5 fixed top-0 left-0 z-50">
                <div className="navbar-start pl-2">
                    <img src={Logo} alt="Logo" className="w-40" />
                </div>
                <div className="navbar-end">
                    <Link to='/logout' className="btn bg-scribbles-dark-purple text-white hover:bg-scribbles-purple hover:text-white">Log Out</Link>
                </div>
            </div>

            {/* main */}
            <div className="mx-16 mt-28 mb-14">
                <h1 className="font-playfair text-3xl font-bold text-scribbles-dark-purple mb-6">User List</h1>
                <div className="overflow-y-auto h-[540px]">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div key={user.id} className="bg-white shadow-md rounded p-6 mb-4">
                                <p className="text-scribbles-dark-purple text-lg font-semibold mb-2">{user.email}</p>
                            </div>
                        ))
                        ) : (
                        <div>
                            <p colSpan="2" className="text-center text-scribbles-dark-purple py-4">
                                Tidak ada user terdaftar.
                            </p>
                        </div>
                    )}
                </div>
                <hr />
                <div className="flex justify-center items-center mt-8">
                    <Link to="/manageuser" className="flex items-center text-scribbles-dark-purple font-medium text-lg hover:underline">
                        <MdSettings className="text-scribbles-dark-purple text-xl mr-1" />
                        Manage User
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AdminDashboard;