import { H1, SubheadingParagraph } from '@/components/typography'
import { BentoImageCard } from '@/components/ui-components'
import Image from 'next/image'

const cards2 = [
    {
      title: 'Sous vide torsk', 
      duration: '30 min', 
      src: 'https://www.mekkemiddag.no/storage/app/public/thumbnails/IMG_4564.jpeg', 
      alt: 'Descriptive text for the image', 
      size: 'normal'
    },
    { 
      title: 'Jordbærmousse kake', 
      duration: '60 min', 
      src: 'https://www.mekkemiddag.no/storage/app/public/thumbnails/IMG_0698.jpeg', 
      alt: 'Descriptive text for the image', 
      size: 'normal'
    },
    { 
      title: 'Pizza', 
      duration: '45 min', 
      src: 'https://www.mekkemiddag.no/storage/app/public/full_size_images/pizza.jpg', 
      alt: 'Descriptive text for the image', 
      size: 'large'
    },
    {
      title: 'Loff', 
      duration: '120 min', 
      src: 'https://www.mekkemiddag.no/storage/app/public/full_size_images/bread.jpg', 
      alt: 'Descriptive text for the image', 
      size: 'normal'
    },
    { 
      title: 'Tomatsuppe', 
      duration: '20 min', 
      src: 'https://www.mekkemiddag.no/storage/app/public/full_size_images/tomatsuppe.jpg', 
      alt: 'Descriptive text for the image', 
      size: 'large'
    },
    { 
      title: 'Ostekake med sommerbær', 
      duration: '45 min', 
      src: 'https://www.mekkemiddag.no/storage/app/public/full_size_images/IMG_3266.jpeg', 
      alt: 'Descriptive text for the image', 
      size: 'normal'
    },
    
  ];

export function LatestRecipes() {
    return (
        <div className='px-12 py-32 bg-primary-300'>
       {/* <div className='my-48 px-12 py-32 bg-tertiary-950'> */}
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-20'>
            <Image className='mx-auto' src='/images/knife-and-fork.png' alt="knife and fork icon" width={75} height={75}/>
            <H1>
              De nyeste <span className='text-secondary-600'>oppskriftene</span>
            </H1>
              <SubheadingParagraph>
                Oppdag de nyeste oppskriftene som har blitt lagt til i vår samling.
              </SubheadingParagraph>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
            {cards2.map((card, index) => (
              <BentoImageCard
                key={index}
                src={card.src}
                alt={card.alt}
                duration={card.duration}
                title={card.title}
                size={card.size as "normal" | "large" | undefined}
              />
            ))}  
          </div>
        </div>
      </div>
    )
}