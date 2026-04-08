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
        darkMode ? "text-[#FAF9F6]" : "text-[#3E2723]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-12 flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2
            className={`text-4xl font-serif italic ${
              darkMode ? "text-[#C08B5C]" : "text-[#895129]"
            }`}
          >
            Let’s Connect
          </h2>

          <p
            className={`text-sm sm:text-base md:text-lg ${
              darkMode ? "text-[#FAF9F6]/70" : "text-[#895129]/80"
            }`}
          >
            I love turning ideas into reality. Whether you have a project in mind
            or just want to say hi, drop me a message.
          </p>

          <div className="space-y-4 mt-4">
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
                className="flex items-center gap-3 hover:translate-x-2 transition"
              >
                <span
                  className={`text-lg ${
                    darkMode ? "text-[#C08B5C]" : "text-[#895129]"
                  }`}
                >
                  {item.icon}
                </span>

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
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-5 p-6 sm:p-10 rounded-2xl transition-all duration-500 backdrop-blur-xl border ${
              darkMode
                ? "bg-white/5 border-white/10 shadow-[0_0_10px_rgba(192,139,92,0.3)]"
                : "bg-[#895129]/5 border-[#895129]/20 shadow-md"
            }`}
          >
            {/* INPUTS */}
            {["name", "email"].map((field, idx) => (
              <input
                key={idx}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
                value={formData[field]}
                onChange={handleChange}
                required
                className={`px-5 py-3 rounded-xl border outline-none transition-all duration-300 focus:scale-[1.02] ${
                  darkMode
                    ? "bg-white/5 backdrop-blur-md border-white/20 text-white placeholder-white/50 focus:border-[#C08B5C] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(192,139,92,0.3)]"
                    : "bg-white/80 backdrop-blur-md border-[#895129]/20 text-[#3E2723] placeholder-[#895129]/50 focus:border-[#895129] focus:bg-white focus:shadow-[0_0_10px_rgba(137,81,41,0.2)]"
                }`}
              />
            ))}

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`px-5 py-3 rounded-xl border outline-none transition-all duration-300 focus:scale-[1.02] ${
                darkMode
                  ? "bg-white/1 backdrop-blur-md border-white/20 text-white placeholder-white/50 focus:border-[#C08B5C] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(192,139,92,0.3)]"
                  : "bg-white/80 backdrop-blur-md border-[#895129]/20 text-[#3E2723] placeholder-[#895129]/50 focus:border-[#895129] focus:bg-white focus:shadow-[0_0_10px_rgba(137,81,41,0.2)]"
              }`}
            />

            {/* BUTTON */}
            <button
              type="submit"
              className={`mt-2 px-8 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-105 ${
                darkMode
                  ? "bg-[#C08B5C] text-white shadow-lg hover:shadow-[0_0_25px_rgba(192,139,92,0.5)]"
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