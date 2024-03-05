import {BentoImageCard, ActionButton} from '@/components/ui-components';
import { H1, SubheadingParagraph } from '@/components/typography';

const cards = [
    {
      src: 'https://www.mekkemiddag.no/storage/app/public/thumbnails/IMG_4564.jpeg', 
      alt: 'Descriptive text for the image', 
      size: 'normal'
    },
    { 
      src: 'https://www.mekkemiddag.no/storage/app/public/full_size_images/tomatsuppe.jpg', 
      alt: 'Descriptive text for the image', 
      size: 'normal'
    },
    { 
      src: 'https://www.mekkemiddag.no/storage/app/public/full_size_images/IMG_3266.jpeg', 
      alt: 'Descriptive text for the image', 
      size: 'large'
    }
  ];

export function HeroSection() {
  return (
    <div className="grid mx-auto my-8 md:my-24 max-w-6xl sm:px-6 lg:px-8">
        <div className='grid items-center md:grid-cols-2 gap-16'>
            <div className='my-auto'>
                <H1>
                Mekkemiddag.no
                </H1>
                <SubheadingParagraph>
                    Din guide til hverdagsmagi på kjøkkenet. Oppdag en verden av enkle, smakfulle og raskt tilberedte middagsoppskrifter som bringer glede til hverdagsbordet. 
                </SubheadingParagraph>
                <ActionButton>
                    Se oppskrifter!
                </ActionButton>
                </div>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cards.map((card, index) => (
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
    </div>
  )
}