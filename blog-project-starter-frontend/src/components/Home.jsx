import React from 'react'
import Navbar from './common/Navbar'
import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.png"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import Resume from "../assets/MERN_Stack.pdf"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()

    return ( 
<div className="min-h-screen bg-[#F8F7F2] text-[#252A24]">
<header className="border-b border-[#DDE4D8] bg-[#F8F7F2]">
  <section className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 py-16 md:px-10 lg:py-20">
    <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
      
      <div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#7A9B76]">
          Full Stack Developer
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#252A24] sm:text-6xl md:text-7xl">
          Hi, I'm
          <span className="block text-[#526B50]">Iswarya A</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-[#6B7468] md:text-lg">
          I build responsive, real-world web applications with React.js,
          JavaScript and modern full-stack technologies.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <button
            onClick={() =>
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="rounded-lg bg-[#7A9B76] px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#526B50] hover:shadow-lg"
          >
            Explore Work
          </button>

          <a
            href="https://github.com/ishu122004"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#526B50] px-6 py-3 font-semibold text-[#526B50] transition duration-300 hover:bg-[#526B50] hover:text-white"
          >
            GitHub 
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6B7468]">
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
        </div>
      </div>

      <figure className="w-full">
        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-[#526B50]/40 bg-[#252A24] shadow-2xl">
          
          <div className="flex items-center gap-2 border-b border-[#526B50] px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-[#7A9B76]"></span>
            <span className="h-3 w-3 rounded-full bg-[#DDE4D8]"></span>
            <span className="h-3 w-3 rounded-full bg-[#6B7468]"></span>

            <span className="ml-auto font-mono text-xs text-[#AAB7A6]">
              developer.js
            </span>
          </div>

          <div className="overflow-x-auto p-6 font-mono text-xs leading-7 sm:p-7 sm:text-sm">
            <p className="text-[#6B7468]">
               Hello, I'm Iswarya
            </p>

            <p className="mt-3">
              <span className="text-[#7A9B76]">const</span>{" "}
              <span className="text-white">developer</span> = {"{"}
            </p>

            <p className="pl-5">
              <span className="text-[#AAB7A6]">name:</span>{" "}
              <span className="text-white">"Iswarya A"</span>,
            </p>

            <p className="pl-5">
              <span className="text-[#AAB7A6]">role:</span>{" "}
              <span className="text-white">"Full Stack Developer"</span>,
            </p>

            <p className="pl-5">
              <span className="text-[#AAB7A6]">stack:</span> [
            </p>

            <p className="pl-10 text-white">
              "JavaScript",
            </p>

             <p className="pl-10 text-white">
              "React.js",
            </p>

            <p className="pl-10 text-white">
              "Node.js",
            </p>

             <p className="pl-10 text-white">
              "Express.js",
            </p>

            <p className="pl-10 text-white">
              "MongoDB"
            </p>

            <p className="pl-5">
              ],
            </p>

            <p className="pl-5">
              <span className="text-[#AAB7A6]">focus:</span>{" "}
              <span className="text-white">
                "Real-world web applications"
              </span>,
            </p>

            <p className="pl-5">
              <span className="text-[#AAB7A6]">available:</span>{" "}
              <span className="text-[#7A9B76]">true</span>
            </p>

            <p>{"}"}</p>

            <div className="mt-5 border-t border-[#526B50] pt-4">
              <p className="flex items-center gap-2 text-[#AAB7A6]">
                <span className="h-2 w-2 rounded-full bg-[#7A9B76]"></span>
                Open to opportunities
              </p>
            </div>
          </div>
        </div>
      </figure>

    </div>
  </section>
</header>
  <main>

    <section aria-labelledby="about-heading" className="border-b border-[#DDE4D8] bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">

        <header>
          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#7A9B76]">
            About Me
          </p>

          <h2 id="about-heading" className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            A developer who enjoys building.
          </h2>
        </header>

        <div>
          <p className="text-base leading-8 text-[#6B7468] md:text-lg">
            I'm a Computer Science Engineering graduate with hands-on experience
            developing responsive frontend interfaces and full-stack web
            applications. I enjoy turning ideas into clean, functional and
            user-friendly digital experiences.
          </p>

          <p className="mt-5 text-base leading-8 text-[#6B7468] md:text-lg">
            My current focus is React.js and modern JavaScript development,
            while also working with Node.js, Express.js, MongoDB, REST APIs
            and Firebase.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[#DDE4D8] pt-7 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-[#6B7468]">Graduated</dt>
              <dd className="mt-1 text-2xl font-bold text-[#526B50]">2026</dd>
            </div>

            {/* <div>
              <dt className="text-sm text-[#6B7468]">CGPA</dt>
              <dd className="mt-1 text-2xl font-bold text-[#526B50]">7.75</dd>
            </div> */}

            <div>
              <dt className="text-sm text-[#6B7468]">Projects</dt>
              <dd className="mt-1 text-2xl font-bold text-[#526B50]">6+</dd>
            </div>
          </dl>
        </div>

      </div>
    </section>

    <section aria-labelledby="skills-heading" className="border-b border-[#DDE4D8]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-24">

        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#7A9B76]">
            Skills
          </p>

          <h2 id="skills-heading" className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Technologies I work with
          </h2>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <article className="rounded-xl border border-[#DDE4D8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7A9B76]">
              Frontend
            </h3>

            <ul className="mt-5 flex flex-wrap gap-2">
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">HTML</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">CSS</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">JavaScript</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">React.js</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Redux</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Context API</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">React Router</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Tailwind CSS</li>
            </ul>
          </article>

          <article className="rounded-xl border border-[#DDE4D8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7A9B76]">
              Backend
            </h3>

            <ul className="mt-5 flex flex-wrap gap-2">
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Node.js</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Express.js</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">REST API</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Axios</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">JWT</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Nodemailer</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">bcrypt</li>
            </ul>
          </article>

          <article className="rounded-xl border border-[#DDE4D8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7A9B76]">
              Database
            </h3>

            <ul className="mt-5 flex flex-wrap gap-2">
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">MongoDB</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">MongoDB Atlas</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Mongoose</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Mongosh</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">SQL</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Firebase</li>
            </ul>
          </article>

          <article className="rounded-xl border border-[#DDE4D8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7A9B76]">
              Tools
            </h3>

            <ul className="mt-5 flex flex-wrap gap-2">
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Git</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">GitHub</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Vercel</li>
              <li className="rounded-md bg-[#F8F7F2] px-3 py-2 text-sm">Render</li>
            </ul>
          </article>

        </div>
      </div>
    </section>

    <section id="projects" aria-labelledby="projects-heading" className="border-b border-[#DDE4D8] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-24">

        <header className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#7A9B76]">
              Featured Work
            </p>

            <h2 id="projects-heading" className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Projects I've built
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#6B7468] md:text-right">
            A selection of projects demonstrating my frontend and full-stack
            development skills.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="group overflow-hidden rounded-2xl border border-[#DDE4D8] bg-[#F8F7F2] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <figure className="overflow-hidden border-b border-[#DDE4D8]">
              <img
                src={P1}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                alt="Property listing and management platform"
              />
            </figure>

            <div className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#7A9B76]">
                Full-Stack Developer Portfolio & Blog
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Portfolio Blog
              </h3>

              <p className="mt-4 leading-7 text-[#6B7468]">
                A property management application with property creation,
                editing, deletion, search and filtering powered by React
                and MongoDB.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">React</li>
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">Tailwind</li>
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">Express</li>
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">MongoDB</li>
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">Firebase</li>

              </ul>
            </div>

          </article>
          <article className="group overflow-hidden rounded-2xl border border-[#DDE4D8] bg-[#F8F7F2] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <figure className="overflow-hidden border-b border-[#DDE4D8]">
              <img
                src={P2}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                alt="Bulk Mail email automation project"
              />
            </figure>

            <div className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#7A9B76]">
                Full Stack
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Bulk Mail — Email Automation
              </h3>

              <p className="mt-4 leading-7 text-[#6B7468]">
                A full-stack email automation platform for sending emails to
                individual and bulk recipients with Excel upload support,
                authentication and email history.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">React</li>
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">REST API</li>
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">Node.js</li>
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">Express</li>
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">MongoDB</li>
                <li className="rounded-md bg-white px-3 py-1.5 text-xs">Nodemailer</li>
              </ul>
            </div>

          </article>

          
          <article className="group overflow-hidden rounded-2xl border border-[#DDE4D8] bg-[#F8F7F2] transition duration-300 hover:-translate-y-2 hover:shadow-xl lg:col-span-2">

            <div className="grid lg:grid-cols-2">

              <figure className="overflow-hidden border-b border-[#DDE4D8] lg:border-b-0 lg:border-r">
                <img
                  src={P3}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-full"
                  alt="MusicFlow authentication system"
                />
              </figure>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-[#7A9B76]">
                  Authentication
                </p>

                <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                  MusicFlow Authentication System
                </h3>

                <p className="mt-4 leading-7 text-[#6B7468]">
                  A responsive authentication platform featuring signup,
                  login, validation, shared user state and REST API
                  integration.
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  <li className="rounded-md bg-white px-3 py-1.5 text-xs">React</li>
                  <li className="rounded-md bg-white px-3 py-1.5 text-xs">Context API</li>
                  <li className="rounded-md bg-white px-3 py-1.5 text-xs">Node.js</li>
                  <li className="rounded-md bg-white px-3 py-1.5 text-xs">Express</li>
                  <li className="rounded-md bg-white px-3 py-1.5 text-xs">Firebase</li>
                </ul>
              </div>

            </div>
          </article>

        </div>
      </div>
    </section>

    <section aria-labelledby="blog-heading" className="border-b border-[#DDE4D8]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#7A9B76]">
              Blog
            </p>

            <h2 id="blog-heading" className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              I write about technology.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#6B7468]">
              Explore my blog where I share what I learn about web development,
              React, JavaScript and other technologies I'm working with.
            </p>

            <button
              onClick={() => navigate("/blogs")}
              className="mt-7 rounded-lg border border-[#526B50] px-6 py-3 font-semibold text-[#526B50] transition duration-300 hover:bg-[#526B50] hover:text-white"
            >
              Read Blog →
            </button>
          </div>

          <figure className="hidden justify-end lg:flex">
            <img
              src={BlogImage}
              className="w-64 opacity-90"
              alt="Blog illustration"
            />
          </figure>

        </div>
      </div>
    </section>

    <section aria-labelledby="contact-heading">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-10 md:py-28">

        <p className="text-sm font-semibold uppercase tracking-[3px] text-[#7A9B76]">
          Let's Connect
        </p>

        <h2 id="contact-heading" className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Let's build something
          <span className="block text-[#7A9B76]">
            meaningful together.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#6B7468]">
          I'm currently looking for opportunities where I can contribute,
          learn and grow as a Frontend or Full Stack Developer.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={()=>{
            navigate('/contact')
          }} className="rounded-lg bg-[#7A9B76] px-7 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#526B50] hover:shadow-lg">
            Contact Me
          </button>

          <button className="rounded-lg border border-[#526B50] px-7 py-3 font-semibold text-[#526B50] transition duration-300 hover:bg-[#526B50] hover:text-white">
           <a href="https://github.com/ishu122004" target="_blank" rel="noreferrer">GitHub</a>
          </button>
        </div>

      </div>
    </section>

  </main>

  <Footer />
</div>
  
    )
}

export default Home