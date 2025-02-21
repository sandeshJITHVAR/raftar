import H2 from '@/component/h2';
import Section from '@/component/section'
import Span from '@/component/span';
import TitleTag from '@/component/titletag';
import React from 'react'
import { FiDivideCircle } from 'react-icons/fi';

export default function MoreStories() {

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
        {
            id: 5,
            title: "Cricket: India Defeats Australia In Final",
            date: "17th Feb, 2025",
            author: "Rajesh Sharma",
        },
    ];


    return (
        <>
            <Section banner={true} border={true}>
                <div className="flex flex-col gap-y-6">
                    <div className='flex justify-center'>
                        <TitleTag title="More Stories" />
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-5 gap-x-2">
                        {newsData.map((news, index) => (
                            <li key={news.id} className="flex gap-1 flex-col md:pr-1  md:border-r border-tertiary/50">
                                <div className='flex gap-2.5 '>
                                    <span className="text-gray-500 font-bold italic text-xl">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <H2 text={news.title} />
                                </div>
                                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                    <div className='w-6 h-[1px] bg-gray-500 ' />
                                    <Span text="17th Feb, 2025, Rajesh Sharma" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </Section>
        </>
    )
}
