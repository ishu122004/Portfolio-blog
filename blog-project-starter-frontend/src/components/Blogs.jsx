import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios"
import Footer from './common/Footer';
import auth from '../config/firebase';
function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [admin,setadmin]=useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log("User logged in")
                if(user.uid==="jnhSSWoavdbosbIVW0N9YjqGsi82"){  //for only add blog by Admin
                    console.log("user is admin")
                    setadmin(true)
                }
                else{
                    console.log("not an admin")
                    setadmin(false)
                }
            }
            else(
                console.log("User logged out")
            )
        })
        axios.get(`${process.env.REACT_VITE_API_URL}/api/blogs`).then((res) => {
            console.log(res.data)
            setBlogs(res.data)
        }).catch(() => {
            console.log("Error fetching data")
        })
    }, [])



    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');


    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`${import.meta.env.REACT_VITE_API_URL}/api/blogs/like/${blog_id}`);
            // After successfully updating the likes count in the backend, fetch the updated list of blogs
            if (response.status === 200) {
                axios.get(`${process.env.REACT_VITE_API_URL}/api/blogs`).then((res) => {
                    console.log(res.data)
                    setBlogs(res.data)
                }).catch(() => {
                    console.log("Error fetching data")
                })
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    const handleNewBlogSubmit = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });


        const likes = 0
        axios.post(`${process.env.REACT_VITE_API_URL}/api/blogs`, { newTitle, date, newContent, likes }).then((res) => {
            console.log(res.data)

            axios.get(`${process.env.REACT_VITE_API_URL}/api/blogs`).then((res) => {
                console.log(res.data)
                setBlogs(res.data)
            }).catch(() => {
                console.log("Error fetching data")
            })

        });
        setNewTitle('');
        setNewContent('');
    };

    return (
//         <div className="blog-section py-14">
//             <h2 className="text-center text-5xl font-bold mb-14">Latest  <span className='text-orange-400'>Blogs</span> 📚</h2>

//             {/* Blog creation form */}
//             {admin?<div className="blog-creation-form mb-8" style={{ width: "80%", margin: "auto" }}>
//                 <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
//                     <input
//                         type="text"
//                         placeholder="Blog Title"
//                         value={newTitle}
//                         onChange={(e) => setNewTitle(e.target.value)}
//                         className="p-2 border rounded"
//                         required
//                     />
//                     <textarea
//                         placeholder="Blog Content"
//                         value={newContent}
//                         onChange={(e) => setNewContent(e.target.value)}
//                         className="p-2 border rounded"
//                         rows="4"
//                         required
//                     />
//                     <button type="submit" className="bg-orange-400 text-white p-2 rounded hover:bg-orange-600">
//                         Add Blog
//                     </button>
//                 </form>
//             </div>
// :""}
            
//             <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
//                 {blogs.map((blog) => (
//                     <div key={blog._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg">
//                         <h3 className="blog-title font-semibold text-2xl text-gray-800 mb-3">{blog.newTitle}</h3>
//                         <p className="blog-date text-gray-400 text-sm mb-4">{blog.date}</p>
//                         <p className="blog-content text-gray-600 mb-4">{blog.newContent}</p>
//                         <span className="text-blue-500 cursor-pointer" onClick={() => handleLike(blog._id)}>Like</span>
//                         <span className="ml-2">{blog.likes} Likes</span>
//                     </div>
//                 ))}
//             </div>

//             <Footer/>
//         </div>
       

//  <div className="blog-section py-14 bg-[#F8F7F2]">
//     <h2 className="text-center text-5xl font-bold mb-14 text-[#252A24]">
//         Latest <span className="text-[#7A9B76]">Blogs</span> 📚
//     </h2>

//     {/* Blog creation form */}
//     {admin ? (
//         <div className="blog-creation-form mb-8 p-6 bg-white border border-[#DDE4D8] rounded-xl shadow-sm" style={{ width: "80%", margin: "auto" }}>
//             <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
//                 <input
//                     type="text"
//                     placeholder="Blog Title"
//                     value={newTitle}
//                     onChange={(e) => setNewTitle(e.target.value)}
//                     className="p-3 border border-[#DDE4D8] rounded-lg bg-[#F8F7F2] text-[#252A24] outline-none focus:border-[#7A9B76] focus:ring-1 focus:ring-[#7A9B76]"
//                     required
//                 />
//                 <textarea
//                     placeholder="Blog Content"
//                     value={newContent}
//                     onChange={(e) => setNewContent(e.target.value)}
//                     className="p-3 border border-[#DDE4D8] rounded-lg bg-[#F8F7F2] text-[#252A24] outline-none focus:border-[#7A9B76] focus:ring-1 focus:ring-[#7A9B76]"
//                     rows="4"
//                     required
//                 />
//                 <button type="submit" className="bg-[#7A9B76] text-white p-3 rounded-lg hover:bg-[#526B50] transition duration-300">
//                     Add Blog
//                 </button>
//             </form>
//         </div>
//     ) : null}

//     <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
//         {blogs.map((blog) => (
//             <div key={blog._id} className="blog-post mb-8 p-6 bg-white border border-[#DDE4D8] shadow-sm rounded-xl hover:shadow-md transition duration-300">
//                 <h3 className="blog-title font-semibold text-2xl text-[#252A24] mb-3">
//                     {blog.newTitle}
//                 </h3>
//                 <p className="blog-date text-[#7A9B76] text-sm mb-4">
//                     {blog.date}
//                 </p>
//                 <p className="blog-content text-[#6B7468] mb-4">
//                     {blog.newContent}
//                 </p>
//                 <span
//                     className="text-[#7A9B76] cursor-pointer hover:text-[#526B50] font-medium"
//                     onClick={() => handleLike(blog._id)}
//                 >
//                     Like
//                 </span>
//                 <span className="ml-2 text-[#6B7468]">
//                     {blog.likes} Likes
//                 </span>
//             </div>
//         ))}
//     </div>

//     <Footer />
// </div> 
<div className="min-h-screen bg-[#F8F7F2] text-[#252A24]">
    <main>
        <section className="border-b border-[#DDE4D8]">
            <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-24">
                <div className="max-w-4xl">
                    <p className="text-sm font-semibold uppercase tracking-[4px] text-[#7A9B76]">
                        Developer Journal
                    </p>

                    <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                        Ideas I build,
                        <span className="block text-[#526B50]">
                            lessons I keep.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B7468]">
                        Notes, experiences and things I'm learning while
                        building modern web applications.
                    </p>
                </div>
            </div>
        </section>

        {admin ? (
            <section className="border-b border-[#DDE4D8] bg-white">
                <div className="mx-auto max-w-4xl px-5 py-12 md:px-10">
                    <div className="mb-6">
                        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7A9B76]">
                            Admin
                        </p>
                        <h2 className="mt-2 text-2xl font-bold">
                            Write a new article
                        </h2>
                    </div>

                    <form
                        onSubmit={handleNewBlogSubmit}
                        className="rounded-2xl border border-[#DDE4D8] bg-[#F8F7F2] p-6 sm:p-8"
                    >
                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-semibold text-[#526B50]">
                                Blog Title
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your blog title"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="w-full rounded-lg border border-[#DDE4D8] bg-white px-4 py-3 text-[#252A24] outline-none transition duration-200 focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20"
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-semibold text-[#526B50]">
                                Blog Content
                            </label>
                            <textarea
                                placeholder="Write Blog content ..."
                                value={newContent}
                                onChange={(e) => setNewContent(e.target.value)}
                                rows="7"
                                className="w-full resize-none rounded-lg border border-[#DDE4D8] bg-white px-4 py-3 text-[#252A24] outline-none transition duration-200 focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-lg bg-[#7A9B76] px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#526B50] hover:shadow-lg"
                        >
                            Publish Article
                        </button>
                    </form>
                </div>
            </section>
        ) : ''}

        <section>
            <div className="mx-auto max-w-6xl px-5 py-20 md:px-10">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7A9B76]">
                            Journal
                        </p>
                        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                            Latest writing
                        </h2>
                    </div>

                    <p className="hidden text-sm text-[#6B7468] sm:block">
                        {blogs.length} articles
                    </p>
                </div>

                <div className="border-t border-[#DDE4D8]">
                    {blogs.map((blog, index) => (
                        <article
                            key={blog._id}
                            className="group border-b border-[#DDE4D8] py-8 transition duration-300 hover:px-3"
                        >
                            <div className="grid gap-6 md:grid-cols-[70px_1fr_140px] md:items-start">
                                <div className="text-3xl font-bold text-[#DDE4D8] transition duration-300 group-hover:text-[#7A9B76]">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#7A9B76]">
                                            Development
                                        </span>

                                        <span className="text-xs text-[#6B7468]">
                                            {blog.date}
                                        </span>
                                    </div>

                                    <h3 className="mt-3 text-2xl font-bold leading-tight transition duration-300 group-hover:text-[#526B50]">
                                        {blog.newTitle}
                                    </h3>

                                    <p className="mt-3 max-w-3xl leading-7 text-[#6B7468]">
                                        {blog.newContent}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 md:justify-end md:pt-1">
                                    <button
                                        onClick={() => handleLike(blog._id)}
                                        className="text-sm font-semibold text-[#526B50] transition duration-200 hover:text-[#7A9B76]"
                                    >
                                        Like
                                    </button>

                                    <span className="text-sm text-[#6B7468]">
                                        {blog.likes}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        <section className="border-t border-[#DDE4D8] bg-white">
            <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-10">
                <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7A9B76]">
                    Keep Learning
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Build. Learn. Share.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#6B7468]">
                    Every project teaches something new. This journal is where
                    I document that journey.
                </p>
            </div>
        </section>
    </main>

    <Footer />
</div>
    );
}

export default Blogs