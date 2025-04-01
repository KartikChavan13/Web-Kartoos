import React, { useState } from "react";

const Signin = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    age: "",
    contact: "",
    bloodgroup: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? (checked ? value : prevData[name]) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    if (formData.password.length <= 2) {
      alert("Password must be at least 4 characters.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Registration completed!");
      } else {
        alert(`Error: ${result.message || "Failed to submit the form"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video/WorldBloodDonorDay.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Form Container */}
      <div className="relative flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/30 shadow-lg rounded-xl py-10 px-10 w-[450px] sm:w-[500px] lg:w-[550px] max-w-md sm:max-w-lg lg:max-w-xl z-10"
        >
          <h1 className="text-3xl lg:text-4xl text-black font-extrabold mb-6 text-center">
            Register Form
          </h1>

          {/* Name Inputs */}
          <div className="mb-6">
            <label className="block text-black text-lg lg:text-xl font-extrabold mb-2">
              Name
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name"
                className="shadow border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="shadow border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          {/* Age & Gender */}
          <div className="mb-6">
            <label className="block text-black text-lg lg:text-xl font-extrabold mb-2">
              Age and Gender
            </label>
            <div className="flex space-x-4">
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className="shadow border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <div className="flex items-center space-x-4">
                <label className="text-black text-lg font-extrabold flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                  />
                  <span>Male</span>
                </label>
                <label className="text-black text-lg font-extrabold flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  <span>Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* Contact & Blood Group */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-black text-lg font-extrabold mb-2">
                  Contact No.
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact No."
                  pattern="[0-9]{10}"
                  className="shadow border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label className="block text-black text-lg font-extrabold mb-2">
                  Blood Group
                </label>
                <select
                  name="bloodgroup"
                  value={formData.bloodgroup}
                  onChange={handleChange}
                  className="shadow border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-black text-lg font-extrabold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="shadow border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-black text-lg font-extrabold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password (Min 4 characters)"
              className="shadow border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline"
              minLength="3"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
          <a href="/login">login</a>
        </form>
      </div>
     
    </div>
  );
};

export default Signin;
