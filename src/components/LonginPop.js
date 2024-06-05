// src/components/LoginForm.js
import React from 'react';

const LoginForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="inset-0 fixed flex flex-col   items-center justify-center bg-gray-800 bg-opacity-75 ">
            <div className="bg-purple-100 relative rounded-lg px-11 p-10 w-full max-w-md">
                <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-xl float-right absolute top-1 right-2">
                    X
                </button>
                <h2 className="text-3xl  font-bold mb-1 text-center">Get started with Crest</h2>
                <p className="text-center mb-3 text-gray-500">Take a free tour of our platform</p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">First Name*</label>
                        <input type="text" id="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Last Name*</label>
                        <input type="text" id="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work Email*</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number*</label>
                        <input type="number" id="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Company Name*</label>
                        <input type="text" id="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
                    </div>
                    
                </form>
                <div className=" text-white bg-gradient-to-r w-[22.25%] mx-auto from-pink-400 from 65% to-purple-500 to 100% rounded-full ">
                        <button type="submit" className="rounded-full hover:bg-gradient-to-r from-purple-500 from 65% to-pink-400 to 100% hover:text-black transition-all duration-200 px-4 p-2 ">Submit </button>
                    </div>
                    <div className="flex justify-center mt-5  mx-auto gap-3">
                        <p>
                        Already have an account?

                        </p>
                        <p className="cursor-pointer bg-gradient-to-r from-pink-400 from 65% to-purple-500 to 100% inline-block text-transparent bg-clip-text  transition-all duration-200">Login</p>
                    </div>
            </div>
            
        </div>
    );
};

export default LoginForm;
