import { Pen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const links =[
        {
            href:"/home",
            title:"Home"
        },{
            href:"/sigin",
            title:"Signin"
        },{
            href:"/signup",
            title:"Signup"
        }
    ];


  return (
    <header className = "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className='flex items-center justify-between container mx-auto px-4 h-16 '>
            <Link href="/">
            <div className='flex items-center space-x-2 cursor-pointer'>
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Pen className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-lg hidden sm:block">Excalidraw</span>
            </div>
            </Link>
            <div className='flex items-center gap-4 md:flex space-x-2'>
                {links.map((link,index)=>(
                <Link href={link.href} key={index} className='text-black font-medium hover:text-neutral-300 transition duration-500'>
                    {link.title}
                </Link>
                ))}
            </div>
            
        </div>
    </header>
  )
}

export default Navbar