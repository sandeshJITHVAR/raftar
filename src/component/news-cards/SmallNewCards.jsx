import Image from 'next/image'
import React from 'react'

export default function SmallNewCards({image, title, date, author,}) {
    return (
            <div className="flex cursor-pointer pb-3 h-full  border-b border-tertiary/50" >
                <Image
                    height={199}
                    width={199}
                    src={image}
                    alt="banner"
                    className="w-[128px] h-[72px] object-cover
                      "
                />
                <div className="pl-2">
                    <h2 className='text-base font-semibold leading-[21.79px] tracking-wide'>{title}</h2>
                    <div className="flex items-center gap-1 mt-2  text-xs text-gray-500">
                        <div className="h-2 w-2 bg-secondary rotate-45" />
                        <div className='text-xs font-normal text-tertiary'>{date}, ${author}</div>
                    </div>
                </div>
            </div>
    )
}
