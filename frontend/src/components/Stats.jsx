import React, { useEffect, useRef, useState } from 'react';
import {
    Star,
    Stethoscope,
    Utensils,
    Heart,
    GraduationCap,
    Users,
    Gift,
    Award
} from 'lucide-react';
import Container from './Container';

const stats = [
    { value: "2009", label: "Year Founded", icon: Star },
    { value: "1.1M+", label: "QAR in Medical Aid", icon: Stethoscope },
    { value: "17,208", label: "Families & Workers Fed", icon: Utensils },
    { value: "29,500", label: "Meals Distributed", icon: Heart },
    { value: "48", label: "Students in Summer Camp", icon: GraduationCap },
    { value: "300", label: "Girls in Women's Club", icon: Users },
    { value: "1,112", label: "Eid Clothing Vouchers", icon: Gift },
    { value: "129", label: "Patients Treated", icon: Award },
];

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-14 mt-14 bg-teal-800 relative overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <Container>
                <div className="container mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <p className={`text-amber-400 font-bold uppercase tracking-widest text-sm mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                            }`}>
                            Our Impact in Numbers
                        </p>
                        <h2 className={`text-3xl md:text-4xl font-bold text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                            }`}>
                            Key Achievements
                        </h2>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={i}
                                    className={`group bg-white/8 backdrop-blur border border-white/12 rounded-2xl p-6 text-center hover:bg-white/12 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/30 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                                        }`}
                                    style={{ transitionDelay: `${i * 0.08}s` }}
                                >
                                    <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400/30 group-hover:rotate-3">
                                        <Icon size={22} className="text-amber-400 transition-all duration-300 group-hover:scale-110" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1 transition-all duration-300 group-hover:text-amber-400">
                                        {s.value}
                                    </div>
                                    <div className="text-white/60 text-sm font-medium transition-all duration-300 group-hover:text-white/80">
                                        {s.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Stats;