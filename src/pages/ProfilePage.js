// frontend/src/pages/ProfilePage.js
import React, { useState } from 'react';

const ProfilePage = () => {
  // Placeholder state for user profile information
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Alumni of XYZ University, currently working as a Software Engineer.',
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Profile</h1>
      <p className="text-lg text-gray-700 mb-4">
        Update your profile to help alumni and students find you for networking and mentoring.
      </p>

      {/* Profile Details */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Profile Information</h2>
        <p className="text-gray-700">
          <strong>Name:</strong> {profile.name}
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> {profile.email}
        </p>
        <p className="text-gray-700">
          <strong>Bio:</strong> {profile.bio}
        </p>
      </div>

      {/* Edit Profile Button */}
      <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePage;
