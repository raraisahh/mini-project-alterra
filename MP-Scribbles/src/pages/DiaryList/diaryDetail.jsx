import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

const DiaryDetail = ({ data }) => {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        const selectedData = data.find(detail => detail.id.toString() === id);
        setDetail(selectedData);
    }, [id, data]);

    return (
        <>
        <Navbar />

        <div className="container mx-auto w-8/12 my-32">
            {detail ? (
                <div className="ml-10">
                    <p className="text-scribbles-dark-purple text-2xl font-bold mb-2">{detail.title}</p>
                    <p className="text-gray-600 mb-4 flex justify-end">{detail.created_at}</p>
                    <p className="text-gray-700 overflow-y-auto h-[520px] whitespace-pre-line">{detail.text}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Link to="/diarylist">
                <button className="bg-scribbles-dark-purple hover:bg-scribbles-purple rounded-lg text-white px-3 py-2 text-sm ml-10 mb-20 mt-8">
                    Back to Diary List
                </button>
            </Link>
        </div>

        <Footer />
        </>
    );
}

export default DiaryDetail;