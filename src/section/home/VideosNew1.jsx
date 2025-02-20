import H2 from '@/component/h2'
import Section from '@/component/section'
import Span from '@/component/span'
import TitleTag from '@/component/titletag'
import Image from 'next/image'
import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";
export default function VideosNew1() {
    const socialStats = [
        {
            platform: 'Facebook',
            followers: 1009,
            icon: <FaFacebookF />,
            bgColor: 'bg-[#1877F2]'
        },
        {
            platform: 'Instagram',
            followers: 1009,
            icon: <FaInstagram />,
            bgColor: 'bg-[#E1306C]'
        },
        {
            platform: 'YouTube',
            followers: 1009,
            icon: <FaYoutube />,
            bgColor: 'bg-[#FF0000]'
        },
        {
            platform: 'Twitter',
            followers: 1009,
            icon: <FaTwitter />,
            bgColor: 'bg-[#1DA1F2]'
        }
    ];
    return (
        <>
            <Section banner={true} border={true}>
                <div className='grid grid-cols-12 gap-y-6  gap-x-[10px]'>
                    <div className=' col-span-12 lg:col-span-9'>
                        <div className="flex justify-between items-center border-b   border-[#707070D4]/80">
                            <TitleTag title="Video News" />
                            <div className="pr-3">
                                <button className="font-bold text-base text-white">Read more</button>
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
                        <div className='col-span-3 flex flex-col gap-y-4'>
                            <div className="flex justify-between items-center border-b   border-[#707070D4]/80">
                                <TitleTag title="Connect With Us" />
                            </div>
 </div>
                            <div className="grid grid-cols-2 py-2.5 gap-y-4 gapx-3">

                                {socialStats.map((stat, index) => (
                                    <div key={index} className="flex items-center gap-2.5">
                                        <div className={`p-2.5  rounded text-white ${stat.bgColor}`}>
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div className="text-base">{stat.followers}</div>
                                            <div className="text-xs ">Followers</div>
                                        </div>
                                    </div>
                                ))}

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
