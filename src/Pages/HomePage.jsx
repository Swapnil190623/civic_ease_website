import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen min-w-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">CivicEase</h1>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-500">About</a>
            <a href="#" className="hover:text-blue-500">Contact</a>
            <a href="#" className="hover:text-blue-500">FAQ</a>
          </nav>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600">
              Report Issue
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-full hover:bg-gray-200">
              View Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Report. Track.<br />
            <span className="text-blue-500">Resolve.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            CivicEase is your platform for reporting and tracking civic issues in your community. Join us in making our city a better place.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600">
              Report an Issue
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200">
              View Dashboard
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/636/954/non_2x/smart-city-or-iot-concept-road-leading-to-city-landscape-in-blue-color-and-global-web-with-smart-systems-icons-on-background-illustration-vector.jpg"
            alt="Smart city illustration"
            className="w-100 h-auto rounded-3xl shadow-2xl"
          />
        </div>
      </main>

      {/* Stats Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center w-48">
            <h3 className="text-4xl font-bold text-blue-500">500+</h3>
            <p className="mt-2 text-gray-600">Issues Resolved</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center w-48">
            <h3 className="text-4xl font-bold text-blue-500">200</h3>
            <p className="mt-2 text-gray-600">Active Citizens</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          </div>
          <p>© 2024 CivicEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;