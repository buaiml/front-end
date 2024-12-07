import React, { useState } from "react";
import Layout from "@/components/Layout"; 

const ContactUs: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing to our mailing list!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <Layout> 
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-white text-center mb-6 font-mono">
            Contact Us
          </h1>

          {/* Our Email */}
          <p className="text-white text-center mb-4 font-mono">
            Reach us at:{" "}
            <a
              href="mailto:buais@bu.edu"
              className="text-blue-400 underline hover:text-blue-300 font-mono"
            >
              buais@bu.edu
            </a>
          </p>

          {/* Mailing List */}
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
            <label htmlFor="email" className="text-white font-medium font-mono">
              Join our Mailing List:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition font-mono"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <p className="text-green-400 text-center mt-4 font-mono">{message}</p>
          )}

          {/* Social Links */}
          <div className="mt-6 text-center">
            <p className="text-white mb-2 font-mono">Join our community:</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://discord.gg/TyubkeGSXj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-mono"
              >
                Discord
              </a>
              <a
                href="https://www.instagram.com/buaisociety?igsh=ZG9pd3FhOXhzNnQy" aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-mono"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;