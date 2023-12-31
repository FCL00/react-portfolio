import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";

// components
import ContactAnimation from "src/assets/animations/ContactAnimation.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pzo4tc8",
        "template_vddmuwb",
        form.current,
        "WZ6gwj45YSNkDLQ-V"
      )
      .then(
        (result) => {
          // console.log(result.text);

          Swal.fire({
            icon: "success",
            title: "Message sent successfully!",
            text: "I will get back to you as soon as possible.",
          });

          e.target.reset();
        },
        (error) => {
          // console.log(error.text);

          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Failed to send message. Please try again.",
          });

          e.target.reset();
        }
      );
  };

  return (
    <section id="contact" className="bg-[#181818]">
      <div className="container md:max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row text-start md:py-[68px] space-y-3">
        {/* left */}
        <div className="w-full md:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="container md:max-w-md bg-[#202020] p-6 rounded-lg"
          >
            <h1 className="text-emerald-500 text-3xl  md:text-5xl font-bold py-4">
              Contact Me
            </h1>
            <div className="flex flex-col mb-4">
              <p className="text-white">
                Let's collaborate and turn your vision into reality! Whether
                you're a fellow developer, a potential client, or just someone
                looking to explore exciting opportunities, I'm here for it. 🚀
              </p>
            </div>
            <div className="mb-4 space-y-2">
              <label
                htmlFor="name"
                className="block text-white text-sm font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full p-2 bg-[#121212] rounded-md border border-[#121212] focus:outline-none focus:border-emerald-400 focus:border-2 outline-none text-white"
                required
                autoComplete="false"
              />
            </div>
            <div className="mb-4 space-y-2">
              <label
                htmlFor="email"
                className="block text-white text-sm font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full p-2 bg-[#121212] rounded-md border border-[#121212] focus:outline-none focus:border-emerald-400 focus:border-2 outline-none text-white"
                required
                autoComplete="false"
              />
            </div>
            <div className="mb-4 space-y-2">
              <label
                htmlFor="message"
                className="block text-white text-sm font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="5"
                className="w-full p-2 border-[#121212] bg-[#121212] rounded-md  focus:outline-none focus:border-emerald-400 focus:border-2 outline-none text-white"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-emerald-500 text-black px-4 py-2 rounded-md hover:bg-emerald-400"
              >
                <span className="me-1">Send Message</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Lottie animationData={ContactAnimation} />
        </div>
      </div>
    </section>
  );
}
