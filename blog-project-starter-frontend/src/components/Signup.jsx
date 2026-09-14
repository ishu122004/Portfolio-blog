import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';  //for connect firebase with our web page
import auth from '../config/firebase';
import { useEffect } from 'react';
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook from React Router for navigation
    
    useEffect(()=>{
        window.scrollTo(0,0)
        auth.onAuthStateChanged(function(user){  //its for dont allow the signuin user again enter to signup page
            if(user){
                navigate('/home')
            }
        })
    },[navigate])
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(auth,email,password).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })         

        // Simulate user registration process
        console.log('User registered:', { email, password });
        // After registration, redirect to the login page
        navigate('/login'); // Replace '/login' with your login page route
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8F7F2] px-4 py-10">
  <form onSubmit={handleSubmit}
    className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl border border-[#DDE4D8] shadow-lg">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-[#252A24]">Sign In</h2>
      <p className="text-sm text-[#6B7468] mt-2">
        Create your account and get started
      </p>
    </div>

    <div className="mb-5">
      <label className="block text-sm font-semibold text-[#526B50] mb-2">
        Email
      </label>
      <input type="email" value={email}
        onChange={(e) => setEmail(e.target.value)} required
        placeholder="Enter your email" className="w-full px-4 py-3 border border-[#DDE4D8] rounded-lg bg-[#F8F7F2] text-[#252A24] outline-none focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20 transition duration-200"
      />
    </div>

    <div className="mb-5">
      <label className="block text-sm font-semibold text-[#526B50] mb-2">
        Password
      </label>
      <input type="password" value={password}
        onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password"
        className="w-full px-4 py-3 border border-[#DDE4D8] rounded-lg bg-[#F8F7F2] text-[#252A24] outline-none focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20 transition duration-200"
      />
    </div>

    <div className="mb-5">
      <label className="block text-sm font-semibold text-[#526B50] mb-2">
        Confirm Password
      </label>
      <input type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        placeholder="Confirm your password"
        className="w-full px-4 py-3 border border-[#DDE4D8] rounded-lg bg-[#F8F7F2] text-[#252A24] outline-none focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20 transition duration-200"
      />
      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error}
        </p>
      )}
    </div>

    <p className="text-[#7A9B76] font-medium text-sm cursor-pointer my-5 hover:text-[#526B50] transition duration-200" onClick={() => navigate("/login")}> Already have an account? Login here</p>

    <button type="submit" className="w-full py-3 px-4 bg-[#7A9B76] text-white font-semibold rounded-lg hover:bg-[#526B50] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition duration-200">Register
    </button>
  </form>
</div>
    );
}

export default Signup;
