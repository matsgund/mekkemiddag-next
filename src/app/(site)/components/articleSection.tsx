// article section component
import { H1, SubheadingParagraph } from '@/components/typography'
import Image from 'next/image'


export function ArticleSection() {
    return (
    <div className='py-32'>
       {/* <div className='my-48 px-12 py-32 bg-tertiary-950'> */}
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-20'>
            <H1>
                Matglede fra <span className='text-secondary-600'> naturen</span>      
            </H1>
              <SubheadingParagraph>
                Vi ønsker å inspirere deg til å lage mat med råvarer fra naturen.
              </SubheadingParagraph>
          </div>
          {/* video section */}
          <div className='grid grid-cols-12 bg-tertiary-950 shadow-md border rounded-lg border-primary-600'>
            <video className="h-full col-span-5 rounded-l-lg" controls autoPlay loop muted>
                <source src="/video/forrest-clip.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='col-span-7 py-11 px-16'>
                <div className='flex '>
                    <h3 className="py-6 text-3xl font-bold text-secondary-500">Sopptur i skogen</h3>
                    <Image className='my-auto ml-4 max-h-[50px]' src='/images/mushroom-icon.png' alt="knife and fork icon" width={50} height={50}/>
                </div>
                    
                <div className='py-6'>
                    <p className="mb-3 text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                    <p className="text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
                </div>
                <blockquote className="py-6 text-xl italic font-semibold text-white">
                    <svg className="w-8 h-8 text-secondary-500 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                    </svg>
                    <p className='text-white'>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                </blockquote>

            </div>

          </div>
        </div>
    </div>
    )
}