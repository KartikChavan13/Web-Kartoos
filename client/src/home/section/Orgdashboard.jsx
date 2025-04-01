import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Organizationdashboard = () => {
  const navigate = useNavigate();
  const [orgName, setOrgName] = useState("My Organization");
  const [requests, setRequests] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);

  useEffect(() => {
    // Fetch data from backend (example endpoints)
    axios.get("http://localhost:3000/organization/requests").then((res) => {
      setRequests(res.data);
      setTotalRequests(res.data.length);
    });
    
    axios.get("http://localhost:3000/organization/donations").then((res) => {
      setTotalDonations(res.data.count);
    });
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("org-userid");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">{orgName} Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700">
          Logout
        </button>
        <a href="/"  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700">Home</a>
      </nav>
      
      {/* Overview Section */}
      {/* <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-bold">Total Requests</h2>
          <p className="text-3xl font-semibold text-blue-600">{totalRequests}</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-bold">Total Donations</h2>
          <p className="text-3xl font-semibold text-green-600">{totalDonations}</p>
        </div>
      </div> */}
      
      {/* Blood Requests Table */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Pending Blood Requests</h2>
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Donor Name</th>
              <th className="p-3">Blood Group</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className="border-b text-center">
                <td className="p-3">{request.donor_name}</td>
                <td className="p-3 font-bold text-red-600">{request.blood_group}</td>
                <td className="p-3">{request.status}</td>
                <td className="p-3">
                  <button className="bg-green-500 px-3 py-1 rounded-lg text-white hover:bg-green-700 mr-2">
                    Accept
                  </button>
                  <button className="bg-red-500 px-3 py-1 rounded-lg text-white hover:bg-red-700">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Organizationdashboard;
