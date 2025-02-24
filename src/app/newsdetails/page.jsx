'use client'
import { useState } from 'react';
import Section from '@/component/section';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/section-components/Banner';
import Button from '@/component/button';
import NextStories from '@/section/autherprofile/NextStories';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { WiTime2 } from "react-icons/wi";
import { FaRegComment } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram, } from 'react-icons/fa';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaQuoteRight } from "react-icons/fa";
import RightSide from '@/section/news-details/RightSide';
import Comments from '@/section/autherprofile/Comments';
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

export default function page() {

    const [comments, setComments] = useState([
        {
            id: 1,
            author: "John Doe",
            content: "Is a seasoned journalist with over 10 years of experience covering politics, business, and cultural affairs in India. Passionate about bringing factual and engaging news to readers, he specializes in in-depth reporting and analysis.",
            likes: 10,
            dislikes: 1,
            timeAgo: "6hr ago",
            avatar: "/assets/banner/d639d993708863451867f2935a00537d.jpg",
            replies: [
                {
                    id: 11,
                    author: "Jane Smith",
                    content: "Is a seasoned journalist with over 10 years of experience covering politics, business, and cultural affairs in India. Passionate about bringing factual and engaging news to readers, he specializes in in-depth reporting and analysis.",
                    likes: 5,
                    dislikes: 0,
                    timeAgo: "5hr ago",
                    avatar: "/assets/banner/d639d993708863451867f2935a00537d.jpg",
                }
            ]
        },
        {
            id: 2,
            author: "Razaq Brown",
            content: "Is a seasoned journalist with over 10 years of experience covering politics, business, and cultural affairs in India. Passionate about bringing factual and engaging news to readers, he specializes in in-depth reporting and analysis.",
            likes: 8,
            dislikes: 2,
            timeAgo: "4hr ago",
            avatar: "/assets/banner/d639d993708863451867f2935a00537d.jpg",
            replies: []
        },
        {
            id: 3,
            author: "Alex Johnson",
            content: "Is a seasoned journalist with over 10 years of experience covering politics, business, and cultural affairs in India. Passionate about bringing factual and engaging news to readers, he specializes in in-depth reporting and analysis.",
            likes: 15,
            dislikes: 0,
            timeAgo: "3hr ago",
            avatar: "/assets/banner/d639d993708863451867f2935a00537d.jpg",
            replies: [
                {
                    id: 31,
                    author: "Emily Clark",
                    content: "Is a seasoned journalist with over 10 years of experience covering politics, business, and cultural affairs in India. Passionate about bringing factual and engaging news to readers, he specializes in in-depth reporting and analysis.",
                    likes: 7,
                    dislikes: 1,
                    timeAgo: "2hr ago",
                    avatar: "/assets/banner/d639d993708863451867f2935a00537d.jpg",
                }
            ]
        }
    ]);

    const socialMedia = [
        { icon: <SlSocialFacebook />, link: 'https://facebook.com', name: 'Facebook' },
        { icon: <FaWhatsapp />, link: 'https://whatsapp.com', name: 'WhatsApp' },
        { icon: <FaInstagram />, link: 'https://instagram.com', name: 'Instagram' },
        { icon: <SlSocialLinkedin />, link: 'https://linkedin.com', name: 'LinkedIn' },
    ];

    const [showAll, setShowAll] = useState(false);
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <main>
                <Section >
                    <div className="grid grid-cols-12 gap-y-8 gap-[10px] grid-rows-1">
                        <div className="col-span-12 lg:col-span-9 flex flex-col gap-5 lg:py-2.5 lg:pr-2">
                            <div className='flex flex-col gap-6 md:gap-7'>
                                <div className='flex flex-col gap-4'>

                                    <h1 className=' text-[30px] md:text-[42px] font-bold lexding-[40px] md:leading-[52px] lg:text-balance'
                                        style={{ fontFamily: 'Merriweather' }}>Ayodhya’s Ram Temple Nears Completion, Grand Inauguration Planned </h1>

                                    <div>
                                        <div className="py-3.5 gap-y-4 gap-x-6 flex items-center flex-wrap border-t border-tertiary/50">
                                            <div className="px-4 py-1   text-white rounded-br-[66px]  rounded-tl-[66px]  bg-primary">
                                                <h1 className="font-normal text-sm">Rigion </h1>
                                            </div>

                                            <h1 className='text-sm font-normal '>By  <span className=' underline underline-offset-[16%]'>Rajesh Samjah</span> </h1>

                                            <div className=' flex gap-1 items-center'>
                                                <span className="text-base"><WiTime2 /></span>
                                                <h1 className='text-sm font-normal'>2mins Read</h1>
                                            </div>

                                            <div className=' flex gap-1 items-center'>
                                                <span className="text-sm"><FaRegCalendar /></span>
                                                <h1 className='text-sm font-normal'>17 Feb, 2025</h1>
                                            </div>
                                            <div className=' flex gap-1 items-center'>
                                                <span className="text-base"><IoEyeOutline /></span>
                                                <h1 className='text-sm font-normal'>100</h1>
                                            </div>

                                            <div className=' flex gap-1 items-center'>
                                                <span className="text-sm"><FaRegComment /></span>
                                                <h1 className='text-sm font-normal'>2</h1>
                                            </div>
                                        </div>

                                        <div className="py-2.5 flex gap-2.5 items-center border-t border-tertiary/50">
                                            <h1 className="text-base font-semibold">Share</h1>

                                            <div className="flex gap-1.5 lg:gap-2.5">
                                                {socialMedia.map((social, index) => {
                                                    return (
                                                        <div key={index} className='border text-sm md:text-base border-tertiary/50 rounded-full p-1.5 md:p-2.5'>
                                                            <Link
                                                                href={social.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="hover:opacity-80 cursor-pointer"
                                                                aria-label={social.name}
                                                            >
                                                                {social.icon}
                                                            </Link>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-4">
                                    <Image
                                        height={199}
                                        width={199}
                                        src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                        alt="banner"
                                        className="w-full h-[503px]  object-cover rounded-xl"
                                    />

                                    <div className='flex flex-col gap-2.5 py-2.5'>
                                        <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>

                                        <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>
                                    </div>
                                </div>
                                <Banner />
                                <div className="border-l-[2px] md:border-l-4 xl:border-l-[6px] border-primary flex gap-1 lg:gap-2.5 py-1 px-2.5 text-xl  lg:text-2xl font-semibold">
                                    <h1 className="text-primary">Read More:</h1>
                                    <h3 className="underline underline-offset-[16%] ">India’s Future Classrooms – AI in Education</h3>
                                </div>
                                <div className='flex flex-col gap-2.5 py-2.5'>
                                    <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>

                                    <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>
                                </div>

                                {showMore ? (
                                    <>
                                        <Banner />
                                        <div className='flex flex-col gap-2.5 py-2.5'>
                                            <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>

                                            <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>
                                        </div>

                                        <div className="border-l-[2px] md:border-l-4 xl:border-l-[6px] border-primary flex gap-1 lg:gap-2.5 py-1 px-2.5 text-xl  lg:text-2xl font-semibold">
                                            <h1 className="text-primary">Read More:</h1>
                                            <h3 className="underline underline-offset-[16%] ">India’s Future Classrooms – AI in Education</h3>
                                        </div>
                                        <div className='flex flex-col gap-2.5 py-2.5'>
                                            <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>

                                            <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>
                                        </div>

                                        <div className='flex flex-col gap-2.5'>
                                            <h1 className="text-xl font-semibold">Odio non accumsan sollicitudin.</h1>
                                            <p className='text-base font-normal'>Mus Ridiculus rhoncus odio mus ridiculus dapibus ligula ante tellus penatibus ridiculus lectus sociosqu sodales metus ridiculus ac arcu. Auctor sit hymenaeos conubia. Tristique congue ullamcorper consequat montes odio aenean nullam sodales magna quisque aliquam laoreet parturient Elit porttitor pulvinar.</p>

                                            <div className="flex flex-col md:flex-row gap-2.5 py-2.5">
                                                <Image
                                                    height={199}
                                                    width={199}
                                                    src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                                    alt="banner"
                                                    className="w-full md:w-[289px] h-[186px]  object-cover"
                                                />

                                                <div className="flex flex-col gap-2.5 md:px-2.5">
                                                    <p className='text-base font-normal'>Mus Ridiculus rhoncus odio mus ridiculus dapibus ligula ante tellus penatibus ridiculus lectus sociosqu sodales metus ridiculus ac arcu. Auctor sit hymenaeos conubia. Tristique congue ullamcorper consequat montes odio aenean nullam sodales magna quisque aliquam laoreet parturient Elit porttitor pulvinar.</p>

                                                    <p className='text-base font-normal'>Mus Ridiculus rhoncus odio mus ridiculus dapibus ligula ante tellus penatibus ridiculus lectus sociosqu sodales metus ridiculus ac arcu. Auctor sit hymenaeos conubia. Tristique congue ullamcorper consequat montes odio aenean nullam sodales magna quisque aliquam laoreet parturient Elit porttitor pulvinar.</p>
                                                </div>
                                            </div>


                                        </div>

                                        <Banner />


                                        <div className="border-l-[2px] md:border-l-4 xl:border-l-[6px] border-primary flex gap-1 lg:gap-2.5 py-1 px-2.5 text-xl  lg:text-2xl font-semibold">
                                            <h1 className="text-primary">Read More:</h1>
                                            <h3 className="underline underline-offset-[16%] ">India’s Future Classrooms – AI in Education</h3>
                                        </div>

                                        <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>

                                        <Image
                                            height={199}
                                            width={199}
                                            src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                            alt="banner"
                                            className="w-full h-[496px]  object-cover"
                                        />

                                        <p className='text-base font-normal'>The long-awaited Ram Temple in Ayodhya is nearing completion, with preparations underway for a grand inauguration ceremony. The temple, considered a historic and cultural landmark, is expected to attract millions of devotees from across India and beyond.</p>

                                    </>
                                ) : (
                                    <div className="flex justify-center">
                                        <button onClick={() => setShowMore(true)}>
                                            <Button title="Read More" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="mt-5">
                                <NextStories />
                            </div>

                            <div className=" max-w-[728px] mx-auto flex flex-col gap-2.5 h-fit py-6 px-2.5 text-center bg-[#F0F0F0]">
                                <div className="flex justify-center">
                                    <span className="text-xl font-bold"><FaQuoteRight /></span>
                                </div>
                                <p className="text-black text-lg lg:text-xl text-balance text-normal">
                                    R Sit Hymenaeos Conubia. Tristique Congue Ullamcorper Consequat Montes Odio Aenean Nullam Sodales Magna Quisque Aliquam Laoreet Parturient Elit Porttitor Pulvin
                                </p>
                            </div>

                            <div className='flex flex-col gap-2.5'>

                                <h1 className="text-xl font-semibold">Odio non accumsan sollicitudin.</h1>
                                <p className='text-base font-normal'>Mus Ridiculus rhoncus odio mus ridiculus dapibus ligula ante tellus penatibus ridiculus lectus sociosqu sodales metus ridiculus ac arcu. Auctor sit hymenaeos conubia. Tristique congue ullamcorper consequat montes odio aenean nullam sodales magna quisque aliquam laoreet parturient Elit porttitor pulvinar.</p>
                            </div>

                            {/* <div> */}
                            <div className="py-4 flex flex-col gap-2 border-t border-tertiary/50">
                                <h1 className="text-xl font-semibold" style={{ fontFamily: 'Merriweather' }}>Tag</h1>

                                <div className="flex flex-wrap gap-1.5">
                                    {[1, 2, 3, 4].map((social, index) => {
                                        return (
                                            <div key={index} className='border text-sm border-tertiary/50 py-3 px-4'>
                                                <h1>Related Tag</h1>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="w-full h-1 border-t border-tertiary/50" />

                            <div className="  py-2.5 flex flex-col md:flex-row gap-2.5 items-center">
                                <div className="flex-1 flex flex-col gap-2.5 h-fit py-6 px-2.5 text-center bg-[#F0F0F0]">
                                    <div className="flex justify-center">
                                        <span className="text-xl font-bold"><FaQuoteRight /></span>
                                    </div>
                                    <p className="text-black text-lg lg:text-xl text-balance text-normal">
                                        R Sit Hymenaeos Conubia. Tristique Congue Ullamcorper Consequat Montes Odio Aenean Nullam Sodales Magna Quisque Aliquam Laoreet Parturient Elit Porttitor Pulvin
                                    </p>
                                </div>
                                <Image
                                    height={199}
                                    width={199}
                                    src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                                    alt="banner"
                                    className="w-[289px] h-[181px]  object-cover"
                                />
                            </div>

                            {/* Navigation Section */}
                            <div className="flex justify-between gap-2.5 items-center">
                                <div className="flex flex-col gap-2.5 items-start  border-r p-2.5 border-tertiary/50">
                                    <div className="text-secondary gap-2 md:gap-6  text-base flex items-center">
                                        <span className="text-xl">< LuMoveLeft /></span>
                                        <h1>
                                            Previous article
                                        </h1>
                                    </div>

                                    <p className="  text-sm md:text-base text-black">
                                        Tristique Congue Ullamcorper Consequat Montes Odio Aenean Nullam Sodales
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2.5 items-start  p-2.5">
                                    <div className="w-full flex justify-end">
                                        <div className="text-secondary gap-2 md:gap-6 text-base flex  items-center">
                                            <h1>
                                                Previous article
                                            </h1>
                                            <span className="text-xl">< LuMoveRight /></span>
                                        </div>
                                    </div>
                                    <p className=" text-sm md:text-base text-black">
                                        Tristique Congue Ullamcorper Consequat Montes Odio Aenean Nullam Sodales
                                    </p>
                                </div>
                            </div>


                            <div className='flex gap-2 flex-col py-4 border-t border-tertiary/50 '>

                                <h1 className="text-xl font-semibold" style={{ fontFamily: 'Merriweather' }}>Auther</h1>

                                <div className='flex gap-1.5'>
                                    <Image
                                        src='/assets/banner/d639d993708863451867f2935a00537d.jpg'
                                        alt='banner'
                                        className="w-[64px] h-[64px]  rounded-full object-cover"
                                        width={100}
                                        height={100}
                                        priority
                                    />

                                    <div className='flex flex-1 flex-col gap-1.5'>
                                        <h1 className='text-base font-semibold'>Rajesh Samjah</h1>
                                        <p className='text-sm font-normal '>Is a seasoned journalist with over 10 years of experience covering politics, business, and cultural affairs in India. Passionate about bringing factual and engaging news to readers, he specializes in in-depth reporting and analysis.</p>
                                    </div>
                                </div>
                            </div>

                            {/* </div> */}
                            <div className="flex flex-col gap-5 py-2.5">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2.5">

                                        <h1 className="text-xl font-semibold" style={{ fontFamily: 'Merriweather' }}>Comments</h1>
                                        <span className="bg-primary text-white rounded-full p-2  text-xl">
                                            10
                                        </span>
                                    </div>
                                    <div className="flex  px-2.5">
                                        <button className="bg-red-600 text-base text-white px-3 py-2">Newest</button>
                                        <button className="bg-white text-base border border-black text-black px-3 py-2 ">Popular</button>
                                    </div>
                                </div>

                                <div>
                                    {comments.slice(0, showAll ? comments.length : 1).map((comment) => (
                                        <Comments key={comment.id} comment={comment} />
                                    ))}
                                </div>

                                {!showAll && comments.length > 1 && (
                                    <button
                                        onClick={() => setShowAll(true)}
                                        className="bg-primary text-white w-fit text-base font-semi-bold  rounded py-2 px-5" >
                                        Read more
                                    </button>
                                )}


                            </div>
                            <div className="flex flex-col gap-6">
                                <h1 className="text-xl font-semibold" style={{ fontFamily: 'Merriweather' }}>Leave The Comments</h1>

                                <div className="grid grid-cols-2 gap-y-5 gap-x-2.5">

                                    <input type="text"
                                        className="px-3 py-4 col-span-2 sm:col-span-1 border border-tertiary/50 rounded placeholder:text-base placeholder:text-black outline-none ring-0"
                                        placeholder="Your name" />


                                    <input type="email"
                                        className="px-3 py-4 col-span-2 sm:col-span-1 border border-tertiary/50 rounded placeholder:text-base placeholder:text-black outline-none ring-0"
                                        placeholder="Email Address" />

                                    <textarea
                                        rows="4"
                                        className="col-span-2 px-3 py-4 border border-tertiary/50 rounded placeholder:text-base placeholder:text-black outline-none ring-0 h-auto"
                                        placeholder="Comment*"
                                    />


                                </div>

                                <button className="bg-primary text-white w-fit text-base font-normal  rounded py-4 px-8">Post Comment</button>
                            </div>
                        </div>

                        <div className='col-span-12 lg:col-span-3'>
                            <RightSide />
                        </div>
                    </div>
                </Section>
            </main>
        </>
    )
}