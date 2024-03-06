import Image from "next/image";
import { H1, SubheadingParagraph } from "@/components/typography";

const articles = [
    {
        title: 'Hvordan lage en god CV',
        intro: 'En god CV er nøkkelen til å få drømmejobben. Her er noen tips til hvordan du kan lage en god CV.',
        slug: {
            current: 'hvordan-lage-en-god-cv'
        },
        image: {
            asset: {
                url: 'https://images.unsplash.com/photo-1612835152137-7c8e8c3f2d3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
        }
    },
    {
        title: 'Hvordan skrive en god søknad',
        intro: 'En god søknad er nøkkelen til å få drømmejobben. Her er noen tips til hvordan du kan skrive en god søknad.',
        slug: {
            current: 'hvordan-skrive-en-god-soknad'
        },
        image: {
            asset: {
                url: 'https://images.unsplash.com/photo-1612835152137-7c8e8c3f2d3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
        }
    },
    {
        title: 'Hvordan skrive en god søknad',
        intro: 'En god søknad er nøkkelen til å få drømmejobben. Her er noen tips til hvordan du kan skrive en god søknad.',
        slug: {
            current: 'hvordan-skrive-en-god-soknad'
        },
        image: {
            asset: {
                url: 'https://images.unsplash.com/photo-1612835152137-7c8e8c3f2d3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
        }
    },
    ] 

export function TipsAndTricks() {
  return (
    <div className='py-32 bg-primary-300'>
        <div className="max-w-6xl mx-auto">
         <div className='text-center mb-20'>
            <H1>
                Siste <span className='text-secondary-600'> tips og triks</span>      
            </H1>
            <SubheadingParagraph>
                Her er våre siste tips og triks for å lykkes på kjøkkenet.
            </SubheadingParagraph>
          </div>
          <div className="flex flex-wrap">
        {articles.map((article, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 flex flex-col">
                <div className="flex flex-col bg-quaternary-300 rounded-xl shadow-xl flex-1 m-5">
                    <Image  
                        width="0"
                        height="0"
                        sizes="100vw" className="rounded-t-lg h-[250px] w-full object-cover"
                        src="https://www.mekkemiddag.no/storage/app/public/full_size_images/pizza.jpg"
                        alt={article?.title} />
                <div className="p-7 flex flex-col flex-grow text-center">
                    <h5 className="block font-semibold text-xl overflow-ellipsis overflow-hidden text-white">{article?.title}</h5>
                </div>
            </div>
        </div>
        ))}
        </div>
        </div>
    </div>
  );
}