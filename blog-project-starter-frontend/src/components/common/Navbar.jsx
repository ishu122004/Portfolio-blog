import React from 'react'
import "./Navbar.css"
import { Link,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import auth from '../../config/firebase'
import { signOut } from 'firebase/auth'

function Navbar() {
  const [log,setlog]=useState(false)
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((user)=>{
      if(user){
        setlog(true)
        console.log("User logged in")
      }else{
        setlog(false)
        console.log("user logged out")
      }
    })
    return unsubscribe
  },[])

  const logout=()=>{
    signOut(auth)
  }

  return (
    <div className="py-5 border-b border-[#DDE4D8]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#252A24]">Personal Portfolio Blog</h2>

        <button
          className="md:hidden text-2xl text-[#526B50]"
          onClick={()=>setMenu(!menu)}
        >
          ☰
        </button>

        <div className="hidden md:flex items-center gap-6">
          <Link className="text-[#526B50] hover:text-[#252A24] transition" to="/home">Home</Link>
          <Link className="text-[#526B50] hover:text-[#252A24] transition" to="/blogs">Blogs</Link>
          <Link className="text-[#526B50] hover:text-[#252A24] transition" to="/about">About</Link>
          <Link className="text-[#526B50] hover:text-[#252A24] transition" to="/contact">Contact</Link>

          {log ? (
            <button className="blog-btn" onClick={logout}>Logout</button>
          ) : (
            <button className="blog-btn" onClick={()=>navigate("/login")}>Login</button>
          )}
        </div>
      </div>

      {menu && (
        <div className="md:hidden flex flex-col gap-4 mt-5">
          <Link className="text-[#526B50]" to="/home" onClick={()=>setMenu(false)}>Home</Link>
          <Link className="text-[#526B50]" to="/blogs" onClick={()=>setMenu(false)}>Blogs</Link>
          <Link className="text-[#526B50]" to="/about" onClick={()=>setMenu(false)}>About</Link>
          <Link className="text-[#526B50]" to="/contact" onClick={()=>setMenu(false)}>Contact</Link>

          {log ? (
            <button className="blog-btn w-fit" onClick={logout}>Logout</button>
          ) : (
            <button className="blog-btn w-fit" onClick={()=>navigate("/login")}>Login</button>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar