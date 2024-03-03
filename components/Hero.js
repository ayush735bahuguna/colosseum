import { Mouse } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <div className="relative bg-transparent">
            <video
                src="https://res.cloudinary.com/dlhnyqtec/video/upload/v1709147448/svuehukbwposvdzfdyki.mp4"
                autoPlay muted loop
                style={{ width: '100dvw', height: '100dvh', objectFit: 'cover', position: 'sticky', top: '0px', zIndex: '-1' }} />
            <div className="absolute top-0 flex items-center justify-between flex-col w-full  h-full">

                <Navbar />

                <div className=" text-white flex flex-col justify-center items-center w-full p-2">
                    <p className="stroke-text text-9xl max-sm:text-[40px] text-center">COLOSSEUM &apos;24</p>
                    <div className="backdrop-blur-sm flex flex-col justify-center items-center text-center">
                        <p className="py-3 max-sm:py-0 text-2xl max-sm:text-xl">The National Level Technical Fest</p>
                        <p className="text-center w-1/2 max-sm:w-full max-sm:px-3 max-sm:py-2 text-xs">
                            Colosseum &apos;24 - The National Level Technical Fest organized by The Engineering and Technology Society, Pantnagar. The participation in Colosseum is pan India with talented students showcasing their flair. Exciting technical events, DJ Nite and the grandest of all Corrobore - The Celebrity Nite are organized during the span of three days.
                        </p>
                    </div>
                </div>
                <div className="text-white py-4 flex items-center justify-center flex-col">
                    <Mouse />
                    <p className="text-slate-300 text-sm">Scroll</p>
                </div>
                {/* More content for parallex */}
            </div>

        </div>
    )
}
