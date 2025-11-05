export default function Footer() {
    return (
        <div className=" px-24 py-8 bg-black flex flex-col items-center gap-3 text-sm
 ">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-3 p-6 text-white/55 border-t-1 border-slate-400 min-w-full">
                <div className="flex gap-4">
                    <a className="cursor-pointer">
                        Privacy Policy
                    </a>
                    <a className="cursor-pointer">
                        Terms of Service
                    </a>
                    <a className="cursor-pointer" href="/contact">
                        Contact Us
                    </a>
                </div>
                
                <div className="flex gap-1">
                    <a>
                        <img src={"/xlogo.avif"} alt="xlogo" className="w-6 h-6 cursor-pointer" />
                    </a>
                    <a>
                        <img src={"/linked.avif"} alt="linkedIn" className="w-6 h-6 cursor-pointer"/>
                    </a>
                </div>
            </div>
            <div className=" text-white/55">
                    <span>
                        © 2025 NewAItes. All rights reserved.
                    </span>
                </div>
            {/* <ul className="ms-auto gap-3 flex flex-col text-white ">
                <li>
                    <a>
                        Instagram
                    </a>
                </li>
                <li>
                    <a>
                        X
                    </a>
                </li>
                <li>
                    <a>
                        Github
                    </a>
                </li>
                <li>
                    <a>
                        Instagram
                    </a>
                </li>
            </ul> */}
        </div>
    )
}