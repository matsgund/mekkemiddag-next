import Image from 'next/image';

type ImageCardProps = {
    src: string;
    alt: string;
    duration: string;
    title: string;
    size?: "normal" | "large";
};

// Definer en ny komponent for bildekortene
export function ImageCard({ src, alt, duration, title, size = "normal" } : ImageCardProps) {
  // Tilpass klassenavn basert på størrelse-prop
  const sizeClass = size === "large" ? "md:row-span-2" : "md:row-span-1";
  return (
    <div className={`shadow-md rounded-xl border border-transparent h-[301px] ${size === "large" ? "md:col-span-2" : ""} relative`}>
      <div className="relative z-10 inset-0 bg-black bg-opacity-10 w-full h-full rounded-xl"></div>
      <div className='z-20 px-8 pb-4 text-white absolute bottom-0 left-0 right-0'>
        <p className='font-normal text-lg my-1 max-w-lg'>{duration}</p>
        <p className='font-bold text-3xl'>{title}</p>
      </div>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className='rounded-xl'
      />
    </div>
  );
}