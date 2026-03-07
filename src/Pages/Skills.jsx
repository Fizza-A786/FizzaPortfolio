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
      className="py-20 relative overflow-hidden transition-colors duration-500"
     >
      <div className="max-w-7xl mx-auto space-y-16 relative">

        {/* LEFT FADE */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10
          bg-gradient-to-r from-black/20 via-black/10 to-transparent"
        />

        {/* RIGHT FADE */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10
          bg-gradient-to-l from-black/20 via-black/10 to-transparent"
        />

        {/* TITLE */}
        <div className="text-center space-y-3">
          <h2
            className={`text-4xl font-serif italic ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            My Skills
          </h2>

          <p
            className={`text-sm tracking-widest ${
              darkMode ? "text-yellow-400" : "text-cyan-700"
            }`}
          >
            TECHNOLOGIES I WORK WITH
          </p>
        </div>

        {/* FIRST SLIDER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          speed={6000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <SkillCard icon={<FaHtml5 />} name="HTML" desc="Semantic structure for modern websites" darkMode={darkMode} />
          </SwiperSlide>

          <SwiperSlide>
            <SkillCard icon={<FaCss3Alt />} name="CSS" desc="Responsive layouts and animations" darkMode={darkMode} />
          </SwiperSlide>

          <SwiperSlide>
            <SkillCard icon={<FaBootstrap />} name="Bootstrap" desc="Responsive and mobile-first UI components" darkMode={darkMode} />
          </SwiperSlide>

          <SwiperSlide>
            <SkillCard icon={<SiTailwindcss />} name="Tailwind CSS" desc="Utility-first modern CSS framework" darkMode={darkMode} />
          </SwiperSlide>

          <SwiperSlide>
            <SkillCard icon={<FaJs />} name="JavaScript" desc="Dynamic and interactive web apps" darkMode={darkMode} />
          </SwiperSlide>

          <SwiperSlide>
            <SkillCard icon={<FaReact />} name="React" desc="Component-based UI development" darkMode={darkMode} />
          </SwiperSlide>

          <SwiperSlide>
            <SkillCard icon={<FaNodeJs />} name="Node.js" desc="Server-side JavaScript for scalable apps" darkMode={darkMode} />
          </SwiperSlide>
        </Swiper>

        {/* SECOND SLIDER */}
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
          <SwiperSlide>
            <SkillCard icon={<FaCode />} name="API Integration" desc="Connecting applications with REST APIs" darkMode={darkMode} />
          </SwiperSlide>

          <SwiperSlide>
            <SkillCard icon={<SiReactrouter />} name="React Router" desc="Client-side routing for seamless page navigation" darkMode={darkMode} />
          </SwiperSlide>

          <SwiperSlide>
            <SkillCard icon={<SiFramer />} name="Framer Motion" desc="Smooth animations and interactive UI transitions" darkMode={darkMode} />
          </SwiperSlide>

          <SwiperSlide>
            <SkillCard icon={<FaReact />} name="Redux Toolkit" desc="Efficient state management for React apps" darkMode={darkMode} />
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
};

const SkillCard = ({ icon, name, desc, darkMode }) => {
  return (
    <div
      className={`flex items-start gap-4 p-8 min-h-[130px] rounded-2xl border transition duration-500
      ${
        darkMode
          ? "bg-white/5 border-white/10 backdrop-blur-md text-white hover:bg-white/10"
          : "bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100"
      }`}
    >
      <div
        className={`text-3xl p-3 rounded-xl ${
          darkMode ? "bg-black/40 text-yellow-400" : "bg-gray-200 text-cyan-700"
        }`}
      >
        {icon}
      </div>

      <div>
        <p className="text-base font-semibold">{name}</p>

        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Skills;