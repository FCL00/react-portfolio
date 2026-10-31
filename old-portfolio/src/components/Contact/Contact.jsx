import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "@/constants/index";
// componentss
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import { terminal1, control, iconPlus } from "@/assets/backgrounds";

export default function Contact(){
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message sent successfully!",
          text: "I will get back to you as soon as possible.",
        });

        e.target.reset();
      },
      (error) => {
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
    <>
      <section
        id="contact"
        className="relative px-6 py-16 mx-auto space-y-8 md:max-w-7xl md:px-9 text-start md:text-center"
      >
        <div className="flex flex-col mb-4 text-start md:text-center">
          <h1 className="contact-h1">Contact Me</h1>
          <p className="max-w-3xl mx-auto text-white">
            Let's collaborate and turn your vision into reality! Whether you're a fellow developer, 
            a potential client, or just someone looking to explore exciting opportunities, I'm here for it. 🚀
          </p>
        </div>

        {/* Responsive Terminal */}
        <div id="terminal" className="w-full max-w-3xl mx-auto rounded-3xl">
          <div id="head" className="flex items-center justify-between p-2 border border-[#5D5D5D] rounded-t-3xl bg-metal-gradient">
            <img src={control} alt="terminal controls" />
            <img src={iconPlus} alt="add tabs" />
          </div>
          <div id="body" className="bg-[#121212] rounded-b-3xl border border-[#5D5D5D]">
            <form ref={form} onSubmit={sendEmail} className="p-6 space-y-6 sm:p-8 md:p-12 text-start">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="contact-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="contact-input"
                  required
                  autoComplete="off"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="contact-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="contact-input"
                  required
                  autoComplete="off"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="contact-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="contact-form-text-area"
                  autoComplete="off"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="">
                <button
                  type="submit"
                  className="flex justify-center items-center px-4 w-full py-2 text-white rounded-md bg-[#121212] border border-[#303030] hover:border-[#606060] space-x-2"
                  disabled={loading}
                >
                  <span className="me-1">Send Message</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
