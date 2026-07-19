// pages/News.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, Heart, Share2 } from 'lucide-react';
import Container from '../components/Container';
import { heroImg } from '../assets';

const articles = [
    {
        id: 1,
        title: 'Taadod Charity Distributes 1,112 Vouchers for "Eid Clothing" to Needy Families',
        date: 'Eid al-Adha 2023',
        category: 'Relief Programs',
        image: heroImg,
        featured: true,
        body: [
            'Coinciding with Eid al-Adha and benefiting 55 families within Qatar with support from benefactors to bring joy and happiness to children and beneficiary families, Taadod Charity Organization distributed 1,112 vouchers for "Eid Clothing" to needy families within Qatar. The voucher value is 100 Qatari Riyals, in cooperation with Ansar Gallery Mall.',
            'A total of 45 needy families benefited from the Eid clothing drive. Vouchers were distributed according to family size; some large families received up to five vouchers to enable them to buy clothes for their children, others received four, three, or at least two.',
            'The center\'s keenness to implement the project stems from the fact that bringing joy and happiness to people is among the most beloved deeds to God, especially during Eid, and to make members of needy families feel interconnected and experience societal solidarity. The center continues to bring joy and happiness to dozens of needy families as part of its social program "Qatar Draws a Smile," which serves various segments of society and enhances the spirit of societal solidarity.',
        ],
    },
    {
        id: 2,
        title: 'Taadod Cultural Center Concludes Summer "Mawahib" Camp and Honors Outstanding Students',
        date: 'July 2023',
        category: 'Education & Youth',
        image: heroImg,
        featured: false,
        body: [
            'Qualifying 48 students and developing their capacities. A training camp including cultural, creative, sports, and recreational activities to explore participants\' creativities and talents. The Taadod Cultural Center concluded the activities of the second educational camp held under the slogan "Keys to Paradise" at the conclusion of the Summer "Mawahib" Center, organized by the Educational Programs Department in its fourth edition with the participation of 48 students from the fifth and sixth grades of primary school.',
            'The center honored distinguished students and winners in cultural competitions and the sports league. The camp lasted for three days and included educational programs, cultural and creative activities, and various sports and recreational activities.',
            'The programs included Quran teaching, pronunciation training, memorizing meanings, daily remembrances, encouraging prayers, training on public speaking, football leagues, swimming, water competitions, table football, volleyball, table tennis, lectures on honoring parents, good morals, positive thinking, time management, and self-reliance. The program is supervised by specialized volunteers at the Taadod Cultural Center.',
        ],
    },
    {
        id: 3,
        title: 'Inauguration of "Tamim Al-Majd" Mural at "Ru\'a" Summer Club',
        date: 'July 2023',
        category: 'Women\'s Center',
        image: heroImg,
        featured: false,
        body: [
            'Reinforcing the spirit of solidarity and belonging, with the participation of 300 female students who presented 6 theatrical works. The Al Wakra branch won the award for the best purposeful humanitarian work. Amina Ma\'rifa, Director of Taadod Women\'s Center, expressed her delight at the cultural and skill-based outputs presented by the participants.',
            'The Taadod Women\'s Center inaugurated the "Tamim Al-Majd" mural at the conclusion of the second edition of the "Ru\'a" Summer Club, involving about 300 female students across three branches in Al Wakra, Al Dafna, and Al Khor. The three branches competed during the closing ceremony by presenting a theatrical work.',
            'The Al Wakra branch won with the play "Take My Doll, Don\'t Take My Father and Mother," addressing the tragedy of Syrian refugees. The club targeted all age groups with workshops, trips, theatrical segments, and recreational activities. The center seeks to strengthen community partnerships to support raising generations on the correct faith and sound scientific methodology.',
        ],
    },
    {
        id: 4,
        title: '1.1 Million Riyals for Treating 129 Patients within Qatar',
        date: 'July 2023',
        category: 'Medical Aid',
        image: heroImg,
        featured: false,
        body: [
            'Supported by Qatar\'s benefactors from January to July, Taadod Charity Organization spent 1,105,7465 Qatari Riyals on assistance for treating 129 patients within Qatar through the Taadod Social Center, by providing necessary treatment, conducting medical examinations, and performing surgeries, in coordination with Hamad Medical Corporation and based on approved medical reports.',
            'The organization gives top priority to treating patients, especially if the patient is the head and breadwinner of the family. The Taadod Social Center coordinates directly with Hamad Medical Corporation. The Assistance Committee meets weekly and holds emergency meetings for urgent cases.',
            'The organization thanked the people of Qatar and Hamad Medical Corporation for their cooperation. Officials also visited patients at the Specialized Care Center as part of the "Qatar Draws a Smile" program.',
        ],
    },
    {
        id: 5,
        title: 'Over 2,400 Families and 14,700 Workers Benefited from "Preserving Blessings" in July',
        date: 'August 2023',
        category: 'Food Aid',
        image: heroImg,
        featured: false,
        body: [
            '2,458 needy families and 14,750 workers benefited from the "Preserving Blessings" department during July, through distributing ready-made meals, food supplies, dry grains, vegetables, and fruits donated by benefactors. The aid included 29,500 ready-made cooked meals and about 4,250 kilograms of various food materials including fruits, vegetables, dates, rice, sugar, meat, milk, and other items.',
            'About 280 families and workers, mostly workers in Al Khor city, benefited from dry food supplies. The project operates 11 vehicles that roam many areas in Doha, Al Wakra, and Al Shahaniya, receiving aid from benefactors, banquet hosts, hotels, companies, and homes. The department includes an integrated work team on standby throughout the day.',
            'The project contributes to bringing smiles to thousands of workers and families.',
        ],
    },
    {
        id: 6,
        title: 'Taadod Cultural Center Programs for Thousands of Students and Youth',
        date: 'June 2023',
        category: 'Education & Youth',
        image: heroImg,
        featured: false,
        body: [
            'The Taadod Cultural Center continues to offer educational, cultural, and scientific programs benefiting thousands of students and youth across its three branches in Doha, Al Khor, and Al Wakra. These include educational programs, cultural lectures, Quranic courses, trips, and rehabilitation camps.',
            'The center offers four main programs: Quranic Programs (daily memorization circles, seasonal and annual courses, and Quranic competitions); Scientific Programs (specialized lectures, courses, a diploma in Islamic studies, and lectures on scientific grounding); Educational Programs (workshops, trips, spring camps, Umrah trips, educational clubs, and Ramadan I\'tikaf program); General Programs (public lectures and festivals held seasonally, hosting preachers and scholars from the Islamic world).',
        ],
    },
];

const categoryColors = {
    'Relief Programs': 'bg-red-500/10 text-red-700 border-red-200',
    'Education & Youth': 'bg-blue-500/10 text-blue-700 border-blue-200',
    "Women's Center": 'bg-purple-500/10 text-purple-700 border-purple-200',
    'Medical Aid': 'bg-teal-700/10 text-teal-700 border-teal-200',
    'Food Aid': 'bg-amber-500/10 text-amber-700 border-amber-200',
};

const News = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => {
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

        const cards = sectionRef.current?.querySelectorAll('.news-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const featured = articles[0];
    const rest = articles.slice(1);

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
                            <pattern id="dots-news" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle fill="rgba(255,255,255,0.3)" cx="20" cy="20" r="1.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots-news)" />
                    </svg>
                </div>

                <Container className="container relative z-10 mx-auto py-28 md:pt-28 pb-40">
                    <div className="max-w-3xl">
                        <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 animate-fade-in-news">
                            Latest News
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] text-white mb-6 animate-fade-in-news" style={{ animationDelay: '0.1s' }}>
                            News &amp; Media <span className="text-amber-400">Center</span>
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed animate-fade-in-news" style={{ animationDelay: '0.2s' }}>
                            Stay updated with the latest announcements, project milestones, and stories of impact from Taadod Charity Organization.
                        </p>
                    </div>
                </Container>

                {/* Curved bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
            </section>

            {/* ── FEATURED STORY ───────────────────────────────────────── */}
            <section className="pb-14 bg-background">
                <Container>
                    <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-8 animate-slide-up-news">
                        Featured Story
                    </p>
                    <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-card-border shadow-xl animate-scale-in-news">
                        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-muted">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <span className={`absolute top-5 left-5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${categoryColors[featured.category] || 'bg-gray-100 text-gray-700'}`}>
                                {featured.category}
                            </span>
                        </div>
                        <div className="bg-card p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-5">
                                <Calendar size={14} />
                                <span>{featured.date}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">
                                {featured.title}
                            </h2>
                            {featured.body.map((p, i) => (
                                <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-sm">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── ALL STORIES ──────────────────────────────────────────── */}
            <section className="pb-14 bg-muted/20">
                <Container>
                    <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-10 animate-slide-up-news">
                        More Stories
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rest.map((article, idx) => (
                            <article
                                key={article.id}
                                data-index={idx}
                                className={`news-card group bg-card rounded-2xl border border-card-border overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${visibleItems.includes(idx) ? 'visible' : ''
                                    }`}
                                style={{
                                    transitionDelay: `${idx * 0.08}s`,
                                    opacity: visibleItems.includes(idx) ? 1 : 0,
                                    transform: visibleItems.includes(idx) ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)'
                                }}
                            >
                                <div className="relative h-48 overflow-hidden bg-muted">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>

                                <div className="p-7 flex flex-col flex-1">
                                    <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                                            <Tag size={10} className="inline mr-1" />
                                            {article.category}
                                        </span>
                                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                                            <Calendar size={11} />
                                            {article.date}
                                        </span>
                                    </div>

                                    <h2 className="text-lg font-bold text-foreground mb-4 leading-snug group-hover:text-teal-700 transition-colors">
                                        {article.title}
                                    </h2>

                                    <div className="space-y-2 flex-1">
                                        {article.body.slice(0, 2).map((p, i) => (
                                            <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
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
                            Stay Connected with <span className="text-amber-400">Taadod</span>
                        </h2>
                        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                            Subscribe to our newsletter to receive the latest updates on our projects, events, and impact stories.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-teal-900 font-bold px-10 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
                            >
                                Contact Us <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all hover:bg-white/10 backdrop-blur-sm"
                            >
                                View Our Projects
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default News;