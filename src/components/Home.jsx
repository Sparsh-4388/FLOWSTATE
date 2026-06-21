import { useEffect, useRef } from 'react'
import HomeLayout from '../assets/Geometric-pattern.svg'

const Home = () => {
    const headlineRef = useRef(null)
    const cursorRef =useRef(null)

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
        const handleMove = (e) => {
            
        }
    })



    return (
        <section className="relative min-h-screen overflow-hidden bg-[#0D1A63]">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#2845D6]/30 blur-[120px]" />
                <div className="absolute top-[20%] right-[-5%] w-[320px] h-[320px] rounded-full bg-[#F68048]/25 blur-[100px]" />
            </div>

            <img
                src={HomeLayout}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full select-none opacity-60 mix-blend-screen"
            />

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