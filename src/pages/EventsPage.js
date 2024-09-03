// frontend/src/pages/EventsPage.js
import React from 'react';

const EventsPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Attend Events</h1>
      <p className="text-lg text-gray-700 mb-4">
        Stay updated with the latest events, webinars, and meetups organized by alumni.
      </p>

      {/* Placeholder for events list */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Upcoming Events</h2>
        <p className="text-gray-600">No events scheduled at the moment. Please check back later.</p>
      </div>
    </div>
  );
};

export default EventsPage;
