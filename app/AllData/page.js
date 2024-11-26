'use client';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Ensure the path is correct
import { collection, getDocs } from 'firebase/firestore';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      const messagesArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messagesArray);
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 p-4">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-white">Messages</h2>
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full overflow-y-auto h-[70vh] custom-scrollbar">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div key={message.id} className="mb-6 p-6 bg-gray-100 rounded-lg shadow-inner max-h-40 overflow-y-auto custom-scrollbar">
              <div className="mb-2">
                <span className="font-bold text-gray-700">Zipcode: </span>
                <span className="text-gray-900">{message.zip}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold text-gray-700">Message: </span>
                <span className="text-gray-900">{message.message}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold text-gray-700">Details: </span>
                <span className="text-gray-900">{message.details}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Timestamp: </span>
                <span className="text-gray-900">{new Date(message.timestamp.seconds * 1000).toLocaleString()}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-center text-gray-700">No messages found.</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
