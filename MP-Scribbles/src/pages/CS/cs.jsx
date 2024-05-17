import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

function Cs() {
    const [respond, setRespond] = useState([
        {
            role: 'Cilia',
            content: 'Halo! Ada yang bisa saya bantu?'
        }
    ]);
    const [prompt, setPrompt] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    // Mendapatkan API_KEY 
    const API_KEY = import.meta.env.VITE_API_KEY;

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmit(true);
    
        const promptAwal =
            'kamu adalah seorang psikolog bernama cilia, kamu orang yang pengertian dan tenang. jawab customer sesuai dengan kepribadian kamu';
    
        // Mengirim permintaan ke API OpenAI
        try {
            const response = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + API_KEY,
                    },
                    body: JSON.stringify({
                        model: "gpt-4",
                        // Menyertakan pesan awal dan input pengguna ke dalam permintaan
                        messages: [{ role: "user", content: `${promptAwal} ${prompt}` }],
                    }),
                }
            );
    
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
    
            const data = await response.json();
            const reply = data.choices[0].message.content;
    
            // Menambahkan respon dari Cilia dan input pengguna ke dalam state respond
            setRespond([
                ...respond, 
                { role: 'User', content: prompt },
                { role: 'Cilia', content: reply }
            ]);
    
            // Mengosongkan input pengguna setelah pengiriman berhasil
            setPrompt("");
            setIsSubmit(false);
        } catch (error) {
            console.error("Error:", error);
            // Menambahkan pesan error ke array respond
            setRespond([...respond, { role: 'Cilia', message: "An error occurred while fetching the response." }]);
            setIsSubmit(false);
        }
    }

    return (
    <>
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="bg-scribbles-light p-8 min-h-screen flex flex-col justify-center items-center mt-7">
            <div className="lg:w-2/3 md:w-5/6">
                <div className="mb-4 flex flex-col items-center border border-scribbles-dark-purple rounded-lg bg-white p-4">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
                    <p className="font-bold text-scribbles-dark-purple">Cilia</p>
                </div>
                <div className="overflow-y-auto h-[450px] mb-4 border border-scribbles-dark-purple rounded-lg bg-white p-4">
                    {respond.map((message, index) => (
                        <div key={index} className={`flex ${message.role === 'Cilia' ? 'justify-start' : 'justify-end'} mb-3`}>
                            {message.role === 'Cilia' ? (
                                <>
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                                    <div className={`p-2 rounded-lg ${message.role === 'Cilia' ? 'bg-scribbles-purple text-white' : 'bg-scribbles-light-pink text-scribbles-dark-purple'}`}>
                                        <p>{message.content}</p> 
                                    </div>
                                </>
                                ) : (
                                <>
                                    <div className={`p-2 rounded-lg ${message.role === 'Cilia' ? 'bg-scribbles-purple text-white' : 'bg-scribbles-light-pink text-scribbles-dark-purple'}`}>
                                        <p>{message.content}</p> 
                                    </div>
                                    <img src="https://i.pinimg.com/736x/5c/7c/80/5c7c8044238a6384d8fd05f94c00bf67.jpg" alt="Avatar" className="w-8 h-8 rounded-full ml-2" />
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Ask your question..."
                        className="flex-grow p-4 border border-scribbles-dark-purple rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-scribbles-dark-purple"
                    />
                    <button
                        type="submit"
                        className={`flex-shrink-0 py-2 px-4 rounded-r-lg transition duration-300 ${isSubmit ? "bg-scribbles-pink text-white cursor-not-allowed" : "bg-scribbles-purple text-white hover:bg-scribbles-dark-purple"}`}
                        disabled={isSubmit}
                    >
                        {isSubmit ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>

        {/* Footer */}
        <Footer />
    </>
    );
}

export default Cs;