'use client';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredMessages, setFilteredMessages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      const messagesArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messagesArray);
      setFilteredMessages(messagesArray);
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    setFilteredMessages(
      messages.filter((message) =>
        message.zip.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, messages]);

  const signupPage = () => {
    router.push("/signup");
  };

  const messagePage = () => {
    router.push("/details");
  };

  const complainPage = () => {
    router.push("/complain");
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 p-4'>

      <div className="flex justify-between items-center mb-6 fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-500 p-4 z-10">
        <button onClick={messagePage} className="bg-blue-500 text-white p-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none">
          Message
        </button>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Country Code"
          className="w-1/2 px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mx-4"
        />
        <button onClick={signupPage} className="bg-red-500 text-white p-2 rounded-lg shadow hover:bg-red-700 focus:outline-none border-2 border-white">
          Subscribe
        </button>
      </div>

      <div className="flex flex-col items-center justify-center pt-20">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-8 rounded-2xl shadow-2xl max-w-full w-full md:max-w-2xl h-full overflow-y-auto custom-scrollbar">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((message) => (
              <div key={message.id} className="mb-6 p-6 bg-gray-100 rounded-lg shadow-inner max-h-40">
                <div className="mb-2">
                  <span className="font-bold text-gray-700">Country Code: </span>
                  <span className="text-gray-900">{message.zip}</span>
                </div>
                <div className="mb-2">
                  <span className="font-bold text-gray-700">Message: </span>
                  <span className="text-gray-900">{message.message}</span>
                </div>
                <div>
                  <span className="font-bold text-green-700">Time: </span>
                  <span className="text-gray-900">{new Date(message.timestamp.seconds * 1000).toLocaleString()}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xl text-center text-gray-700">No messages found.</p>
          )}
        </div>
      </div>
      {/* detail button */}
      <button onClick={complainPage} className="bg-gray-200 text-black p-2 rounded-lg shadow hover:bg-purple-500 focus:outline-none border-2 border-white fixed bottom-5 right-3">
        Complain
      </button>
    </div>
  );
};

export default Messages;
