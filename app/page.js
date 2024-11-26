'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import pic from '../app/public/assets/code.png';

const Page = () => {
  const [countryCode, setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const router = useRouter();

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Ensure only numbers are entered
    const regex = /^[0-9]*$/;
    if (regex.test(value)) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone && zip) {
      router.push("/details");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-100'>
      <div className='relative w-full h-full'>
        <Image
          src={pic}
          alt='Code Image'
          layout='fill'
          objectFit='cover'
          className='w-full h-full'
        />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-black/60 to-transparent'>
          <form className='bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-sm w-full' onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold mb-6 text-white text-center'>Contact Us</h2>
            <div className='mb-4'>
              <label htmlFor='countryCode' className='block text-white text-sm font-bold mb-2'>Country Code</label>
              <select
                id='countryCode'
                value={countryCode}
                className='block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400'
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value='+1'>+1 (USA)</option>
                <option value='+44'>+44 (UK)</option>
                <option value='+91'>+91 (India)</option>
                <option value='+81'>+81 (Japan)</option>
                <option value='+61'>+61 (Australia)</option>
                <option value='+92'>+92 (Pakistan)</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className='mb-4'>
              <label htmlFor='phone' className='block text-white text-sm font-bold mb-2'>Phone Number</label>
              <input
                type='tel'
                id='phone'
                value={phone}
                onChange={handlePhoneChange}
                className='block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Enter phone number'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='zipcode' className='block text-white text-sm font-bold mb-2'>Zipcode</label>
              <input
                type='text'
                id='zipcode'
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className='block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Enter your zipcode'
              />
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
