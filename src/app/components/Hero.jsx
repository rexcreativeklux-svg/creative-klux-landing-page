'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import CreativeSelectionModal from './CreativeSelectionModal';

// ─── Fonts via next/font should be in layout.jsx. Add these there:
// import { Instrument_Serif, Geist } from 'next/font/google'
// For now we load via <link> in a useEffect-free way using a global stylesheet
// that should be added to your globals.css:
// @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&display=swap');

// ─── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(phrases, {
    typeSpeed = 60,
    deleteSpeed = 35,
    pauseAfterType = 1800,
    pauseAfterDelete = 400,
} = {}) {
    const [displayed, setDisplayed] = useState('');
    const [phase, setPhase] = useState('typing');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const timeout = useRef(null);

    useEffect(() => {
        const current = phrases[phraseIndex];
        if (phase === 'typing') {
            if (displayed.length < current.length) {
                timeout.current = setTimeout(() => {
                    setDisplayed(current.slice(0, displayed.length + 1));
                }, typeSpeed + Math.random() * 30);
            } else {
                timeout.current = setTimeout(() => setPhase('pausing'), pauseAfterType);
            }
        } else if (phase === 'pausing') {
            setPhase('deleting');
        } else if (phase === 'deleting') {
            if (displayed.length > 0) {
                timeout.current = setTimeout(() => {
                    setDisplayed(d => d.slice(0, -1));
                }, deleteSpeed + Math.random() * 15);
            } else {
                timeout.current = setTimeout(() => {
                    setPhraseIndex(i => (i + 1) % phrases.length);
                    setPhase('typing');
                }, pauseAfterDelete);
            }
        }
        return () => clearTimeout(timeout.current);
    }, [displayed, phase, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

    return displayed;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PHRASES = [
    'ads that stop the scroll.',
    'social posts in seconds.',
    'brand visuals that convert.',
    'campaigns at machine speed.',
];

const PILLS = [
    { icon: '✦', bg: '#111',    color: '#fff', label: 'AI Ad Generation' },
    { icon: '◈', bg: '#6366f1', color: '#fff', label: 'Social Content' },
    { icon: '▲', bg: '#f59e0b', color: '#fff', label: 'Brand Design' },
    { icon: '⬡', bg: '#10b981', color: '#fff', label: 'Email Campaigns' },
    { icon: '◉', bg: '#ef4444', color: '#fff', label: 'Video Scripts' },
    { icon: '⬧', bg: '#8b5cf6', color: '#fff', label: 'Analytics' },
];

const AVATARS = [
    { bg: '#6366f1', letter: 'A' },
    { bg: '#10b981', letter: 'B' },
    { bg: '#f59e0b', letter: 'C' },
    { bg: '#ef4444', letter: 'D' },
];

const STATS = [
    { num: '50K+',  label: 'Active creators' },
    { num: '10M',   label: 'Assets generated' },
    { num: '4.2s',  label: 'Avg. generation time' },
    { num: '$2.8M', label: 'Creator revenue driven' },
];

const NAV_SECTIONS = ['creators', 'managers', 'brands', 'pricing'];

// ─── Floating card data (decorative side cards) ───────────────────────────────
const FLOATING_CARDS = [
    {
        side: 'left',
        top: '18%',
        content: { type: 'metric', value: '+340%', label: 'CTR increase', color: '#10b981' },
    },
    {
        side: 'left',
        top: '52%',
        content: { type: 'platform', platforms: ['FB', 'IG', 'TT'], label: 'Auto-published to 3 platforms' },
    },
    {
        side: 'right',
        top: '14%',
        content: { type: 'generate', label: 'Ad generated in', time: '3.8s' },
    },
    {
        side: 'right',
        top: '50%',
        content: { type: 'rating', stars: 5, text: '"Best creative tool ever"' },
    },
];

// ─── Spinner ──────────────────────────────────────────────────────────────────
function Spinner() {
    return (
        <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.25" />
            <path fill="currentColor" opacity="0.8" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
    );
}

// ─── Floating decorative cards ────────────────────────────────────────────────
function FloatingCard({ card }) {
    const { content } = card;

    return (
        <div className="bg-white/90 backdrop-blur-md border border-black/[0.07] rounded-2xl shadow-lg shadow-black/[0.08] p-3.5 w-48 select-none">
            {content.type === 'metric' && (
                <div>
                    <div className="text-2xl font-semibold tracking-tight" style={{ color: content.color, fontFamily: 'Instrument Serif, serif' }}>
                        {content.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{content.label}</div>
                    <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full w-4/5" style={{ background: content.color }} />
                    </div>
                </div>
            )}
            {content.type === 'platform' && (
                <div>
                    <div className="flex gap-1.5 mb-2">
                        {content.platforms.map((p, i) => (
                            <div key={i} className="w-7 h-7 rounded-lg bg-gray-900 text-white text-[10px] font-bold grid place-items-center">{p}</div>
                        ))}
                    </div>
                    <div className="text-xs text-gray-500">{content.label}</div>
                </div>
            )}
            {content.type === 'generate' && (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#1447e6]/10 grid place-items-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1447e6" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    </div>
                    <div>
                        <div className="text-xs text-gray-500">{content.label}</div>
                        <div className="text-base font-semibold text-gray-900" style={{ fontFamily: 'Instrument Serif, serif' }}>{content.time}</div>
                    </div>
                </div>
            )}
            {content.type === 'rating' && (
                <div>
                    <div className="text-amber-400 text-sm mb-1">{'★'.repeat(content.stars)}</div>
                    <div className="text-xs text-gray-600 leading-relaxed">{content.text}</div>
                    <div className="flex items-center gap-1.5 mt-2">
                        <div className="w-5 h-5 rounded-full bg-indigo-500 grid place-items-center text-white text-[9px] font-bold">S</div>
                        <span className="text-[11px] text-gray-400">Sarah K. · Verified user</span>
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCreative, setSelectedCreative] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(null);

    const typedText = useTypewriter(PHRASES, {
        typeSpeed: 55,
        deleteSpeed: 32,
        pauseAfterType: 2000,
        pauseAfterDelete: 380,
    });

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setLoadingBtn(sectionId);
        setMobileOpen(false);
        const el = document.getElementById(sectionId);
        if (el) {
            const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        setTimeout(() => setLoadingBtn(null), 800);
    };

    const handleLogin = () => {
        setLoadingBtn('login');
        window.location.href = 'https://app.creativeklux.com/';
    };

    const handleStartFree = () => {
        setLoadingBtn('start-free');
        setTimeout(() => { window.location.href = '../pages/pricing'; }, 300);
    };

    const isEmpty = url.trim() === '';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEmpty) return;
        setIsLoading(true);
        await new Promise(r => setTimeout(r, 800));
        setIsLoading(false);
        setIsModalOpen(true);
    };

    return (
        <>
            {/* ── Background + full page wrapper ── */}
            <div
                className="min-h-screen text-[#111]"
                style={{
                    fontFamily: 'Geist, sans-serif',
                    background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(20,184,166,0.07) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 15% 70%, rgba(245,158,11,0.06) 0%, transparent 55%), #f7f7f5',
                }}
            >
                {/* ══ NAV ══════════════════════════════════════════════════════ */}
                <header>
                    <nav className={`flex items-center justify-between px-10 h-16 border-b border-black/[0.07] bg-[#f7f7f5]/85 backdrop-blur-xl sticky top-0 z-50 transition-shadow duration-200 ${isScrolled ? 'shadow-[0_1px_16px_rgba(0,0,0,0.07)] bg-[#f7f7f5]/95' : ''}`}>
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 font-semibold text-[15px] text-[#111] no-underline tracking-[-0.2px]">
                            <div className="w-[26px] h-[26px] bg-[#111] rounded-[7px] grid place-items-center flex-shrink-0">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <circle cx="3.5" cy="3.5" r="2.5" fill="white" opacity="0.9" />
                                    <circle cx="10.5" cy="3.5" r="2.5" fill="white" opacity="0.5" />
                                    <circle cx="3.5" cy="10.5" r="2.5" fill="white" opacity="0.5" />
                                    <circle cx="10.5" cy="10.5" r="2.5" fill="white" opacity="0.9" />
                                </svg>
                            </div>
                            Creative Klux
                        </Link>

                        {/* Center nav */}
                        <ul className="hidden lg:flex items-center gap-8 list-none absolute left-1/2 -translate-x-1/2">
                            {NAV_SECTIONS.map(s => (
                                <li key={s}>
                                    <button
                                        onClick={() => scrollToSection(s)}
                                        disabled={loadingBtn === s}
                                        className="flex items-center gap-1.5 text-sm font-normal text-[#555] bg-transparent border-none cursor-pointer transition-colors duration-150 hover:text-[#111] disabled:opacity-60"
                                        style={{ fontFamily: 'Geist, sans-serif' }}
                                    >
                                        {loadingBtn === s && <Spinner />}
                                        For {s.charAt(0).toUpperCase() + s.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Right actions */}
                        <div className="hidden lg:flex items-center gap-2.5">
                            <button
                                onClick={handleLogin}
                                disabled={loadingBtn === 'login'}
                                className="flex items-center gap-1.5 text-[13.5px] font-medium text-[#555] bg-[#f0f0ec] border border-[#e0e0da] rounded-lg px-4 py-[7px] cursor-pointer transition-all duration-150 hover:border-[#bbb] hover:text-[#111] hover:bg-[#e8e8e4] disabled:opacity-65"
                                style={{ fontFamily: 'Geist, sans-serif' }}
                            >
                                {loadingBtn === 'login' && <Spinner />}
                                Login
                            </button>
                            <button
                                onClick={handleStartFree}
                                disabled={loadingBtn === 'start-free'}
                                className="flex items-center gap-1.5 text-[13.5px] font-semibold text-white bg-[#1447e6] border-none rounded-lg px-[18px] py-[7px] cursor-pointer transition-all duration-150 hover:bg-[#0f3bbf] hover:-translate-y-px disabled:opacity-65"
                                style={{ fontFamily: 'Geist, sans-serif' }}
                            >
                                {loadingBtn === 'start-free' && <Spinner />}
                                Start for free
                            </button>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            className="lg:hidden bg-transparent border-none cursor-pointer p-1.5 rounded-lg text-[#333] transition-colors hover:bg-black/5"
                            onClick={() => setMobileOpen(o => !o)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </nav>

                    {/* Mobile menu */}
                    {mobileOpen && (
                        <div className="lg:hidden flex flex-col gap-1 px-6 pt-4 pb-5 border-t border-black/[0.07] bg-[#f7f7f5]/98">
                            {NAV_SECTIONS.map(s => (
                                <button
                                    key={s}
                                    onClick={() => scrollToSection(s)}
                                    disabled={loadingBtn === s}
                                    className="flex items-center gap-2 text-[15px] font-normal text-[#444] bg-transparent border-none border-b border-black/5 last:border-0 cursor-pointer text-left py-2.5 transition-colors hover:text-[#111]"
                                    style={{ fontFamily: 'Geist, sans-serif' }}
                                >
                                    {loadingBtn === s && <Spinner />}
                                    For {s.charAt(0).toUpperCase() + s.slice(1)}
                                </button>
                            ))}
                            <div className="flex flex-col gap-2.5 pt-4 border-t border-black/[0.07] mt-2">
                                <button onClick={handleLogin} className="w-full justify-center flex items-center gap-1.5 text-[13.5px] font-medium text-[#555] bg-[#f0f0ec] border border-[#e0e0da] rounded-lg px-4 py-2.5 cursor-pointer transition-all hover:text-[#111]" style={{ fontFamily: 'Geist, sans-serif' }}>
                                    {loadingBtn === 'login' && <Spinner />} Login
                                </button>
                                <button onClick={handleStartFree} className="w-full justify-center flex items-center gap-1.5 text-[13.5px] font-semibold text-white bg-[#1447e6] rounded-lg px-4 py-2.5 cursor-pointer transition-all hover:bg-[#0f3bbf]" style={{ fontFamily: 'Geist, sans-serif' }}>
                                    {loadingBtn === 'start-free' && <Spinner />} Start for free
                                </button>
                            </div>
                        </div>
                    )}
                </header>

                {/* ══ HERO BODY ════════════════════════════════════════════════ */}
                <div className="relative overflow-hidden">

                    {/* Subtle grid texture */}
                    <div
                        className="absolute inset-0 opacity-[0.025] pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
                            backgroundSize: '64px 64px',
                        }}
                    />

                    {/* Left floating cards */}
                    <div className="hidden xl:flex flex-col gap-4 absolute left-8 top-0 bottom-0 justify-center pointer-events-none z-10">
                        {FLOATING_CARDS.filter(c => c.side === 'left').map((card, i) => (
                            <div
                                key={i}
                                className="animate-[fadeSlideIn_0.6s_ease_both]"
                                style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                            >
                                <FloatingCard card={card} />
                            </div>
                        ))}
                    </div>

                    {/* Right floating cards */}
                    <div className="hidden xl:flex flex-col gap-4 absolute right-8 top-0 bottom-0 justify-center pointer-events-none z-10">
                        {FLOATING_CARDS.filter(c => c.side === 'right').map((card, i) => (
                            <div
                                key={i}
                                className="animate-[fadeSlideIn_0.6s_ease_both]"
                                style={{ animationDelay: `${0.55 + i * 0.15}s` }}
                            >
                                <FloatingCard card={card} />
                            </div>
                        ))}
                    </div>

                    {/* Center content */}
                    <div className="flex flex-col items-center text-center px-6 pt-20 pb-16 max-w-[740px] mx-auto">

                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 text-[11px] font-medium text-[#888] tracking-[0.06em] uppercase mb-7 px-3.5 py-[5px] border border-black/10 rounded-full bg-white/80 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 shadow-[0_0_0_3px_rgba(34,197,94,0.2)] animate-pulse" />
                            AI-powered · URL to creative in seconds
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-[clamp(46px,7vw,74px)] font-normal leading-[1.06] tracking-[-0.02em] text-[#0f0f0f]"
                            style={{ fontFamily: 'Instrument Serif, serif', minHeight: '3em' }}
                        >
                            <span className="block text-[#555] italic">Now you can make</span>
                            <span className="block relative min-h-[1.06em]">
                                <span>{typedText}</span>
                                <span
                                    className="inline-block w-[3px] h-[0.82em] bg-[#1447e6] rounded-sm ml-[3px] align-middle animate-[blink_1.05s_step-end_infinite]"
                                    aria-hidden="true"
                                />
                            </span>
                        </h1>

                        {/* Sub */}
                        <p className="text-[17px] font-light text-[#777] leading-[1.65] max-w-[440px] mb-10">
                            Paste your product URL. Get ads, social posts, and brand designs — tailored to your brand, ready to publish.
                        </p>

                        {/* Input form */}
                        <form className="w-full max-w-[480px]" onSubmit={handleSubmit}>
                            <div className="flex items-center bg-white/90 border-[1.5px] border-black/[0.12] rounded-xl px-4 py-[5px] gap-2 transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] backdrop-blur-lg focus-within:border-[#1447e6] focus-within:shadow-[0_0_0_3px_rgba(20,71,230,0.1),0_2px_8px_rgba(0,0,0,0.06)]">
                                <Globe size={15} className="text-[#bbb] flex-shrink-0" />
                                <input
                                    type="text"
                                    placeholder="yourproduct.com"
                                    value={url}
                                    onChange={e => setUrl(e.target.value)}
                                    spellCheck={false}
                                    className="flex-1 bg-transparent border-none outline-none text-sm font-normal text-[#111] placeholder:text-[#c0c0b8] min-w-0"
                                    style={{ fontFamily: 'Geist, sans-serif' }}
                                />
                                <button
                                    type="submit"
                                    disabled={isEmpty || isLoading}
                                    className={`flex items-center gap-1.5 text-[13.5px] font-semibold px-4 py-2.5 rounded-lg border-none flex-shrink-0 transition-all duration-200 whitespace-nowrap ${
                                        isEmpty || isLoading
                                            ? 'bg-[#efefeb] text-[#bbb] cursor-not-allowed'
                                            : 'bg-[#1447e6] text-white cursor-pointer hover:bg-[#0f3bbf] hover:-translate-y-px'
                                    }`}
                                    style={{ fontFamily: 'Geist, sans-serif' }}
                                >
                                    {isLoading ? <><Spinner /> Analyzing…</> : <>Get Started <ArrowRight size={13} /></>}
                                </button>
                            </div>
                            <div className="mt-3.5 flex justify-center gap-5 text-[12px] text-[#b0b0a8]">
                                {['No credit card', 'Free to start', 'Export anywhere'].map(t => (
                                    <span key={t} className="flex items-center gap-1.5">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </form>

                        {/* Social proof */}
                        <div className="flex items-center gap-2.5 mt-10 text-[13px] text-[#888]">
                            <div className="flex">
                                {AVATARS.map((a, i) => (
                                    <div
                                        key={i}
                                        className="w-7 h-7 rounded-full border-2 border-[#f7f7f5] text-[11px] font-semibold grid place-items-center text-white"
                                        style={{ background: a.bg, marginLeft: i === 0 ? 0 : '-8px' }}
                                    >
                                        {a.letter}
                                    </div>
                                ))}
                            </div>
                            <span className="text-amber-400 tracking-[-2px] text-sm">★★★★★</span>
                            <span>Loved by <strong className="text-[#111]">50,000+</strong> creators</span>
                        </div>

                        {/* ── Trusted by logos row ── */}
                        <div className="mt-10 flex flex-col items-center gap-3">
                            <p className="text-[11px] uppercase tracking-widest text-[#bbb] font-medium">Trusted by teams at</p>
                            <div className="flex items-center gap-6 opacity-40 grayscale flex-wrap justify-center">
                                {['Shopify', 'Notion', 'Linear', 'Vercel', 'Stripe'].map(brand => (
                                    <span key={brand} className="text-sm font-semibold text-[#555]" style={{ fontFamily: 'Geist, sans-serif' }}>{brand}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ══ FEATURE PILLS ════════════════════════════════════════════ */}
                <div className="flex justify-center flex-wrap gap-2.5 px-6 pb-12">
                    {PILLS.map(p => (
                        <div
                            key={p.label}
                            className="flex items-center gap-2 px-[18px] py-2.5 bg-white/80 border border-black/[0.08] rounded-full text-[13.5px] font-medium text-[#444] shadow-[0_1px_4px_rgba(0,0,0,0.05)] backdrop-blur-md cursor-default transition-all duration-150 hover:border-black/15 hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)] hover:-translate-y-px"
                        >
                            <div
                                className="w-5 h-5 rounded-[6px] grid place-items-center text-[11px] flex-shrink-0"
                                style={{ background: p.bg, color: p.color }}
                            >
                                {p.icon}
                            </div>
                            {p.label}
                        </div>
                    ))}
                </div>

                {/* ══ STATS BAND ═══════════════════════════════════════════════ */}
                <div className="flex justify-center items-center gap-12 px-12 py-10 border-t border-b border-black/[0.07] bg-white/60 backdrop-blur-lg flex-wrap">
                    {STATS.map((s, i) => (
                        <React.Fragment key={s.label}>
                            <div className="text-center">
                                <div
                                    className="text-[32px] font-normal tracking-[-0.02em] text-[#111] leading-none mb-1"
                                    style={{ fontFamily: 'Instrument Serif, serif' }}
                                >
                                    {s.num}
                                </div>
                                <div className="text-[12.5px] text-[#999] font-normal">{s.label}</div>
                            </div>
                            {i < STATS.length - 1 && (
                                <div className="w-px h-9 bg-black/[0.08] hidden sm:block" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ── Keyframe styles (minimal — just what Tailwind can't do) ── */}
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <CreativeSelectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedCreative={selectedCreative}
                setSelectedCreative={setSelectedCreative}
            />
        </>
    );
}