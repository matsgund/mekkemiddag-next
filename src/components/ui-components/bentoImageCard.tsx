import Image from 'next/image';

type ImageCardProps = {
    src: string;
    alt: string;
    duration: string;
    title: string;
    size?: "normal" | "large";
};

export function BentoImageCard({ src, alt, duration, title, size = "normal" }: ImageCardProps) {
  const sizeClass = size === "large" ? "md:row-span-2" : "md:row-span-1";
  return (
    <div className={`group shadow-md rounded-xl border border-transparent cursor-pointer ${size === "large" ? "md:col-span-2" : ""} relative h-[301px] overflow-hidden`}>
      <div className="absolute inset-0 transition duration-300 ease-in-out group-hover:opacity-100 z-10 bg-black bg-opacity-10 w-full h-full rounded-xl opacity-80"></div>
      <div className="z-20 px-8 pb-4 text-white absolute bottom-0 left-0 right-0 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110">
        <p className='font-normal text-lg my-1 max-w-lg'>{duration}</p>
        <p className='font-bold text-3xl'>{title}</p>
      </div>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className='rounded-xl transform transition duration-300 group-hover:scale-110'
      />
    </div>
  );
}
