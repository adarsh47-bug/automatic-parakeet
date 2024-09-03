// frontend/src/pages/JobsPage.js
import React from 'react';

const JobsPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Job Board</h1>
      <p className="text-lg text-gray-700 mb-4">
        Explore job opportunities shared by alumni and apply directly through the platform.
      </p>

      {/* Placeholder for job listings */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Job Opportunities</h2>
        <p className="text-gray-600">No job opportunities available at the moment. Please check back later.</p>
      </div>
    </div>
  );
};

export default JobsPage;
