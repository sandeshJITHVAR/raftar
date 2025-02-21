"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import TitleTag from "@/component/titletag";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


export default function WebStories({ banner }) {
    const sliderRef = useRef(null);
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            { breakpoint: 1224, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 640, settings: { slidesToShow: 2 } },
        ],
    };


    const stories = [
        { title: "India Defeats Australia In Thrilling Final", },
        { title: "Monsoon Rains Cause Severe Flooding", },
        { title: "Stock Market Surges As Sensex Crosses 75,000", },
        { title: "India Defeats Australia In Thrilling Final", },
        { title: "India Defeats Australia In Thrilling Final", },
        { title: "India Defeats Australia In Thrilling Final", },
        { title: "India Defeats Australia In Thrilling Final", },
        { title: "India Defeats Australia In Thrilling Final", },
        { title: "India Defeats Australia In Thrilling Final", },
    ];

    return (
        <>

            <section className='px-4 md:px-6 lg:px-8 bg-primary ' >
                <div className='max-w-[1440px] mx-auto py-8'>

                    <div className="flex justify-between items-center border-b pb-3  border-secondary">
                        <TitleTag title="Web stories" bgblack={true} />
                        <div className="pr-3">
                            <button className="font-bold text-base text-white">Read more</button>
                        </div>
                    </div>
                    <Slider ref={sliderRef} {...settings} className="relative mt-5">
                        {stories.map((items, index) => (
                            <div key={index} className="px-1 2xl:px-0">
                                <div className="flex flex-col gap-[10px] overflow-hidden">
                                    <Image
                                        src="/assets/banner/b3cb7acb1dd04f573ae4eff93409fc06.png"
                                        alt={items.title}
                                        width={300}
                                        height={400}
                                        className="h-[385px] w-[221px] rounded-xl object-cover"
                                    />
                                    <h3 className="text-white font-bold leading-[21px] underline  underline-offset-[22%] text-base ">{items.title}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="flex justify-center space-x-4 mt-5">
                        <button
                            onClick={() => sliderRef.current?.slickPrev()}
                            className="p-2 md:p-4 text-base md:text-lg border-2 hover:border-0  hover:bg-black text-white duration-200   rounded-full"
                        >
                            <FaArrowLeftLong />
                        </button>
                        <button
                            onClick={() => sliderRef.current?.slickNext()}
                            className="p-2 md:p-4 text-base md:text-lg border-2 hover:border-0  hover:bg-black text-white duration-200   rounded-full"
                        >
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </section>

            {banner && (
                <div className='py-3 px-4 md:px-6 lg:px-8 flex justify-center max-w-6xl mx-auto'>
                    <Image
                        src='/assets/banner/103f61951fbc29bc7558c8eda8f86084.jpg'
                        alt='banner'
                        className="w-[728px] h-[95px]  object-cover"
                        width={200}
                        height={100}
                        priority />
                </div>
            )}

        </>
    );
}