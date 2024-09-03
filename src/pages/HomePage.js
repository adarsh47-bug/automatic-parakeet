// frontend/src/pages/HomePage.js

// frontend/src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';
import CallToAction from '../components/CallToActions';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="flex-grow p-8 bg-gray-100">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-center text-blue-800">
            Welcome to the Alumni Platform
          </h1>
          <p className="text-xl text-center mt-4 text-gray-700">
            Connect, Learn, and Grow with Alumni and Students
          </p>
        </header>

        {/* Features Section */}
        <section className="my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Find a Mentor"
            description="Get guidance from experienced alumni who can help you navigate your career path."
            link="/mentorship"
          />
          <FeatureCard
            title="Join Discussions"
            description="Participate in forums and discussions to seek advice, share knowledge, and connect with others."
            link="/forum"
          />
          <FeatureCard
            title="Attend Events"
            description="Stay updated with the latest events, webinars, and meetups organized by alumni."
            link="/events"
          />
          <FeatureCard
            title="Access Resources"
            description="Browse a collection of valuable resources shared by alumni and experts in various fields."
            link="/resources"
          />
          <FeatureCard
            title="Job Board"
            description="Explore job opportunities shared by alumni and apply directly through the platform."
            link="/jobs"
          />
          <FeatureCard
            title="Your Profile"
            description="Update your profile to help alumni and students find you for networking and mentoring."
            link="/profile"
          />
        </section>

        {/* Call to Action Section */}
        <CallToAction />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
