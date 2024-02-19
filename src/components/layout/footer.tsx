import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

export default function Footer () {
    return (
        <footer className="w-full h-[80px] mx-auto bg-primary-100 border-t border-primary-600 text-tertiary-950 py-y px-6">
            <div className='flex justify-center'>
                <div className='flex h-[80px] items-center justify-between w-[200px] sm:w-[250px] pt-4 text-2xl'>
                    <a href="https://www.linkedin.com/in/jobbsoknader" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='h-6 w-6 hover:text-tertiary-500  hover:cursor-pointer' />
                    </a>
                    <a href="https://www.facebook.com/jobbsoknader" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='h-6 w-6 hover:text-tertiary-500  hover:cursor-pointer' />
                    </a>
                    <a href="https://www.instagram.com/jobbsoknader" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='h-6 w-6 hover:text-tertiary-500  hover:cursor-pointer' />
                    </a>
                    <a href="https://twitter.com/jobbsoknader" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='h-6 w-6 hover:text-tertiary-500  hover:cursor-pointer' /> 
                    </a>
                </div>
            </div>
        </footer>
    ) 
}


