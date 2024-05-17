import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import { supabase } from '../../supabase/client';
import { TypeAnimation } from 'react-type-animation';
import Swal from 'sweetalert2'; 

function MainPage() {
    const [input, setInput] = useState ({
        title: "",
        text: "",
        date: ""
    });
    const [error, setError] = useState("");

    // Handler untuk mengubah state input ketika nilai input berubah
    function handleChange(e) {
        setInput({
           ...input,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        // Validasi input
        if (!input.title || !input.text || !input.date) {
            setError("Take your time! Please fill in all fields to continue.");
            return;
        }

        try {
            // Memasukkan data ke database
            const { error } = await supabase
                .from('diary')
                .insert({ 
                    title: input.title,
                    text: input.text,
                    created_at: input.date
                });

            if (error) {
                console.error(error);
            } else {
                // Menampilkan alert jika data berhasil ditambahkan
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your diary entry has been submitted successfully.',
                });

                // Mengosongkan nilai input setelah submit
                setInput({
                    title: "",
                    text: "",
                    date: ""
                });
                setError("");
                console.log("Diary entry submitted successfully!");
                console.log(input);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main */}
            <div className="lg:grid lg:grid-cols-3 mx-16 my-36 md:flex md:flex-col">
                <div className="flex pr-8 items-center text-scribbles-dark-purple lg:text-[50px] md:text-[30px]">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Hey! Welcome to your personal sanctuary!',
                            1000,
                            'Take a moment to embrace the tranquility',
                            1000,
                            'Let your thoughts flow freely',
                            1000,
                            'And craft beautiful memories on these pages',
                            1000,
                            'Ready to embark on this journey?',
                            1000,
                        ]}
                        speed={40}
                        repeat={Infinity}
                    />
                </div>
                <form className="bg-white col-span-2 shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-6" onSubmit={handleSubmit}>
                    {error && 
                        <p className="text-red-500 text-sm mb-4">{error}</p>
                    }
                    <div className="mb-4 flex justify-end">
                        <input 
                            type="date" 
                            name='date' 
                            id="date" 
                            value={input.date} 
                            className="shadow appearance-none border rounded lg:w-1/7 md:w-2/7 py-2 px-3 text-scribbles-dark-purple leading-tight focus:outline-none focus:shadow-outline" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            name='title' 
                            id="title" 
                            value={input.title} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-scribbles-dark-purple leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Enter title for your diary entry" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="mb-4">
                        <textarea 
                            id="text" 
                            name='text' 
                            value={input.text} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-scribbles-dark-purple leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Write your diary entry here..." 
                            onChange={handleChange} 
                            rows="13"
                        />
                    </div>
                    
                    <div className="flex items-center justify-end">
                        <button 
                            type="submit" 
                            className="bg-scribbles-dark-purple hover:bg-scribbles-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default MainPage;
