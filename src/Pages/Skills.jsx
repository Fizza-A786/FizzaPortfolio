import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaCode,
} from "react-icons/fa";

import { SiReactrouter, SiTailwindcss, SiFramer } from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`py-12 md:py-20 relative overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#895129] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#895129]"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-16 relative">
        
        {/* TITLE */}
        <div className="text-center space-y-3">
          <h2
            className={`text-4xl font-serif italic ${
              darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
            }`}
          >
            My Skills
          </h2>

          <p
            className={`text-sm tracking-widest ${
              darkMode ? "text-[#FAF9F6]/80" : "text-[#895129]/80"
            }`}
          >
            TECHNOLOGIES I WORK WITH
          </p>
        </div>

        {/* FIRST SLIDER */}
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            speed={6000}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide><SkillCard icon={<FaHtml5 />} name="HTML" desc="Semantic structure for modern websites" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaCss3Alt />} name="CSS" desc="Responsive layouts and animations" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaBootstrap />} name="Bootstrap" desc="Responsive and mobile-first UI components" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<SiTailwindcss />} name="Tailwind CSS" desc="Utility-first modern CSS framework" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaJs />} name="JavaScript" desc="Dynamic and interactive web apps" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaReact />} name="React" desc="Component-based UI development" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaNodeJs />} name="Node.js" desc="Server-side JavaScript for scalable apps" darkMode={darkMode} /></SwiperSlide>
          </Swiper>
        </div>

        {/* SECOND SLIDER */}
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            speed={6000}
            autoplay={{
              delay: 1,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide><SkillCard icon={<FaCode />} name="API Integration" desc="Connecting applications with REST APIs" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<SiReactrouter />} name="React Router" desc="Client-side routing for seamless page navigation" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<SiFramer />} name="Framer Motion" desc="Smooth animations and interactive UI transitions" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaReact />} name="Redux Toolkit" desc="Efficient state management for React apps" darkMode={darkMode} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, name, desc, darkMode }) => {
  return (
    <div
      className={`flex items-start gap-4 p-5 md:p-8 min-h-[130px] rounded-2xl border transition-all duration-500
        ${
          darkMode
            ? "bg-[#FAF9F6]/10 border-[#FAF9F6]/20 text-[#FAF9F6] hover:bg-[#FAF9F6]/20"
            : "bg-[#895129]/10 border-[#895129]/20 text-[#895129] hover:bg-[#895129]/20"
        }
      `}
    >
      <div
        className={`text-3xl p-3 rounded-xl flex items-center justify-center ${
          darkMode
            ? "bg-black/40 text-[#FAF9F6]"
            : "bg-[#faf2ec] text-[#895129]"
        }`}
      >
        {icon}
      </div>

      <div>
        <p className="text-base font-semibold">{name}</p>
        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-[#FAF9F6]/80" : "text-[#895129]/80"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Skills;