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
      className={`py-8 md:py-8 relative overflow-hidden duration-500 ${
        darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-12 mt-5 space-y-10 md:space-y-16">

        {/* TITLE */}
        <div className="text-center space-y-3" data-aos="fade-up">
          <h2
            className={`text-4xl font-serif italic ${
              darkMode ? "text-[#C08B5C]" : "text-[#895129]"
            }`}
          >
            My Skills
          </h2>

          <p
            className={`text-sm tracking-widest ${
              darkMode ? "text-[#FAF9F6]/70" : "text-[#895129]/80"
            }`}
          >
            TECHNOLOGIES I WORK WITH
          </p>
        </div>

        {/* FIRST SLIDER */}
        <div
          className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          data-aos="fade-right"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide><SkillCard icon={<FaHtml5 />} name="HTML" desc="Semantic structure" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaCss3Alt />} name="CSS" desc="Responsive layouts" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaBootstrap />} name="Bootstrap" desc="UI components" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<SiTailwindcss />} name="Tailwind CSS" desc="Utility-first CSS" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaJs />} name="JavaScript" desc="Dynamic websites" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaReact />} name="React" desc="Component-based UI" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaNodeJs />} name="Node.js" desc="Backend basics" darkMode={darkMode} /></SwiperSlide>
          </Swiper>
        </div>

        {/* SECOND SLIDER */}
        <div
          className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          data-aos="fade-left"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            speed={4000}
            autoplay={{
              delay: 0,
              reverseDirection: true,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide><SkillCard icon={<FaCode />} name="API Integration" desc="REST APIs" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<SiReactrouter />} name="React Router" desc="Navigation" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<SiFramer />} name="Framer Motion" desc="Animations" darkMode={darkMode} /></SwiperSlide>
            <SwiperSlide><SkillCard icon={<FaReact />} name="Redux Toolkit" desc="State management" darkMode={darkMode} /></SwiperSlide>
          </Swiper>
        </div>

      </div>
    </section>
  );
};

const SkillCard = ({ icon, name, desc, darkMode }) => {
  return (
    <div
      className={`flex items-start gap-4 p-5 md:p-8 min-h-[130px] rounded-xl border
      shadow-sm
      transition-shadow duration-200
      hover:shadow-md
      ${
        darkMode
          ? "bg-white/5 backdrop-blur-lg border-white/10 text-[#FAF9F6]"
          : "bg-[#895129]/10 border-[#895129]/20 text-[#895129]"
      }`}
    >
      {/* ICON */}
      <div
        className={`text-3xl p-3 rounded-2xl flex items-center justify-center ${
          darkMode
            ? "bg-[#C08B5C]/20 text-[#C08B5C]"
            : "bg-[#faf2ec] text-[#895129]"
        }`}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div>
        <p className="text-base font-semibold">{name}</p>
        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-[#FAF9F6]/70" : "text-[#895129]/80"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Skills;