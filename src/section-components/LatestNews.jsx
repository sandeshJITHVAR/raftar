import H2 from '@/component/h2';
import Advertis from './Advertis';
import Link from 'next/link';
export default function LatestNews() {
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
            <div className="flex flex-col gap-y-8">

                <div className='flex flex-col gap-y-6'>
                    <div className='flex flex-col gap-y-3'>
                        <h2 className="text-primary font-bold text-2xl" style={{ fontFamily: 'Merriweather' }}>
                            Latest News <span className="text-black">Now</span>
                        </h2>
                        <hr className="border-t-2  border-secondary " />
                    </div>
                    <Advertis />
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
        </>
    )
}
