// article section component
import { H1, SubheadingParagraph } from '@/components/typography'
import Image from 'next/image'

const wines = [
    {
        name: 'No Control Magma Rock',
        country: 'Frankrike',
        image: '/images/vin1.png'
    },
    {
        name: 'Fontodi Chianti Classico 2021',
        country: 'Italia, Toscana',
        image: '/images/vin2.png'
    },
    {
        name: 'Karthäuserhof Bruno Riesling Dry 2022',
        country: 'Tyskland',
        image: '/images/vin3.png'
    },
]


export function WineSection() {
    return (
    <div className='py-32 bg-primary-300'>
       {/* <div className='my-48 px-12 py-32 bg-tertiary-950'> */}
        <div className='max-w-6xl mx-auto '>
          <div className='text-center mb-20'>
            <H1>
                Siste <span className='text-secondary-600'> vinanbefalinger</span>      
            </H1>
              <SubheadingParagraph>
               God vin kan løfte en rett til nye høyder. Her er våre siste anbefalinger.
              </SubheadingParagraph>
          </div>
          {/* video section */}
        <div className="flex items-center justify-center gap-4 ">
            { wines.map((wine, index) => {
            
            return (  
            <div key={index} className="flex flex-col flex-b sm:w-1/2 md:w-1/3 w-full relative bg-quaternary-300 rounded-lg shadow-lg group hover:shadow-xl hover:cursor-pointer">
                <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{transform: "scale(1.5)", opacity: "0.1"}}>
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-52 h-52 bottom-0 left-0 -mb-24 ml-3" style={{background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2"}}></div>
                <Image className="relative max-h-56 w-auto transform transition-transform duration-1000 group-hover:rotate-45" width={57} height={139} src={wine.image} alt=""/>
                </div>
                <div className="relative text-white px-6 pb-6 my-6 h-20 overflow-hidden">
                    <span className="block opacity-75 -mb-1">{wine.country}</span>
                    <div className="flex gap-2 justify-between">
                        <span className="block font-semibold text-xl overflow-ellipsis overflow-hidden">{wine.name}</span> 
                    </div>
                </div>
            </div>
            )
            }    )}  
            </div>
        </div>
    </div>
    )
}