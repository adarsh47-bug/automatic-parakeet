// frontend/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import MentorshipPage from './pages/MentorshipPage';
import ForumPage from './pages/ForumPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import JobsPage from './pages/JobsPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mentorship" element={<MentorshipPage />} />
      <Route path="/forum" element={<ForumPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;