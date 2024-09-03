// frontend/src/pages/ForumPage.js
import React from 'react';

const ForumPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Join Discussions</h1>
      <p className="text-lg text-gray-700 mb-4">
        Engage in forums and discussions to seek advice, share knowledge, and connect with others.
      </p>

      {/* Placeholder for forum threads */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Discussion Threads</h2>
        <p className="text-gray-600">No discussion threads available at the moment. Please start a new thread.</p>
      </div>
    </div>
  );
};

export default ForumPage;
