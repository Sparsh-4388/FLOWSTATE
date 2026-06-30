import { useEffect, useRef, useState } from 'react'

const orbConfigs = [
    { top: '10%', left: '8%',  size: 220, color: 'bg-accent/15',  blur: 50, multiplier: 3, scaleStep: 0    },
    { top: '50%', left: '70%', size: 160, color: 'bg-primary/12', blur: 55, multiplier: 5, scaleStep: 0.05 },
    { top: '70%', left: '15%', size: 110, color: 'bg-accent/10',  blur: 60, multiplier: 6, scaleStep: 0.08 },
]

const BackgroundArt = () => (
    <svg
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
    >
        <defs>
            <linearGradient id="curveGrad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-surface)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4468f5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="curveGrad2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
                <stop offset="60%" stopColor="var(--color-accent)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="nodeglow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4468f5" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4468f5" stopOpacity="0" />
            </radialGradient>
        </defs>

        <rect x="0" y="0" width="1200" height="500" fill="var(--color-background)" />

        <g opacity="0.10" stroke="#4468f5" strokeWidth="0.5">
            <line x1="0" y1="0" x2="1200" y2="600" />
            <line x1="80" y1="0" x2="1200" y2="500" />
            <line x1="160" y1="0" x2="1200" y2="420" />
            <line x1="240" y1="0" x2="1200" y2="340" />
            <line x1="320" y1="0" x2="1200" y2="260" />
            <line x1="400" y1="0" x2="1200" y2="180" />
            <line x1="480" y1="0" x2="1200" y2="100" />
            <line x1="560" y1="0" x2="1200" y2="20" />
            <line x1="640" y1="0" x2="1100" y2="-60" />
            <line x1="0" y1="80" x2="900" y2="500" />
            <line x1="0" y1="160" x2="780" y2="500" />
            <line x1="0" y1="240" x2="660" y2="500" />
            <line x1="0" y1="320" x2="540" y2="500" />
            <line x1="0" y1="400" x2="420" y2="500" />
        </g>

        <path
            d="M -20 380 C 200 380, 280 200, 480 230 C 680 260, 760 100, 980 130 C 1100 148, 1160 90, 1230 95"
            fill="none"
            stroke="url(#curveGrad1)"
            strokeWidth="2.5"
        />
        <path
            d="M -20 430 C 220 430, 300 320, 500 340 C 720 362, 800 230, 1020 245 C 1130 252, 1180 220, 1230 222"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="1.2"
            opacity="0.45"
        />
        <path
            d="M -20 470 C 240 470, 340 410, 540 420 C 760 432, 840 340, 1040 348 C 1140 352, 1190 330, 1230 332"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="1"
            opacity="0.25"
        />
        <path
            d="M 420 250 C 600 270, 700 130, 900 150 C 1000 160, 1080 120, 1180 100"
            fill="none"
            stroke="url(#curveGrad2)"
            strokeWidth="2"
        />

        <g>
            <circle cx="480" cy="231" r="14" fill="url(#nodeglow)" />
            <circle cx="480" cy="231" r="3" fill="#4468f5" />
        </g>
        <g>
            <circle cx="760" cy="100" r="16" fill="url(#nodeglow)" />
            <circle cx="760" cy="100" r="3.5" fill="var(--color-accent)" opacity="0.85" />
        </g>
        <g>
            <circle cx="980" cy="130" r="12" fill="url(#nodeglow)" />
            <circle cx="980" cy="130" r="2.5" fill="#4468f5" />
        </g>
        <g>
            <circle cx="290" cy="320" r="10" fill="url(#nodeglow)" />
            <circle cx="290" cy="320" r="2" fill="#4468f5" opacity="0.7" />
        </g>
        <g>
            <circle cx="1100" cy="95" r="10" fill="url(#nodeglow)" />
            <circle cx="1100" cy="95" r="2" fill="#4468f5" opacity="0.7" />
        </g>

        <line x1="480" y1="231" x2="760" y2="100" stroke="#4468f5" strokeWidth="0.5" opacity="0.3" />
        <line x1="760" y1="100" x2="980" y2="130" stroke="#4468f5" strokeWidth="0.5" opacity="0.3" />
        <line x1="290" y1="320" x2="480" y2="231" stroke="#4468f5" strokeWidth="0.5" opacity="0.25" />
        <line x1="980" y1="130" x2="1100" y2="95" stroke="#4468f5" strokeWidth="0.5" opacity="0.25" />

        <circle cx="150" cy="90" r="1.5" fill="#ffffff" opacity="0.3" />
        <circle cx="620" cy="40" r="1.5" fill="#ffffff" opacity="0.25" />
        <circle cx="850" cy="380" r="1.5" fill="#ffffff" opacity="0.2" />
        <circle cx="1050" cy="280" r="1.5" fill="#ffffff" opacity="0.3" />
        <circle cx="350" cy="430" r="1.5" fill="#ffffff" opacity="0.2" />
        <circle cx="200" cy="200" r="1.5" fill="#ffffff" opacity="0.25" />
        <circle cx="950" cy="60" r="1.5" fill="#ffffff" opacity="0.3" />
    </svg>
)

const Home = () => {
    const headlineRef = useRef(null)
    const orbRefs = useRef(orbConfigs.map(() => null))
    const [isMobile, setIsMobile] = useState(false)

    const mouse = useRef({ x: 0, y: 0 })
    const current = useRef(orbConfigs.map(() => ({ x: 0, y: 0 })))

    const reducedMotion = useRef(
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )

    const CheckBadge = () => {
        return (
            <span className="relative w-5 h-5 rounded-full bg-accent/70 flex items-center justify-center">
                <span className="text-background text-xs font-semibold">
                    ✓
                </span>
            </span>
        );
    };

    const Feature = ({ children }) => (
        <div className="flex items-center gap-2">
            <CheckBadge />
            <span className="text-xs font-semibold text-white/70">
                {children}
            </span>
        </div>
    );

    useEffect(() => {
        const el = headlineRef.current
        if (!el) return
        el.style.opacity = '0'
        el.style.transform = 'translateY(24px)'
        requestAnimationFrame(() => {
            el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
        })
    }, [])

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        if (isMobile || reducedMotion.current) return

        const handleMove = (e) => {
            const xPercent = (e.clientX / window.innerWidth) * 100
            const yPercent = (e.clientY / window.innerHeight) * 100
            mouse.current.x = xPercent - 50
            mouse.current.y = yPercent - 50
        }
        window.addEventListener('mousemove', handleMove)

        let animationId
        const animate = () => {
            orbConfigs.forEach((cfg, i) => {
                const state = current.current[i]
                const targetX = mouse.current.x * cfg.multiplier
                const targetY = mouse.current.y * cfg.multiplier

                state.x += (targetX - state.x) * 0.08
                state.y += (targetY - state.y) * 0.08

                const node = orbRefs.current[i]
                if (node) {
                    const scale = 1 + cfg.scaleStep + Math.abs(state.x + state.y) * 0.0008
                    node.style.transform = `translate(${state.x}px, ${state.y}px) scale(${scale})`
                }
            })
            animationId = requestAnimationFrame(animate)
        }
        animationId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMove)
            cancelAnimationFrame(animationId)
        }
    }, [isMobile])

    return (
        <section className="relative min-h-screen overflow-hidden bg-background">
            <BackgroundArt />

            {orbConfigs.map((cfg, i) => (
                <div
                    key={i}
                    ref={(el) => (orbRefs.current[i] = el)}
                    className={`absolute rounded-full ${cfg.color} pointer-events-none z-0`}
                    style={{
                        top: cfg.top,
                        left: cfg.left,
                        width: cfg.size,
                        height: cfg.size,
                        filter: `blur(${cfg.blur}px)`,
                        willChange: "transform",
                    }}
                />
            ))}

            <div
                ref={headlineRef}
                className="relative z-10 flex flex-col items-start px-16 pt-24"
            >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 backdrop-blur-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_theme(colors.accent)]" />
                    <span className="text-accent text-xs font-medium tracking-widest uppercase">
                        Intelligence Finance OS
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-white/90 mb-1">
                    Money that
                </h1>

                <h2 className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight bg-gradient-to-r from-primary via-accent to-accent/70 bg-clip-text text-transparent">
                    Moves with you
                </h2>

                {/* Description */}
                <p className="w-[600px] ml-2 py-5 text-white/70 text-xl font-semibold">
                    Track expenses, manage budgets, and monitor your financial
                    progress with a platform designed to adapt to every stage of
                    your journey.
                </p>

                {/* CTA */}
                <button className="ml-2 mt-2 px-5 h-10 border-2 border-accent/70 rounded-lg font-semibold text-accent transition-all duration-300 hover:bg-accent/8 hover:text-white">
                    Start for Free
                </button>

                {/* Features */}
                <div className="mt-5 ml-2 flex flex-wrap items-center gap-x-8 gap-y-3">
                    <Feature>No Credit Card Required</Feature>
                    <Feature>Free Forever Plan</Feature>
                    <Feature>Secure & Encrypted</Feature>
                </div>
            </div>
        </section>

    )
}

export default Home