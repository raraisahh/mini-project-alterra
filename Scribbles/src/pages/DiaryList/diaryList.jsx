/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import { supabase } from '../../supabase/client';

function DiaryList({ data, setData}) {
    // const [data, setData] = useState([]);
    const [editingDiary, setEditingDiary] = useState({
        title: '',
        text: '',
        date: '' 
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function fetchData() {
    
        const resp = await supabase
            .from('diary')
            .select('*')
            .then(({ data }) => {
                return data || [];
            });
        // console.log(data);
        setData(resp);
    }
    useEffect(() => {
        fetchData();
    }, [setData]);
    console.log(data);
        
    async function handleDelete(id) {
        const { error } = await supabase
            .from('diary')
            .delete()
            .eq('id', id)
        if (error) {
            console.error(error);
        } else {
            console.log('Deleted');
            window.location.reload();
        }
    }

    function handleEdit(diary) {
        setEditingDiary(diary);
        setIsModalOpen(true); 
    }

    async function handleUpdate() {
        try {
            const { error } = await supabase
                .from('diary')
                .update({
                    title: editingDiary.title,
                    text: editingDiary.text,
                    created_at: editingDiary.date 
                })
                .eq('id', editingDiary.id);

            if (error) {
                console.error(error);
            } else {
                setEditingDiary({
                    title: '',
                    text: '',
                    date: '' 
                });
                setIsModalOpen(false);
                console.log('Diary updated successfully');
                window.location.reload();
            }
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
    <>
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="mx-16 my-28 ">
            <h1 className="font-playfair text-3xl font-bold text-scribbles-dark-purple mb-6">Diary List</h1>
            <div className="overflow-y-auto h-[540px]">
                {data.map(diary => (
                    <div key={diary.id} className="bg-white shadow-md rounded p-6 mb-4 h-[150px]">
                        <div className="flex justify-between mb-4">
                            <p className="text-gray-600">{diary.created_at}</p>
                            <div className="flex items-center">
                                <MdEdit className="text-gray-500 mr-2" onClick={() => handleEdit(diary)}/>
                                <MdDelete className="text-gray-500" onClick={() => handleDelete(diary.id)}/>
                            </div>
                        </div>
                        <Link to={`/diarylist/${diary.id}`} className="text-scribbles-dark-purple text-lg font-semibold mb-2">{diary.title}</Link>
                        <p className="text-gray-700 overflow-hidden truncate">{diary.text}</p>
                    </div>
                ))}
            </div>
        </div>
        {/* Modal untuk menyunting catatan */}
        {isModalOpen && editingDiary && (
            <div id="editModal" className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="modal-box bg-white p-8 rounded-xl shadow-lg w-full">
                    <h2 className="text-xl font-bold mb-5 text-scribbles-purple text-center">Edit Diary</h2>
                    <label htmlFor="title" className="block text-scribbles-dark-purple text-sm font-bold mb-2">Date</label>
                    <input 
                        type="date" 
                        value={editingDiary.date} 
                        className="border rounded mb-2 p-2 w-full" 
                        onChange={e => setEditingDiary({...editingDiary, date: e.target.value})} // Mengupdate state tanggal
                        required 
                    />
                    <label htmlFor="title" className="block text-scribbles-dark-purple text-sm font-bold mb-2">Title:</label>
                    <input 
                        type="text" 
                        value={editingDiary.title} 
                        className="border rounded mb-2 p-2 w-full" 
                        onChange={e => setEditingDiary({...editingDiary, title: e.target.value})} 
                        required 
                    />
                    <label htmlFor="title" className="block text-scribbles-dark-purple text-sm font-bold mb-2">Text:</label>
                    <textarea 
                        value={editingDiary.text} 
                        className="border rounded mb-2 p-2 w-full" 
                        onChange={e => setEditingDiary({...editingDiary, text: e.target.value})} 
                        rows="4" 
                        required 
                    />
                    <div className="flex justify-end">
                        <button onClick={handleUpdate} className="bg-scribbles-dark-purple text-white px-4 py-2 rounded mr-2">Update</button>
                        <button onClick={() => setIsModalOpen(false)} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Cancel</button>
                    </div>
                </div>
            </div>
        )}

        {/* Footer */}
        <Footer />
    </>
    );
}

DiaryList.propTypes = {
    data: PropTypes.array.isRequired, 
    setData: PropTypes.func.isRequired
};

export default DiaryList;