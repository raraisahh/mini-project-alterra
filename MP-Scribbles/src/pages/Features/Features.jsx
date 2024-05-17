import React from 'react';
import { MdAddCircleOutline, MdList, MdChat } from 'react-icons/md';

const Features = () => {

    return (
        <div id='Features' className="bg-scribbles-light">
            <div className="pt-24 flex flex-col items-center">
                <h1 className="font-playfair text-4xl font-bold text-scribbles-dark-purple mb-3">FEATURES</h1>
                <p className="text-lg text-center font-semibold text-scribbles-dark-purple opacity-90 mb-12 w-1/2">Explore the features of Scribbles that make journaling easy and delightful.</p>
            </div>
            <div className="px-40 flex gap-12 md:flex-col lg:flex-row items-center justify-center pb-24">
                <div className="card shadow-lg lg:w-1/2 md:w-11/12 transition-transform duration-100 transform hover:scale-105 hover:shadow-md">
                    <figure className="px-10 pt-10">
                        <MdAddCircleOutline className="w-16 h-16 text-scribbles-dark-purple" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-semibold text-scribbles-dark-purple mb-2">Add, Edit, Delete Notes</h2>
                        <p className="text-center text-scribbles-dark-purple opacity-90">Easily add, edit, and delete your notes to keep them organized.</p>
                    </div>
                </div>

                <div className="card shadow-lg lg:w-1/2 md:w-11/12 transition-transform duration-100 transform hover:scale-105 hover:shadow-md">
                    <figure className="px-10 pt-10">
                        <MdList className="w-16 h-16 text-scribbles-dark-purple" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-semibold text-scribbles-dark-purple mb-2">Notes List</h2>
                        <p className="text-center text-scribbles-dark-purple opacity-90">View all your notes in a list for easy access and management.</p>
                    </div>
                </div>
                    
                <div className="card shadow-lg lg:w-1/2 md:w-11/12 transition-transform duration-100 transform hover:scale-105 hover:shadow-md">
                    <figure className="px-10 pt-10">
                        <MdChat className="w-16 h-16 text-scribbles-dark-purple" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-semibold text-scribbles-dark-purple mb-2">Chat with CS</h2>
                        <p className="text-center text-scribbles-dark-purple opacity-90">Chat or confide in a customer service representative (psychologist) for support.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;