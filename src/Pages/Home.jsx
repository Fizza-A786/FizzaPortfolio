import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            className="relative min-h-screen bg-cover bg-center text-white"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            }}
        >
            {/* Overlay (Purple + Black) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/80 to-black/90" />

            {/* Hero Section */}
            <section
                className="relative z-10 flex flex-col items-start justify-center min-h-screen px-10 md:px-24"
                data-aos="fade-up"
            >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Build <span className="text-purple-400">Modern</span> &{" "}
                    <span className="text-purple-500">Scalable</span> Web Applications
                </h2>

                <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
                    I am a skilled Frontend Developer specializing in React.js, Tailwind CSS, and modern JavaScript frameworks. I build fast, responsive, and user-friendly interfaces with clean code and smooth animations, focused on performance and great user experience.       </p>

                <div className="flex gap-6">
                    {/* Primary Button */}
                    <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition">
                        View Projects
                    </button>

                    {/* Secondary Button */}
                    <button className="border border-purple-500 text-purple-300 rounded-full px-8 py-3 hover:bg-purple-600 hover:text-white transition">
                        Hire Me
                    </button>
                </div>
            </section>
        </div>
    );
}
