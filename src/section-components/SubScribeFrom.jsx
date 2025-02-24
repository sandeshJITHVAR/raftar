import Button from '@/component/button'
import React from 'react'

export default function SubScribeFrom() {
  return (
    <>
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
    </>
  )
}
