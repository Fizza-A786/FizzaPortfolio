import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_lvohj9g",
        "template_s7uzu6q",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        "6sQ1rU0uZwLXSR4n_"
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setLoading(false);
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("ERROR:", error);
          setLoading(false);
          setStatus("error");
        }
      );
  };

  const textColor = darkMode ? "text-[#FAF9F6]" : "text-[#3E2723]";
  const primary = darkMode ? "#C08B5C" : "#895129";

  return (
    <section
      id="contact"
      className={`relative md:py-16 py-8 flex items-center justify-center ${textColor}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-12 flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6">

          <h2 className="text-4xl font-serif italic" style={{ color: primary }}>
            Get In Touch
          </h2>

          <p
            className={`text-sm sm:text-base ${
              darkMode ? "text-white/70" : "text-[#895129]/80"
            }`}
          >
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out—I’ll try my best to respond as soon as possible.
          </p>

          <div className="space-y-4 mt-8 max-w-sm">

            {[
              { icon: <FaEnvelope />, text: "devfizza@example.com" },
              { icon: <FaPhoneVolume />, text: "+92 326 0569202" },
              { icon: <FaMapMarkerAlt />, text: "Bahawalpur, Pakistan" },
              

            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-5 rounded-xl border backdrop-blur-md
                transition-all duration-500 ease-out
                hover:-translate-y-1 hover:shadow-xl
                ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/70 border-[#895129]/10 hover:bg-[#fdf8f4]"
                }`}
              >
                <span style={{ color: primary }} className="text-lg">{item.icon}</span>
                <span className="text-md font-medium tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
          
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1">

          <form
            onSubmit={handleSubmit}
            className={`p-8 sm:p-10 rounded-2xl border space-y-6 backdrop-blur-lg
            transition-all duration-500
            shadow-lg hover:shadow-2xl
            ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/60 border-[#895129]/10"
            }`}
          >

            {/* NAME */}
            <div className="space-y-1">
              <label className="text-xs opacity-70">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border outline-none text-sm transition-all duration-300
                focus:ring-2 focus:ring-opacity-40
                ${
                  darkMode
                    ? "bg-transparent border-white/10 text-white placeholder-white/40 focus:ring-[#C08B5C]"
                    : "border-[#895129]/20 text-[#3E2723] focus:ring-[#895129]"
                }`}
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-1">
              <label className="text-xs opacity-70">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border outline-none text-sm transition-all duration-300
                focus:ring-2 focus:ring-opacity-40
                ${
                  darkMode
                    ? "bg-transparent border-white/10 text-white placeholder-white/40 focus:ring-[#C08B5C]"
                    : "border-[#895129]/20 text-[#3E2723] focus:ring-[#895129]"
                }`}
              />
            </div>

            {/* MESSAGE */}
            <div className="space-y-1">
              <label className="text-xs opacity-70">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border outline-none text-sm resize-none transition-all duration-300
                focus:ring-2 focus:ring-opacity-40
                ${
                  darkMode
                    ? "bg-transparent border-white/10 text-white placeholder-white/40 focus:ring-[#C08B5C]"
                    : "border-[#895129]/20 text-[#3E2723] focus:ring-[#895129]"
                }`}
              />
            </div>

            {/* STATUS */}
            {status === "success" && (
              <p className="text-green-500 text-sm font-medium">
                Message sent successfully ✅
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm font-medium">
                Failed to send ❌ (check console)
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-medium tracking-wide
              transition-all duration-300
              hover:shadow-lg active:scale-[0.97]"
              style={{
                backgroundColor: primary,
                color: "#fff",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
