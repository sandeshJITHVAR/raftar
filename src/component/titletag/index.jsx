import React from 'react'

export default function TitleTag({ title, bgblack }) {
    return (
        <>
            <div className={`px-[38px] py-1.5   text-white rounded-br-[66px]  rounded-tl-[66px]
                ${bgblack ? "bg-black" : "bg-primary"}`}>
                <h2 className="font-bold text-base">{title} </h2>
            </div>
        </>
    )
}
