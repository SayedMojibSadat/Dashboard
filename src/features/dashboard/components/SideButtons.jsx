import React from 'react'
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

function SideButtons({ icon, title, active, onClick, options }) {
    return (
        <>
            {options ?
                <div
                    onClick={onClick}
                    className={`w-full hover:bg-[#73737340]
                    ${active ? 'bg-[#73737340]' : ''}
                    text-neutral-400 transition-all duration-300
                    cursor-pointer rounded-lg flex`}
                >
                    <div className={`h-full rounded-l w-1 mr-2 ${active ? 'bg-blue-500' : ''}`}></div>

                    <div className='w-full flex flex-col'>
                        <div className='h-10 flex flex-row items-center justify-between'>
                            <div className='flex flex-row h-full items-center justify-start'>
                                {icon}
                                <span className='ml-2 font-bold text-sm'>{title}</span>
                            </div>
                            <span className='pr-4'>{active ? <RiArrowUpSLine size={25} /> : <RiArrowDownSLine size={25} />}</span>
                        </div>

                        {active && (
                            <div className='flex flex-col pt-2 gap-1'>
                                {options.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            item.onClick && item.onClick()
                                        }}
                                        className='h-10 w-full hover:bg-[#73737340]
                                    cursor-pointer rounded-lg flex items-center'
                                    >
                                        <div className='h-full w-1 mr-2'></div>
                                        {item.icon}
                                        <span className='ml-2 font-bold text-sm'>
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                :
                <div
                    onClick={onClick}
                    className={`h-10 w-full hover:bg-[#73737340]
                        ${active ? 'bg-[#73737340]' : ''}
                        text-neutral-400 transition-all duration-300
                        cursor-pointer rounded-lg flex items-center`}
                >
                    <div className={`h-full rounded-l w-1 mr-2 ${active ? 'bg-blue-500' : ''}`}></div>
                    {icon}
                    <span className='ml-2 font-bold text-sm'>{title}</span>
                </div>
            }
        </>
    )
}

export default SideButtons
