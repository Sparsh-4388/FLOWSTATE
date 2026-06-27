import FlowStateLogo from '../assets/FlowState_large.png'

const NavButton = ({ children }) => {
    return (
        <button className='text-white/70 font-semibold'>
            {children}
        </button>
    )
}

const Navbar = () => {
    return (
        <div className="sticky top-0 flex items-center px-8 py-4 border-b-2 border-white/15 z-1">

            <div className="flex items-center gap-3">
                <img
                    src={FlowStateLogo}
                    alt="FlowState"
                    className="h-10 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                />

                <span className="text-3xl font-semibold">
                    FlowState
                </span>
            </div>

            <div className="flex-1 flex justify-center gap-20">
                <NavButton>Product</NavButton>
                <NavButton>Analytics</NavButton>
                <NavButton>Pricing</NavButton>
                <NavButton>About</NavButton>
            </div>


            <div className="ml-auto flex items-center gap-4">
                <button className="h-8 px-5 border-2 border-white/30 rounded-md text-white/70 font-semibold transition-all duration-300 hover:border-[#44D480] hover:text-[#44D480]">
                    Login
                </button>

                <button className="group h-8 px-5 border-2 border-accent rounded-md text-accent font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-accent hover:text-white">
                    Get Started
                    <span className="transition-transform duration-300 group-hover:translate-x-1">➜</span>
                </button>
            </div>

        </div>
    )
}

export default Navbar