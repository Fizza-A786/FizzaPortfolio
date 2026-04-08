import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
      id="contact"
      className={`relative py-12 sm:py-16 flex items-center justify-center transition-all duration-500 ${
        darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-12 flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE */}
        <div 
          className="flex-1 flex flex-col justify-center gap-6"
          data-aos="fade-right"
        >
          <h2
            data-aos="zoom-in"
            data-aos-delay="100"
            className={`text-4xl font-serif italic ${
              darkMode ? "text-[#C08B5C]" : "text-[#895129]"
            }`}
          >
            Let’s Connect
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className={`text-sm sm:text-base md:text-lg ${
              darkMode ? "text-[#FAF9F6]/70" : "text-[#895129]/80"
            }`}
          >
            I love turning ideas into reality. Whether you have a project in mind or just want to say hi, drop me a message.
          </p>

         <div className="space-y-4 mt-4 max-w-sm">
  {[
    {
      icon: <FaEnvelope />,
      label: "devfizza@example.com",
      link: "mailto:devfizza@example.com",
    },
    {
      icon: <FaPhoneVolume />,
      label: "+92 326 056 9202",
      link: "tel:+923260569202",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Bahawalpur, Pakistan",
    },
  ].map((item, index) => (
    <div
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:translate-x-2 ${
        darkMode
          ? "bg-[#1A120B] border-gray-700 hover:bg-[#2a1d14]"
          : "bg-white border-gray-300 hover:bg-gray-100"
      }`}
    >
      {/* ICON */}
      <span
        className={`text-lg ${
          darkMode ? "text-[#C08B5C]" : "text-[#895129]"
        }`}
      >
        {item.icon}
      </span>

      {/* TEXT */}
      {item.link ? (
        <a
          href={item.link}
          className={`transition ${
            darkMode
              ? "hover:text-[#C08B5C]"
              : "hover:text-[#5a341b]"
          }`}
        >
          {item.label}
        </a>
      ) : (
        <span>{item.label}</span>
      )}
    </div>
  ))}
</div>
        </div>

        {/* RIGHT FORM */}
        <div 
          className="flex-1"
          data-aos="fade-left"
        >
          <form
            onSubmit={handleSubmit}
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className={`flex flex-col gap-5 p-6 sm:p-10 rounded-2xl transition-all duration-500 backdrop-blur-xl border ${
              darkMode
                ? "bg-white/5 border-white/10 shadow-[0_0_25px_rgba(192,139,92,0.3)]"
                : "bg-[#895129]/10 border-[#895129]/20 shadow-md"
            }`}
          >
            {/* INPUTS */}
            {["name", "email"].map((field, idx) => (
              <input
                key={idx}
                data-aos="fade-up"
                data-aos-delay={300 + idx * 100}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
                value={formData[field]}
                onChange={handleChange}
                required
                className={`px-5 py-3 rounded-xl border outline-none transition ${
                  darkMode
                    ? "bg-[#1A120B] border-white/10 text-white placeholder-[#FAF9F6]/40 focus:border-[#C08B5C]"
                    : "bg-white border-[#895129]/30 placeholder-[#895129]/50 focus:border-[#895129]"
                }`}
              />
            ))}

            <textarea
              name="message"
              rows={5}
              data-aos="fade-up"
              data-aos-delay="500"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`px-5 py-3 rounded-xl border outline-none transition ${
                darkMode
                  ? "bg-[#1A120B] border-white/10 text-white placeholder-[#FAF9F6]/40 focus:border-[#C08B5C]"
                  : "bg-white border-[#895129]/30 placeholder-[#895129]/50 focus:border-[#895129]"
              }`}
            />

            {/* BUTTON */}
            <button
              type="submit"
              data-aos="zoom-in"
              data-aos-delay="600"
              className={`mt-2 px-8 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-105 ${
                darkMode
                  ? "bg-[#C08B5C] text-[#1A120B] shadow-lg hover:shadow-[0_0_25px_rgba(192,139,92,0.5)]"
                  : "bg-[#895129] text-white hover:shadow-[0_0_25px_rgba(137,81,41,0.5)]"
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