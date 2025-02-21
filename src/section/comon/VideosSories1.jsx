import Section from '@/component/section'
import Span from '@/component/span'
import TitleTag from '@/component/titletag'
import Image from 'next/image'
import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import Contactwithme from '@/section-components/Contactwithme'

export default function VideosStories1() {

    return (
        <>
            <Section banner={true} border={true}>
                <div className='grid grid-cols-12 gap-y-6  gap-x-[10px]'>
                    <div className=' col-span-12 lg:col-span-9'>
                        <div className="flex justify-between items-center border-b   border-tertiary/50">
                            <TitleTag title="Video News" />
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

                                {[1, 2].map((_, index) => (

                                    <div className="flex cursor-pointer pb-3 h-full  border-b border-tertiary/50" key={index}>
                                        <Image
                                            height={199}
                                            width={199}
                                            src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            alt="banner"
                                            className="w-[128px] h-[72px] object-cover
              "
                                        />
                                        <div className="pl-2">
                                            <h2 className='text-base font-semibold leading-[21.79px] tracking-wide'>How Online Learning is Changing Rural India</h2>
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

                            <div className='flex flex-col  gap-y-3'>
                                {[1, 2, 3, 4, 5,].map((_, index) => (

                                    <div className="flex cursor-pointer pb-3 h-full  border-b border-tertiary/50" key={index}>
                                        <Image
                                            height={199}
                                            width={199}
                                            src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            alt="banner"
                                            className="w-[128px] h-[72px] object-cover
                      "
                                        />
                                        <div className="pl-2">
                                            <h2 className='text-base font-semibold leading-[21.79px] tracking-wide'>How Online Learning is Changing Rural India</h2>
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
                    </div>

                    <div className=' col-span-12 lg:col-span-3 '>
                        <Contactwithme />
                    </div>
                </div>
            </Section>
        </>
    )
}
