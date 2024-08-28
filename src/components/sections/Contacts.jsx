import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n8xvthu",           // Your EmailJS service ID
        "template_yqhgjge",          // Your EmailJS template ID
        form.current,                // The form reference
        "usuZuIVhgXEtyPbc0"          // Your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          form.current.reset();     // Reset the form after successful submission
        },
        (error) => {
          alert("An error occurred, please try again."); // Error handling
        }
      );
  };

  return (
    <div className="mt-8 flex flex-col justify-center items-center">
      <div
        id="Wrapper"
        className="flex justify-between items-center w-full flex-col relative max-w-[1100px] gap-3 tracking-wide"
      >
        <div
          id="Title"
          className="w-fit text-5xl text-center font-semibold my-5"
        >
          Contact
        </div>
        <div
          id="Desc"
          className="w-fit text-lg md:text-[20px] text-center font-[600] text-slate-600 mb-10 tracking-wider"
        >
          Feel free to reach out to me for any questions or opportunities!
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          id="contactForm"
          className="w-[90%] lg:w-[95%] max-w-[600px] flex flex-col bg-custom-dark border-2 border-custom-border p-8 mb-4 rounded-xl"
        >
          <div
            id="ContactTitle"
            className="text-[28px] mb-1.5 font-semibold text-slate-200 text-center"
          >
            Email Me 🚀
          </div>
          <input
            type="email"              // Use "email" for email input validation
            id="ContactInputEmail"
            placeholder="Your Email"
            name="from_email"
            className="bg-transparent mt-3 cursor-pointer flex-1 border border-slate-600 focus:border-purple-600 transition-all outline-none text-[18px] rounded-xl px-4 py-3"
            required                 // Add required attribute for form validation
          />
          <input
            type="text"
            id="ContactInputName"
            placeholder="Your Name"
            name="from_name"
            className="bg-transparent mt-3 cursor-pointer flex-1 border border-slate-600 focus:border-purple-600 transition-all outline-none text-[18px] rounded-xl px-4 py-3"
            required
          />
          <input
            type="text"
            id="ContactInputSubject"
            placeholder="Subject"
            name="subject"
            className="bg-transparent mt-3 cursor-pointer flex-1 border border-slate-600 focus:border-purple-600 transition-all outline-none text-[18px] rounded-xl px-4 py-3"
            required
          />
          <textarea
            rows={4}
            id="ContactInputMessage"
            placeholder="Message"
            name="message"
            className="bg-transparent mt-3 cursor-pointer flex-1 border border-slate-600 focus:border-purple-600 transition-all outline-none text-[18px] rounded-xl px-4 py-3"
            required
          />
          <input
            type="submit"
            value="Send"
            className="w-full items-center tracking-widest cursor-pointer px-4 py-3 mt-2 rounded-xl border-0 text-lg font-semibold bg-gradient-to-l from-blue-600 to-purple-600 shadow-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none active:scale-75  duration-300 "
          />
        </form>
      </div>
    </div>
  );
}

export default Contacts;
