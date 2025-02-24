"use client"
import { useState } from 'react';
import { useAuth } from '@/lib/AuthProvider';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, } from 'react-icons/fa';
import { BiMenu, BiSearch } from 'react-icons/bi';
import { SlSocialFacebook } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';


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


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const notifications = [
    { id: 1, message: "New message received", time: "5 min ago" },
    { id: 2, message: "Your post was liked", time: "1 hour ago" },
    { id: 3, message: "New follower", time: "2 hours ago" }
  ];


  const newsTexts = [
    "Legal Battle Over Namadi Kanu's Detention",
    "Legal Battle Over Namadi Kanu's Detention",
    "Legal Battle Over Namadi Kanu's Detention",
    "Legal Battle Over Namadi Kanu's Detention",
    "Legal Battle Over Namadi Kanu's Detention",
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
        <div className='flex  justify-end lg:justify-between relative overflow-hidden items-center px-4 md:px-6 lg:px-8   xl:px-0 max-w-[1440px] mx-auto'>
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


            <div
  className=""
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>
  {/* Notification Icon */}
  <div className="border-l text-xl border-[#FFFFFFD4]/60 py-3.5 px-3 hover:opacity-80 cursor-pointer">
    <IoMdNotificationsOutline />
  </div>

  {/* Dropdown Menu */}
  {dropdownOpen && ( // Ensure dropdown only renders when open
    <div
      className="absolute top-full right-0 mt-2 h-96 w-80 bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out z-40 opacity-100 translate-y-0"
    >
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
      </div>

      <div className="max-h-80 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
            >
              <p className="text-sm text-gray-800">{notification.message}</p>
              <span className="text-xs text-gray-500 mt-1 block">{notification.time}</span>
            </div>
          ))
        ) : (
          <p className="p-4 text-sm text-gray-500">No notifications</p>
        )}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full text-sm text-primary hover:text-primary/80 font-medium">
          View all notifications
        </button>
      </div>
    </div>
  )}
</div>



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
          <h3 className="border-l w-fit text-base bg-black  py-3 px-4 font-semibold border-[#FFFFFFD4]/50 block " >
            BREAKING NEWSBREAKING NEWS
          </h3>

          <div className="w-full flex-1 overflow-hidden relative">
            <motion.div
              className="flex whitespace-nowrap"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            >
              {newsTexts.map((text, index) => (
                <Link
                  href="/newsdetails"
                  key={index}
                  className="border-l text-base py-3 px-4 font-normal border-[#FFFFFFD4]/50"
                >
                  {text}
                </Link>
              ))}
            </motion.div>
          </div>
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
              <Link href="/" className='text-primary text-[28px]  font-bold flex gap-2.5'>
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



function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative"
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <button
        className="flex relative group items-center gap-1 text-lg py-4 lg:py-6 font-semibold focus:outline-none"
      >
        <h1 className="group-hover:text-site-green text-lg"> {title}</h1>
        <span className="absolute  bottom-1 h-[2px] w-0 bg-site-green transition-all duration-300 group-hover:w-full" />
      </button>


      <div
        className={`absolute left-0 mt-2 w-48 px-2 bg-white text-black shadow-xl transform transition-all duration-300 ease-in-out pointer-events-auto border ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ul className="">
          {items.map((item) => (
            <li className="relative group"
              key={item.href}>
              <Link href={item.href}
                className="block px-2 py-2 group-hover:text-site-green ">
                {item.label}
                <span className="absolute left-0 bottom-1 h-[1px] w-0 bg-site-green transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MenuLink({ title, herfURL }) {
  return (
    <Link href={herfURL}
      className="flex relative group items-center gap-1 text-lg py-4 lg:py-6 font-semibold focus:outline-none"
    >
      <h1 className="group-hover:text-site-green text-lg"> {title}</h1>
      <span className="absolute  bottom-1 h-[2px] w-0 bg-site-green transition-all duration-300 group-hover:w-full" />
    </Link>
  );
} 