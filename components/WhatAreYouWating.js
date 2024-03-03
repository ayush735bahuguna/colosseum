import Img1 from '@/assets/BandWar.JPG'
import Img2 from '@/assets/DJNite.jpg'
import Img3 from '@/assets/corrobore.JPG'
import AboutCard from './About/AboutCard'
export default function WhatAreYouWating() {
    return (
        <div className='flex items-center justify-center flex-col bg-gray-900 min-h-dvh pt-8'>
            <h2 className='stroke-text text-7xl max-sm:text-[50px] text-center py-5 pt-7'>
                WHAT ARE YOU WAITING FOR?
            </h2>
            <div className='flex items-center justify-center flex-wrap w-full py-6 text-white'>
                <AboutCard text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum in id ipsa nulla adipisci quam enim sint nam ea'} heading={'BAND WAR'} url={Img1} />
                <AboutCard text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum in id ipsa nulla adipisci quam enim sint nam ea'} heading={'DJ NITE'} url={Img2} />
                <AboutCard text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum in id ipsa nulla adipisci quam enim sint nam ea'} heading={'CORROBORE'} url={Img3} />
            </div>
        </div>
    )
}
