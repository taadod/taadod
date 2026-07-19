import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { closeMenu, darkLogo, logo, menuIcon } from "../assets";
import Container from "./Container";
import { ChevronRight, LayoutDashboard, LogIn, Search, ChevronDown, X, Gavel, Clock, DollarSign, Gift, Euro, PoundSterling, HandHeartIcon, Heart, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
];

const currencies = [
    { name: "Euro", slug: "EUR", symbol: "€", icon: Euro },
    { name: "Pound Sterling", slug: "GBP", symbol: "£", icon: PoundSterling },
];

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCurrencySwitcherOpen, setIsCurrencySwitcherOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const currencySwitcherRef = useRef(null);
    const [userCurrency, setUserCurrency] = useState('EUR');
    const [mobileCurrencySwitcherOpen, setMobileCurrencySwitcherOpen] = useState(false);

    // Add click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (currencySwitcherRef.current && !currencySwitcherRef.current.contains(event.target)) {
                setIsCurrencySwitcherOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        setIsScrolled(pathname !== '/');

        pathname === '/' && window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const handleCurrencySelect = (slug) => {
        if (user) {
            const updatedUser = { ...user, currency: slug };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);

            // Close dropdowns first
            setIsCurrencySwitcherOpen(false);
            setMobileCurrencySwitcherOpen(false);

            // Reload after a tiny delay to ensure localStorage is written
            setTimeout(() => {
                window.location.reload();
            }, 100);
        } else {
            localStorage.setItem('user', JSON.stringify({ currency: slug }));

            // Close dropdowns first
            setIsCurrencySwitcherOpen(false);
            setMobileCurrencySwitcherOpen(false);

            // Reload after a tiny delay
            setTimeout(() => {
                window.location.reload();
            }, 100);
        }
    };

    return (
        <header className={`${isScrolled ? 'fixed bg-white bg-opacity-100 shadow-lg shadow-primary/5' : 'absolute bg-opacity-0'} w-full transition-all duration-150 z-50`}>
            <Container className={`flex items-center justify-between py-4`}>
                <Link to="/" className="items-center gap-2.5 mb-6 inline-flex">
                    <div className="bg-amber-500/20 p-2 rounded-xl">
                        <Heart size={20} className="fill-amber-400 stroke-amber-400" />
                    </div>
                    <p className={`text-lg font-bold ${isScrolled ? 'text-teal-900' : 'text-white'}`}>Taadod Charity</p>
                </Link>

                {/* Navlinks for larger screens */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-7">
                        {
                            navLinks.map(link => (
                                <li key={link.name}>
                                    <NavLink to={link.href} className={({ isActive }) => `${isActive && isScrolled ? 'text-teal-900' : isActive && !isScrolled ? 'text-teal-100' : isScrolled ? 'text-black' : 'text-white'} hover:underline`}>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))
                        }

                        {/* Currency Dropdown - Simple */}
                        {/* <li
                            ref={currencySwitcherRef}
                            className={`${isScrolled ? 'text-black' : 'text-white'} relative`}
                        >
                            <button
                                onClick={() => setIsCurrencySwitcherOpen(!isCurrencySwitcherOpen)}
                                className="currency-switcher-trigger flex gap-1 items-center cursor-pointer hover:underline"
                            >
                                <span>Currency</span>
                                <ChevronDown size={16} className={`transition-transform ${isCurrencySwitcherOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCurrencySwitcherOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                                    {currencies.map((type) => {
                                        const Icon = type.icon;
                                        return (
                                            <button
                                                key={type.slug}
                                                onClick={() => handleCurrencySelect(type.slug)}
                                                className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-teal-900/10 transition-colors text-gray-700"
                                            >
                                                <Icon size={18} className="text-teal-900" />
                                                <span>{type.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </li> */}

                        <li>
                            <button className="flex items-center gap-2 inset-0 bg-gradient-to-r from-teal-800 to-teal-900 text-white px-5 py-2 rounded-md cursor-pointer" onClick={() => navigate('/contact')}><Mail size={20} /> Contact</button>
                        </li>
                    </ul>
                </nav>

                {/* Navlinks for smaller screens */}
                <nav className={`lg:hidden bg-white absolute top-0 left-0 min-h-screen transition-all duration-200 overflow-hidden text-center flex items-center justify-center ${isMenuOpen ? 'w-full' : 'w-0'}`}>
                    <ul>
                        {
                            navLinks.map(link => (
                                <li onClick={() => setIsMenuOpen(false)} key={link.name} className="relative mx-5 py-2">
                                    <NavLink className={({ isActive }) => ``} to={link.href}>{link.name}</NavLink>
                                </li>
                            ))
                        }

                        {/* <li className="relative mx-5 py-2 mb-2">
                            <button
                                onClick={() => {
                                    setMobileCurrencySwitcherOpen(true);
                                    setIsMenuOpen(false);
                                }}
                                className="flex items-center gap-1"
                            >
                                Currency
                                <ChevronRight size={16} />
                            </button>
                        </li> */}

                        <li>
                            <button className="flex items-center gap-2 bg-gradient-to-r from-teal-900 to-teal-950 text-white px-5 py-2 rounded-md cursor-pointer" onClick={() => { navigate('/contact'); setIsMenuOpen(false) }}><Mail size={20} /> Contact</button>
                        </li>
                    </ul>
                </nav>

                {/* MOBILE CURRENCY SWITCHER DRAWER */}
                <div
                    className={`fixed inset-0 bg-white z-[100] transform transition-transform duration-300 ${mobileCurrencySwitcherOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="h-full overflow-y-auto">
                        <div className="flex items-center justify-between p-5 border-b">
                            <h2 className="text-xl font-bold">Currency</h2>
                            <X
                                className="cursor-pointer"
                                onClick={() => setMobileCurrencySwitcherOpen(false)}
                            />
                        </div>

                        <div className="p-5 space-y-3">
                            {currencies.map((type) => {
                                const Icon = type.icon;
                                return (
                                    <div
                                        key={type.slug}
                                        onClick={() => {
                                            handleCurrencySelect(type.slug);
                                            setMobileCurrencySwitcherOpen(false);
                                        }}
                                        className="flex items-center gap-4 p-4 border rounded-xl hover:border-teal-900 cursor-pointer"
                                    >
                                        <div className={`p-2 rounded-lg bg-gray-100 ${type.color}`}>
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{type.name}</h3>
                                            <p className="text-sm text-gray-500">{type.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="lg:hidden z-50 flex items-center gap-5">
                    {
                        isMenuOpen ? (<img onClick={() => setIsMenuOpen(!isMenuOpen)} src={closeMenu} alt="menu icon" className={`h-7 cursor-pointer invert-25 z-50 ${isScrolled}`} />) : (<img onClick={() => setIsMenuOpen(!isMenuOpen)} src={menuIcon} alt="menu icon" className={`h-5 cursor-pointer ${isScrolled && 'invert'} z-50`} />)
                    }
                </div>
            </Container>
        </header>
    );
}

export default Header;