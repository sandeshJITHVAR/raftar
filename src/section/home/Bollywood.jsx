import Section from '@/component/section'
import TitleTag from '@/component/titletag'
import Image from 'next/image'
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
                    <div className="h-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-y-6 gap-x-[6px]">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div key={index} className="flex flex-col gap-y-3">
                                <div className="relative">
                                    <Image
                                        height={199}
                                        width={199}
                                        src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                        alt="banner"
                                        className="w-full h-[106px] object-cover z-0"
                                    />
                                    <div className="absolute z-10 w-full h-fit  backdrop-blur-[3px] bottom-0 left-0 text-white px-4 py-2.5 flex items-center gap-2">
                                        <span>
                                            <TbPhoto />
                                        </span>
                                        <h1 className='text-xs font-normal'>4 Photos</h1>
                                    </div>
                                </div>
                                <h1 className="text-base font-semibold ">
                                    Deepika Padukone and Ranveer Singh Shine in Latest Love
                                </h1>
                            </div>
                        ))}
                    </div>

                    <div className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-6 gap-x-[6px]">
                        {[1, 2,].map((_, index) => (
                            <div key={index} className="flex flex-col gap-y-4">
                                <Image
                                    height={199}
                                    width={199}
                                    src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    alt="banner"
                                    className="w-full h-[214px] object-cover z-0"
                                />
                                <h1 className="text-base font-semibold ">
                                    Deepika Padukone and Ranveer Singh Shine in Latest Love Saga
                                </h1>
                            </div>
                        ))}
                    </div>

                    <div className="h-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-y-6 gap-x-[6px]">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div key={index} className="flex flex-col gap-y-3">
                                <div className="relative">
                                    <Image
                                        height={199}
                                        width={199}
                                        src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                        alt="banner"
                                        className="w-full h-[106px] object-cover z-0"
                                    />
                                    <div className="absolute z-10 w-full h-fit  backdrop-blur-[3px] bottom-0 left-0 text-white px-4 py-2.5 flex items-center gap-2">
                                        <span>
                                            <TbPhoto />
                                        </span>
                                        <h1 className='text-xs font-normal'>4 Photos</h1>
                                    </div>
                                </div>
                                <h1 className="text-base font-semibold ">
                                    Deepika Padukone and Ranveer Singh Shine in Latest Love
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}
