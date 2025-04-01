// import React from 'react'
// import Navbar from '../Navbar'

// const Doner = () => {
    
//   return (
//      <div className='overflow-x-hidden md:mt-[5%]'>
//           <Navbar />
//           <div className="flex flex-col md:flex-row w-full h-auto mt-[100px]  items-center justify-center text-left px-6">
//             {/* Text Section */}
//             <div className='flex flex-col items-start text-center md:text-left px-4'>
//               <p className="text-4xl md:text-5xl">Became a Doner</p>
//               <h1 className="text-2xl md:text-3xl font-bold mt-2 text-red-600">DONATE BLOOD TODAY!</h1>
//               <p className="mt-2 max-w-[800px] text-lg">
//               Becoming a donor is one of the most <span className=' text-red-600 font-bold'>selfless</span> acts a person can do. Whether it’s donating blood to save lives, contributing organs to give someone a second chance, or supporting a cause to help those in need, every act of giving creates a ripple of hope. A single donation can mean the difference between life and death, between struggle and survival. It is a testament to the power of humanity, reminding us that even the smallest acts of kindness can make a world of difference. When you give, you don’t just change someone else’s life—you change your own by becoming a beacon of hope and compassion.              </p>
//             </div>
//             {/* Image Section */}
//             <div className='flex justify-center w-full md:w-1/2 mt-4 md:mt-0'>
//               <img src="blood/images (8).jpg" alt="Blood Donation" className="w-full max-w-xs md:max-w-md" />
//             </div>
//           </div>


//    <div className='overflow-x-hidden md:mt-[5%]'>
//           <Navbar />
//           <div className="flex flex-col md:flex-row w-full h-auto mt-[100px]  items-center justify-center text-left px-6">
//             {/* Text Section */}
//             <div className='flex flex-col items-start text-center md:text-left px-4'>
//               <p className="text-4xl md:text-5xl">donate  helps to</p>
//               <h1 className="text-4xl md:text-5xl font-bold mt-2 text-red-600">save lives</h1>
             
//               <p className="text-4xl md:text-5xl"> Who Can Donate Blood?</p>
//               <p className="mt-2 max-w-[800px] text-lg">
//               ✅ Minimum Age: In most countries, donors must be at least 18 years old (some allow 16-17 with parental consent). <br />
// ✅ Maximum Age: There is no fixed upper age limit, but older donors (usually above 60-65) may require medical clearance. <br />
// ✅ Healthy Individuals: Donors must meet health requirements, including proper weight, hemoglobin levels, and no infections. <br />
// <br />
// <p className="text-4xl md:text-5xl"> Who Benefits from Donated Blood? </p>
// 💉 Infants & Children – Premature babies, those with anemia, or undergoing surgeries.<br />
// 💉 Adults – Patients with cancer, severe injuries, or major surgeries.<br />
// 💉 Elderly – Those with blood disorders, organ transplants, or chronic illnesses.<br />
// <br />
// Blood donation truly saves lives across all age groups! Would you like details on the donation process or eligibility criteria? 😊  <br />       </p>    </div>
//             {/* Image Section */}
//             <div className='flex justify-center w-full md:w-1/2 mt-4 md:mt-0'>
//               <img src="blood/images (7).png" alt="Blood Donation" className="w-full max-w-xs md:max-w-md h-auto" />
//             </div>
//           </div>
//        </div>

         




// {/* last div do not touch */}
// </div>
//   )
// }

// export default Doner


import React from 'react';
import Navbar from '../Navbar';

const Doner = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      
      {/* Section 1: Become a Donor */}
      <div className="flex flex-col md:flex-row w-full h-auto mt-[100px] items-center justify-center text-left px-6">
        {/* Text Section */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left px-4 max-w-2xl'>
          <p className="text-4xl md:text-5xl font-semibold">Become a Donor</p>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-red-600">DONATE BLOOD TODAY!</h1>
          <p className="mt-2 text-lg">
            Becoming a donor is one of the most <span className='text-red-600 font-bold'>selfless</span> acts a person can do. Whether it’s donating blood
            to save lives, contributing organs to give someone a second chance, or supporting a cause to help those in need,
            every act of giving creates a ripple of hope.
          </p>
        </div>
        {/* Image Section */}
        <div className='flex justify-center w-full md:w-1/2 mt-4 md:mt-0'>
          <img src="blood/images (8).jpg" alt="Blood Donation" className="w-full max-w-xs md:max-w-md h-auto" />
        </div>
      </div>
      
      {/* Section 2: Donate Helps Save Lives */}
      <div className=" p-6 flex flex-col md:flex-row w-full h-auto mt-[100px] items-center justify-center text-left px-6">
        {/* Text Section */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left px-4 max-w-2xl'>
          <p className="text-4xl md:text-5xl font-semibold">Donate Helps To</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-red-600">Save Lives</h1>
          
          <p className="text-2xl font-semibold mt-4">Who Can Donate Blood?</p>
          <ul className="mt-2 text-lg list-disc list-inside">
            <li>✅ Minimum Age: In most countries, donors must be at least 18 years old (some allow 16-17 with parental consent).</li>
            <li>✅ Maximum Age: No fixed upper limit, but donors above 60-65 may need medical clearance.</li>
            <li>✅ Healthy Individuals: Must meet weight, hemoglobin, and infection-free requirements.</li>
          </ul>

          <p className="text-2xl font-semibold mt-6">Who Benefits from Donated Blood?</p>
          <ul className="mt-2 text-lg list-disc list-inside">
            <li>💉 <strong>Infants & Children</strong> – Premature babies, anemic children, or those undergoing surgery.</li>
            <li>💉 <strong>Adults</strong> – Cancer patients, accident victims, and major surgery cases.</li>
            <li>💉 <strong>Elderly</strong> – Blood disorders, organ transplant recipients, and chronic illness patients.</li>
          </ul>
        </div>
        {/* Image Section */}
        <div className='flex justify-center w-full md:w-1/2 mt-4 md:mt-0'>
          <img src="blood/images (7).png" alt="Blood Donation" className="w-full max-w-xs md:max-w-md h-[340px]"/>
        </div>
      </div>

   {/* Section 3: Blood Cannot Be Manufactured */}
   <div className="flex flex-col md:flex-row w-full h-auto mt-[100px] items-center justify-center text-left px-6">
        {/* Text Section */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left px-4 max-w-2xl'>
          <p className="text-4xl md:text-5xl font-semibold">Blood Cannot Be Manufactured  </p>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-red-600">– The Importance of Donors 🩸</h1>
          <p className="mt-2 text-lg">
          Unlike other medical supplies, blood cannot be artificially created or manufactured in labs. The only way to ensure a steady supply for hospitals and patients is through voluntary blood donation.

<h1 className="text-2xl md:text-3xl font-bold mt-2 text-red-600">Why Can’t Blood Be Manufactured?</h1>
 <p className=' font-bold'>🔹 Complex Composition:</p> Blood consists of red blood cells, white blood cells, platelets, and plasma—each with unique functions that current technology cannot replicate.

 <p className=' font-bold'>🔹 Live Cells & Functionality:</p> Unlike saline or IV fluids, blood carries oxygen, fights infections, and aids in healing—something artificial solutions cannot do.

 <p className=' font-bold'>🔹 Short Shelf Life: Blood components have a limited lifespan:</p> Unlike saline or IV fluids, blood carries oxygen, fights infections, and aids in healing—something artificial solutions cannot do.
<br />

<p className=' font-mono  text-red-500 text-2xl'>Red Blood Cells – 42 days <br />
Platelets – 5 to 7 days <br />
Plasma – Can be frozen for up to a year <br />
The Role of Blood Donors</p>
Since blood cannot be manufactured, it relies entirely on generous donors to meet demand. Regular donations help hospitals treat accident victims, surgery patients, cancer patients, and those with chronic diseases. <br />

💡 One donation can save up to 3 lives! By donating, you're giving someone a second chance at life. Be a hero—donate blood today! ❤️ <br />

Would you like me to add this to your Doner component with a well-structured layout? 😊
          </p>
        </div>
        {/* Image Section */}
        <div className='flex justify-center w-full md:w-1/2 mt-4 md:mt-0'>
        <div><img src="blood\images (5).png" alt="Blood Donation" className="w-auto m-9 max-w-xs md:max-w-md h-[90%] " />

<img src="blood\download(02).jpg" alt="Blood Donation" className="w-full max-w-xs md:max-w-md h-auto m-4" />
</div>

           </div>
      </div>



    </div>
  );
};

export default Doner;