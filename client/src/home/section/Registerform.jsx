import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterOrg = () => {
  const [formData, setFormData] = useState({
    organization_name: "",
    address: "",
    area: "",
    zip: "",
    road: "",
    emailid: "",
    orgpassword: "",
    requiredBloodGroup: [],
    orgImage: null, // New field for the image
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        orgImage: files[0], // Store the selected file
      }));
    } else if (name === "requiredBloodGroup") {
      setFormData((prev) => {
        const updatedGroups = prev.requiredBloodGroup.includes(value)
          ? prev.requiredBloodGroup.filter((bg) => bg !== value)
          : [...prev.requiredBloodGroup, value];

        return updatedGroups.length <= 2 ? { ...prev, requiredBloodGroup: updatedGroups } : prev;
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.organization_name ||
      !formData.address ||
      !formData.area ||
      !formData.zip ||
      !formData.road ||
      !formData.emailid ||
      !formData.orgpassword
    ) {
      alert("All fields are required!");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("organization_name", formData.organization_name);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("area", formData.area);
    formDataToSend.append("zip", formData.zip);
    formDataToSend.append("road", formData.road);
    formDataToSend.append("emailid", formData.emailid);
    formDataToSend.append("orgpassword", formData.orgpassword);
    formDataToSend.append("requiredBloodGroup", JSON.stringify(formData.requiredBloodGroup));
    
    if (formData.orgImage) {
      formDataToSend.append("orgImage", formData.orgImage);
    }

    try {
      const response = await fetch("http://localhost:3000/signinorgn", {
        method: "POST",
        body: formDataToSend, // Send as FormData
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to register");

      alert("Organization registered successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/video/World Blood Donor Day 2021 (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      {/* Overlay for better visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
      {/* Form Container */}
      <div className="relative flex justify-center items-center h-screen pt-20 sm:pt-0">
        <form 
          onSubmit={handleSubmit} 
          encType="multipart/form-data"
          className="backdrop-blur-md bg-white/30 shadow-lg rounded-2xl py-8 px-8 w-full max-w-3xl z-10"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-black mb-6">
            Register Organization
          </h2>
          
          {/* Organization Name */}
          <div className="mb-4">
            <input 
              type="text" 
              name="organization_name" 
              placeholder="Organization Name" 
              onChange={handleChange} 
              required
              className="w-full py-3 px-4 border rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Address & Area in Same Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              name="address" 
              placeholder="Address" 
              onChange={handleChange} 
              required
              className="w-full py-3 px-4 border rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="text" 
              name="area" 
              placeholder="Area" 
              onChange={handleChange} 
              required
              className="w-full py-3 px-4 border rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* ZIP Code & Road in Same Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              name="zip" 
              placeholder="ZIP Code" 
              onChange={handleChange} 
              required
              className="w-full py-3 px-4 border rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="text" 
              name="road" 
              placeholder="Road" 
              onChange={handleChange} 
              required
              className="w-full py-3 px-4 border rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Email & Password in Same Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input 
              type="email" 
              name="emailid" 
              placeholder="Email" 
              onChange={handleChange} 
              required
              className="w-full py-3 px-4 border rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="password" 
              name="orgpassword" 
              placeholder="Password" 
              onChange={handleChange} 
              required
              className="w-full py-3 px-4 border rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Blood Group Selection */}
          <div className="mb-6">
            <label className="block text-black text-lg font-extrabold mb-2">
              Blood Group (Select up to 2)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"].map((bg) => (
                <label
                  key={bg}
                  className="flex items-center space-x-2 border border-gray-500 p-3 rounded-lg cursor-pointer hover:border-blue-500 text-black font-bold"
                >
                  <input
                    type="checkbox"
                    name="requiredBloodGroup"
                    value={bg}
                    checked={formData.requiredBloodGroup.includes(bg)}
                    onChange={handleChange}
                  />
                  <span>{bg}</span>
                </label>
              ))}
            </div>
          </div>
  
          {/* File Upload Section */}
          <div className="mb-6">
            <label className="block text-black font-extrabold mb-2">Upload Organization Image:</label>
            <input 
              type="file" 
              name="orgImage" 
              accept="image/*" 
              onChange={handleChange} 
              required
              className="w-full border p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full py-3 text-lg font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
      </div>
        <a href="/login">login</a>
    </div>
  );
  
  
};

export default RegisterOrg;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RegisterOrg = () => {
//   const [formData, setFormData] = useState({
//     organization_name: "",
//     address: "",
//     area: "",
//     zip: "",
//     road: "",
//     emailid: "",
//     orgpassword: "",
//     requiredBloodGroup: [],
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "requiredBloodGroup") {
//       setFormData((prev) => {
//         const updatedGroups = prev.requiredBloodGroup.includes(value)
//           ? prev.requiredBloodGroup.filter((bg) => bg !== value)
//           : [...prev.requiredBloodGroup, value];

//         return updatedGroups.length <= 2 ? { ...prev, requiredBloodGroup: updatedGroups } : prev;
//       });
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !formData.organization_name ||
//       !formData.address ||
//       !formData.area ||
//       !formData.zip ||
//       !formData.road ||
//       !formData.emailid ||
//       !formData.orgpassword
//     ) {
//       alert("All fields are required!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/signinorgn", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "Failed to register");

//       alert("Organization registered successfully!");
//       navigate("/success");
//     } catch (error) {
//       console.error("Error:", error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-gray-200"
//       >
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           Register Organization
//         </h2>

//         {/* Input Fields */}
//         <div className="grid grid-cols-1 gap-4">
//           {["organization_name", "address", "area", "zip", "road", "emailid", "orgpassword"].map((field) => (
//             <div key={field}>
//               <label className="block text-gray-700 font-medium mb-1">
//                 {field.replace(/_/g, " ")}
//               </label>
//               <input
//                 type={field === "orgpassword" ? "password" : "text"}
//                 name={field}
//                 placeholder={field.replace(/_/g, " ")}
//                 required
//                 className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 hover:border-blue-500"
//                 onChange={handleChange}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Select Blood Groups */}
        // <div className="mt-4">
        //   <label className="block text-gray-700 font-medium mb-1">
        //     Blood Group (Select up to 2)
        //   </label>
        //   <div className="grid grid-cols-2 gap-2">
        //     {["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"].map((bg) => (
        //       <label
        //         key={bg}
        //         className="flex items-center space-x-2 border border-gray-400 p-2 rounded-lg cursor-pointer hover:border-blue-500"
        //       >
        //         <input
        //           type="checkbox"
        //           name="requiredBloodGroup"
        //           value={bg}
        //           checked={formData.requiredBloodGroup.includes(bg)}
        //           onChange={handleChange}
        //         />
        //         <span>{bg}</span>
        //       </label>
        //     ))}
        //   </div>
        // </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition duration-300 font-semibold"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterOrg;

// import React, { useState } from "react";

// const RegisterOrg = () => {
//   const [formData, setFormData] = useState({
//     organization_name: "",
//     address: "",
//     area: "",
//     zip: "",
//     road: "",
//     emailid: "",
//     orgpassword: "",
//     requiredBloodGroup: [],
//     image: null,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const submitData = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       submitData.append(key, key === "image" ? value : JSON.stringify(value));
//     });

//     const response = await fetch("http://localhost:3000/signinorgn", {
//       method: "POST",
//       body: submitData,
//     });

//     const result = await response.json();
//     alert(result.message);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="organization_name" placeholder="Organization Name" onChange={handleChange} required />
//       <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
//       <input type="email" name="emailid" placeholder="Email" onChange={handleChange} required />
//       <input type="password" name="orgpassword" placeholder="Password" onChange={handleChange} required />
//       <input type="file" name="image" accept="image/*" onChange={handleFileChange} required />
//       <button type="submit">Register</button>
//     </form>
//       );
//     };
    
//     export default RegisterOrg;