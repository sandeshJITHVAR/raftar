import Button from '@/component/button'
import H2 from '@/component/h2'
import Section from '@/component/section'
import Span from '@/component/span'
import TitleTag from '@/component/titletag'
import Advertis from '@/section-components/Advertis'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Videostoris3() {

    return (
        <>
            <Section banner={true} border={true}>
                <div className='grid grid-cols-12 gap-y-6  gap-x-[10px]'>
                    <div className='grid gap-8 col-span-12 lg:col-span-9'>
                        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 h-fit gap-x-3 gap-y-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                                    <div className="flex cursor-pointer pb-2 md:pb-3 h-full  border-b border-tertiary/50" key={index}>
                                        <Image
                                            width={128}
                                            height={72}
                                            src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            alt="banner"
                                            className="w-[128px] md:h-[72px] aspect-w-16 aspect-h-9  object-cover"
                                        />
                                        <div className="pl-2">
                                            <h3 className='text-sm md:text-base font-semibold md:leading-[21.79px] tracking-wide'>
                                                <Link href='/newsdetails'> How Online Learning is Changing Rural India </Link>
                                            </h3>
                                            <div className="flex items-center gap-1 mt-1 md:mt-2">
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

