import React from 'react';
import EventsList from './EventsList';
import Link from 'next/link';

const EventSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-white text-gray-800">
      <h2 className="text-5xl font-bold mb-8 text-center">Upcoming Event</h2>
      <div className="max-w-4xl w-full bg-gray-100 rounded-lg shadow-lg p-6">
        <EventsList maxEvents={1} />
      </div>
      <div className="mt-12 text-center">
        <p className="text-xl mb-4">Don't miss out on this exciting opportunity!</p>
        <Link
          href="/signup-link" // Replace with your actual signup link
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default EventSection;
