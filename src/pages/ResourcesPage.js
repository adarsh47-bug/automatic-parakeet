// frontend/src/pages/ResourcesPage.js
import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Access Resources</h1>
      <p className="text-lg text-gray-700 mb-4">
        Browse a collection of valuable resources shared by alumni and experts in various fields.
      </p>

      {/* Placeholder for resources list */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Available Resources</h2>
        <p className="text-gray-600">No resources available at the moment. Please check back later.</p>
      </div>
    </div>
  );
};

export default ResourcesPage;
