import { useEffect, useRef, useState } from 'react'
import HomeLayout from '../assets/Geometric-pattern.svg'

const orbConfigs = [
    { top: '10%', left: '8%',  size: 220, color: 'bg-accent/15',  blur: 50, multiplier: 3, scaleStep: 0    },
    { top: '50%', left: '70%', size: 160, color: 'bg-primary/12', blur: 55, multiplier: 5, scaleStep: 0.05 },
    { top: '70%', left: '15%', size: 110, color: 'bg-accent/10',  blur: 60, multiplier: 6, scaleStep: 0.08 },
]

const Home = () => {
    const headlineRef = useRef(null)
    const orbRefs = useRef(orbConfigs.map(() => null))
    const [isMobile, setIsMobile] = useState(false)

    const mouse = useRef({ x: 0, y: 0 }) // offset from center, -50..50
    const current = useRef(orbConfigs.map(() => ({ x: 0, y: 0 })))

    const reducedMotion = useRef(
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )

    // Headline entrance animation
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

    // Mobile check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Parallax orb animation
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
        <section className="relative min-h-screen overflow-hidden bg-[#0D1A63]">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#2845D6]/30 blur-[120px]" />
            </div>

            <img
                src={HomeLayout}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full select-none opacity-60 mix-blend-screen"
            />

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
                        willChange: 'transform',
                    }}
                />
            ))}

            <div
                ref={headlineRef}
                className="relative z-10 flex flex-col items-start px-16 pt-24"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 backdrop-blur-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_theme(colors.accent)]" />
                    <span className="text-accent text-xs font-medium tracking-widest uppercase">
                        Intelligence Finance OS
                    </span>
                </div>

                <h1 className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-white/90 mb-1">
                    Money that
                </h1>
                <h2 className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight bg-gradient-to-r from-primary via-accent to-accent/70 bg-clip-text text-transparent">
                    Moves with you
                </h2>
            </div>
        </section>
    )
}

export default Home