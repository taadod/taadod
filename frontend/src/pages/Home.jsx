import { lazy, Suspense } from "react";
import { Container, LoadingSpinner, Hero } from "../components";
import { BadgeCheck, Gavel, Grid, List, Tag, Upload, Filter, UserCog2, LucideVerified, UserPlus, Clock, PhoneCall, Target, Users, ArrowRight, User, CarFront, Hand } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = lazy(() => import('../components/About'));
const Values = lazy(() => import('../components/Values'));
const Stats = lazy(() => import('../components/Stats'));
const LatestNews = lazy(() => import('../components/LatestNews'));

function Home() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const userCurrency = 'EUR';

    return (
        <>
        <Hero />
        <About />
        <Stats />
        <Values />
        <LatestNews />
        </>
    )
}

export default Home;