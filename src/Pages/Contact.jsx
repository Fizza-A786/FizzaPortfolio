import React, { useState } from "react";
import { FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";


const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className={`relative py-10 sm:py-16  flex items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-[#71412C] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#895129]"
      }`}
    >
      {/* Floating Decorative Circles */}
      {/* <div className="absolute top-0 left-10 w-40 h-40 rounded-full opacity-20 blur-3xl bg-[#FAF9F6] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-10 w-60 h-60 rounded-full opacity-10 blur-3xl bg-[#895129] animate-pulse-slow"></div> */}

      <div className="max-w-[1400px] mx-auto px-5 sm:px-12 flex flex-col lg:flex-row gap-16 z-10 ">

        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-4xl md:text-4xl font-serif italic font-medium">
            Let’s Connect
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg transition-colors duration-500 ${
              darkMode ? "text-[#FAF9F6]/80" : "text-[#895129]/80"
            }`}
          >
            I love turning ideas into reality. Whether you have a project in mind or just want to say hi, drop me a message. I’ll make sure your vision is heard and executed with care and creativity.
          </p>

          <div className="space-y-4 text-sm md:text-base mt-4">
            {[{
              icon: <FaEnvelope />,
              label: "devfizza@example.com",
              link: "mailto:devfizza@example.com"
            },{
              icon: <FaPhoneVolume />,
              label: "+92 326 056 9202",
              link: "tel:+923260569202"
            },{
              icon: <FaMapMarkerAlt />,
              label: "Bahawalpur, Pakistan",
            }].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 transition-transform duration-300 ease-in-out hover:translate-x-2"
              >
                <span
                  className={`${
                    darkMode ? "text-[#FAF9F6]/80" : "text-[#895129]/80"
                  } text-lg`}
                >
                  {item.icon}
                </span>
                {item.link ? (
                  <a
                    href={item.link}
                    className={`hover:underline transition-colors duration-300 ${
                      darkMode ? "text-[#FAF9F6]/90" : "text-[#895129]/90"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className={`${darkMode ? "text-[#FAF9F6]/90" : "text-[#895129]/90"}`}>
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 relative">
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-5 p-5 sm:p-10 rounded-xl border transition-all duration-500 shadow-md backdrop-blur-xl hover:scale-[1.02] hover:shadow-lg ease-in-out ${
              darkMode
                ? "bg-[#FAF9F6]/10 border-[#FAF9F6]/30 text-[#FAF9F6]"
                : "bg-[#895129]/10 border-[#895129]/30 text-[#895129]"
            }`}
          >
            {["name", "email"].map((field, idx) => (
              <input
                key={idx}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                required
                className={`px-5 py-4 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-offset-1 focus:outline-none shadow-sm
                  ${
                    darkMode
                      ? "bg-[#FAF9F6]/10 border-[#FAF9F6]/30 placeholder-[#FAF9F6]/50 focus:ring-[#FAF9F6] hover:border-[#FAF9F6]/50"
                      : "bg-[#895129]/10 border-[#895129]/30 placeholder-[#895129]/50 focus:ring-[#895129] hover:border-[#895129]/50"
                  }`}
              />
            ))}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className={`px-5 py-4 rounded-xl border transition-all duration-300 resize-none focus:ring-2 focus:ring-offset-1 focus:outline-none shadow-sm
                ${
                  darkMode
                    ? "bg-[#FAF9F6]/10 border-[#FAF9F6]/30 placeholder-[#FAF9F6]/50 focus:ring-[#FAF9F6] hover:border-[#FAF9F6]/50"
                    : "bg-[#895129]/10 border-[#895129]/30 placeholder-[#895129]/50 focus:ring-[#895129] hover:border-[#895129]/50"
                }`}
            ></textarea>
            <button
              type="submit"
              className={`mt-4 px-10 py-4 rounded-full font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md ease-in-out cursor-pointer
                ${
                  darkMode
                    ? "bg-gradient-to-r from-[#FAF9F6]/80 to-[#FAF9F6]/50 text-[#895129]"
                    : "bg-gradient-to-r from-[#895129]/70 to-[#895129]/90 text-[#FAF9F6]"
                }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;