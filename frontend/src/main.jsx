import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from './components';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const News = lazy(() => import('./pages/News'));
const Contact = lazy(() => import('./pages/Contact'));

createRoot(document.getElementById('root')).render(
    //<StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route path='' index={true} element={<Suspense fallback={<LoadingSpinner height={'725px'} />}><Home /></Suspense>} />
                        <Route path='about' index={true} element={<Suspense fallback={<LoadingSpinner height={'725px'} />}><About /></Suspense>} />
                        <Route path='projects' index={true} element={<Suspense fallback={<LoadingSpinner height={'725px'} />}><Projects /></Suspense>} />
                        <Route path='news' index={true} element={<Suspense fallback={<LoadingSpinner height={'725px'} />}><News /></Suspense>} />
                        <Route path='contact' index={true} element={<Suspense fallback={<LoadingSpinner height={'725px'} />}><Contact /></Suspense>} />
                    </Route>
                </Routes>
            </BrowserRouter>
    //</StrictMode>,
)
