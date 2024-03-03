import Image from "next/image";

export default function AboutCard({ url, heading, text }) {
    return (
        <div className="text-center max-sm:mb-5">
            <div className="bg-slate-600 max-sm:w-fit sm:w-[350px] rounded-lg overflow-hidden group/img cursor-pointer relative m-2 max-sm:h-auto sm:h-[230px]" style={{ transition: 'all 0.5s ease' }}  >
                <Image src={url} alt="Img" width={'200px'} height={'200px'} className='group-hover/img:blur-sm object-cover' style={{ transition: 'all 0.3s ease' }} />

                <div className='absolute bottom-2 right-0 text-center w-full hidden group-hover/img:block translate-x-1 group-hover/img:translate-x-0' >
                    <p className="p-2">{text}</p>
                </div>
            </div>
            <h4 className='text-3xl font-bold'>{heading}</h4>
        </div>
    )
}
