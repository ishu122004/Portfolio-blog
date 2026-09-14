import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';  //it  cgheck already user in or not
import auth from '../config/firebase';
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err,seterr]=useState()
    const [log,setlog]=useState()
    useEffect(()=>{
         window.scrollTo(0, 0);
         auth.onAuthStateChanged((user)=>{
            if(user){  //user login panniruntha redirect to home /not show again login page
                navigate('/home')
            }
         })

    },[])

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulate login process
        console.log('User logged in:', { email, password });
         signInWithEmailAndPassword(auth,email,password).then((res)=>{
            console.log(res)
         }).catch((err)=>{
           console.log("error in signing plz try again",err)
           seterr("please enter correct mail or password")
         })
        // Redirect to homepage/dashboard after login
        // Replace '/home' with your homepage route
        navigate('/home');
    };

    return (
     <div className="min-h-screen flex items-center justify-center bg-[#F8F7F2] px-4 py-10">
  <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl border border-[#DDE4D8] shadow-lg">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-[#252A24]">Login</h2>
      <p className="text-sm text-[#6B7468] mt-2">
        Welcome back to your personal blog
      </p>
    </div>

    <div className="mb-5">
      <label className="block text-sm font-semibold text-[#526B50] mb-2">
        Email
      </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
        required placeholder="Enter your email" className="w-full px-4 py-3 border border-[#DDE4D8] rounded-lg bg-[#F8F7F2] text-[#252A24] outline-none focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20 transition duration-200"
      />
    </div>

    <div className="mb-5">
      <label className="block text-sm font-semibold text-[#526B50] mb-2">
        Password
      </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
        placeholder="Enter your password" className="w-full px-4 py-3 border border-[#DDE4D8] rounded-lg bg-[#F8F7F2] text-[#252A24] outline-none focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20 transition duration-200"
      />
    </div>

    <p className="text-[#7A9B76] font-medium text-sm cursor-pointer my-4 hover:text-[#526B50] transition duration-200" onClick={() => navigate("/signup")}>
      New user? Register here
    </p>

    <p className="text-red-500 text-sm min-h-[20px] mb-3">
      {err ? "Please enter the correct email or password" : ""}
    </p>

    <button type="submit" className="w-full py-3 px-4 bg-[#7A9B76] text-white font-semibold rounded-lg hover:bg-[#526B50] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition duration-200">
      Login
    </button>
  </form>
</div>
    );
}

export default Login;
//if you want to avoid post error in between loading use try catch instead of then catch