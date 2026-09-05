import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (name === "") {
      setError("Please enter your name");
      return;
    }

    // Email validation
    if (email === "") {
      setError("Please enter your email");
      return;
    }

    // Message validation
    if (message === "") {
      setError("Please enter your message");
      return;
    }

    // Email format validation
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    // Success
    setError("");
    alert("Message Sent Successfully!");

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="Contact"
      className="text-black py-20 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-blue-800/20 text-black text-[11px] font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
            Contact Me
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Get in Touch
          </h2>

          <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-xl">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
        >

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          ></textarea>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;