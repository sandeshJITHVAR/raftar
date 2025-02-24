import Image from 'next/image'
import React from 'react'

export default function Advertis({ big }) {
    return (
        <>
            <Image
                src="/assets/banner/b36149120248eaf2d18f1cdb91815095.png" // Replace with actual image URL
                alt="News Highlight"
                width={500}
                height={300}
                className={`${big ? "h-[500px] " : "h-[250px]"}  w-full object-cover`}
            />
        </>
    )
}


