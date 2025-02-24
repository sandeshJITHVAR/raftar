import React from 'react'

import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";

export default function SocialMediaOften() {
    return (
        <>
            <div className="flex flex-col gap-y-[6px]">
                <div className='py-3 px-4 border border-tertiary/50 flex items-center gap-2.5'>
                    <span><FaThumbsUp /></span>
                    <h1 className='text-xs font-medium'>Yes</h1>
                </div>

                <div className='py-3 px-4 border border-tertiary/50 flex items-center gap-2.5'>
                    <span><FaThumbsDown /></span>
                    <h1 className='text-xs font-medium'>No</h1>
                </div>

                <div className='py-2 px-4 border border-tertiary/50 flex items-center gap-2.5'>
                    <span>🙄</span>
                    <h1 className='text-xs font-medium'>I'm Not Sure</h1>
                </div>
            </div>
        </>
    )
}
