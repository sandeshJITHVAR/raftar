"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, } from 'react-icons/fa';
import { BiMenu, BiSearch } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import { SlSocialFacebook } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Entertainment', path: '/entertainment' },
    { name: 'Future', path: '/future' },
    { name: 'Lifestyle', path: '/lifestyle' },
    { name: 'Religion', path: '/religion' },
    { name: 'Bid N Win', path: '/bid-n-win' },
  ];

  const socialMedia = [
    { icon: <SlSocialFacebook />, link: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaWhatsapp />, link: 'https://whatsapp.com', name: 'WhatsApp' },
    { icon: <FaInstagram />, link: 'https://instagram.com', name: 'Instagram' },
    { icon: <SlSocialLinkedin />, link: 'https://linkedin.com', name: 'LinkedIn' },
  ];

  return (
    <header className="w-full">

      <div className='bg-primary  text-white'>
        <div className='hidden md:flex justify-between items-center px-4 md:px-6 lg:px-8  xl:px-0 max-w-[1440px] mx-auto '>
          <div className="flex items-center gap-7">
            <Link href="/" className="flex items-center gap-2">
              <span className='text-xl'><CgMail /></span>
              <h1 className='text-base'>Informeddaily@Support.Com</h1>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <span className='text-base'><FiPhoneCall /></span>
              <h1 className='text-base'>+91 647 538 21</h1>
            </Link>
          </div>
          <div className="flex gap-1">
            {socialMedia.map((social, index) => {
              return (
                <div key={index} className='border-l text-lg border-[#FFFFFFD4]/60 py-2.5 px-3'>
                  <Link
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 cursor-pointer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>




      <div className=' grid grid-cols-12 gap-4 py-4  px-4 md:px-6 lg:px-8 xl:px-0 max-w-[1440px] mx-auto'>
        <div className=' col-span-12 md:col-span-5 flex items-center '>
            <h1 className='text-primary text-[32px] font-bold flex gap-2.5'>
            Highlands
            <span className="text-black" style={{ fontFamily: 'Merriweather' }}>Today</span>
            </h1>
        </div>

        <div className='col-span-7 h-full hidden md:flex items-center '>
          <Image
            src='/assets/banner/103f61951fbc29bc7558c8eda8f86084.jpg'
            alt='banner'
            className="w-full h-[60px] lg:h-[95px]  object-cover"
            width={200}
            height={100}
            priority />
        </div>
      </div>

      <div className='bg-primary  text-white'>
        <div className='flex justify-end lg:justify-between h-12 relative overflow-hidden items-center px-4 md:px-6 lg:px-8   xl:px-0 max-w-[1440px] mx-auto'>
          <ul className="hidden lg:flex">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`border-l text-base  py-3 px-4 font-semibold border-[#FFFFFFD4]/60 block 
                      ${currentPath === item.path ? 'bg-black' : ''}
                      ${index === menuItems.length - 1 ? " border-r border-l " : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center  gap-2">
            <Link href="/" className='hover:opacity-80 border-l text-xl border-[#FFFFFFD4]/60 py-3.5 px-3'>
              <IoMdNotificationsOutline />
            </Link>

            <Link href="/" className='hover:opacity-80 border-l text-xl border-[#FFFFFFD4]/60 py-3.5 px-3'>
              <BiSearch className="text-xl cursor-pointer hover:opacity-80" />
            </Link>

            <buuton className='hidden md:flex hover:opacity-80 m border-l text-2xl border-[#FFFFFFD4]/80 py-3.5 px-3'>
              <BiMenu />
            </buuton>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className='flex md:hidden hover:opacity-80 border-l text-xl border-[#FFFFFFD4]/80 py-3.5 px-3'>
              <BiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className='bg-primary  text-white  mt-2 '>
        <div className='hidden md:flex  h-12 relative  items-center px-4 md:px-6 lg:px-8  xl:px-0 max-w-[1440px] mx-auto'>
          <h1 className="border-l text-base bg-black  py-3 px-4 font-semibold border-[#FFFFFFD4]/50 block " >
            BREAKING NEWSBREAKING NEWS
          </h1>

          <h1 className="border-l text-base py-3 px-4 font-normal border-[#FFFFFFD4]/50 block ">
            Legal Battle Over Namadi Kanu's Detention
          </h1>
        </div>
      </div>
    </header>
  );
};

