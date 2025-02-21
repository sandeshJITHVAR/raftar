import Button from '@/component/button'
import TitleTag from '@/component/titletag'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Contactwithme() {

    const socialStats = [
        {
            platform: 'Facebook',
            followers: 1009,
            icon: <FaFacebookF />,
            bgColor: 'bg-[#1877F2]'
        },
        {
            platform: 'Instagram',
            followers: 1009,
            icon: <FaInstagram />,
            bgColor: 'bg-[#E1306C]'
        },
        {
            platform: 'YouTube',
            followers: 1009,
            icon: <FaYoutube />,
            bgColor: 'bg-[#FF0000]'
        },
        {
            platform: 'Twitter',
            followers: 1009,
            icon: <FaTwitter />,
            bgColor: 'bg-[#1DA1F2]'
        }
    ];
    
    return (
        <div className='flex flex-col gap-y-6   '>
            <div className='flex flex-col gap-y-4'>
                <div className="flex justify-between items-center ">
                    <TitleTag title="Connect With Us" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-6'>
                <div className="h-fit grid grid-cols-2  gap-y-4 gap-x-3">
                    {socialStats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-2.5">
                            <div className={`p-2.5  rounded text-white ${stat.bgColor}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <div className="text-base">{stat.followers}</div>
                                <div className="text-xs ">Followers</div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="bg-[#F2F2F2] flex flex-col gap-2.5 px-4 py-5 ">
                    <h2 className="text-lg font-bold">Subscribe To Updates</h2>
                    <p className=" text-xs">
                        Never miss a breaking story! Get daily updates on business, politics,
                        education, and more—straight to your inbox
                    </p>

                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full py-3 px-4 text-xs placeholder:text-[#707070D4] bg-white  focus:outline-none focus:ring-0 "
                    />
                    <button>
                        <Button title='Subscribe' widithfull={true} />
                    </button>
                </div>
            </div>
        </div>
    )
}
