"use client"

import Image from 'next/image'
import {NavHamburgerButton} from '@/components/ui-components/navHamburgerButton'
import { useState } from 'react'

const navigation = [
  { name: 'Oppskrifter', href: '#', current: true },
  { name: 'Tips', href: '#', current: false },
  { name: 'Artikler', href: '#', current: false },
  { name: 'Resturantopplevelser', href: '#', current: false },
  { name: 'Vinanbefalinger', href: '#', current: false },
]

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex fixed z-50">
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between bg-gradient-to-r from-primary-50 to-primary-100 border-b border-primary-600 text-tertiary-950 w-screen">
            <div className="px-5 lg:px-24 py-6 flex w-full items-center">
              <a className="flex items-center gap-2 text-3xl font-bold font-heading ml-3 hover:text-secondary-600 transition duration-300 ease-in-out" href="#">
              <Image src='/images/logo.png' alt="Mekkemiddag.no" width={75} height={75}/>
                <span className='hidden md:block'>
                  Mekkemiddag.no
                </span>
              </a>
              {/* Nav Links */}
              <ul className="hidden lg:flex px-4 ml-auto font-semibold font-heading space-x-12">
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
            </div>
            <div className='lg:hidden flex self-center px-5'>
              {/* Responsive navbar */}
              <NavHamburgerButton 
                  mobileMenuToggle={setIsOpen}
                  mobileMenuStatus={isOpen} 
              />
            </div>
          </nav>
          {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-25 right-0 z-40 w-screen h-screen px-12 pt-12 overflow-y-auto transition-transform duration-700 transform bg-primary-100 drop-shadow-md ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={"hover:text-secondary-600 hover:underline hover:underline-offset-8 transition duration-300 ease-in-out  block rounded-md px-3 py-2 text-base font-ralewaRegular font-medium leading-7"}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>  
        </section>
      </div>
    </>
  )
}
