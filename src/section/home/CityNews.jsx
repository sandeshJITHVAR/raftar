import H2 from '@/component/h2'
import Section from '@/component/section'
import Span from '@/component/span'
import TitleTag from '@/component/titletag'
import Image from 'next/image'
import React from 'react'

export default function CityNews() {

    const newsData = [
        {
            id: 1,
            title: "India's GDP Growth Hits Record High",
            date: "17th Feb, 2025",
            author: "Rajesh Sharma",
        },
        {
            id: 2,
            title: "Lok Sabha Elections: Voter Turnout Surges",
            date: "17th Feb, 2025",
            author: "Priya Mehta",
        },
        {
            id: 3,
            title: "ISRO Launches New Space Mission",
            date: "17th Feb, 2025",
            author: "Ankit Verma",
        },
        {
            id: 4,
            title: "Cricket: India Defeats Australia In Final",
            date: "17th Feb, 2025",
            author: "Rajesh Sharma",
        },
    ];



    return (
        <>
            <Section  border={true}>
                <div className='grid grid-cols-12 gap-y-6  gap-x-[10px]'>
                    <div className=' col-span-12 lg:col-span-9'>
                        <div className="flex justify-between items-center border-b   border-tertiary/50">
                            <TitleTag title="Web Stories" />
                            <div className="pr-3  gap-7 text-base hidden lg:flex">
                                <h1>Utter-Pradesh</h1>
                                <h1>Jharkand</h1>
                                <h1>Bihar</h1>
                                <h1>Madhya-Pradesh</h1>
                                <h1>Delhi</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 mt-7 gap-y-4 xl:gap-x-[10px]">


                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-y-3 md:gap-y-8 gap-x-[10px]">
                                {[1, 2,].map((items, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-3 "
                                    >
                                        <Image
                                            height={199}
                                            width={199}
                                            src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            alt="banner"
                                            className="w-full h-[161px] object-cover"
                                        />
                                        <H2 text="Mumbai Metro Expands: New Route to Ease Traffic Woes" />
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 h-fit gap-x-2.5 gap-y-5">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-2 pb-3 cursor-pointer border-b border-tertiary/50"
                                    >
                                        <Image
                                            height={199}
                                            width={199}
                                            src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            alt="banner"
                                            className="w-[128px] h-[72px] lg:w-[96px] lg:h-[54px] object-cover"
                                        />
                                        <div className="flex-1">
                                            <H2 text="Mumbai Metro Expands: New Route to Ease Traffic Woes" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className=' col-span-12 lg:col-span-3 flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-3'>
                            <div className='flex flex-col gap-y-1'>
                                <h2 className="text-secondary font-bold text-2xl" style={{ fontFamily: 'Merriweather' }}>
                                    Latest News <span className="text-black">Now</span>
                                </h2>
                                <hr className="border-t-2  border-secondary " />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png" // Replace with actual image URL
                                    alt="News Highlight"
                                    width={500}
                                    height={300}
                                    className="h-[250px] w-full object-cover"
                                />
                            </div>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4">
                            {newsData.map((news, index) => (
                                <li key={news.id} className="">
                                    <div className='flex gap-4 '>
                                        <span className="text-gray-500 font-bold italic text-xl">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <H2 text={news.title} />
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                                        <div className='w-8 h-[1px] bg-gray-500 ' />
                                        <Span text="17th Feb, 2025, Rajesh Sharma" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    )
}
