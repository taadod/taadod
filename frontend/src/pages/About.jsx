import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Heart,
    Shield,
    CheckCircle2,
    Lightbulb,
    BookOpen,
    Globe2,
    Award,
    Target,
    Eye,
    Building2,
    Phone,
    Mail,
    FileText,
    Users,
    Hospital,
    School,
    HandHeart,
    Home,
    Handshake,
    AlertCircle,
    ChevronDown
} from 'lucide-react';
import Container from '../components/Container';
import { heroImg } from '../assets';

const About = () => {
    const [visibleSections, setVisibleSections] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleSections(prev => {
                            if (!prev.includes(index)) {
                                return [...prev, index];
                            }
                            return prev;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = sectionRef.current?.querySelectorAll('.about-section');
        sections?.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

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

    const objectives = [
        {
            icon: HandHeart,
            title: "Humanitarian Services",
            desc: "Provide humanitarian, charitable, relief, and health services to the needy, the oppressed, and those affected by drought, famine, and natural or war-related disasters."
        },
        {
            icon: School,
            title: "Educational Services",
            desc: "Undertake educational, pedagogical, and da'wah services for Islamic associations that lack financial capabilities."
        },
        {
            icon: Building2,
            title: "Infrastructure Development",
            desc: "Build schools, hospitals, mosques, Quran memorization centers, and charitable projects in places that need them."
        },
        {
            icon: Users,
            title: "Care for Widows & Orphans",
            desc: "Care for widows and sponsor orphans, especially those suffering from poverty alongside orphanhood and who are threatened by misguided and corrupt ideas, by providing them with material, social, and cultural support."
        },
        {
            icon: Home,
            title: "Support for Qatari Families",
            desc: "Contribute to alleviating the suffering of some poor Qatari families through annual assistance or monthly salaries."
        },
        {
            icon: Handshake,
            title: "Social Solidarity",
            desc: "Contribute to achieving social solidarity within our Qatari society and cooperate with charitable associations and committees within Qatar."
        },
        {
            icon: Globe2,
            title: "Global Cooperation",
            desc: "Cooperate with charitable associations and committees within Qatar, fully coordinate with them, and with others outside Qatar to achieve goodness and balance."
        },
        {
            icon: AlertCircle,
            title: "Donations & Grants",
            desc: "Receive donations, bequests, and grants and distribute them to those entitled to them."
        },
    ];

    return (
        <div ref={sectionRef} className="bg-background pt-16 md:pt-20">
            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-teal-800">
                {/* Decorative background blobs */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dots-about" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle fill="rgba(255,255,255,0.3)" cx="20" cy="20" r="1.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots-about)" />
                    </svg>
                </div>

                <Container className="container relative z-10 mx-auto py-28 md:pt-28 pb-40">
                    <div className="max-w-3xl">
                        <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 animate-fade-in-about">
                            EST. 2009 – QATAR
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold leading-[1.08] text-white mb-6 animate-fade-in-about" style={{ animationDelay: '0.1s' }}>
                            About <span className="text-amber-400">Taadod</span>
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed animate-fade-in-about" style={{ animationDelay: '0.2s' }}>
                            A trusted Qatari humanitarian institution founded on Islamic values, driven by community solidarity, and dedicated to serving the most vulnerable.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-about" style={{ animationDelay: '0.3s' }}>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0d3d4a] font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
                            >
                                Get Involved <ArrowRight size={20} />
                            </Link>
                            <a
                                href="#mission"
                                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10 backdrop-blur-sm"
                            >
                                Learn More <ChevronDown size={20} />
                            </a>
                        </div>
                    </div>
                </Container>

                {/* Curved bottom - using white instead of bg-background */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
            </section>

            {/* Introduction Section */}
            <section className="bg-background about-section" data-index="0">
                <Container>
                    <div className="max-w-full mx-auto text-center">
                        <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(0) ? '0s' : '0s' }}>
                            Who We Are
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(0) ? '0.1s' : '0s' }}>
                            Serving Humanity Since <span className="text-teal-700">2009</span>
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed animate-slide-up-about" style={{ animationDelay: visibleSections.includes(0) ? '0.2s' : '0s' }}>
                            <p>
                                Taadod Charity Organization was established in 2009. It is a
                                Qatari humanitarian organization concerned with caring for
                                people in Qatar and abroad. It provides relief and aid, adopts
                                educational, health, and da'wah (Islamic propagation)
                                facilities, and provides assistance to patients, the poor, and
                                those in need.
                            </p>
                            <p>
                                It also works on developing poor communities through medium and
                                small developmental projects — building a future where dignity
                                and opportunity reach every family.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Vision & Mission */}
            <section className="pt-14 bg-muted/30 about-section" data-index="1" id="mission">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-card p-10 rounded-2xl border border-card-border hover:shadow-xl transition-all duration-300 animate-scale-in-about" style={{ animationDelay: visibleSections.includes(1) ? '0.1s' : '0s' }}>
                            <div className="w-14 h-14 bg-teal-700/10 rounded-xl flex items-center justify-center mb-6">
                                <Eye size={28} className="text-teal-700" />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                            <div className="w-12 h-1 bg-amber-500 rounded-full mb-6" />
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Leadership in charitable work, empowering the poorest women and children through the comprehensiveness of our projects — quantitatively, qualitatively, and geographically — by adhering to the highest performance standards in institutional work.
                            </p>
                        </div>
                        <div className="bg-card p-10 rounded-2xl border border-card-border hover:shadow-xl transition-all duration-300 animate-scale-in-about" style={{ animationDelay: visibleSections.includes(1) ? '0.2s' : '0s' }}>
                            <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Target size={28} className="text-amber-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                            <div className="w-12 h-1 bg-amber-500 rounded-full mb-6" />
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Carrying out charitable, developmental, and humanitarian work and preserving values across Qatar and abroad.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className="pt-14 bg-background about-section" data-index="2">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(2) ? '0s' : '0s' }}>
                            What Guides Us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(2) ? '0.1s' : '0s' }}>
                            Our Core Values
                        </h2>
                        <p className="text-muted-foreground text-lg animate-slide-up-about" style={{ animationDelay: visibleSections.includes(2) ? '0.2s' : '0s' }}>
                            The principles that define our character and shape every decision we make in service of humanity.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <div
                                    key={i}
                                    className="group bg-card border border-card-border rounded-2xl p-8 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-300 animate-scale-in-about"
                                    style={{ animationDelay: visibleSections.includes(2) ? `${0.1 + i * 0.08}s` : '0s' }}
                                >
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-14 h-14 bg-teal-700/10 group-hover:bg-teal-700/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
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
                </Container>
            </section>

            {/* Objectives Section */}
            <section className="pt-14 bg-muted/30 about-section" data-index="3">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(3) ? '0s' : '0s' }}>
                            Our Purpose
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(3) ? '0.1s' : '0s' }}>
                            Our Objectives
                        </h2>
                        <p className="text-muted-foreground text-lg animate-slide-up-about" style={{ animationDelay: visibleSections.includes(3) ? '0.2s' : '0s' }}>
                            The goals that drive our work and guide our efforts to serve humanity.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {objectives.map((obj, i) => {
                            const Icon = obj.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-card p-8 rounded-2xl border border-card-border hover:border-teal-700/30 hover:shadow-lg transition-all duration-300 animate-scale-in-about"
                                    style={{ animationDelay: visibleSections.includes(3) ? `${0.1 + i * 0.06}s` : '0s' }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Icon size={24} className="text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground text-lg mb-2">{obj.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{obj.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Governance Section */}
            {/* <section className="my-14 bg-background about-section" data-index="4">
                <Container>
                    <div className="max-w-full mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(4) ? '0s' : '0s' }}>
                                Governance
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(4) ? '0.1s' : '0s' }}>
                                Organizational <span className="text-teal-700">Governance</span>
                            </h2>
                        </div>
                        <div className="space-y-8 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(4) ? '0.2s' : '0s' }}>
                            <div className="bg-card p-8 rounded-2xl border border-card-border">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Organizational Structure</h3>
                                <div className="bg-muted/30 p-8 rounded-xl flex items-center justify-center border-2 border-dashed border-card-border">
                                    <div className="text-center">
                                        <Building2 size={48} className="text-muted-foreground mx-auto mb-3" />
                                        <p className="text-muted-foreground">Organizational Chart to be inserted</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card p-8 rounded-2xl border border-card-border">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Governance Policies</h3>
                                <div className="bg-muted/30 p-8 rounded-xl flex items-center justify-center border-2 border-dashed border-card-border">
                                    <div className="text-center">
                                        <FileText size={48} className="text-muted-foreground mx-auto mb-3" />
                                        <p className="text-muted-foreground">Governance policies to be inserted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section> */}

            {/* Reporting Mechanism Section */}
            <section className="py-14 bg-teal-800 relative overflow-hidden about-section" data-index="5">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
                <Container>
                    <div className="relative z-10 max-w-full mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(5) ? '0s' : '0s' }}>
                                Transparency
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(5) ? '0.1s' : '0s' }}>
                                Reporting Mechanism
                            </h2>
                        </div>
                        <div className="bg-white/8 backdrop-blur border border-white/12 rounded-2xl p-8 md:p-10 animate-scale-in-about" style={{ animationDelay: visibleSections.includes(5) ? '0.2s' : '0s' }}>
                            <p className="text-white/90 text-lg leading-relaxed mb-8">
                                At Taadod Charity, we believe in the necessity of transparency based on openness and accountability. Adherence to the Code of Professional Ethics is a necessity and an obligation from which Taadod Charity Organization does not deviate in all transactions. We strongly encourage all our employees and partners to raise any genuine concern regarding any misconduct that could lead to non-compliance with the organization's work policies and ethics, without fear of any consequences, and with the full assurance that these concerns will be taken seriously, investigated adequately, and maintained in complete confidentiality.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <Phone size={24} className="text-amber-400 mb-3" />
                                    <p className="text-white/60 text-sm font-medium mb-1">Hotline</p>
                                    <p className="text-white text-xl font-bold">33402288</p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <Mail size={24} className="text-amber-400 mb-3" />
                                    <p className="text-white/60 text-sm font-medium mb-1">Email</p>
                                    <p className="text-white text-xl font-bold">compliance@taadod.org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Awards Section */}
            <section className="my-14 bg-background about-section" data-index="6">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(6) ? '0s' : '0s' }}>
                            Recognition
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up-about" style={{ animationDelay: visibleSections.includes(6) ? '0.1s' : '0s' }}>
                            Our <span className="text-teal-700">Awards</span>
                        </h2>
                        <p className="text-muted-foreground text-lg animate-slide-up-about" style={{ animationDelay: visibleSections.includes(6) ? '0.2s' : '0s' }}>
                            Recognition of our commitment to excellence and humanitarian service.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Award 1 */}
                        <div className="group bg-card rounded-2xl overflow-hidden border border-card-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-scale-in-about" style={{ animationDelay: visibleSections.includes(6) ? '0.1s' : '0s' }}>
                            <div className="relative h-64 overflow-hidden bg-muted">
                                <img
                                    src={heroImg}
                                    alt="ISO Global Award"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                                        ISO Certification
                                    </span>
                                </div>
                            </div>
                            <div className="p-7">
                                <div className="flex items-start gap-4 mb-4">
                                    <Award size={32} className="text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-teal-700 transition-colors">
                                            ISO Global Award
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    The organization obtained the ISO 9001 certification for the year 2008 in 2011. ISO officials stated that applying a quality system to a charitable institution is a pioneering experience to improve the services it provides at various levels. The administrative performance of Taadod Charity Organization underwent a comprehensive evaluation during the first six months of 2011. Obtaining the ISO certification grants the institution the right to enter the European Union and the United States markets and gives a competitive advantage.
                                </p>
                            </div>
                        </div>

                        {/* Award 2 */}
                        <div className="group bg-card rounded-2xl overflow-hidden border border-card-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-scale-in-about" style={{ animationDelay: visibleSections.includes(6) ? '0.2s' : '0s' }}>
                            <div className="relative h-64 overflow-hidden bg-muted">
                                <img
                                    src={heroImg}
                                    alt="Shahid Fahad Al-Ahmad International Award"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                                        International Award
                                    </span>
                                </div>
                            </div>
                            <div className="p-7">
                                <div className="flex items-start gap-4 mb-4">
                                    <Award size={32} className="text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-teal-700 transition-colors">
                                            Shahid Fahad Al-Ahmad International Award
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    On Monday, January 18, 2010, at the Courtyard Hotel in Kuwait, Sheikh Ahmad Al-Fahad Al-Ahmad Al-Jaber Al-Sabah presented the Excellence Award for Charitable Institutions to Taadod Charity Organization. The organization deservedly won first place in recognition of its efforts in charitable work within Qatar and abroad.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default About;