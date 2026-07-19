import React, { useEffect, useRef, useState } from 'react';
import {
    Heart,
    Shield,
    CheckCircle2,
    Lightbulb,
    BookOpen,
    Globe2
} from 'lucide-react';
import Container from './Container';

const values = [
    {
        icon: Heart,
        arabic: "Al-Khair",
        title: "Goodness",
        desc: "We strive to instill a spirit of giving, sacrifice, and volunteering, and to establish noble principles among community members.",
    },
    {
        icon: Shield,
        arabic: "Al-Amanah",
        title: "Trustworthiness",
        desc: "We affirm the principle of honesty and mutual trust between us and our partners to be worthy of everyone's confidence.",
    },
    {
        icon: CheckCircle2,
        arabic: "Al-Shafafiyah",
        title: "Transparency",
        desc: "We deal with clarity and integrity in all our transactions, reports, and projects.",
    },
    {
        icon: Lightbulb,
        arabic: "Al-Mubadarah",
        title: "Initiative",
        desc: "We strive to achieve the best creative ideas and charitable and institutional practices and encourage community participation.",
    },
    {
        icon: BookOpen,
        arabic: "Al-Ta'allum",
        title: "Learning",
        desc: "We are committed to continuous development and constructive learning for our members and partners.",
    },
    {
        icon: Globe2,
        arabic: "Al-Sharakah",
        title: "Partnership",
        desc: "We cooperate and coordinate with institutions and associations related to charitable work locally and globally to achieve charitable integration.",
    },
];

const Values = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleCards(prev => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll('.values-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-14 bg-background">
            <Container>
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 animate-fade-in">
                            What Guides Us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            Our Core Values
                        </h2>
                        <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            The principles that define our character and shape every decision
                            we make in service of humanity.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <div
                                    key={i}
                                    data-index={i}
                                    className={`values-card group bg-card border border-card-border rounded-2xl p-8 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-300 ${visibleCards.includes(i) ? 'visible' : ''
                                        }`}
                                    style={{ transitionDelay: `${i * 0.1}s` }}
                                >
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-14 h-14 bg-teal-700/10 group-hover:bg-teal-700/20 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            <Icon size={26} className="text-teal-700" />
                                        </div>
                                        <div>
                                            <p className="text-amber-600 font-semibold text-xs uppercase tracking-widest mb-1">
                                                {v.arabic}
                                            </p>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-teal-700 transition-colors">
                                                {v.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {v.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Values;