import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from './Container';
import { heroImg } from '../assets';

const About = () => {
    return (
        <section className="bg-background">
            <Container>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 animate-slide-up">
                                Who We Are
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                A Legacy of <span className="text-teal-700">Compassion</span> &amp; Service
                            </h2>
                            <div className="w-16 h-1 bg-amber-500 rounded-full mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }} />

                            <p className="text-muted-foreground text-lg leading-relaxed mb-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                Taadod Charity Organization was established in 2009. It is a
                                Qatari humanitarian organization concerned with caring for
                                people in Qatar and abroad. It provides relief and aid, adopts
                                educational, health, and da'wah (Islamic propagation)
                                facilities, and provides assistance to patients, the poor, and
                                those in need.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                                It also works on developing poor communities through medium and
                                small developmental projects — building a future where dignity
                                and opportunity reach every family.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-teal-700/5 border border-teal-700/15 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-700/10 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0.35s' }}>
                                    <p className="text-amber-600 font-bold uppercase tracking-wider text-xs mb-2">
                                        Our Vision
                                    </p>
                                    <p className="text-foreground font-semibold text-sm leading-relaxed">
                                        Leadership in charitable work, empowering the poorest women
                                        and children through the comprehensiveness of our projects —
                                        by adhering to the highest performance standards.
                                    </p>
                                </div>
                                <div className="bg-amber-500/5 border border-amber-500/15 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                                    <p className="text-teal-700 font-bold uppercase tracking-wider text-xs mb-2">
                                        Our Mission
                                    </p>
                                    <p className="text-foreground font-semibold text-sm leading-relaxed">
                                        Carrying out charitable, developmental, and humanitarian
                                        work and preserving values across Qatar and abroad.
                                    </p>
                                </div>
                            </div>

                            <div className="animate-slide-up" style={{ animationDelay: '0.45s' }}>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-amber-600 transition-colors border-b-2 border-teal-700/30 hover:border-amber-600/50 pb-1 group"
                                >
                                    Read Our Full Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Images */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl animate-scale-in" style={{ animationDelay: '0.2s' }}>
                                <img
                                    src={heroImg}
                                    alt="Medical Aid"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl animate-scale-in" style={{ animationDelay: '0.4s' }}>
                                    <img
                                        src={heroImg}
                                        alt="Food Aid"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;