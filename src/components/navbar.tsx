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
            href:"/signin",
            title:"Signin"
        },{
            href:"/signup",
            title:"Signup"
        }
    ];


  return (
    <div className = " bg-white border-b border-gray-200 shadow-sm ">
        <div className='px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16 max-w-7xl mx-auto '>
                <Link href="/">
                    <div className='flex items-center space-x-2 cursor-pointer text-xl font-extrabold text-gray-900 tracking-tight ml-2'>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black">
                            <Pen className="w-5 h-5  stroke-white" />
                        </div>
                        <span className="font-medium text-lg hidden sm:block">Excalidraw</span>
                    </div>
                </Link>
                <div className='flex items-center gap-4 space-x-2'>
                    {links.map((link,index)=>(
                    <Link href={link.href} key={index} className='text-black font-medium hover:text-neutral-300 transition duration-500'>
                        {link.title}
                    </Link>
                    ))}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar