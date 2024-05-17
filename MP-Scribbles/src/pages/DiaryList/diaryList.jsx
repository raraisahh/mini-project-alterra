import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdNoteAdd } from 'react-icons/md';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import { supabase } from '../../supabase/client';
import Swal from 'sweetalert2';

function DiaryList({ data, setData}) {
    const [editingDiary, setEditingDiary] = useState({
        title: '',
        text: '',
        date: '' 
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function fetchData() {
        try {
            // Mengambil data dari Supabase
            const { data, error } = await supabase 
                .from('diary')
                .select('*');

            // Melemparkan error jika terjadi
            if (error) {
                throw error; 
            }
            // Memperbarui state data
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [setData]);

    console.log(data);
        
    async function handleDelete(id) {
        try {
            // Menghapus entri diary
            const { error } = await supabase 
                .from('diary')
                .delete()
                .eq('id', id);

            // Melemparkan error jika terjadi
            if (error) {
                throw error; 
            }

            // Menghapus entri yang dihapus dari state data lokal
            setData(data.filter(diary => diary.id !== id));

            console.log('Deleted');
            // Menampilkan alert jika berhasil di hapus
            Swal.fire({
                icon: 'success',
                title: 'Sukses',
                text: 'Diary entry successfully deleted.'
            });
        } catch (error) {
            console.error('Error deleting diary entry:', error.message);
        }
    }

    function handleEdit(diary) {
        setEditingDiary(diary);
        // Membuka modal untuk pengeditan
        setIsModalOpen(true); 
    }

    async function handleUpdate() {
        try {
            // Memperbarui entri diary
            const { error } = await supabase 
                .from('diary')
                .update({
                    title: editingDiary.title,
                    text: editingDiary.text,
                    created_at: editingDiary.date 
                })
                .eq('id', editingDiary.id);

            // Melemparkan error jika terjadi
            if (error) {
                throw error; 
            }

            // Mengupdate entri yang diperbarui dalam state data lokal
            setData(data.map(diary => {
                if (diary.id === editingDiary.id) {
                    return {
                        ...diary,
                        title: editingDiary.title,
                        text: editingDiary.text,
                        created_at: editingDiary.date 
                    };
                }
                return diary;
            }));

            setEditingDiary({
                title: '',
                text: '',
                date: '' 
            });
            setIsModalOpen(false);
            console.log('Diary updated successfully');
            // Menampilkan alert jika berhasil diperbarui
            Swal.fire({
                icon: 'success',
                title: 'Sukses',
                text: 'Diary entry successfully updated.'
            }); 
        } catch (error) {
            console.error('Error updating diary entry:', error.message);
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
                                <MdEdit className="text-green-500 mr-2 cursor-pointer" onClick={() => handleEdit(diary)}/>
                                <MdDelete className="text-red-500 cursor-pointer" onClick={() => handleDelete(diary.id)}/>
                            </div>
                        </div>
                        <Link to={`/diarylist/${diary.id}`} className="text-scribbles-dark-purple text-lg font-semibold mb-2">{diary.title}</Link>
                        <p className="text-gray-700 overflow-hidden truncate">{diary.text}</p>
                    </div>
                ))}
            </div>
            <hr />
            <div className="flex justify-center items-center mt-8">
                <Link to="/mainpage" className="flex items-center text-scribbles-dark-purple font-medium text-lg hover:underline">
                    <MdNoteAdd className="text-scribbles-dark-purple mr-2" />
                    New Note
                </Link>
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

export default DiaryList;