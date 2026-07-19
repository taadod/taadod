// components/Footer.jsx (with social media)
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Heart,
    ArrowRight,
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Linkedin
} from 'lucide-react';
import Container from './Container';
import { logo } from '../assets';

const Footer = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'News', path: '/news' },
        { name: 'Contact', path: '/contact' },
    ];

    const projects = [
        'Medical Aid',
        'Food Aid',
        'Education & Youth',
        "Women's Programs",
        'Eid Clothing',
        'Emergency Relief'
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Youtube, href: '#', label: 'YouTube' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="bg-teal-900 text-white">
            {/* Top strip - Call to action */}
            <div className="bg-teal-800 py-10">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <p className="text-2xl font-bold text-white mb-1">Join Our Mission</p>
                            <p className="text-white/65 text-sm">Help us empower the most vulnerable in Qatar and beyond.</p>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-teal-900 font-bold px-8 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            Get in Touch <ArrowRight size={18} />
                        </Link>
                    </div>
                </Container>
            </div>

            {/* Main footer */}
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
                        {/* Brand */}
                        <div>
                            <Link to="/" className="items-center gap-2.5 mb-6 inline-flex">
                                <div className="bg-amber-500/20 p-2 rounded-xl">
                                    <Heart size={20} className="fill-amber-400 stroke-amber-400" />
                                </div>
                                <p className="text-lg font-bold text-white">Taadod Charity</p>
                            </Link>
                            <p className="text-white/55 text-sm leading-relaxed mb-6">
                                Leadership in Charitable Work, Empowering the Poorest Women and Children since 2009.
                            </p>
                            <div className="flex items-center gap-3 text-white/55 text-sm mb-6">
                                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                <span>Established in Qatar — 2009</span>
                            </div>
                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
                                            aria-label={social.label}
                                        >
                                            <Icon size={18} className="text-white/70 hover:text-amber-400 transition-colors" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='grid grid-cols-2'>
                            {/* Quick Links */}
                            <div>
                                <p className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Navigation</p>
                                <ul className="space-y-3">
                                    {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.path}
                                                className="text-white/55 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                                            >
                                                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Projects */}
                            <div>
                                <p className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Our Work</p>
                                <ul className="space-y-3">
                                    {projects.map((item) => (
                                        <li key={item}>
                                            <Link
                                                to="/projects"
                                                className="text-white/55 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                                            >
                                                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <p className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Contact</p>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-3 text-white/55 text-sm">
                                    <MapPin size={16} className="shrink-0 mt-0.5 text-amber-400" />
                                    <span>Al Wakra – Azdan Village No. 33 – Villa No. 12, Building 341, Street 900, Zone 51, Qatar</span>
                                </li>
                                <li className="flex items-center gap-3 text-white/55 text-sm">
                                    <Phone size={16} className="shrink-0 text-amber-400" />
                                    <a href="tel:33402288" className="hover:text-amber-400 transition-colors">33402288 (Compliance Hotline)</a>
                                </li>
                                <li className="flex items-center gap-3 text-white/55 text-sm">
                                    <Mail size={16} className="shrink-0 text-amber-400" />
                                    <a href="mailto:info@taadod.org" className="hover:text-amber-400 transition-colors">info@taadod.org</a>
                                </li>
                                <li className="flex items-center gap-3 text-white/55 text-sm">
                                    <Mail size={16} className="shrink-0 text-amber-400" />
                                    <a href="mailto:compliance@taadod.org" className="hover:text-amber-400 transition-colors">compliance@taadod.org</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/35 text-sm">
                            © {new Date().getFullYear()} Taadod Charity Organization. All rights reserved.
                        </p>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;