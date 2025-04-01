import React, {useEffect ,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
  
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);
      
      if (response.ok) {
        sessionStorage.setItem("userid",data.user.id)
        alert('Login successful!');
        navigate("/");
      } else {
        alert(data.message || 'Invalid credentials.');
        navigate("/login");
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
      setLoading(false);
    }
  };
  
  // useEffect(() => {
  //   if (sessionStorage.getItem("userid")) {
  //     navigate('/'); 
  //   }
  // }, [navigate]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const loginData = { email, password };

  //   try {
  //     const response = await axios.post('http://localhost:3000/login', loginData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
      
  //     if (response.status === 200 && response.data.success) {
  //       sessionStorage.setItem("userid", response.data.user.id); // Assuming the ID is in the response data
  //       alert('Login successful!');
  //       navigate('/'); // Redirect to home page after successful login
  //     } else {
  //       alert(response.data.message || 'Invalid credentials.');
  //       navigate('/login'); // Stay on login page if credentials are invalid
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Something went wrong.');
  //     navigate('/login'); // Redirect to login page if an error occurs
  //   }
  // };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
