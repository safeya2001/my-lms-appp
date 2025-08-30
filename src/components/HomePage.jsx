import React from 'react';

const HomePage = () => (
  <section className="bg-white text-center py-16 px-4">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
      Get smart opportunity for your best future
    </h1>
    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
      It is a long established fact that reader will be distracted readable content of a page when.
    </p>

    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search Your Course Here"
        className="px-4 py-2 border border-gray-300 rounded-l-md w-64"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
        Search
      </button>
    </div>

    <div className="text-gray-700">
      <strong>Popular Topics:</strong> Business, Data Science, Digital Program, Finance
    </div>
  </section>
);

export default HomePage;