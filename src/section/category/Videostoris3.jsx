import Button from '@/component/button'
import H2 from '@/component/h2'
import Section from '@/component/section'
import Span from '@/component/span'
import TitleTag from '@/component/titletag'
import Advertis from '@/section-components/Advertis'
import Image from 'next/image'
import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Videostoris3() {

    return (
        <>
            <Section banner={true} border={true}>
                <div className='grid grid-cols-12 gap-y-6  gap-x-[10px]'>
                    <div className='grid gap-8 col-span-12 lg:col-span-9'>
                        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 h-fit gap-x-3 gap-y-3">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => (
                                <div
                                    key={index}
                                    className="flex gap-1 pb-3 cursor-pointer border-b row-span-1 border-tertiary/50"
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

                        <div className="flex justify-center">
                            <Button title='Read More' />
                        </div>
                    </div>

                    <div className=' col-span-12 lg:col-span-3 lg:px-1.5'>
                        <Advertis big={true} />
                    </div>
                </div>
            </Section>
        </>
    )
}

