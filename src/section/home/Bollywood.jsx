import Section from '@/component/section'
import TitleTag from '@/component/titletag'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { TbPhoto } from "react-icons/tb";
export default function Bollywood() {
    return (
        <>
            <Section banner={true} border={true}>
                <div className="flex justify-between items-center border-b   border-tertiary/50">
                    <TitleTag title="Video News" />
                    <div className="pr-3">
                        <button className="font-bold text-base text-primary">Read more</button>
                    </div>
                </div>
                <div className='py-2.5 mt-2.5 grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-[10px]'>
                    <div className="h-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-y-6 gap-x-[10px] order-2 lg:order-1">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div key={index} className="flex flex-col gap-y-3">
                                <div className="relative">
                                    <Image
                                        height={185}
                                        width={186}
                                        src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                        alt="banner"
                                        className="w-full md:h-[106px] aspect-w-16 aspect-h-9   object-cover z-0"
                                    />
                                    <div className="absolute z-10 w-full h-fit  backdrop-blur-[3px] bottom-0 left-0 text-white px-4 py-2.5 flex items-center gap-2">
                                        <span>
                                            <TbPhoto />
                                        </span>
                                        <h1 className='text-xs font-normal'>4 Photos</h1>
                                    </div>
                                </div>
                                <Link href="/newsdetails" className="text-sm md:text-base font-semibold md:leading-[21.79px] tracking-wide">
                                    Deepika Padukone and Ranveer Singh Shine in Latest Love
                                </Link>
                            </div>
                        ))}
                    </div>



                    <div className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-6 gap-x-[10px] order-1 lg:order-2">
                        {[1, 2,].map((_, index) => (
                            <div key={index} className="flex flex-col gap-y-4">
                                <Image
                                    height={214}
                                    width={378}
                                    src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    alt="banner"
                                    className="w-full md:h-[214px] aspect-w-16 aspect-h-9   object-cover z-0"
                                />
                                <Link href="/newsdetails" className="text-sm md:text-base font-semibold md:leading-[21.79px] tracking-wide">
                                    Deepika Padukone and Ranveer Singh Shine in Latest Love Saga
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="h-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-y-6 gap-x-[10px] order-3">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div key={index} className="flex flex-col gap-y-3">
                                <div className="relative">
                                    <Image
                                        height={185}
                                        width={186}
                                        src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                        alt="banner"
                                        className="w-full md:h-[106px] aspect-w-16 aspect-h-9   object-cover z-0"
                                    />
                                    <div className="absolute z-10 w-full h-fit  backdrop-blur-[3px] bottom-0 left-0 text-white px-4 py-2.5 flex items-center gap-2">
                                        <span>
                                            <TbPhoto />
                                        </span>
                                        <h1 className='text-xs font-normal'>4 Photos</h1>
                                    </div>
                                </div>
                                <Link href="/newsdetails" className="text-sm md:text-base font-semibold md:leading-[21.79px] tracking-wide">
                                    Deepika Padukone and Ranveer Singh Shine in Latest Love
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}
