"use client"
import { useState } from 'react';
import { useAuth } from '@/lib/AuthProvider';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, } from 'react-icons/fa';
import { BiMenu, BiSearch } from 'react-icons/bi';
import { usePathname, useRouter } from 'next/navigation';
import { SlSocialFacebook } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';


export default function Navbar() {
  const { user, logout } = useAuth();
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };





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
          <Link href="/" className='text-primary text-[32px] font-bold flex gap-2.5'>
            Highlands
            <span className="text-black" style={{ fontFamily: 'Merriweather' }}>Today</span>
          </Link>
        </div>

        <div className='col-span-7 h-full hidden md:flex items-center '>
          <Image
            src='/assets/banner/103f61951fbc29bc7558c8eda8f86084.jpg'
            alt='banner'
            className="w-full h-[60px] lg:h-[95px] aspect-w-16 aspect-h-9  object-cover"
            width={728}
            height={95}
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
            <div>
              {user ? (

                <button
                  onClick={logout}
                  className="text-base  py-3 px-4"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className=" text-base  py-3 px-4"
                >
                  Login
                </Link>
              )}
            </div>


            <Link href="/" className='hover:opacity-80 border-l text-xl border-[#FFFFFFD4]/60 py-3.5 px-3'>
              <IoMdNotificationsOutline />
            </Link>

            <Link href="/" className='hover:opacity-80 border-l text-xl border-[#FFFFFFD4]/60 py-3.5 px-3'>
              <BiSearch className="text-xl cursor-pointer hover:opacity-80" />
            </Link>

            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className='flex lg:hidden hover:opacity-80 border-l text-xl border-[#FFFFFFD4]/80 py-3.5 px-3'>
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




      {isOpen && (
        <div
          className="fixed top-0 h-full inset-0 bg-black/60 z-0"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}

      <AnimatePresence>
        <motion.div
          className="fixed top-0 left-0 h-full w-[90%] sm:w-[50%] md:w-[40%] border-r-2 border-primary bg-white shadow-lg transform duration-500 ease-in-out text-base z-50"
          style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-120%)' }}
        >
          <div className="flex justify-between items-center px-4 sm:px-5 py-6 ">
            <div className='flex items-center '>
              <Link href="/" className='text-primary text-[28px] md:text-[32px] font-bold flex gap-2.5'>
                Highlands
                <span className="text-black" style={{ fontFamily: 'Merriweather' }}>Today</span>
              </Link>
            </div>
            <button onClick={toggleMenu} className="text-black text-xl">
              <FaTimes />
            </button>
          </div>


          <div className='px-4 sm:px-5 border-y border-tertiary/50'>
            <div className="  py-8 space-y-1 sm:px-3">
              {menuItems.map((item, index) => (
                <span key={index}>
                  <Link
                    href={item.path}
                    className={`border-l text-base  py-3 px-4 font-semibold border-[#FFFFFFD4]/60 block 
                      ${currentPath === item.path ? 'bg-black text-white' : 'text-black hover:text-primary'}
                      ${index === menuItems.length - 1 ? " border-r border-l " : ""}`}
                  >
                    {item.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div className="justify-center py-4 flex gap-2">
            {socialMedia.map((social, index) => {
              return (
                <div key={index} className='border-l text-lg bg-primary text-white p-3 rounded '>
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

        </motion.div>
      </AnimatePresence>
    </header>
  );
};

