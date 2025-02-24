'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaRegFaceSmile, FaThumbsUp } from "react-icons/fa6";
import { MdThumbDown } from "react-icons/md";


export default function Comments({ comment, level = 0 }) {
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    return (
        <div className={`pl-2.5 py-2.5  border-tertiary/50 ${level > 0 ? 'pl-9 mt-3' : 'border-b pb-4'}`}>
            <div className="flex flex-col items-start gap-2.5">
                <div className='flex flex-col gap-2.5 py-2.5'>
                    <div className='flex gap-2.5 items-center'>
                        <Image
                            src={comment.avatar}
                            alt={comment.author}
                            className="w-[48px] h-[48px] aspect-w-16 aspect-h-9 border-2 border-primary  rounded-full object-cover"
                            width={48}
                            height={48}
                            priority />
                        <div className="text-base flex-1 font-semibold">{comment.author}</div>
                    </div>
                    <p className="text-sm font-normal ">{comment.content}</p>
                </div>
                <div className='w-full'>
                    <div className="flex items-center gap-3 flex-wrap">
                        <span><FaRegFaceSmile /></span>

                        <div className='flex gap-2'>

                            <div className='bg-[#ECECEC99] flex gap-1 py-1.5 px-2.5 text-xs font-semibold items-center border border-black rounded-lg'>
                                <span><FaThumbsUp /></span>
                                {comment.likes}
                            </div>

                            <div className='bg-[#ECECEC99] flex gap-1 py-1.5 px-2.5 text-xs font-semibold  items-center border border-black rounded-lg'>
                                <span>< MdThumbDown /></span>
                                {comment.dislikes}
                            </div>
                        </div>

                        {(comment.replies || []).length > 0 && (
                            <button onClick={() => setShowReplies(!showReplies)} className="text-xs font-semibold">
                            ({comment.replies.length}) Comments
                        </button>
                    )}


                        <button onClick={() => setShowReplyInput(!showReplyInput)} className="text-xs font-semibold">Reply</button>
                    </div>
                    {showReplyInput && (
                        <div className=" flex gap-2.5 mt-2 py-2.5 w-full items-center">

                            <Image
                                src={comment.avatar}
                                alt={comment.author}
                                className="w-[48px] h-[48px] aspect-w-16 aspect-h-9 border-2 border-primary  rounded-full object-cover"
                                width={48}
                                height={48}
                                priority />
                            <input type="text" className="py-3 px-4 flex-1 text-base font-semibold placeholder:text-black placeholder:text-base rounded-lg border border-tertiary/50 p-2 w-full" placeholder="Write a reply..." />
                        </div>
                    )}
                    {showReplies && comment.replies.map((reply) => (
                        <Comments key={reply.id} comment={reply} level={level + 1} />
                    ))}
                </div>
            </div>
        </div>
    )
}
