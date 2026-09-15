import React, { useState } from "react"
import axios from "axios"
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit =async (e) => {
    console.log("API URL:",process.env.REACT_APP_API_URL)
    e.preventDefault()
    console.log(formData)
    try{
      const response=await axios.post(
    `${process.env.REACT_APP_API_URL}/api/contact`,
        formData
      )
      alert(response.data.message)
      setFormData({
        name:"",
        email:"",
        message:""
      })
    }
    catch(err){
      console.log(err)
      alert("Failedd to send message")
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#252A24]">

      <main>

        <section className="border-b border-[#DDE4D8]">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-28">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#7A9B76]">
              Contact
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Let's talk about your next project.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B7468]">
              I'm open to entry-level Frontend Developer and Full Stack
              opportunities. If you have an opportunity, project or
              collaboration in mind, feel free to get in touch.
            </p>

          </div>
        </section>

        <section aria-labelledby="contact-heading">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">

            <aside>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#7A9B76]">
                Get In Touch
              </p>

              <h2
                id="contact-heading"
                className="mt-3 text-3xl font-bold sm:text-4xl"
              >
                Let's connect.
              </h2>

              <p className="mt-5 leading-7 text-[#6B7468]">
                Whether you're hiring, working on a project or simply want
                to connect, you can reach me through the details below.
              </p>

              <address className="mt-8 not-italic">

                <div className="border-t border-[#DDE4D8] py-5">
                  <p className="text-sm text-[#6B7468]">
                    Email
                  </p>

                  <a
                    href="mailto:your-email@example.com"
                    className="mt-1 inline-block font-semibold text-[#526B50] transition hover:text-[#7A9B76]"
                  >
                    iswaryaa565@example.com
                  </a>
                </div>

                <div className="border-t border-[#DDE4D8] py-5">
                  <p className="text-sm text-[#6B7468]">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/ishu122004"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block font-semibold text-[#526B50] transition hover:text-[#7A9B76]"
                  >
                    github.com
                  </a>
                </div>

                <div className="border-t border-[#DDE4D8] py-5">
                  <p className="text-sm text-[#6B7468]">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/iswarya-developer/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block font-semibold text-[#526B50] transition hover:text-[#7A9B76]"
                  >
                    LinkedIn Profile
                  </a>
                </div>

              </address>
            </aside>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#DDE4D8] bg-white p-7 shadow-sm sm:p-9"
            >

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#526B50]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-[#DDE4D8] bg-[#F8F7F2] px-4 py-3 text-[#252A24] outline-none transition duration-200 focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#526B50]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-[#DDE4D8] bg-[#F8F7F2] px-4 py-3 text-[#252A24] outline-none transition duration-200 focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#526B50]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or project..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-lg border border-[#DDE4D8] bg-[#F8F7F2] px-4 py-3 text-[#252A24] outline-none transition duration-200 focus:border-[#7A9B76] focus:ring-2 focus:ring-[#7A9B76]/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#7A9B76] px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#526B50] hover:shadow-lg"
              >
                Send Message
              </button>

            </form>

          </div>
        </section>

        <section className="border-t border-[#DDE4D8] bg-white">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-10">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#7A9B76]">
              Open To Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Ready to start something meaningful?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#6B7468]">
              I'm looking forward to joining a team where I can apply my
              development skills, contribute to real-world applications
              and continue learning.
            </p>

          </div>
        </section>

      </main>
    </div>
  )
}

export default Contact
