"use client"
import { useState } from "react";
import Image from "next/image";
import H2 from '@/component/h2'
import Section from '@/component/section'
import TitleTag from '@/component/titletag'
import React from 'react'
import Link from "next/link";
import Advertis from "@/section-components/Advertis";

export default function CityNews() {
    const cities = ["Uttar-Pradesh", "Jharkhand", "Bihar", "Madhya-Pradesh", "Delhi"];
    const [activeCity, setActiveCity] = useState(cities[0]);


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
            <Section border={true}>
                <div className='grid grid-cols-12 gap-y-6  gap-x-[10px]'>
                    <div className=' col-span-12 lg:col-span-9 flex flex-col gap-8'>
                        <div className="flex justify-between items-center border-b  gap-2 border-tertiary/50">
                            <TitleTag title="Web Stories" />
                            <div className="pr-3 gap-2 lg:gap-7 text-base hidden xl:flex">
                                {cities.map((city) => (
                                    <h1
                                        key={city}
                                        className={`cursor-pointer text-lg ${activeCity === city ? "text-red-500 " : "text-black"
                                            }`}
                                        onClick={() => setActiveCity(city)}
                                    >
                                        {city}
                                    </h1>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-x-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-y-3 md:gap-y-8 gap-x-[10px]">
                                {[1, 2,].map((items, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-3 "
                                    >
                                        <Image
                                            height={161}
                                            width={296}
                                            src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            alt="banner"
                                            className="w-full md:h-[161px] aspect-w-16 aspect-h-9  object-cover"
                                        />
                                        <Link href='/newsdetails'> <H2 text="Mumbai Metro Expands: New Route to Ease Traffic Woes" /> </Link>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 h-fit gap-x-2.5 gap-y-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-2 pb-2 md:pb-3 cursor-pointer border-b border-tertiary/50"
                                    >
                                        <Image
                                            width={96}
                                            height={54}
                                            src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            alt="banner"
                                            className="w-[128px] lg:w-[96px]  h-[72px] lg:h-[54px] object-cover"
                                        />

                                        {/* <Image
                                                        width={96}
                                                        height={54}
                                                        src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                                        alt="banner"
                                                        className="md:w-[96px] md:h-[54px] aspect-w-16 aspect-h-9  object-cover"
                                                    /> */}
                                        <div className="flex-1">
                                            <Link href='/newsdetails'> <H2 text="Mumbai Metro Expands: New Route to Ease Traffic Woes" /> </Link>
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
                                    Treading<span className="text-black">Nows</span>
                                </h2>
                                <hr className="border-t-2  border-secondary " />
                            </div>
                            <div className="w-full">
                                <Advertis />
                            </div>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4">
                            {newsData.map((news, index) => (
                                <li key={news.id} className="">
                                    <div className='flex gap-4 '>
                                        <span className="text-gray-500 font-bold italic text-xl">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <Link href='/newsdetails'>
                                            <H2 text={news.title} />
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 md:mt-2 text-xs text-gray-500">
                                        <div className='w-9 h-[1px] bg-gray-500 ' />
                                        <span className='flex gap-1 text-xs font-normal text-tertiary'>
                                            17 Feb, 2025,
                                            <Link href='/autherprofile'>Sammy King</Link>
                                        </span>
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
