import { BentoImageCard } from '@/components/ui-components/bentoImageCard';
import { ActionButton } from '@/components/ui-components/ActionButton';
import { H1 } from '@/components/typography/h1';
import { SubheadingParagraph } from '@/components/typography/subheadingParagraph';

export default function Home() {

  const cards = [
    {
      title: 'Sous vide torsk', 
      duration: '30 min', 
      src: 'https://www.mekkemiddag.no/storage/app/public/thumbnails/IMG_4564.jpeg', 
      alt: 'Descriptive text for the image', 
      size: 'normal'
    },
    { 
      title: 'Tomatsuppe', 
      duration: '20 min', 
      src: 'https://www.mekkemiddag.no/storage/app/public/full_size_images/tomatsuppe.jpg', 
      alt: 'Descriptive text for the image', 
      size: 'normal'
    },
    { 
      title: 'Ostekake med sommerbær', 
      duration: '45 min', 
      src: 'https://www.mekkemiddag.no/storage/app/public/full_size_images/IMG_3266.jpeg', 
      alt: 'Descriptive text for the image', 
      size: 'large'
    }
  ];

  return (
    <div className="grid mx-auto my-24 max-w-6xl sm:px-6 lg:px-8">
      <div className='grid items-center md:grid-cols-2 gap-16'>
      {/* heading start */}
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
        {/* beto start  */}
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
  );
}