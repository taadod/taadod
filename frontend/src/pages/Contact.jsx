import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Phone,
    Mail,
    ShieldAlert,
    Send,
    Clock,
    Globe,
    ArrowRight
} from 'lucide-react';
import Container from '../components/Container';
import { heroImg } from '../assets';

const Contact = () => {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`${formData.subject} - ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}`
        );

        window.location.href = `mailto:info@taadod.org?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-background pt-16 md:pt-20">
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
                            <pattern id="dots-contact" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle fill="rgba(255,255,255,0.3)" cx="20" cy="20" r="1.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots-contact)" />
                    </svg>
                </div>

                <Container className="container relative z-10 mx-auto py-28 md:pt-28 pb-40">
                    <div className="max-w-3xl">
                        <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 animate-fade-in-contact">
                            Reach Out
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] text-white mb-6 animate-fade-in-contact" style={{ animationDelay: '0.1s' }}>
                            Contact <span className="text-amber-400">Us</span>
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed animate-fade-in-contact" style={{ animationDelay: '0.2s' }}>
                            We welcome your inquiries, feedback, and partnership opportunities. Please feel free to reach out through any of the channels below.
                        </p>
                    </div>
                </Container>

                {/* Curved bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
            </section>

            {/* ── CONTACT CARDS ────────────────────────────────────────── */}
            <section className="pb-20 bg-background">
                <Container>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
                        {[
                            {
                                icon: MapPin,
                                color: 'teal',
                                label: 'Headquarters',
                                lines: ['Al Wakra – Azdan Village No. 33', 'Villa No. 12, Building 341', 'Street 900, Zone 51, Qatar'],
                            },
                            {
                                icon: Mail,
                                color: 'amber',
                                label: 'General Inquiries',
                                lines: ['info@taadod.org'],
                                link: 'mailto:info@taadod.org',
                            },
                            {
                                icon: Phone,
                                color: 'teal',
                                label: 'Compliance Hotline',
                                lines: ['33402288'],
                                link: 'tel:33402288',
                            },
                            {
                                icon: Globe,
                                color: 'amber',
                                label: 'Compliance Email',
                                lines: ['compliance@taadod.org'],
                                link: 'mailto:compliance@taadod.org',
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="bg-card border border-card-border rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-scale-in-contact"
                                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.color === 'teal' ? 'bg-teal-700/10' : 'bg-amber-500/10'}`}>
                                    <card.icon size={22} className={card.color === 'teal' ? 'text-teal-700' : 'text-amber-600'} />
                                </div>
                                <p className="font-bold text-foreground mb-3">{card.label}</p>
                                {card.lines.map((line, li) => (
                                    card.link && li === 0
                                        ? <a key={li} href={card.link} className="text-teal-700 hover:text-amber-600 transition-colors font-medium text-sm block">
                                            {line}
                                        </a>
                                        : <p key={li} className="text-muted-foreground text-sm">{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* ── MAIN GRID ──────────────────────────────────────────── */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Compliance Section */}
                        <div className="space-y-8">
                            <div className="animate-slide-up-contact">
                                <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Our Commitment</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Compliance &amp; Transparency</h2>
                                <div className="w-12 h-1 bg-amber-500 rounded-full" />
                            </div>

                            <div className="bg-teal-700 text-white rounded-2xl p-8 animate-slide-up-contact" style={{ animationDelay: '0.1s' }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
                                        <ShieldAlert size={24} className="text-amber-300" />
                                    </div>
                                    <p className="font-bold text-lg">Reporting Mechanism</p>
                                </div>
                                <p className="text-white/80 leading-relaxed text-sm mb-5">
                                    At Taadod Charity, we believe in the necessity of transparency based on openness and accountability. Adherence to the Code of Professional Ethics is a necessity and an obligation from which Taadod Charity Organization does not deviate in all transactions.
                                </p>
                                <p className="text-white/80 leading-relaxed text-sm mb-5">
                                    We strongly encourage all our employees and partners to raise any genuine concern regarding any misconduct that could lead to non-compliance with the organization's work policies and ethics, without fear of any consequences, and with the full assurance that these concerns will be taken seriously, investigated adequately, and maintained in complete confidentiality.
                                </p>
                                <p className="text-white/80 leading-relaxed text-sm mb-6">
                                    To report any violations related to non-compliance with laws and regulations governing charitable work or the organization's policies and procedures, please contact the Reporting Officer via:
                                </p>
                                <div className="space-y-3 pt-5 border-t border-white/20">
                                    <div className="flex items-center gap-3">
                                        <Phone size={16} className="text-amber-300 shrink-0" />
                                        <span className="text-white font-semibold text-sm">Hotline: 33402288</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail size={16} className="text-amber-300 shrink-0" />
                                        <a href="mailto:compliance@taadod.org" className="text-amber-300 hover:text-amber-200 font-semibold text-sm transition-colors">
                                            compliance@taadod.org
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/50 rounded-2xl p-6 border border-border flex gap-4 items-start animate-slide-up-contact" style={{ animationDelay: '0.2s' }}>
                                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Clock size={18} className="text-amber-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground mb-1">Operating Hours</p>
                                    <p className="text-muted-foreground text-sm">Sunday – Thursday: 8:00 AM – 4:00 PM</p>
                                    <p className="text-muted-foreground text-sm">Friday – Saturday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="animate-slide-up-contact" style={{ animationDelay: '0.15s' }}>
                            <div className="bg-card border border-card-border rounded-3xl p-8 md:p-10 shadow-xl">
                                <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Send a Message</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Get in Touch</h3>
                                <p className="text-muted-foreground mb-8">Fill out the form and our team will respond shortly.</p>

                                {sent ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-teal-700/10 rounded-full flex items-center justify-center mx-auto mb-5">
                                            <Send size={32} className="text-teal-700" />
                                        </div>
                                        <h4 className="text-xl font-bold text-foreground mb-2">Message Received!</h4>
                                        <p className="text-muted-foreground">Thank you for reaching out. We'll be in touch soon.</p>
                                        <button
                                            onClick={() => setSent(false)}
                                            className="mt-6 text-teal-700 font-semibold hover:text-amber-600 transition-colors text-sm"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form className="space-y-5" onSubmit={handleSubmit}>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label htmlFor="firstName" className="text-sm font-semibold text-foreground">First Name</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    placeholder="Ahmed"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-teal-700/30 transition-shadow text-sm"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    placeholder="Al-Rashid"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-teal-700/30 transition-shadow text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="ahmed@example.com"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-teal-700/30 transition-shadow text-sm"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                                            <select
                                                id="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-teal-700/30 transition-shadow text-sm text-foreground"
                                            >
                                                <option value="">Select a topic…</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Partnership Opportunity">Partnership Opportunity</option>
                                                <option value="Donation / Support">Donation / Support</option>
                                                <option value="Volunteer">Volunteer</option>
                                                <option value="Media / Press">Media / Press</option>
                                                <option value="Compliance Report">Compliance Report</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                required
                                                placeholder="How can we help you?"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-teal-700/30 transition-shadow resize-none text-sm"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-teal-700 hover:bg-teal-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5 text-base"
                                        >
                                            Send Message <Send size={18} />
                                        </button>

                                        <p className="text-center text-muted-foreground text-xs">
                                            For compliance matters, please use the dedicated channels above.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── MAP PLACEHOLDER ──────────────────────────────────────── */}
            <section className="h-72 md:h-96 bg-muted relative overflow-hidden border-t border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-700/10 to-amber-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-teal-700/15 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin size={32} className="text-teal-700" />
                        </div>
                        <p className="text-xl font-bold text-foreground mb-1">Taadod Charity Organization</p>
                        <p className="text-muted-foreground text-sm">Al Wakra – Azdan Village No. 33 – Villa No. 12</p>
                        <p className="text-muted-foreground text-sm">Building 341, Street 900, Zone 51, Qatar</p>
                        <a
                            href="https://maps.google.com/?q=Al+Wakra+Qatar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-5 bg-teal-700 hover:bg-teal-600 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Open in Maps <MapPin size={14} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;