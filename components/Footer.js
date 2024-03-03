import { ArrowDown, ArrowDownCircle } from 'lucide-react'

export default function Footer() {
    return (
        <footer className='bg-black text-white flex flex-row justify-around sm:items-center max-sm:items-start max-sm:py-6 h-[300px] flex-wrap'>
            <div className='flex flex-col gap-2'>
                <p className='no-underline text-xl '>Categories</p>
                <div className='underline font-light text-sm'>
                    <p>HOME</p>
                    <p>EVENTS</p>
                    <p>SPONSORS</p>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='text-xl'>Contact</p>
                <div className='underline font-light text-sm'>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                    <p>Terms Of Service</p>
                    <p>About</p>
                </div>
            </div>

            <div className='flex flex-row gap-3'>Uttrakhand <ArrowDownCircle /></div>
        </footer>
    )
}
