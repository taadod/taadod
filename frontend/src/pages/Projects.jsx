import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Activity,
    Utensils,
    BookOpen,
    Users,
    Gift,
    ShieldAlert,
    CheckCircle,
    Heart,
    Calendar,
    MapPin,
    Users as UsersIcon
} from 'lucide-react';
import Container from '../components/Container';
import { heroImg } from '../assets';

const projects = [
    {
        id: 'medical',
        title: 'Medical Aid',
        icon: Activity,
        image: heroImg,
        color: 'teal',
        stats: [
            { label: 'QAR Spent', value: '1,105,7465' },
            { label: 'Patients Treated', value: '129' }
        ],
        tag: 'Health & Care',
        paragraphs: [
            'Taadod Charity Organization spent 1,105,7465 Qatari Riyals, supported by Qatar\'s benefactors, on assistance for treating 129 patients within Qatar through the Taadod Social Center during the period from January to July, by providing necessary treatment, conducting medical examinations, and performing various surgeries needed by patients, in coordination with Hamad Medical Corporation and based on approved medical reports.',
            'The organization gives social and humanitarian projects top priority, especially treating patients, and brings smiles and joy to them and their families. The Taadod Social Center coordinates directly with Hamad Medical Corporation by submitting approved medical reports regarding critical and chronic cases.',
            'The Assistance Committee meets weekly and places at the forefront of its priorities medical cases and urgent surgical operations. There are also emergency meetings for urgent cases. In critical cases, approval is granted, the organization covers the treatment, and the relevant departments at Hamad are contacted to expedite treatment. Officials from the Taadod Social Center also visit patients at the Specialized Care Center as part of its social program "Qatar Draws a Smile," which serves various segments of society and enhances the spirit of societal solidarity.',
        ],
    },
    {
        id: 'food',
        title: 'Food Aid — Preserving Blessings',
        subtitle: 'Hifdh Al-Ni\'ma',
        icon: Utensils,
        image: heroImg,
        color: 'amber',
        stats: [
            { label: 'Families Served', value: '2,458' },
            { label: 'Workers Benefited', value: '14,750' },
            { label: 'Meals Distributed', value: '29,500' },
            { label: 'Kg of Food', value: '4,250' }
        ],
        tag: 'Food Security',
        paragraphs: [
            '2,458 needy families and 14,750 workers benefited from the "Preserving Blessings" department during July, through distributing ready-made meals, food supplies, dry grains, vegetables, and fruits donated by benefactors. The aid included 29,500 ready-made cooked meals and about 4,250 kilograms of various food materials including fruits, vegetables, dates, rice, sugar, meat, milk, and other items.',
            'The project operates 11 vehicles that roam many areas in Doha, Al Wakra, and Al Shahaniya, receiving aid from benefactors, banquet hosts, hotels, companies, and homes. Donations vary between ready-made meals, fresh meat, vegetables, dates, sweets, and food supplies.',
            'The "Preserving Blessings" department includes an integrated work team on standby throughout the day. The project contributes to bringing smiles to thousands of workers and families. About 280 families and workers, mostly workers in Al Khor city, benefited from dry food supplies.',
        ],
    },
    {
        id: 'education',
        title: 'Education & Youth Programs',
        subtitle: 'Taadod Cultural Center',
        icon: BookOpen,
        image: heroImg,
        color: 'teal',
        stats: [
            { label: 'Students in Camp', value: '48' },
            { label: 'Branches', value: '3' },
            { label: 'Core Programs', value: '4' }
        ],
        tag: 'Education',
        paragraphs: [
            'The Taadod Cultural Center offers educational, cultural, and scientific programs benefiting thousands of students and youth across its three branches in Doha, Al Khor, and Al Wakra. These include educational programs, cultural lectures, Quranic courses, trips, and rehabilitation camps.',
            'The center concluded the Summer "Mawahib" Camp with 48 students from the fifth and sixth grades under the slogan "Keys to Paradise" — the fourth edition of this program. The camp lasted for three days and included Quran teaching, pronunciation training, memorizing meanings, daily remembrances, encouraging prayers, training on public speaking, football leagues, swimming, water competitions, table football, volleyball, table tennis, and lectures on honoring parents, good morals, positive thinking, time management, and self-reliance.',
        ],
        programs: [
            { name: 'Quranic Programs', desc: 'Daily memorization circles, seasonal and annual courses, and Quranic competitions.' },
            { name: 'Scientific Programs', desc: 'Specialized lectures, courses, a diploma in Islamic studies, and lectures on scientific grounding.' },
            { name: 'Educational Programs', desc: 'Workshops, trips, spring camps, Umrah trips, educational clubs, and Ramadan I\'tikaf program.' },
            { name: 'General Programs', desc: 'Public lectures and festivals held seasonally, hosting preachers and scholars from the Islamic world.' },
        ],
    },
    {
        id: 'women',
        title: 'Women\'s Programs',
        subtitle: 'Taadod Women\'s Center',
        icon: Users,
        image: heroImg,
        color: 'amber',
        stats: [
            { label: 'Female Students', value: '300' },
            { label: 'Branches', value: '3' },
            { label: 'Theatrical Works', value: '6' }
        ],
        tag: 'Women\'s Empowerment',
        paragraphs: [
            'The Taadod Women\'s Center inaugurated the "Tamim Al-Majd" mural at the conclusion of the second edition of the "Ru\'a" Summer Club activities, which involved about 300 female students across the center\'s three branches in Al Wakra, Al Dafna, and Al Khor.',
            'The club targeted all age groups. Kindergarten offered workshops on honesty and trustworthiness, artistic works, and trips to the Ambulance Center, Fire Station, and Doha Entertainment City. Primary level offered workshops, cultural events, and trips to Flajio games, La Cigale Hotel, and the Museum of Islamic Art. High school students received workshops on wax printing, decoupage, decorating phone covers, and a recreational camp teaching self-reliance.',
            'The three branches competed during the closing ceremony by presenting a theatrical work. The Al Wakra branch won with the play "Take My Doll, Don\'t Take My Father and Mother," which addressed the tragedy of Syrian refugees at the borders. The center seeks to strengthen community partnerships to support raising generations on the correct faith and sound scientific methodology.',
        ],
    },
    {
        id: 'eid',
        title: 'Eid Clothing Program',
        icon: Gift,
        image: null,
        color: 'teal',
        stats: [
            { label: 'Vouchers Distributed', value: '1,112' },
            { label: 'Families Benefited', value: '55' },
            { label: 'Voucher Value', value: '100 QAR' }
        ],
        tag: 'Social Relief',
        paragraphs: [
            'Coinciding with Eid al-Adha, Taadod Charity Organization distributed 1,112 vouchers for "Eid Clothing" to needy families within Qatar. The voucher value is 100 Qatari Riyals, in cooperation with Ansar Gallery Mall. A total of 45 needy families benefited from the Eid clothing drive.',
            'Vouchers were distributed according to family size; some large families received up to five vouchers to enable them to buy clothes for their children, others received four, three, or at least two. The center\'s keenness to implement the project stems from the fact that bringing joy and happiness to people is among the most beloved deeds to God, especially during Eid, and to make members of needy families feel interconnected and experience societal solidarity.',
            'The center continues to bring joy and happiness to dozens of needy families as part of its social program "Qatar Draws a Smile," which serves various segments of society and enhances the spirit of societal solidarity.',
        ],
    },
    {
        id: 'emergency',
        title: 'Emergency Relief',
        icon: ShieldAlert,
        image: heroImg,
        color: 'amber',
        stats: [
            { label: 'Reach', value: 'Global' },
            { label: 'Response', value: 'Immediate' }
        ],
        tag: 'Humanitarian Relief',
        paragraphs: [
            'Taadod Charity Organization provides humanitarian and relief services to those affected by drought, famine, and natural or war-related disasters. We work to alleviate suffering and provide urgent assistance to communities in crisis.',
            'The organization undertakes educational, pedagogical, and da\'wah services for Islamic associations that lack financial capabilities, and builds schools, hospitals, mosques, Quran memorization centers, and charitable projects in places that need them.',
            'We care for widows and sponsor orphans, especially those suffering from poverty alongside orphanhood and who are threatened by misguided and corrupt ideas, by providing them with material, social, and cultural support.',
        ],
    },
];

const Projects = () => {
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

        const sections = sectionRef.current?.querySelectorAll('.project-section');
        sections?.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="bg-background pt-16 md:pt-20">
            {/* ── HERO HEADER ───────────────────────────────────────────────── */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-800">
                {/* Decorative background blobs */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dots-projects" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle fill="rgba(255,255,255,0.3)" cx="20" cy="20" r="1.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots-projects)" />
                    </svg>
                </div>

                <Container className="container relative z-10 mx-auto py-28 md:pt-28 pb-40">
                    <div className="max-w-3xl">
                        <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 animate-fade-in-projects">
                            What We Do
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] text-white mb-6 animate-fade-in-projects" style={{ animationDelay: '0.1s' }}>
                            Our <span className="text-amber-400">Projects</span> &amp; Impact
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed animate-fade-in-projects" style={{ animationDelay: '0.2s' }}>
                            Taadod Charity Organization provides humanitarian, charitable, relief, and health services to the needy, working tirelessly to empower communities and uplift the vulnerable.
                        </p>
                    </div>
                </Container>

                {/* Curved bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
            </section>

            {/* ── PROJECTS ─────────────────────────────────────────────── */}
            <section className="pb-14 bg-background">
                <Container>
                    <div className="">
                        {projects.map((project, idx) => {
                            const Icon = project.icon;
                            const isEven = idx % 2 === 0;

                            return (
                                <div
                                    key={project.id}
                                    data-index={idx}
                                    className="project-section"
                                >
                                    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                                        {/* Image / Stats column */}
                                        <div className="space-y-5 animate-scale-in-projects" style={{ animationDelay: visibleSections.includes(idx) ? '0.1s' : '0s' }}>
                                            {project.image ? (
                                                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl group">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="rounded-2xl bg-teal-700/8 border-2 border-dashed border-teal-700/20 aspect-[4/3] flex items-center justify-center">
                                                    <div className="text-center">
                                                        <Icon size={56} className="mx-auto text-teal-700/40 mb-4" />
                                                        <p className="text-muted-foreground font-medium">Eid Clothing Program</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Stats row */}
                                            <div className={`grid ${project.stats.length <= 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'} gap-3`}>
                                                {project.stats.map((s, si) => (
                                                    <div
                                                        key={si}
                                                        className={`rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 ${project.color === 'teal'
                                                            ? 'bg-teal-700/8 border border-teal-700/15 hover:bg-teal-700/15'
                                                            : 'bg-amber-500/8 border border-amber-500/15 hover:bg-amber-500/15'
                                                            }`}
                                                    >
                                                        <div className={`text-2xl font-bold mb-0.5 ${project.color === 'teal' ? 'text-teal-700' : 'text-amber-600'
                                                            }`}>
                                                            {s.value}
                                                        </div>
                                                        <div className="text-muted-foreground text-xs font-medium">{s.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Content column */}
                                        <div>
                                            <span className={`inline-block ${project.color === 'teal'
                                                ? 'bg-teal-700/10 text-teal-700'
                                                : 'bg-amber-500/10 text-amber-700'
                                                } font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 animate-slide-up-projects`}
                                                style={{ animationDelay: visibleSections.includes(idx) ? '0.15s' : '0s' }}>
                                                {project.tag}
                                            </span>

                                            <div className="flex items-start gap-3 mb-2 animate-slide-up-projects" style={{ animationDelay: visibleSections.includes(idx) ? '0.2s' : '0s' }}>
                                                <div className="w-12 h-12 bg-teal-700/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
                                                    <Icon size={24} className="text-teal-700" />
                                                </div>
                                                <div>
                                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                                                        {project.title}
                                                    </h2>
                                                    {project.subtitle && (
                                                        <p className="text-amber-600 font-semibold text-sm">{project.subtitle}</p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="w-12 h-1 bg-amber-500 rounded-full mt-4 mb-6 animate-slide-up-projects" style={{ animationDelay: visibleSections.includes(idx) ? '0.25s' : '0s' }} />

                                            {project.paragraphs.map((p, pi) => (
                                                <p
                                                    key={pi}
                                                    className="text-muted-foreground leading-relaxed mb-4 text-base animate-slide-up-projects"
                                                    style={{ animationDelay: visibleSections.includes(idx) ? `${0.25 + (pi + 1) * 0.08}s` : '0s' }}
                                                >
                                                    {p}
                                                </p>
                                            ))}

                                            {project.programs && (
                                                <div className="mt-6 space-y-3 animate-slide-up-projects" style={{ animationDelay: visibleSections.includes(idx) ? '0.5s' : '0s' }}>
                                                    <p className="font-bold text-foreground mb-3">Four Core Programs:</p>
                                                    {project.programs.map((prog, pi) => (
                                                        <div key={pi} className="flex gap-3 p-4 bg-muted/50 rounded-xl border border-border hover:border-teal-700/30 transition-colors duration-300">
                                                            <CheckCircle size={18} className="text-teal-700 mt-0.5 shrink-0" />
                                                            <div>
                                                                <p className="font-semibold text-foreground text-sm mb-0.5">{prog.name}</p>
                                                                <p className="text-muted-foreground text-sm">{prog.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="mt-8 animate-slide-up-projects" style={{ animationDelay: visibleSections.includes(idx) ? '0.55s' : '0s' }}>
                                                <Link
                                                    to="/contact"
                                                    className={`inline-flex items-center gap-2 ${project.color === 'teal'
                                                        ? 'bg-teal-700 hover:bg-teal-600'
                                                        : 'bg-amber-600 hover:bg-amber-500'
                                                        } text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5`}
                                                >
                                                    Support This Project <ArrowRight size={17} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {idx < projects.length - 1 && (
                                        <div className="w-full h-px bg-border mt-16 md:mt-24" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────── */}
            <section className="py-20 bg-teal-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
                <Container>
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            See a Project You Want to Support?
                        </h2>
                        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                            Every contribution — large or small — helps us bring relief, education, and hope to those who need it most.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Projects;