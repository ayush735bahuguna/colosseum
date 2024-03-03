import Img3 from '@/assets/03.JPG'
import Img4 from '@/assets/04.JPG'
import Img5 from '@/assets/05.JPG'
import Image from 'next/image'
import AboutCard from './About/AboutCard'

export default function AboutUs() {
    return (
        <div className='bg-gray-900 min-h-dvh py-8 text-white'>


            <div className='flex flex-col items-center justify-center '>



                <p className="stroke-text text-7xl max-sm:text-[50px] text-center">ABOUT US</p>

                <p className="text-center w-2/3 max-sm:w-full max-sm:px-3 max-sm:py-2 max-sm:text-base sm:py-6 text-slate-200 ">
                    The only Society taking responsibility to organize all the major and minor events in College of Technology
                    Pantnagar. The ETS has organized various national level events which enhance the personality of the students
                    along with academics. It provides an exposure to students by creating ferocious competitive environment
                    thereby acting as a motivation to excel in their areas of interest.
                </p>

            </div>
            {/* <img src="Assests/02.JPG" alt="" /> */}

            <div className='flex items-center justify-center flex-wrap'>

                <AboutCard url={Img3} heading={'TopRacer Range'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing eli'} />
                <AboutCard url={Img4} heading={'Colosseum 23'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing eli'} />
                <AboutCard url={Img5} heading={'Corrobore'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing eli'} />

            </div>
        </div>
    )
}
