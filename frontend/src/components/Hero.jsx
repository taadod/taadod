import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from './Container';
import { heroImg } from '../assets';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
             <div className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="Taadod Charity"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d3d4a]/95 via-[#0d3d4a]/80 to-[#0d3d4a]/30" />
                </div>
            {/* Decorative background blobs */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots-home" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle fill="rgba(255,255,255,0.3)" cx="20" cy="20" r="1.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots-home)" />
                </svg>
            </div>

            <Container>
                <div className="relative z-10 py-28 md:pt-32 pb-40 md:pb-52">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-sm font-semibold mb-8 tracking-wide animate-fade-in-up">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            Established in Qatar — 2009
                        </div>

                        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.08] text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Leadership in
                        </h1>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.08] text-amber-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Charitable Work
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Empowering the poorest women and children through the
                            comprehensiveness of our projects — quantitatively, qualitatively,
                            and geographically.
                        </p>
                        <p className="text-base md:text-lg text-white/65 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            A Qatari humanitarian organization providing relief, aid,
                            educational, health, and da'wah facilities to patients, the poor,
                            and those in need — since 2009.
                        </p>

                        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0d3d4a] font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
                            >
                                Explore Our Projects <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10 backdrop-blur-sm"
                            >
                                Learn About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Curved bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
        </section>
    );
};

export default Hero;