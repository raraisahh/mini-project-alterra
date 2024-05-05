/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

function MainPage() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    return (
    <>
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="mx-16 h-screen mt-14">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <p className="text-center text-scribbles-dark-purple text-lg font-bold mb-8">Start writing your thoughts, feelings, and memories!</p>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-scribbles-dark-purple text-sm font-bold mb-2">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="text" className="block text-scribbles-dark-purple text-sm font-bold mb-2">Text:</label>
                    <textarea id="text" value={text} onChange={(e) => setText(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="7" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-scribbles-dark-purple text-sm font-bold mb-2">Date:</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="flex items-center justify-end">
                    <button type="submit" className="bg-scribbles-dark-purple hover:bg-scribbles-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Kirim</button>
                </div>
            </form>
        </div>

        {/* Footer */}
        <Footer />
    </>
    );
}

export default MainPage;