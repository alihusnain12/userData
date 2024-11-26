import React from 'react'

const Page = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-t from-yellow-500 to-pink-500 flex justify-center items-center'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <form className='bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md w-full border'>
                <h2 className='text-black font-bold text-2xl text-center'>Complaint</h2>
                <div className='mb-4'>
                    <label className='text-white mb-2 font-semibold'>Number</label>
                    <input
                    placeholder='Enter Your Name'
                    type='text'
                     className='w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>
                <div className='mb-4'>
                    <label className='text-white mb-2 font-semibold'>Complaint</label>
                    <textarea
                    placeholder='Enter Your complaint'
                    type='text'
                     className='w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-36'
                    />
                </div>
                <button type='submit' className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'>
            Submit
          </button>
            </form>
        </div>
    </div>
  )
}

export default Page