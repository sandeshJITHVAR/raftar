import React from 'react'

export default function Button({widithfull, title}) {
    return (
        <div className={`${widithfull ? "w-full px-4" : "w-fit px-8"} text-center bg-secondary text-white py-3  text-xs  transition duration-200`}>
            {title}
        </div>
    )
}
