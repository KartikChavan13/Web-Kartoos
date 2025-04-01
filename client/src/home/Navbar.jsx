import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import BloodDonorProfile from "./section/Profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false); // For profile hover effect
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    sessionStorage.removeItem("userid");
    navigate("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 
      ${isScrolled ? "shadow-lg bg-white/80 backdrop-blur-lg" : "bg-white/60 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="blood/images (1).jpg" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-xl text-red-600">
          <li><a href="/" className="hover:text-red-400">Home</a></li>
          <li><a href="/donate" className="hover:text-red-400">Why Donate Blood</a></li>
          <li><a href="/doner" className="hover:text-red-400">Become A Donor</a></li>
          <li><a href="/needblood" className="hover:text-red-400">Need Blood</a></li>
          <li><a href="/about" className="hover:text-red-400">About</a></li>
        </ul>

        {/* Profile and Logout/Signin Button */}
        <div className="flex items-center space-x-4 relative">
          {sessionStorage.getItem("userid") && (
            <div
              className="relative"
              onMouseEnter={() => setShowProfile(true)} // Hover for Desktop
              onMouseLeave={() => setShowProfile(false)} // Hover for Desktop
              onClick={() => setShowProfile(!showProfile)} // Click for Mobile
            >
              <img
                src="/images/image_no (1).jpg"
                alt="Profile"
                className="h-9 w-9 rounded-full border border-gray-300 cursor-pointer"
              />

              {/* Floating Profile Box (Animated Sliding Effect) */}
              <div
                className={`absolute  top-12  w-80 h-fit  -right-35 bg-white shadow-lg rounded-lg p-4 z-50 transition-transform duration-300 
                  ${showProfile ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0 pointer-events-none"}`}
              >
                <BloodDonorProfile />
              </div>
            </div>
          )}

          <button
            onClick={() => {
              if (sessionStorage.getItem("userid")) {
                logout();
              } else {
                navigate("/Signin");
              }
            }}
            className="rounded-3xl p-2 text-white bg-red-600 font-bold"
          >
            {sessionStorage.getItem("userid") ? "Logout" : "Signin"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-red-600"
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute left-0 top-full w-full bg-white shadow-md text-red-600 text-lg p-4">
          <li><a href="/" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/donate" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Why Donate Blood</a></li>
          <li><a href="/doner" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Become A Donor</a></li>
          <li><a href="/needblood" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Need Blood</a></li>
          <li><a href="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</a></li>
        </ul>
      )}
    </nav>
  );
}

// import { useState, useEffect } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom";
// import BloodDonorProfile from "./section/Profile"; // Import Profile Component

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showProfile, setShowProfile] = useState(false); // For profile hover effect
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     sessionStorage.removeItem("userid");
//     navigate("/");
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 
//       ${isScrolled ? "shadow-lg bg-white/80 backdrop-blur-lg" : "bg-white/60 backdrop-blur-sm"}`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <img src="blood/images (1).jpg" alt="Logo" className="h-12 w-auto" />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-xl text-red-600">
//           <li><a href="/" className="hover:text-red-400">Home</a></li>
//           <li><a href="/donate" className="hover:text-red-400">Why Donate Blood</a></li>
//           <li><a href="/doner" className="hover:text-red-400">Become A Donor</a></li>
//           <li><a href="/needblood" className="hover:text-red-400">Need Blood</a></li>
//           <li><a href="/about" className="hover:text-red-400">About</a></li>
//         </ul>

//         {/* Profile and Logout/Signin Button */}
//         <div className="flex items-center space-x-4 relative">
//           {sessionStorage.getItem("userid") && (
//             <div
//               className="relative"
//               onMouseEnter={() => setShowProfile(true)}
//               onMouseLeave={() => setShowProfile(false)}
//             >
//               <img
//                 src="/images/image_no (1).jpg"
//                 alt="Profile"
//                 className="h-9 w-9 rounded-full border border-gray-300 cursor-pointer"
//               />
              
//               {/* Floating Profile Box */}
//               {showProfile && (
//                 <div className="absolute top-12 right-0 w-3xl h-80 bg-white shadow-lg rounded-lg p-4 z-50">
//                   <BloodDonorProfile />
//                 </div>
//               )}
//             </div>
//           )}

//           <button
//             onClick={() => {
//               if (sessionStorage.getItem("userid")) {
//                 logout();
//               } else {
//                 navigate("/Signin");
//               }
//             }}
//             className="rounded-3xl p-2 text-white bg-red-600 font-bold"
//           >
//             {sessionStorage.getItem("userid") ? "Logout" : "Signin"}
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-red-600"
//         >
//           {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden absolute left-0 top-full w-full bg-white shadow-md text-red-600 text-lg p-4">
//           <li><a href="/" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Home</a></li>
//           <li><a href="/donate" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Why Donate Blood</a></li>
//           <li><a href="/doner" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Become A Donor</a></li>
//           <li><a href="/needblood" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Need Blood</a></li>
//           <li><a href="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</a></li>
//         </ul>
//       )}
//     </nav>
//   );
// }
