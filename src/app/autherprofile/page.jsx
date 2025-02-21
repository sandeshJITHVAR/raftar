import Button from '@/component/button'
import SmallNewCards from '@/component/news-cards/SmallNewCards'
import Section from '@/component/section'
import Contactwithme from '@/section-components/Contactwithme'
import WebStories from '@/section/home/WebStories'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp, FaInstagram, } from 'react-icons/fa';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
export default function page() {

    const socialMedia = [
        { icon: <SlSocialFacebook />, link: 'https://facebook.com', name: 'Facebook' },
        { icon: <FaWhatsapp />, link: 'https://whatsapp.com', name: 'WhatsApp' },
        { icon: <FaInstagram />, link: 'https://instagram.com', name: 'Instagram' },
        { icon: <SlSocialLinkedin />, link: 'https://linkedin.com', name: 'LinkedIn' },
    ];

    return (
        <>
            <Section banner={true} border={true}>
                <div className='grid grid-cols-12 gap-y-6  gap-x-[10px]'>
                    <div className=' col-span-12 lg:col-span-9 flex flex-col gap-8'>
                        <div className='flex flex-col gap-2.5'>
                            <div className='flex lg:pr-9 pb-2 md:items-center  gap-1.5'>
                                <Image
                                    src='/assets/banner/d639d993708863451867f2935a00537d.jpg'
                                    alt='banner'
                                    className="w-[64px] h-[64px]  rounded-full object-cover"
                                    width={100}
                                    height={100}
                                    priority
                                />

                                <div className='flex flex-1 flex-col gap-1.5'>
                                    <div className="flex  flex-col md:flex-row justify-start md:justify-between md:items-center gap-1">
                                        <h1 className='text-2xl font-semibold'>Rajesh Samjah</h1>
                                        <div className="flex gap-1.5 lg:gap-2.5">
                                            {socialMedia.map((social, index) => {
                                                return (
                                                    <div key={index} className='border text-sm md:text-base border-tertiary/50 rounded-full p-1.5 md:p-2.5'>
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
                                    <h1 className='text-base  font-semibold '>Reporter @ Rarftaar</h1>
                                    <p className='text-sm font-normal md:text-balance'>Is a seasoned journalist with over 10 years of experience covering politics, business, and cultural affairs in India. Passionate about bringing factual and engaging news to readers, he specializes in in-depth reporting and analysis.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h1 className='text-xl text-primary font-bold '>
                                    Stories by <span className='text-black'>Rajesh Samjah</span>
                                </h1>

                                <div className="grid grid-cols-1 md:grid-cols-2  gap-x-3 gap-y-3">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                                        <SmallNewCards
                                            key={index} // Keep key here, not inside the component
                                            image="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            title="How Online Learning is Changing Rural India"
                                            date="17th Feb, 2025"
                                            author="Rajesh Sharma"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button title='Read More' />
                        </div>
                    </div>

                    <div className=' col-span-12 lg:col-span-3 flex flex-col gap-y-8'>
                        <div className='flex flex-col gap-y-6'>
                            <div className='flex flex-col gap-y-3'>
                                <h2 className="text-primary font-bold text-2xl" style={{ fontFamily: 'Merriweather' }}>
                                    Latest News <span className="text-black">Now</span>
                                </h2>
                                <hr className="border-t-2  border-secondary " />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png" // Replace with actual image URL
                                    alt="News Highlight"
                                    width={500}
                                    height={300}
                                    className="h-[250px] w-full object-cover"
                                />
                            </div>
                        </div>

                        <Contactwithme />
                    </div>
                </div >
            </Section >



            <div className="mb-2">
                <WebStories />
            </div>

        </>
    )
}
