import { useEffect, useState } from "react";
import axios from "axios";
import { FaPhone, FaEnvelope, FaTint } from "react-icons/fa";

const BloodDonorProfile = () => {
  const [user, setUser] = useState(null); // Change from array to object
  const id = sessionStorage.getItem("userid");

  useEffect(() => {
    if (!id) return; // Avoid fetching if id is missing

    axios
      .get(`http://localhost:3000/user?id=${id}`)
      .then((response) => {
        setUser(response.data); // Since backend returns a single object
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  if (!user) {
    return <p className="text-center mt-4 text-gray-600">Loading user data...</p>;
  }

  return (
    <div className="flex justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full text-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-red-500 text-white flex items-center justify-center rounded-full text-2xl font-bold border-4 border-white shadow-md">
              {user.bloodGroup}
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
        <p className="text-gray-600">Age: {user.age}</p>
        <p className="text-gray-600">{user.location}</p>

        <div className="mt-4 text-left">
          <p className="flex items-center gap-2 text-gray-700">
            <FaPhone className="text-green-500" /> {user.contact}
          </p>
          <p className="flex items-center gap-2 text-gray-700 mt-2">
            <FaEnvelope className="text-blue-500" /> {user.email}
          </p>
          <p className="flex items-center gap-2 text-gray-700 mt-2">
            <FaTint className="text-red-500" /> Blood Group: {user.bloodgroup}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloodDonorProfile;
