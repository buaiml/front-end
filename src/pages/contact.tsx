import React from "react";
import Layout from "@/components/Layout";

const ContactUs: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-white text-center mb-6 font-mono">
            Contact Us
          </h1>

          <p className="text-white text-center mb-6 font-mono">
            Have questions or want to get involved? Reach out to us at:{" "}
          </p>
          <p className="text-center mb-6">
            <a
              href="mailto:buais@bu.edu"
              className="text-blue-400 underline hover:text-blue-300 font-mono text-xl"
            >
              buais@bu.edu
            </a>
          </p>

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
                href="https://www.instagram.com/buaisociety?igsh=ZG9pd3FhOXhzNnQy"
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
