import H2 from '@/component/h2'
import SmallNewCards from '@/component/news-cards/SmallNewCards'
import Section from '@/component/section'
import Span from '@/component/span'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuCalendar, LuPenLine } from 'react-icons/lu'

export default function Categaroy() {
    return (
        <>
            <Section banner={true} border={true}>
                <div className="grid grid-cols-1  xl:grid-cols-3 gap-y-7 gap-[16px]">

                    <div className='flex flex-col h-fit gap-[14px]'>

                        <div className='flex flex-row items-center gap-x-3'>
                            <h2 className="text-primary font-bold text-2xl" style={{ fontFamily: 'Merriweather' }}>
                                Business <span className="text-black">News</span>
                            </h2>
                            <hr className=" flex-1 h-[2px] w-full  bg-secondary " />
                        </div>

                        <div className=''>
                            <Image
                                height={207}
                                width={369}
                                src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                alt="banner"
                                className="w-full h-[207px] aspect-w-16 aspect-h-9 object-cover"
                            />
                            <div className='flex gap-4 mt-3'>
                                <Link href='/autherprofile' className='flex items-center gap-1'>
                                    <div className='text-base text-tertiary ' >
                                        <LuPenLine />
                                    </div>
                                    <Span text="Sammy King" />
                                </Link>
                                <div className='flex items-center gap-1'>
                                    <div className='text-base text-tertiary ' >
                                        <LuCalendar />
                                    </div>
                                    <Span text="17/Feb/2025" />
                                </div>
                            </div>
                            <Link href='/newsdetails'>    <h3 className='text-base font-semibold mt-2'>IIndia's Startups Secure Record $10B Funding in 2025 Q1</h3> </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[10px]">
                            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                <SmallNewCards
                                    key={index} // Keep key here, not inside the component
                                    image="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    title="India Clinches Victory Over Australia in Cricket "
                                    date="17th Feb, 2025"
                                    author="Rajesh Sharma"
                                />
                            ))}
                        </div>
                    </div>

                    {/* <div className='flex flex-col h-fit gap-[14px]'>

                        <div className='flex flex-row items-center gap-x-3'>
                            <h2 className="text-primary font-bold text-2xl" style={{ fontFamily: 'Merriweather' }}>
                                Education <span className="text-black">News</span>
                            </h2>
                            <hr className=" flex-1 h-[2px] w-full  bg-secondary " />
                        </div>

                        <div className=''>
                            <Image
                                height={207}
                                width={369}
                                src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                alt="banner"
                                className="w-full h-[207px] aspect-w-16 aspect-h-9 object-cover"
                            />
                            <div className='flex gap-4 mt-3'>
                                <Link href='/autherprofile' className='flex items-center gap-1'>
                                    <div className='text-base text-tertiary ' >
                                        <LuPenLine />
                                    </div>
                                    <Span text="Sammy King" />
                                </Link>
                                <div className='flex items-center gap-1'>
                                    <div className='text-base text-tertiary ' >
                                        <LuCalendar />
                                    </div>
                                    <Span text="17/Feb/2025" />
                                </div>
                            </div>
                            <Link href='/newsdetails'>    <h3 className='text-base font-semibold mt-2'>IIndia's Startups Secure Record $10B Funding in 2025 Q1</h3> </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[10px]">
                            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                <SmallNewCards
                                    key={index} // Keep key here, not inside the component
                                    image="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    title="India Clinches Victory Over Australia in Cricket "
                                    date="17th Feb, 2025"
                                    author="Rajesh Sharma"
                                />
                            ))}
                        </div>
                    </div>


                    <div className='flex flex-col h-fit gap-[14px]'>

                        <div className='flex flex-row items-center gap-x-3'>
                            <h2 className="text-primary font-bold text-2xl" style={{ fontFamily: 'Merriweather' }}>
                                Religious <span className="text-black">News</span>
                            </h2>
                            <hr className=" flex-1 h-[2px] w-full  bg-secondary " />
                        </div>

                        <div className=''>
                            <Image
                                height={207}
                                width={369}
                                src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                alt="banner"
                                className="w-full h-[207px] aspect-w-16 aspect-h-9 object-cover"
                            />
                            <div className='flex gap-4 mt-3'>
                                <Link href='/autherprofile' className='flex items-center gap-1'>
                                    <div className='text-base text-tertiary ' >
                                        <LuPenLine />
                                    </div>
                                    <Span text="Sammy King" />
                                </Link>
                                <div className='flex items-center gap-1'>
                                    <div className='text-base text-tertiary ' >
                                        <LuCalendar />
                                    </div>
                                    <Span text="17/Feb/2025" />
                                </div>
                            </div>
                            <Link href='/newsdetails'>    <h3 className='text-base font-semibold mt-2'>IIndia's Startups Secure Record $10B Funding in 2025 Q1</h3> </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[10px]">
                            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                <SmallNewCards
                                    key={index} // Keep key here, not inside the component
                                    image="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    title="India Clinches Victory Over Australia in Cricket "
                                    date="17th Feb, 2025"
                                    author="Rajesh Sharma"
                                />
                            ))}
                        </div>
                    </div> */}



                </div>
            </Section>
        </>
    )
}
