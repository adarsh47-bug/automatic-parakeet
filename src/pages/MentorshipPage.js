// frontend/src/pages/MentorshipPage.js
import React from 'react';

const MentorshipPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Find a Mentor</h1>
      <p className="text-lg text-gray-700 mb-4">
        Connect with experienced alumni who can guide you in your career journey.
      </p>

      {/* Placeholder for mentors list */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Available Mentors</h2>
        <p className="text-gray-600">No mentors available at the moment. Please check back later.</p>
      </div>
    </div>
  );
};

export default MentorshipPage;
