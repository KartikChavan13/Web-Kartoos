

// import React from 'react';
// import Navbar from '../Navbar';

// const Donate = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className='flex justify-center'>
//         <div className=' h-fit w-[80%] mt-3 bg-red-200 flex justify-center text-center p-4 rounded-lg'>
//           <h1 className='text-4xl text-black break-words'>Why Should I Donate Blood?</h1>
//         </div>
//       </div>
//       <div className="flex justify-center">
//   <div className="h-fit w-[80%] mt-3 bg-red-200 flex p-4 rounded-lg">
//     {/* Left Side - Text */}
//     <div className="w-1/2 text-left flex items-center text-2xl">
//       <p>
//         Blood donation is one of the most selfless and impactful acts a person can do. Every day, countless individuals—accident victims, cancer patients, and those undergoing major surgeries—depend on donated blood for survival. Yet, many hospitals and blood banks often struggle with shortages. By donating blood, you are directly contributing to saving lives, giving someone a second chance, and making a meaningful difference in the world.
//         <br /><br />
//         One of the biggest reasons to donate blood is the life-saving impact it has. A single blood donation can help up to three people, providing them with the necessary red blood cells, plasma, or platelets they desperately need. Whether it’s a premature baby needing a transfusion or a burn victim requiring plasma, your blood could be the reason they recover and go on to live a full life. There is no artificial substitute for human blood, which means voluntary donations are the only source available.
//       </p>
//     </div>

//     {/* Right Side - Blank for Image */}
//     <div className="w-1/2 flex items-center justify-center">
//       {/* Add an image here if needed */}
//       <img src="data:image/jpeg;base64,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" alt="" className="w-full h-auto rounded-lg" />
//     </div>
   
//   </div>
// </div>


//     </div>
//   );
// };

// export default Donate;

import React from 'react';
import Navbar from '../Navbar';

const Donate = () => {
  return (
    <div>
      <Navbar />
      
      {/* Header Section */}
      <div className=' md:flex-row w-full h-auto mt-[100px] justify-center flex'>
        <div className='h-fit w-[90%] md:w-[80%] mt-3 bg-red-50 flex justify-center text-center p-4 rounded-lg'>
          <h1 className='text-2xl md:text-4xl text-black break-words'>
            Why Should I Donate Blood?
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex justify-center">
        <div className="h-fit w-[90%] md:w-[80%] mt-3  bg-white flex flex-col md:flex-row p-4 ">

          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 text-left flex items-center text-lg md:text-2xl p-2">
            <p>
              Blood donation is one of the most selfless and impactful acts a person can do. Every day, countless individuals—accident victims, cancer patients, and those undergoing major surgeries—depend on donated blood for survival. Yet, many hospitals and blood banks often struggle with shortages. By donating blood, you are directly contributing to saving lives, giving someone a second chance, and making a meaningful difference in the world.
              <br /><br />
              A single blood donation can help up to three people by providing red blood cells, plasma, or platelets. There is no artificial substitute for human blood, meaning voluntary donations are the only source available.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
            <img 
              src="blood\images.png" 
              alt="Blood Donation" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

        </div>
      </div>
      <div className=' mt-[10%] flex justify-center'>
        <div className='h-fit w-[90%] md:w-[80%] mt-3 bg-red-50 flex justify-center text-center p-4 rounded-lg'>
          <h1 className='text-2xl md:text-4xl text-black break-words'>
          an article
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex justify-center">
        <div className="h-fit w-[90%] md:w-[80%] mt-3 bg-white flex flex-col md:flex-row p-4 rounded-lg">

          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 text-left flex items-center text-lg md:text-2xl p-2">
            <p>
            Blood donation is one of the most selfless acts a person can perform. It is a simple yet powerful way to save lives and contribute to the well-being of society. Despite medical advancements, there is no substitute for human blood, making voluntary blood donors essential. If you are considering donating blood but need more reasons to do so, here are some key benefits and motivations.
                          <br /><br />
                          1. Saves Lives   
                          <br /><br />
                          Every time you donate blood, you can save up to three lives. Hospitals and emergency services rely on donated blood to treat accident victims, surgery patients, individuals with blood disorders, and those undergoing cancer treatment. Your single act of kindness can give someone a second chance at life.
                          <br /><br />
                          2. Helps in Medical Treatments
                          <br /><br />
                          Blood donation supports various medical treatments, including surgeries, childbirth, and chronic illness management. Patients suffering from conditions like anemia, leukemia, and hemophilia often need frequent blood transfusions. By donating, you help ensure they receive the treatment they require
                          <br /><br />
                          3. Promotes Heart Health
                         
                          <br /><br />
                          Regular blood donation helps maintain healthy iron levels in your body, reducing the risk of heart disease. Excess iron can contribute to oxidative stress, which can damage blood vessels and lead to cardiovascular problems. By donating blood, you help your body regulate iron levels more effectively.
                          
                          <br /><br />4. Encourages Blood Circulation
                          
                          <br /><br />The process of donating blood stimulates the production of new blood cells, which keeps your circulatory system active and healthy. It also improves blood flow, reducing the risk of blockages and improving overall health.
                         
                          <br /><br /> 5. Psychological Benefits
                          <br /><br /> Giving blood fosters a sense of satisfaction and purpose. Knowing that your donation is helping someone in need can be a fulfilling experience. Many donors feel a sense of accomplishment and happiness after donating.
                          <br /><br />Blood banks must always have an adequate supply of all blood types. During emergencies, natural disasters, or medical crises, a readily available blood supply can be the difference between life and death. Your donation helps ensure that hospitals are prepared for any unforeseen events.
                          <br /><br /> 7. Free Health Check-Up
                          <br /><br /> Before donating, you undergo a mini health check-up, including blood pressure, hemoglobin levels, and pulse rate assessments. This can help detect potential health issues early and keep you informed about your overall well-being.
                          <br /><br /> 8. No Major Side Effects
                          <br /><br />Blood donation is a safe and quick process, usually taking around 30 minutes. The body replenishes the donated blood within a few weeks, and most people experience no major side effects. Staying hydrated and eating well after donation can ensure a smooth recovery.
                          <br /><br /> How to Get Started?
                          <br /><br /> If you are healthy and meet the eligibility criteria, you can donate blood at a local blood bank, hospital, or blood donation camp. Most blood donation centers provide guidance and ensure a safe and comfortable experience.
                          <br /><br /> Conclusion
                          <br /><br /> Donating blood is a noble act that can make a significant difference in someone’s life. It is a small effort on your part but has an enormous impact on those in need. By donating regularly, you become a hero in the lives of many, contributing to a healthier and more compassionate society. So, take the step today—donate blood and save lives!



                          
                                   </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
            <img 
              src="blood\images.png" 
              alt="Blood Donation" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donate;
