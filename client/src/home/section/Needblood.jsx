


// import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar";
// import { useNavigate } from "react-router-dom";

// const Needblood = () => {
//   const [bloodData, setBloodData] = useState([]);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const navigate = useNavigate();
//   const [emailid, setEmailid] = useState("");
//   const [orgpassword, setorgPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch data from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/signinorgn");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setBloodData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:3000/orglogin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ emailid, orgpassword }),
//       });

//       const data = await response.json();
//       setLoading(false);

//       if (response.ok) {
//         sessionStorage.setItem("userid", data.id || data[0]?.id);
//         alert("Login successful!");
//         navigate("/");
//       } else {
//         alert(data.message || "Invalid credentials.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="overflow-x-hidden">
//       <Navbar />
//       <div className="mt-26 flex min-h-screen w-[67%] flex-col px-4 relative">
//         {/* Content Section */}
//         <div className="w-full max-w-[1200px] flex flex-col items-center lg:items-start lg:ml-[5%]">
//           {bloodData.map((item) => (
//             <div
//               key={item.id}
//               className="w-full max-w-[1100px] h-auto bg-red-50 flex flex-col justify-center items-center mt-12 border-amber-200 rounded-3xl"
//             >
//               <div className="w-[90%] p-3 bg-white shadow-lg rounded-3xl flex flex-col lg:flex-row">
//                 {/* Image Section */}
//                 <div className="w-full lg:w-1/3">
//                   <img
//                     src="/blood/images.jpg"
//                     alt="Blood Donation"
//                     className="rounded-2xl ml-3"
//                   />

//                   {/* Conditional Button */}
// <div
//   className={`flex justify-center cursor-pointer items-center mt-2 ml-9 w-fit rounded-2xl p-2 text-white font-bold 
//   ${item.requiredBloodGroup ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
// >
//   <button
//     className={`cursor-pointer flex justify-center px-4 py-2 rounded-lg ${
//       item.requiredBloodGroup
//         ? "bg-blue-600 text-white hover:bg-blue-700"
//         : "bg-red-600 text-white hover:bg-red-700"
//     }`}
//   >
//     {item.requiredBloodGroup
//       ? "Apply for Blood Donate"
//       : "Blood Required is Full"}
//   </button>
// </div>
//                 </div>

//                 {/* Text Section */}
//                 <div className="w-full lg:w-2/3 mt-4 lg:mt-0 lg:ml-4 p-2">
//                   <h2 className="text-3xl font-semibold text-red-600 p-1">
//                     {item.organization_name}
//                   </h2>
//                   <p className="text-2xl text-gray-600">
//                     {item.address} {item.area} {item.road}
//                     <br />{" "}
//                     <span className="font-bold text-black p-1">
//                       {item.zip}
//                     </span>
//                   </p>

//                   {/* Required Blood Group */}
//                   <div className="mb-2 flex items-center w-fit h-auto bg-red-500 rounded-3xl p-2 text-white font-bold space-x-2">
//                     <span>Required Blood Group:</span>
//                     <div className="bg-white font-bold rounded-3xl px-3 py-1 text-red-500">
//                       {item.requiredBloodGroup || "Full"}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

// {/* Show More Button */}
// <div className="flex justify-center mt-5 mb-5">
//   <button
//     className="h-16 w-32 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//     onClick={() => setIsExpanded(!isExpanded)}
//   >
//     {isExpanded ? "Show Less ↑" : "Show More ↓"}
//   </button>
// </div>

//     {/* Video & Register Section */}
//     <div className="hidden lg:flex w-[30%] justify-center items-start fixed right-0 top-0 h-fit">
//       <div className="w-[90%] h-[40%] bg-blue-500 p-4 mt-36 text-white shadow-lg rounded-3xl">
//         <video className="w-full max-w-lg mx-auto rounded-lg shadow-lg" controls autoPlay loop muted>
//           <source src="/video/WorldBloodDonorDay.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="p-2 bg-amber-400 w-fit rounded-2xl ml-[25%] mt-4 hover:text-red-600 font-bold">
//           <a href="/registerform" className="text-lg font-bold text-blue-600 hover:text-red-600">
//             Register for an organization
//           </a>
//         </div>
//       </div>
//     </div>

// {/* Sign in for Organization */}
// <div className="hidden lg:flex w-[30%] justify-center items-start fixed right-0 bottom-10 h-fit">
//   <div className="w-[90%] h-[40%] bg-blue-500 p-4 mt-32 text-white shadow-lg rounded-3xl">
//     <h2 className="font-bold">Sign in My Organization Profile</h2>
//     <div className="flex justify-center items-center p-4 bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">
//           Organization Login
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
//             value={emailid}
//             onChange={(e) => setEmailid(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm"
//             value={orgpassword}
//             onChange={(e) => setorgPassword(e.target.value)}
//             required
//           />
//           <button className="w-full py-2 mt-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
//   </div>
// </div>
//   );
// };

// export default Needblood;


import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Needblood = () => {
  const [bloodData, setBloodData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [emailid, setEmailid] = useState("");
  const [orgpassword, setorgPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/organizations")
      .then((response) => response.json())
      .then((data) => setBloodData(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  useEffect(() => {
    // Check if user is already logged in
    const userId = sessionStorage.getItem("org-userid");
    if (userId) setIsLoggedIn(true);
  }, []);

  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:3000/upload", formData)
      .then((res) => console.log("File uploaded successfully"))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/orglogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailid, orgpassword }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        sessionStorage.setItem("org-userid", data.user.id);
        setIsLoggedIn(true); // Update login state
        alert("Login successful!");
      } else {
        alert(data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
      setLoading(false);
    }
  };
  useEffect(()=>{
    setTimeout(() => {
      sessionStorage.removeItem("org-userid")
    }, 1800);
  },[])

  return (
    <div className="overflow-x-hidden">
      <Navbar />
  
      {/* Main Content Section - Left Aligned on Laptop */}
      <div className="mt-10 flex min-h-screen w-full px-4 sm:px-6 md:px-8 lg:w-[65%] lg:ml-8 mx-auto flex-col relative">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          {bloodData.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[1100px] bg-red-50 flex flex-col justify-center items-center mt-12 border-amber-200 rounded-3xl p-4 shadow-lg"
            >
              {/* Card Container */}
              <div className="w-full p-4 bg-white shadow-lg rounded-3xl flex flex-col lg:flex-row gap-6">
  
                {/* Image Section */}
                <div className="w-full lg:w-1/3 flex flex-col items-center">
                  <img
                    src={`http://localhost:3000${item.orgImage}`}
                    alt="Blood Donation"
                    className="rounded-2xl h-60 w-full object-cover"
                  />
  
                  {/* Apply Button */}
                  <div className="flex justify-center mt-4 w-full">
                    <button
                      className={`px-4 py-3 rounded-xl text-white font-bold w-full text-center transition-all
                      ${item.requiredBloodGroup !== "Full"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-red-600 hover:bg-red-700"}`}
                    >
                      {item.requiredBloodGroup !== "Full"
                        ? "Apply for Blood Donate"
                        : "Blood Required is Full"}
                    </button>
                  </div>
                </div>
  
                {/* Text Section */}
                <div className="w-full lg:w-2/3 p-4">
                  <h2 className="text-3xl font-semibold text-red-600 text-center lg:text-left">
                    {item.organization_name}
                  </h2>
                  <p className="text-lg text-gray-600 text-center lg:text-left">
                    {item.address}, {item.area}, {item.road}
                    <br />
                    <span className="font-bold text-black">{item.zip}</span>
                  </p>
  
                  {/* Blood Group Info */}
                  <div className="text-center lg:text-left mt-2 text-lg font-semibold text-gray-700">
                    {item.requiredBloodGroup}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Show More Button */}
      <div className="flex justify-center mt-6 mb-6">
        <button
          className="h-14 w-40 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less ↑" : "Show More ↓"}
        </button>
      </div>
  
      {/* Video & Register Section (Right Side) */}
      <div className="hidden lg:flex w-full lg:w-[30%] justify-center fixed right-0 top-0 h-fit p-4">
        <div className="w-full bg-blue-500 p-4 mt-15 text-white shadow-lg rounded-3xl">
          <video className="w-full rounded-lg shadow-lg" controls muted>
            <source src="/video/World Blood Donor Day 2021 (1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-2 bg-amber-400 w-fit rounded-2xl mx-auto mt-4 hover:text-red-600 font-bold">
            <a href="/registerform" className="text-lg font-bold text-blue-600 hover:text-red-600">
              Register for an Organization
            </a>
          </div>
        </div>
      </div>
  
      {/* Sign in for Organization (Right Side) */}
      {/* Organization Login Section (Only Show if Not Logged In) */}
      {!isLoggedIn ? (
  <div className="hidden lg:flex w-full lg:w-[30%] justify-center fixed right-0 bottom-10 h-fit p-4">
    <div className="w-full bg-blue-500 p-4 text-white shadow-lg rounded-3xl">
      <h2 className="font-bold text-center">Sign in My Organization Profile</h2>
      <div className="flex justify-center items-center p-4 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">
            Organization Login
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email id"
              className="block w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={emailid}
              onChange={(e) => setEmailid(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={orgpassword}
              onChange={(e) => setorgPassword(e.target.value)}
              required
            />
            <button
              className="w-full py-2 mt-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
) : (
  <div className="p-4 bg-green-200 text-green-800 rounded-lg text-center">
    <h2 className="font-bold text-xl">Welcome, Organization</h2>
    <p>You are now logged in.</p>
    {/* <button
      className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
      onClick={() => {
        sessionStorage.removeItem("org-userid"); // Logout logic
        setIsLoggedIn(false);
      }}
    >
      Logout
    </button> */}
    <a href="organizationdashboard">Organization Dashboard</a>
  </div>
)}


      {/* Show only after login
      {isLoggedIn && (
        <div className="p-4 bg-green-200 text-green-800 rounded-lg text-center">
          <h2 className="font-bold text-xl">Welcome, Organization</h2>
          <p>You are now logged in.</p>
          <a href="#">Organization Dashboard</a>
        </div>
      )} */}
    
  
      
    </div>
  );
  
};

export default Needblood;
