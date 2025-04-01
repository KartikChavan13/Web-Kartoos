import React, { useState, useEffect } from "react";
import data from './orginfojson/data.json' // Import the JSON file

const BloodInfo = () => {
  const [bloodData, setBloodData] = useState([]);

  // Load data from JSON on component mount
  useEffect(() => {
    setBloodData(data);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10">
      {bloodData.map((item) => (
        <div key={item.id} className="w-full md:w-3/4 bg-white shadow-lg rounded-lg p-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600">{item.title}</h1>
          {item.subtitle && <h2 className="text-xl md:text-2xl mt-2">{item.subtitle}</h2>}
          <p className="mt-3 text-lg">{item.description}</p>

          {/* Display Points if Available */}
          {item.points && (
            <ul className="mt-3 list-disc pl-5">
              {item.points.map((point, index) => (
                <li key={index} className="text-lg">{point.text}</li>
              ))}
            </ul>
          )}

          {/* Image Section */}
          <div className="flex justify-center mt-5">
            <img src={item.image} alt={item.title} className="w-full md:w-2/3 max-w-lg rounded-lg shadow-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BloodInfo;
