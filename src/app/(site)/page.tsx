import Image from 'next/image';
import { ImageCard } from './components/ui-components/bentoCard';
import { SpecialCard } from './components/ui-components/bentoSpecialCard';

export default function Home() {

  const cards = [
    { src: "https://www.mekkemiddag.no/storage/app/public/thumbnails/IMG_4564.jpeg", alt: "Sous vide torsk", duration: "30 min", title: "Sous vide torsk", size: "normal" },
    { src: "https://www.mekkemiddag.no/storage/app/public/full_size_images/tomatsuppe.jpg", alt: "Tomatsuppe", duration: "20 min", title: "Tomatsuppe", size: "large" },
    { title: "Oppskrifter", type: "special" },
   
  ];

  return (
    <div className="mx-auto my-32 max-w-6xl py-6 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-loose tracking-tight text-tertiary-950 md:text-5xl lg:text-6">
        Mekkemiddag.no
        <span className="text-secondary-600 block"> Din guide til hverdagsmagi</span> 
        på kjøkkenet
        </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImageCard
            src="https://www.mekkemiddag.no/storage/app/public/thumbnails/IMG_4564.jpeg"
            alt="Descriptive text for the image"
            duration="30 min"
            title="Sous vide torsk"
          />

          <div className="h-[301px] ">
            <div className="grid grid-rows-1 md:grid-rows-3 h-full gap-y-4 ">
              <div className="shadow-md rounded-xl border border-transparent md:row-span-2 relative">
                <div className="relative z-10 inset-0 bg-black bg-opacity-10 w-full h-full rounded-xl"></div>
                <div className='z-20 px-8 pb-4 text-white absolute bottom-0 left-0 right-0'>
                <p className='font-normal text-lg my-1 max-w-lg'>20 min</p>
                  <p className='font-bold text-3xl'>
                    Tomatsuppe
                  </p>
                </div>
                <Image
                  src="https://www.mekkemiddag.no/storage/app/public/full_size_images/tomatsuppe.jpg"
                  alt="Descriptive text for the image"
                  layout="fill"
                  objectFit="cover"
                  className='rounded-xl'
                />
              </div>
              <SpecialCard title="Oppskrifter" />
            </div>
          </div>
          <div className="shadow-md rounded-xl border border-transparent h-[301px] relative">
          <div className="relative z-10 inset-0 bg-black bg-opacity-10 w-full h-full rounded-xl"></div>
          <div className='z-20 px-8 pb-4 text-white absolute bottom-0 left-0 right-0'>
            <p className='font-normal text-lg my-1 max-w-lg'>60 min</p>
            <p className='font-bold text-3xl'>
            bringebærmousse-kake
            </p>
          </div>
          <Image
                src="https://www.mekkemiddag.no/storage/app/public/full_size_images/IMG_0698.jpeg"
                alt="Descriptive text for the image"
                layout="fill"
                objectFit="cover"
                className='rounded-xl'
              />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-subgrid gap-4 md:col-span-2 h-[301px] shadow-md rounded-xl border border-transparent cursor-pointer relative">
            <div className="col-start-1 md:col-start-4 ">
            <div className="relative z-10 inset-0 bg-black bg-opacity-10 w-full h-full rounded-xl"></div>
          <div className='z-20 px-8 pb-4 text-white absolute bottom-0 left-0 right-0'>
            <p className='font-normal text-lg my-1 max-w-lg'>45 min</p>
            <p className='font-bold text-3xl'>
            Ostekake med sommerbær
            </p>
          </div>
              <Image
                  src="https://www.mekkemiddag.no/storage/app/public/full_size_images/IMG_3266.jpeg"
                  alt="Descriptive text for the image"
                  layout="fill"
                  objectFit="cover"
                  className='rounded-xl'
                />
            </div>
          </div>
          <div className="h-[301px] cursor-pointer shadow-md rounded-xl border border-transparent relative">
          <div className="relative z-10 inset-0 bg-black bg-opacity-10 w-full h-full rounded-xl"></div>
          <div className='z-20 px-8 pb-4 text-white absolute bottom-0 left-0 right-0'>
            <p className='font-normal text-lg my-1 max-w-lg'>50 min</p>
            <p className='font-bold text-3xl'>
            Ytrefilet av svin
            </p>
          </div>
          <Image
              src="https://www.mekkemiddag.no/storage/app/public/full_size_images/IMG_0448.jpeg"
              alt="Descriptive text for the image"
              layout="fill"
              objectFit="cover"
              className='rounded-xl'
            />
          </div>
        </div>
      </div> 
   </div>
  );
}