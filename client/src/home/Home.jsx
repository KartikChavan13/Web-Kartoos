
import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='overflow-x-hidden md:mt-[5%]'>
      <Navbar />
      <div className=" ml-[5%] flex flex-col md:flex-row w-full h-auto mt-[100px] items-center text-left px-6">
        {/* Text Section */}
        <div className='flex flex-col items-start text-center md:text-left px-4'>
          <p className="text-4xl md:text-5xl">Give The Gift of Life</p>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-red-600">DONATE BLOOD TODAY!</h1>
          <p className="mt-2 max-w-[800px] text-lg">
            "Give the gift of life by donating blood. Your simple act can save a life and make a world of difference."
          </p>
        </div>
        {/* Image Section */}
        <div className='flex justify-center w-full md:w-1/2 mt-4 md:mt-0'>
          <img src="blood/images (4).jpg" alt="Blood Donation" className="w-full max-w-xs md:max-w-md" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex flex-col items-center py-4">
        <div className="w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-3xl shadow-lg">
          <div className="p-6 text-2xl md:text-4xl rounded-2xl bg-blue-600 text-white text-center">
            Donors Registered <p>1234567</p>
          </div>
          <div className="p-6 text-2xl md:text-4xl rounded-2xl bg-green-400 text-white text-center">
            Blood Units Collected <p>7654321</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full flex flex-col items-center p-4">
  <div className="w-11/12 md:w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-gray-100 p-4 rounded-3xl">
    {[
      { text: "Blood Availability", bg: "bg-red-600" },
      { text: "Blood Bank Directory", bg: "bg-blue-600" },
      { text: "Blood Donation Camp", bg: "bg-yellow-400" },
      { text: "Donor Login", bg: "bg-green-400" },
      { text: "Register Voluntary", bg: "bg-red-300 col-span-2 sm:col-span-1 flex justify-center items-center" },
    ].map((item, index) => (
      <div
        key={index}
        className={`p-6 text-lg md:text-2xl rounded-2xl ${item.bg} text-white text-center cursor-pointer hover:underline hover:font-bold`}
      >
        {item.text}
      </div>
    ))}
  </div>
</div>




<div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mt-4">
        <p className="text-4xl md:text-5xl font-extrabold text-red-500">
          Learn about Donation
        </p>
      </div>
      
      {/* Image & Info Section */}
      <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <img
          src="blood/images (6).jpg"
          alt="Blood donation"
          className="h-auto w-3/4 md:w-1/4"
        />
        <div className="text-xl text-center md:text-left flex flex-wrap justify-center md:justify-start items-center">
          <span className="text-red-500 font-bold mr-2">One</span>
          Blood Donation can save up to
          <span className="text-red-500 font-bold mx-2">Three</span>
          lives
        </div>
        <img src="blood/images.png" alt="Blood image" className="h-auto w-1/4" />
      </div>

      {/* Information Section */}
      <div className="text-center font-extrabold text-red-600 p-4">
        <p>
          After donating blood, the body works to replenish the blood loss. This
          stimulates the production of new blood cells and in turn, helps in
          maintaining good health.
        </p>
      </div>
      
      {/* Table Section */}
      <div className="w-full flex justify-center p-4">
        <p className="text-2xl md:text-3xl font-extrabold bg-red-500 text-white p-4 rounded-3xl">
          Compatible Blood Type Donors
        </p>
      </div>
      
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-lg text-center">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Blood Type</th>
              <th className="border border-gray-300 px-4 py-2">Donate To</th>
              <th className="border border-gray-300 px-4 py-2">Receive From</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["A+", "A+, AB+", "A+, A-, O+, O-"],
              ["O+", "O+, A+, B+, AB+", "O+, O-"],
              ["B+", "B+, AB+", "B+, B-, O+, O-"],
              ["AB+", "AB+", "Everyone"],
              ["A-", "A+, A-, AB+, AB-", "A-, O-"],
              ["O-", "Everyone", "O-"],
              ["B-", "B+, B-, AB+, AB-", "B-, O-"],
              ["AB-", "AB+, AB-", "AB-, A-, B-, O-"]
            ].map(([type, donate, receive], index) => (
              <tr
                key={type}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border border-gray-300 px-4 py-2">{type}</td>
                <td className="border border-gray-300 px-4 py-2">{donate}</td>
                <td className="border border-gray-300 px-4 py-2">{receive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
        </div></div>
       
 <div className="px-4 md:px-8 lg:px-16">
      <div className="flex justify-center text-center">
        <p className="text-3xl md:text-4xl text-red-500 font-bold">Types of Donation</p>
      </div>
      
      <div className="flex flex-col items-center text-center p-4">
        <p className="max-w-3xl">
          The average human body contains about five liters of blood, which is made of several cellular and non-cellular components such as
        </p>
        <div className="flex flex-wrap justify-center text-red-500 font-semibold mt-2">
          <span className="mr-2">Red blood cell,</span>
          <span className="mr-2">Platelet,</span>
          <span>and Plasma.</span>
        </div>
      </div>

      <div className="flex justify-center text-center px-4 pb-4">
        <p className="max-w-4xl">
          Each type of component has its unique properties and can be used for different indications. The donated blood is separated into these components by the blood center, and one donated unit can save up to four lives depending on the number of components separated from your blood.
        </p>
      </div>

      {/* Reusable Card Component for Different Donation Types */}
      {donationData.map((donation, index) => (
        <div key={index} className="mt-10">
          <div className="flex justify-center">
            <div className="bg-red-500 text-white text-2xl md:text-4xl p-4 rounded-2xl">
              {donation.title}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center mt-6 space-y-4 md:space-y-0 md:space-x-8 px-4 md:px-8">
            {donation.details.map((detail, idx) => (
              <div key={idx} className="max-w-3xl">
                <p className="font-bold text-xl md:text-2xl">{detail.heading}</p>
                <p className="text-md md:text-lg">{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
   



  

  <div className="w-full h-auto flex flex-col items-center p-8 text-2xl text-red-600">
  {/* Gray Section */}
  <div className="w-[95%] bg-gray-200 p-10 rounded-3xl text-center">
    <p>It Takes Only an Hour</p>
    <a href="/" className="hover:underline ml-1 hover:text-blue-700 hover:font-bold scroll-smooth">
  Donate blood, save lives! Read Blood Donation Facts
</a>
  </div>
</div>

{/* Black Section */}
<div className="w-full h-auto p-6 bg-black">
  <div className="w-full max-w-6xl mx-auto text-white flex flex-wrap md:flex-nowrap justify-between mt-10">
    {/* Section 1 */}
    <div className="flex flex-col w-full md:w-1/4 px-4">
      <p className="font-bold">Looking for Blood</p>
      <p>Blood Availability</p>
      <p>Blood Bank Directory</p>
      <p>Thalassemia Request</p>
    </div>

    {/* Section 2 */}
    <div className="flex flex-col w-full md:w-1/4 px-4 mt-6 md:mt-0">
      <p className="font-bold">Want to Donate Blood</p>
      <p>Blood Donation Camps</p>
      <p>Register VBD Camp</p>
      <p>Donor Login</p>
      <p>About Blood Donation</p>
    </div>

    {/* Section 3 */}
    <div className="flex flex-col w-full md:w-1/4 px-4 mt-6 md:mt-0">
      <p className="font-bold">Blood Bank Login</p>
      <p>Add your Blood Bank</p>
      <p> Login</p>
    </div>

    {/* Section 4 */}
    <div className="flex flex-col w-full md:w-1/4 px-4 mt-6 md:mt-0">
      <p className="font-bold">About Us</p>
      <p>Notifications</p>
      <p>FAQs</p>
      <p>Gallery</p>
      <p>Video Gallery</p>
      <p>Contact Us</p>
    </div>
  </div>

  {/* Footer */}
  <div className="flex justify-center p-6 mt-10">
    <p className="text-white">© 2024 - 2025 by Sakshi and Shruti</p>
  </div>
</div>




   {/* last div do not touch */}
    
    </div>
    


  );
}
 
const donationData = [
  {
    title: "Packed Red Blood Cells",
    details: [
      { heading: "What is it?", text: "Blood collected straight from the donor..." },
      { heading: "Who can donate?", text: "You need to be 18-65 years old, weigh 45kg or more..." },
      { heading: "Used For?", text: "Correction of severe anemia, blood loss..." },
      { heading: "Lasts For?", text: "Red cells can be stored for 42 days..." },
      { heading: "How long does it take to donate?", text: "15-30 minutes..." },
      { heading: "How often can I donate?", text: "Male donors: 90 days; Female donors: 120 days..." }
    ]
  },
  {
    title: "Plasma",
    details: [
      { heading: "What is it?", text: "The straw-colored liquid..." },
      { heading: "Who can donate?", text: "Similar to red cell donation, minimum weight: 50kg..." },
      { heading: "Used For?", text: "Used for bleeding patients with coagulation factor deficiency..." },
      { heading: "Lasts For?", text: "Plasma stored below -30°C lasts up to one year..." },
      { heading: "How long does it take to donate?", text: "15-30 minutes..." },
      { heading: "How often can I donate?", text: "Similar to red cell donation..." }
    ]
  },
  {
    title: "Platelet",
    details: [
      { heading: "What is it?", text: "These are cellular elements in blood..." },
      { heading: "Who can donate?", text: "Whole blood donation criteria apply..." },
      { heading: "Used For?", text: "Conditions with very low platelet count such as Cancer, dengue..." },
      { heading: "Lasts For?", text: "Can be stored for 5 days at 20-24°C..." },
      { heading: "How long does it take to donate?", text: "45-60 minutes..." },
      { heading: "How often can I donate?", text: "Every 2 weeks, max 24 times per year..." }
    ]
  }
];
export default Home;
 





