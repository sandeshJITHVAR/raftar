import H2 from '@/component/h2'
import Section from '@/component/section'
import Span from '@/component/span'
import TitleTag from '@/component/titletag'
import Image from 'next/image'
import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";

export default function VideoNews2() {
    return (
        <>
            <Section banner={true} border={true}>
                <div className='grid grid-cols-12 gap-y-6  gap-x-[10px]'>
                    <div className=' col-span-12 lg:col-span-9'>
                        <div className="flex justify-between items-center border-b   border-[#707070D4]/80">
                            <TitleTag title="Web Stories" />
                            <div className="pr-3">
                        <button className="font-bold text-base text-primary">Read more</button>
                    </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-x-3 gap-y-3 mt-5">
                            <div className="row-span-3 col-span-1 md:col-span-2 xl:col-span-1">
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
                            {[1, 2, 3, 4, 5, 6, 7].map((items, index) => (
                                <div
                                    key={index}
                                    className="flex gap-1 pb-3 cursor-pointer border-b row-span-1 border-black/80"
                                >
                                    <Image
                                        height={199}
                                        width={199}
                                        src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                        alt="banner"
                                        className="w-[128px] h-[72px] object-cover"
                                    />
                                    <div className="flex-1 px-2">
                                        <H2 text="Digital Rupee Explained In 30 Seconds!" />
                                        <div className="flex items-center gap-1 mt-2">
                                            <span>
                                                <FaRegCirclePlay />
                                            </span>
                                            <Span text="2.9" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=' col-span-12 lg:col-span-3 flex flex-col gap-y-6'>
                        <div className='flex flex-col gap-y-4'>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-base font-fold' style={{ fontFamily: 'Merriweather' }}>Do you use social media often?</h1>
                                <hr className=" h-[2px] w-full  bg-secondary " />
                            </div>

                            <div className="flex flex-col gap-y-[6px]">
                                <div className='py-3 px-4 border border-tertiary/70 flex items-center gap-2.5'>
                                    <span><FaThumbsUp /></span>
                                    <h1 className='text-xs font-medium'>Yes</h1>
                                </div>

                                <div className='py-3 px-4 border border-tertiary/70 flex items-center gap-2.5'>
                                    <span><FaThumbsDown /></span>
                                    <h1 className='text-xs font-medium'>No</h1>
                                </div>

                                <div className='py-2 px-4 border border-tertiary/70 flex items-center gap-2.5'>
                                    <span>🙄</span>
                                    <h1 className='text-xs font-medium'>I'm Not Sure</h1>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F2F2F2] flex flex-col gap-2.5 px-4 py-5 ">
                            <h2 className="text-lg font-bold">Subscribe To Updates</h2>
                            <p className=" text-xs">
                                Never miss a breaking story! Get daily updates on business, politics,
                                education, and more—straight to your inbox
                            </p>

                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full py-3 px-4 text-xs placeholder:text-[#707070D4] bg-white  focus:outline-none focus:ring-0 "
                            />
                            <button className="w-full bg-primary text-white py-3 text-xs  transition duration-200">
                                Subscribe
                            </button>
                        </div>

                    </div>
                </div>
            </Section>
        </>
    )
}
