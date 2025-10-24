import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center shadow-md">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">CivicEase</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <button className="text-orange-600 hover:text-orange-700 transition">
              About
            </button>
            <button className="text-orange-600 hover:text-orange-700 transition">
              Contact
            </button>
            <button className="text-orange-600 hover:text-orange-700 transition">
              FAQ
            </button>
          </nav>

          {/* Buttons */}
          <div className="flex space-x-3">
            <button className="px-5 py-2 bg-orange-600 text-white text-sm font-medium rounded-full shadow hover:bg-orange-700 transition">
              Report Issue
            </button>
            <button className="px-5 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-full hover:bg-gray-200 transition">
              View Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex md:flex-row items-center justify-between gap-10">
          {/* Left - Text */}
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Report. Track.
              <br />
              <span className="text-orange-600">Resolve.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              Empowering citizens to report civic issues like potholes, garbage,
              streetlight faults, and more. Together, let’s make our cities
              cleaner, safer, and better.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <button className="px-6 py-3 bg-orange-600 text-white font-medium rounded-full shadow hover:bg-orange-700 transition transform hover:scale-105">
                Report an Issue
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition transform hover:scale-105">
                View Dashboard
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="src\assets\Urban Street Scene_ Civic Issues in India.png" // Replace with generated image
              alt="Illustration of civic issues in India"
              className="w-full max-w-lg h-auto rounded-3xl shadow-2xl animate-fadeIn"
            />
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-6 flex md:flex-row justify-center items-center gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center w-48 hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-orange-600">500+</h3>
            <p className="mt-2 text-gray-600">Issues Resolved</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center w-48 hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-orange-600">200</h3>
            <p className="mt-2 text-gray-600">Active Citizens</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center w-48 hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-orange-600">50+</h3>
            <p className="mt-2 text-gray-600">Municipal Projects</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-orange-600">
              Terms of Service
            </a>
            <a href="#" className="text-orange-600">
              Privacy Policy
            </a>
          </div>
          <p>© {new Date().getFullYear()} CivicEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
