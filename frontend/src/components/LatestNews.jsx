// components/LatestNews.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { heroImg } from '../assets';
import Container from './Container';

const news = [
    {
        title: 'Taadod Charity Distributes 1,112 Vouchers for "Eid Clothing" to Needy Families',
        excerpt: 'Coinciding with Eid al-Adha, benefiting 55 families within Qatar with support from benefactors to bring joy and happiness to children and beneficiary families, Taadod Charity Organization distributed 1,112 vouchers for "Eid Clothing" to needy families within Qatar. The voucher value is 100 Qatari Riyals, in cooperation with Ansar Gallery Mall. A total of 45 needy families benefited from the Eid clothing drive. Vouchers were distributed according to family size; some large families received up to five vouchers to enable them to buy clothes for their children, others received four, three, or at least two.',
        category: "Relief",
        date: "Eid al-Adha 2023",
        img: heroImg,
    },
    {
        title: 'Taadod Cultural Center Concludes Summer "Mawahib" Camp',
        excerpt: 'Qualifying 48 students and developing their capacities through cultural, creative, sports, and recreational activities. The Taadod Cultural Center concluded the activities of the second educational camp held under the slogan "Keys to Paradise" at the conclusion of the Summer "Mawahib" Center, organized by the Educational Programs Department in its fourth edition with the participation of 48 students from the fifth and sixth grades of primary school. The center honored distinguished students and winners in cultural competitions and the sports league. The camp lasted for three days and included educational programs, cultural and creative activities, and various sports and recreational activities.',
        category: "Education",
        date: "Summer 2023",
        img: heroImg,
    },
    {
        title: 'Inauguration of "Tamim Al-Majd" Mural at "Ru\'a" Summer Club',
        excerpt: 'Reinforcing the spirit of solidarity and belonging, with the participation of 300 female students who presented 6 theatrical works. The Taadod Women\'s Center at Taadod Charity Organization inaugurated the "Tamim Al-Majd" mural at the conclusion of the second edition of the "Ru\'a" Summer Club activities, which involved about 300 female students across the center\'s three branches in Al Wakra, Al Dafna, and Al Khor. The Al Wakra branch won, participating with the play "Take My Doll, Don\'t Take My Father and Mother," which addressed the tragedy of Syrian refugees at the borders.',
        category: "Women's Programs",
        date: "Summer 2023",
        img: heroImg,
    },
    {
        title: '1.1 Million Riyals for Treating 129 Patients within Qatar',
        excerpt: 'Supported by Qatar\'s benefactors from January to July, Taadod Charity Organization spent 1,105,7465 Qatari Riyals on assistance for treating 129 patients within Qatar through the Taadod Social Center, by providing necessary treatment, conducting medical examinations, and performing various surgeries, in coordination with Hamad Medical Corporation and based on approved medical reports.',
        category: "Medical Aid",
        date: "Jan–July 2023",
        img: heroImg,
    },
];

const LatestNews = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Use a small timeout to ensure DOM is fully rendered
        const timer = setTimeout(() => {
            const cards = sectionRef.current?.querySelectorAll('.news-card');
            
            if (cards && cards.length > 0) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                const index = parseInt(entry.target.dataset.index);
                                setVisibleItems(prev => {
                                    // Only add if not already present
                                    if (!prev.includes(index)) {
                                        return [...prev, index];
                                    }
                                    return prev;
                                });
                            }
                        });
                    },
                    { 
                        threshold: 0.1,
                        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
                    }
                );

                cards.forEach((card) => observer.observe(card));

                return () => {
                    observer.disconnect();
                };
            }
        }, 100); // Small delay to ensure DOM is ready

        return () => clearTimeout(timer);
    }, []);

    return (
        <section ref={sectionRef} className="pb-14 bg-muted/30">
            <Container>
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                        <div>
                            <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-3 animate-slide-up-news">
                                Stay Informed
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-slide-up-news" style={{ animationDelay: '0.1s' }}>
                                Latest News
                            </h2>
                        </div>
                    </div>

                    {/* News Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {news.map((item, i) => (
                            <div
                                key={i}
                                data-index={i}
                                className={`news-card group block ${
                                    visibleItems.includes(i) ? 'visible' : ''
                                }`}
                                style={{ 
                                    transitionDelay: `${i * 0.1}s`,
                                    opacity: visibleItems.includes(i) ? 1 : 0,
                                    transform: visibleItems.includes(i) ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                                    transition: 'all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)'
                                }}
                            >
                                <div className="bg-card rounded-2xl overflow-hidden border border-card-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden bg-muted shrink-0">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <span className="absolute bottom-4 right-4 text-white/80 text-xs bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                                            {item.date}
                                        </span>
                                    </div>
                                    <div className="p-7 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-teal-700 transition-colors mb-3 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                                            {item.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LatestNews;