import Image from "next/image";
import { H1, SubheadingParagraph } from "@/components/typography";
import { ActionButton } from "@/components/ui-components";


export function ResturantSection() {
  return (
    <div className='py-32 bg-gradient-to-r from-primary-100 to-primary-200'>
        
       {/* <div className='my-48 px-12 py-32 bg-tertiary-950'> */}
        <div className='max-w-6xl mx-auto '>
          <div className='text-center'>
            <H1>
                Nylige <span className='text-secondary-600'> resturantbesøk</span>      
            </H1>
              <SubheadingParagraph>
                Her er vår siste resturantopplevelse og anbefaling.
              </SubheadingParagraph>
          </div>
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
            <Image className="xl:max-w-6xl w-full h-auto rounded-lg"  width="0"
                height="0"
                sizes="100vw"
                src="/images/lysverket.jpeg" alt="bilde av resturant"/>
            <div className="content rounded-lg bg-gradient-to-r from-primary-100 to-primary-200 p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                <div className="flex text-tertiary-950 justify-between font-bold text-sm">
                    <p>Bergen sentrum</p>
                    <p className="text-gray-400">17th March, 2021</p>
                </div>
                <h2 className="text-3xl text-tertiary-950 font-semibold mt-4 md:mt-10">Lysverket</h2>
                <p className="my-3 pb-3 text-justify font-medium text-tertiary-950 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam nulla cupiditate saepe sed quis veritatis minus rem adipisci aliquid.</p>
                <ActionButton>Les anbefaling</ActionButton>
            </div>
        </section>
    </section>
    </div>
</div>

  );
}