import Image from 'next/image'
import React from 'react'

export default function Advertis({ big }) {
    return (
        <>
            {
                big ? (
                    <Image
                        src="/assets/banner/d8d0845d5b7962d3bbf5d91748bae628.png" // Replace with actual image URL
                        alt="News Highlight"
                        width={500}
                        height={245}
                        className={`md:h-[500px] aspect-w-16 aspect-h-9   w-full object-cover`}
                    />
                ) : (
                    <Image
                        src="/assets/banner/d8d0845d5b7962d3bbf5d91748bae628.png" // Replace with actual image URL
                        alt="News Highlight"
                        width={250}
                        height={250}
                        className={`md:h-[250px] aspect-w-16 aspect-h-9  w-full object-cover`}
                    />
                )
            }
        </>
    )
}


