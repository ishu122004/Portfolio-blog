import React from "react"
import { useNavigate } from "react-router-dom"

function About() {
  const navigate = useNavigate()

  const projects = [
    {
      number: "01",
      title: "Portfolio Blog",
      type: "Full-Stack Developer Portfolio & Blog",
      description: "A modern full-stack portfolio and blog with authentication, project showcase, blog publishing, likes, and MongoDB-powered contact management.",
      live:"https://portfolio-blog-2ynq.vercel.app/signup"
    },
    {
      number: "02",
      title: "Bulk Email Automation System",
      type: "Full Stack",
      description: "A full-stack email automation application for sending emails to individual and multiple recipients with Excel-based recipient management.",
      live:"https://bulk-mail-lbqn.vercel.app/login"
    },
    {
      number: "03",
      title: "MusicFlow — Spotify-Inspired Music Platform",
      type: "Full Stack",
      description: "A Spotify-inspired music platform with a responsive interface, user authentication, form validation, shared user state and REST API integration.",
      live: "https://musicflow-frontend.vercel.app/"
    },
    {
      number: "04",
      title: "Weather Report",
      type: "Frontend",
      description: "A weather application that displays real-time weather information using API integration.",
      live:"https://weather-report-xi-ten.vercel.app/"
    },
    {
      number: "05",
      title: "Student Management System",
      type: "React",
      description: "A React-based CRUD application for managing student information with search and data management features.",
      live:"https://student-hub-three-psi.vercel.app/"
    },
    {
      number: "06",
      title: "Random Number Generator",
      type: "JavaScript",
      description: "A simple interactive application that generates random numbers dynamically based on user interaction.",
      live:"https://random-core.vercel.app/"
    },
    {
      number: "07",
      title: "Character Counter Application",
      type: "JavaScript",
      description: "A text utility application that counts characters dynamically as the user types.",
      live:"https://counter-monitor-eta.vercel.app/"
    },
    {
      number: "08",
      title: "Nature Gallery",
      type: "React",
      description: "A responsive React gallery interface built with reusable components and Tailwind CSS.",
      live:"https://nature-gallery-8qpx.vercel.app/"
    },
    {
      number: "09",
      title: "NurseNear",
      type: "Team Project",
      description: "A healthcare booking platform that allows users to browse, filter and book nurses.",
      live:"https://ishu122004.github.io/NurseNear/"
    },
    {
      number: "10",
      title: "ShopSphere",
      type: "Frontend",
      description: "An e-commerce interface focused on product browsing and a responsive shopping experience.",
      live:"https://ishu122004.github.io/Shopsphere-ecommerce/"
    },
    {
      number: "11",
      title: "Real-Time Character Counter",
      type: "JavaScript",
      description: "A real-time text utility that updates character information instantly while typing.",
      live:"https://ishu122004.github.io/Real-time-Character-counter/"
    },
    {
      number: "12",
      title: "Registration Form",
      type: "Frontend",
      description: "A responsive registration interface with structured form fields and client-side interaction.",
      live:"https://ishu122004.github.io/Register-form/"
    },
    {
      number: "13",
      title: "Greenden Planting Website",
      type: "Frontend",
      description: "A responsive plant and gardening website designed using modern HTML, CSS and Tailwind styling.",
      live:"https://ishu122004.github.io/Greenden/"
    },
    {
      number: "14",
      title: "TravelExplorer",
      type: "Frontend",
      description: "A travel discovery interface inspired by travel review platforms for exploring destinations and experiences.",
      live:"https://ishu122004.github.io/Trip-advisor/"
    },
    {
      number: "15",
      title: "Udemy Clone",
      type: "Frontend",
      description: "An educational platform interface inspired by online course websites with structured course browsing.",
      live:"https://ishu122004.github.io/Udemy-clone/"
    }
  ]

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#252A24]">
      <main>
        <section className="border-b border-[#DDE4D8]">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-28">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#7A9B76]">
              About
            </p>

            <div className="mt-6 max-w-5xl">
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                I turn ideas into
                <span className="block text-[#526B50]">
                  working web experiences.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#6B7468] md:text-xl">
                I'm Iswarya A., a Computer Science Engineering graduate and
                aspiring Frontend Developer focused on building responsive,
                practical and user-friendly web applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById('proj').scrollIntoView({behavior:"smooth",block:"center"})}
                  className="rounded-lg bg-[#7A9B76] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#526B50] hover:shadow-lg"
                >
                  Explore My Work
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="rounded-lg border border-[#526B50] px-6 py-3 font-semibold text-[#526B50] transition duration-300 hover:bg-[#526B50] hover:text-white"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#DDE4D8] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-10">
            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7A9B76]">
                  01 — A Little About Me
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Curious about how things work.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-[#6B7468]">
                <p>
                  I enjoy taking an idea, breaking it into smaller problems
                  and turning it into a working web application.
                </p>

                <p>
                  My main focus is frontend development with React.js and
                  JavaScript. Along the way, I've also built full-stack
                  applications using Node.js, Express.js, MongoDB and REST
                  APIs.
                </p>

                <p>
                  Building different projects has helped me understand
                  responsive design, component-based development, CRUD
                  operations, authentication, API integration and working
                  with databases.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#DDE4D8]">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-10">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7A9B76]">
                02 — What I Build
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                From interfaces to full-stack applications.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <article className="border-t-2 border-[#7A9B76] pt-6">
                <span className="text-sm font-semibold text-[#7A9B76]">
                  01
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Frontend Experiences
                </h3>

                <p className="mt-4 leading-7 text-[#6B7468]">
                  Responsive and interactive interfaces using React.js,
                  JavaScript, HTML, CSS and Tailwind CSS.
                </p>
              </article>

              <article className="border-t-2 border-[#7A9B76] pt-6">
                <span className="text-sm font-semibold text-[#7A9B76]">
                  02
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Full-Stack Applications
                </h3>

                <p className="mt-4 leading-7 text-[#6B7468]">
                  Applications connecting React frontends with Node.js,
                  Express.js, REST APIs and MongoDB.
                </p>
              </article>

              <article className="border-t-2 border-[#7A9B76] pt-6">
                <span className="text-sm font-semibold text-[#7A9B76]">
                  03
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Practical Solutions
                </h3>

                <p className="mt-4 leading-7 text-[#6B7468]">
                  Projects that solve specific problems, from email
                  automation and property management to weather and
                  productivity tools.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-[#DDE4D8] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-10">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7A9B76]">
                03 — Selected Work
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Projects I've built.
              </h2>

              <p id='proj' className="mt-4 max-w-2xl leading-7 text-[#6B7468]">
                A collection of applications and interfaces I've built while
                learning and working with modern web technologies.
              </p>
            </div>

            <div className="border-t border-[#DDE4D8]">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group grid gap-5 border-b border-[#DDE4D8] py-7 transition duration-300 hover:px-3 md:grid-cols-[70px_180px_1fr]"
                >
                  <span className="text-2xl font-bold text-[#DDE4D8] transition duration-300 group-hover:text-[#7A9B76]">
                    {project.number}
                  </span>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[2px] text-[#7A9B76]">
                      {project.type}
                    </span>

                    <h3 className="mt-2 text-lg font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <p className="max-w-2xl leading-7 text-[#6B7468]">
                    {project.description}
                  </p>
                  <div className="mt-5">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#7A9B76] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#526B50] hover:shadow-md">Live Project
                   <span>↗</span>
                     </a>
                     </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#DDE4D8]">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-10">
            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7A9B76]">
                  04 — Technical Toolkit
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Technologies I work with.
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[#526B50]">Frontend</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Redux"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#DDE4D8] bg-white px-4 py-2 text-sm text-[#526B50]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-[#526B50]">Backend</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "REST APIs", "Nodemailer"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#DDE4D8] bg-white px-4 py-2 text-sm text-[#526B50]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-[#526B50]">Database & Tools</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["MongoDB", "Mongoose", "SQL", "Firebase", "Git", "GitHub", "Vercel", "Render"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#DDE4D8] bg-white px-4 py-2 text-sm text-[#526B50]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#DDE4D8] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-10">
            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7A9B76]">
                  05 — What's Next
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Still building.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-[#6B7468]">
                  I'm continuing to strengthen my React.js and JavaScript
                  skills while building more full-stack applications with
                  the MERN stack.
                </p>

                <p className="mt-5 text-lg leading-8 text-[#6B7468]">
                  I'm looking for an entry-level Frontend Developer or
                  Full Stack opportunity where I can contribute to real
                  projects, learn from experienced developers and grow
                  as a software professional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7A9B76]">
              Let's Connect
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Have something worth building?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6B7468]">
              I'm always interested in opportunities where I can build,
              contribute and keep learning.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 rounded-lg bg-[#7A9B76] px-7 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#526B50] hover:shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About