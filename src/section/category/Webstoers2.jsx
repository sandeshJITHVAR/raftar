"use client";
import Image from "next/image";
import TitleTag from "@/component/titletag";

export default function Webstoers2() {
    const stories = [
        { title: "India Defeats Australia In Thrilling Final", },
        { title: "Monsoon Rains Cause Severe Flooding", },
        { title: "Stock Market Surges As Sensex Crosses 75,000", },
        { title: "India Defeats Australia In Thrilling Final", },
        { title: "India Defeats Australia In Thrilling Final", },
        { title: "India Defeats Australia In Thrilling Final", },
    ];


    return (
        <>
            <section className='px-4 md:px-6 lg:px-8 py-8 border mb-2 border-tertiary/50' >
                <div className="flex justify-between items-center border-b border-tertiary/50">
                    <TitleTag title="Web stories" bgblack={true} />
                    <div className="pr-3">
                        <button className="font-bold text-base text-white">Read more</button>
                    </div>
                </div>
                <div className="relative mt-5  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-[16px] ">
                    {stories.map((items, index) => (
                        <div key={index} className="flex flex-col gap-[10px] overflow-hidden ">
                            <Image
                                src="/assets/banner/b3cb7acb1dd04f573ae4eff93409fc06.png"
                                alt={items.title}
                                width={300}
                                height={400}
                                className="h-[385px]   object-cover"
                            />
                            <h3 className="text-black font-bold leading-[21px] underline  underline-offset-[22%] text-base ">{items.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
