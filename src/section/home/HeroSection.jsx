import H2 from '@/component/h2';
import SmallNewCards from '@/component/news-cards/SmallNewCards';
import Section from '@/component/section';
import Span from '@/component/span';
import LatestNews from '@/section-components/LatestNews';
import Image from 'next/image';
import React from 'react';
import { LuPenLine } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";

export default function HeroSection() {

  

    return (
        <>
            <Section banner={true} >
                <div className="grid grid-cols-12 gap-y-8 gap-[10px] grid-rows-1">

                    <div className=' col-span-12 lg:col-span-9 grid grid-cols-12 gap-y-8 gap-x-[10px]'>
                        <div className="col-span-12 xl:col-span-5 h-fit  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 lg:pr-[5px] gap-[10px] order-last xl:order-first">
                            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                <SmallNewCards
                                    key={index} // Keep key here, not inside the component
                                    image="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    title="Severe Monsoon Flooding Hits Mumbai, Disrupting City Life"
                                    date="17th Feb, 2025"
                                    author="Rajesh Sharma"
                                />
                            ))}
                        </div>

                        <div className='col-span-12 xl:col-span-7 grid grid-cols-2 lg:px-[5px] gap-y-[16px] gap-x-[10px] order-first xl:order-last'>
                            <div className='col-span-2 flex flex-col gap-[16px]'>
                                <h1 className='text-[26px] font-bold leading-[32px]'
                                    style={{ fontFamily: 'Merriweather' }}>India's GDP Growth Soars to Historic Levels, Setting New Economic Records </h1>
                                <div className='flex gap-4 '>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-7 h-[1px] bg-black ' />
                                        <Span text="Categories" />
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='text-base text-tertiary ' >
                                            <LuPenLine />
                                        </div>
                                        <Span text="Sammy King" />
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='text-base text-tertiary ' >
                                            <LuCalendar />
                                        </div>
                                        <Span text="17/Feb/2025" />
                                    </div>
                                </div>
                                <Image
                                    height={199}
                                    width={199}
                                    src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    alt="banner"
                                    className="w-full h-[295px]  object-cover "
                                />
                            </div>

                            <div className="flex flex-col gap-2  cursor-pointer">
                                <Image
                                    height={199}
                                    width={199}
                                    src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    alt="banner"
                                    className="w-full h-[144px] object-cover "
                                />
                                <div className="flex-1 ">
                                    <H2 text="Sensex Hits Record High as Investors Surge Amid Global Optimism" />
                                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                                        <div className='w-7 h-[1px] bg-black ' />
                                        <Span text="17th Feb, 2025, Rajesh Sharma" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2  cursor-pointer">
                                <Image
                                    height={199}
                                    width={199}
                                    src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    alt="banner"
                                    className="w-full  h-[144px] object-cover "
                                />
                                <div className="flex-1 ">
                                    <H2 text="Sensex Hits Record High as Investors Surge Amid Global Optimism" />
                                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                                        <div className='w-7 h-[1px] bg-black ' />
                                        <Span text="17th Feb, 2025, Rajesh Sharma" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-3'>
                        <LatestNews />
                    </div>
                </div>
            </Section>
        </>
    );
};