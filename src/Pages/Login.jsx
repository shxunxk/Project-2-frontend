import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password); // Log email and password for debugging
  
    try {
      // Make POST request to backend
      const response = await axios.post('http://localhost:5000/users/login', {
        email: email,
        password: password,
      });
  
      // Access user details from response
      const userDetails = response.data.user;
      setUser(userDetails); // Update state with user details
      console.log("User Details:", userDetails); // Log user details for debugging
      
      Cookies.set('user', JSON.stringify(userDetails));
      navigate('/home');
    } catch (error) {
      // Handle errors properly
      setError("Invalid credentials");
      console.error("Login Error:", error.response?.data || error.message);
    }
  };
  

  console.log(email, password)

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;



//Identify appropriate process model
//WBS any can be asked
//Identify func and non func req of the project
//Data Flow Daigram drawing
//UML Diagram any 3 will be asked - Usecase, Class, Activity, Interaction diagram(Seq or collaboration), State Transition diagram
//Functional and non nfunctional test cases writing
//Storyboard writing
//Risk assessment for the project
