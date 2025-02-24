import SmallNewCards from '@/component/news-cards/SmallNewCards'
import Section from '@/component/section'
import TitleTag from '@/component/titletag'
import SocialMediaOften from '@/section-components/SocialMediaOften'
import SubScribeFrom from '@/section-components/SubScribeFrom'
import Image from 'next/image'
import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

export default function VideoNews2() {
    return (
        <>
            <Section banner={true} border={true}>
                <div className='grid grid-cols-12 gap-y-6  gap-x-[10px]'>
                    <div className=' col-span-12 lg:col-span-9'>
                        <div className="flex justify-between items-center border-b   border-tertiary/50">
                            <TitleTag title="Web Stories" />
                            <div className="pr-3">
                                <button className="font-bold text-base text-primary">Read more</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-3 gap-y-3 mt-5">
                            <div className='flex flex-col h-fit  gap-y-3'>
                                <div className="">
                                    <div className="relative">
                                        <Image
                                            height={199}
                                            width={199}
                                            src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            alt="banner"
                                            className="w-full h-[249px] object-cover z-0"
                                        />
                                        <div className="absolute z-10 w-full h-fit  backdrop-blur-[3px] bottom-0 left-0 text-white   px-4 py-2.5">
                                            <div className="flex items-center gap-2 ">
                                                <span>
                                                    <FaRegCirclePlay />
                                                </span>
                                                <div className='text-xs font-normal'> 2.9</div>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-[20px] font-bold mt-3">
                                        Inside Kumbh Mela – A Spiritual Journey
                                    </h1>
                                </div>
                                {[1, 2,].map((_, index) => (
                                    <SmallNewCards
                                        key={index} // Keep key here, not inside the component
                                        image="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                        title="How Online Learning is Changing Rural India"
                                        date="17th Feb, 2025"
                                        author="Rajesh Sharma"
                                    />
                                ))}
                            </div>

                            <div className='flex flex-col  gap-y-3'>
                                {[1, 2, 3, 4, 5,].map((_, index) => (
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

                    <div className=' col-span-12 lg:col-span-3 flex flex-col gap-y-6'>
                        <div className='flex flex-col gap-y-2'>
                            <h1 className='text-lg font-fold' style={{ fontFamily: 'Merriweather' }}>Do you use social media often?</h1>
                            <hr className=" h-[2px] w-full  bg-secondary " />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-6 gap-x-4'>
                            <SocialMediaOften />
                            <SubScribeFrom />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
