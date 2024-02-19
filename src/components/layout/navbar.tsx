"use client"


import Image from 'next/image'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Oppskrifter', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Nav() {
  return (
    <>
      <div className="flex fixed z-10 ">
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between bg-primary-100 border-b border-primary-600 text-tertiary-950 w-screen">
            <div className="px-5 lg:px-24 py-6 flex w-full items-center">
              <a className="flex items-center gap-2 text-3xl font-bold font-heading ml-3 hover:text-secondary-600 transition duration-300 ease-in-out" href="#">
              <Image src='/images/logo.png' alt="Mekkemiddag.no" width={75} height={75}/>
                <span className='hidden md:block'>
                  Mekkemiddag.no
                </span>
              </a>
              {/* Nav Links */}
              <ul className="hidden md:flex px-4 ml-auto font-semibold font-heading space-x-12">
                {navigation.map((item) => (
                  <li key={item.name} >
                    <a
                      href={item.href}
                      className={"hover:text-secondary-600 hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Header Icons */}
              {/* <div className="hidden xl:flex items-center space-x-5">
                <a className="hover:text-gray-200" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-secondary-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-600"></span>
                  </span>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </div> 
              */}
            </div>
            {/* Responsive navbar */}
            <a className="navbar-burger self-center mr-12 md:hidden" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-secondary-600 transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </>
  )
}
