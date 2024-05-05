/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

function Cs() {
    const [respond, setRespond] = useState();
    const [prompt, setPrompt] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const API_KEY = import.meta.env.VITE_API_KEY;

    async function handleSubmit(e) {
        setIsSubmit(true);
        console.log(API_KEY);
        e.preventDefault();
        const promptAwal =
        'kamu adalah seorang psikolog bernama cilia, kamu orang yang pengertian dan tenang. jawab custemoer sesuai dengan kepribadian kamu';
        const ApiBody = {
        model: "gpt-4",
        messages: [{ role: "user", content:`${promptAwal} + ${prompt}` }],
        };

        try {
        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_KEY,
            },
            body: JSON.stringify(ApiBody),
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setRespond(data.choices[0].message.content);
        setPrompt("");
        setIsSubmit(false);
        } catch (error) {
        console.error("Error:", error);
        setRespond("An error occurred while fetching the response.");
        setIsSubmit(false);
        }
    }

    return (
    <>
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="bg-gray-100 p-8 min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ask me anything!</h2>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg flex flex-col gap-4 bg-gray-50 p-6 rounded-lg shadow-md"
            >
                <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask your question..."
                className="p-4 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                type="submit"
                className={`py-2 px-4 rounded transition duration-300 ${
                    isSubmit
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                disabled={isSubmit}
                >
                {isSubmit ? "Sending..." : "Send"}
                </button>
            </form>

            {respond && (
                <div className="w-full max-w-lg mt-6 bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800">{respond}</p>
                </div>
            )}
        </div>

        {/* Footer */}
        <Footer />
    </>
    );
}

export default Cs;