import React from "react";
import Navbar from "../Navbar";

const About = () => {
  return (
    <div className="mt-32 overflow-x-hidden bg-white text-red-500">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-6 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold">Thank You, Lifesavers! 🩸</h1>
        <p className="mt-2 text-lg md:text-xl text-gray-600 max-w-2xl">
          Your generous blood donation has the power to save lives. Every drop counts, and we truly appreciate your selfless act of kindness. ❤️
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-6">
        <img src="blood\images (6).png" alt="Thank You Donors" className="w-full max-w-lg rounded-xl shadow-lg" />
      </div>

      {/* How It Works Section */}
      <div className="mt-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">How Our Application Works</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mt-2">
          Our platform connects blood donors with those in need. Here’s how you can make a difference!
        </p>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="p-6 bg-red-500 text-white rounded-3xl shadow-md flex flex-col items-center text-center">
          <a href="/signin">     <img src="blood\images (12).jpg" alt="Register" className="w-24 h-24  ml-8 rounded-full mb-4" />
            <h3 className="text-2xl font-semibold">1. Register</h3></a>
            <p className="text-sm mt-2">Sign up as a donor and provide your blood group and contact details.</p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-red-500 text-white rounded-3xl shadow-md flex flex-col items-center text-center">
         <a href="needblood">   <img src="blood\images (9).jpg" alt="Find Donors" className="w-24 h-24 ml-12 rounded-full mb-4" />
            <h3 className="text-2xl font-semibold">2. Find a Donor</h3> </a>
            <p className="text-sm mt-2">Patients or hospitals can search for nearby donors in real time.</p>
          </div>

          {/* Step 3 */}
         <div className="p-6 bg-red-500 text-white rounded-3xl shadow-md flex flex-col items-center  text-center">
         <a href="/donate">   <img src="blood\download (2).jpg" alt="Donate Blood" className="w-24 h-24 ml-18 rounded-full mb-4" />
            <h3 className="text-2xl font-semibold">3. Donate & Save Lives</h3></a>
            <p className="text-sm mt-2">Once matched, donors can visit the hospital or blood bank to donate.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center mt-12 bg-red-500 text-white py-10 px-6 rounded-t-3xl">
        <h2 className="text-3xl font-bold">Join Us in Saving Lives</h2>
        <p className="text-lg mt-2 max-w-2xl text-center">
          Be a hero today. Register as a donor and make a difference. One small act of kindness can save multiple lives! ❤️
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-red-500 font-semibold rounded-lg hover:bg-gray-200 transition">
         <a href="/doner"> Become a Donor</a>
        </button>
      </div>

      {/* Footer Section */}
      <div className="h-16 w-full bg-white"></div>
    </div>
  );
};

export default About;
