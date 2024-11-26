"use client";
import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AllDetails = () => {
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'messages'), {
        zip: zip,
        message: message,
        details: details,
        timestamp: new Date()
      });
      alert("Message submitted successfully");
      router.push("/AllData");
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting message');
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-700 to-white/35'>
      <div className='w-full h-full flex flex-col justify-center items-center p-4'>
        <form className='bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md w-full border' onSubmit={handleSubmit}>
          <h2 className='text-2xl font-bold mb-4 text-center'>Enter Details</h2>
          {/* zipcode */}
          <div className='mb-4'>
            <label className='mb-2 font-semibold'>Zipcode</label>
            <input
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              type='text'
              placeholder='Enter your Zipcode'
              className='w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          {/* message */}
          <div className='mb-4'>
            <label className='mb-2 font-semibold'>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Enter your message'
              className='w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          {/* details */}
          <div className='mb-4'>
            <label className='mb-2 font-semibold'>Details</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder='Enter your details'
              className='w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <button type='submit' className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AllDetails;
