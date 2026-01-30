import React, { act } from 'react'

function SideButtons({ icon, title, active, onClick, options }) {
    return (
        <>
            {options ?
                < div
                    onClick={onClick}
                    className={`${active ? 'h-10' : 'h-fit'} w-full hover:bg-[#73737340] text-neutral-400 transition-all duration-300 cursor-pointer rounded-lg`}
                >
                    <div className='h-10 flex flex-row items-center justify-between'>
                        <div className='flex flex-row h-full items-center justify-start'>
                            <div className={`h-full w-1 rounded-br rounded-tr mr-2`}></div>
                            {icon}
                            <span className='ml-2 font-bold text-sm'>{title}</span>
                        </ div>
                        <span className='pr-4'>{active ? '⩓' : '⩔'}</span>
                    </div>
                    {active &&
                        <div className={`h-fit flex flex-col pt-2 gap-1`}>
                            {options &&
                                options.map((item, index) => (
                                    <div
                                        onClick={item.onClick}
                                        className={`h-10 w-full hover:bg-[#73737340] ${active ? 'bg-[#73737340]' : ''} text-neutral-400 transition-all duration-300 cursor-pointer rounded-lg flex flex-row items-center justify-start`}
                                    >
                                        <div className={`h-full w-1 rounded-br rounded-tr mr-2 ${active ? 'bg-blue-500' : ''}`}></div>
                                        {item.icon}
                                        <span className='ml-2 font-bold text-sm'>{item.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div >
                :
                <div
                    onClick={onClick}
                    className={`h-10 w-full hover:bg-[#73737340] ${active ? 'bg-[#73737340]' : ''} text-neutral-400 transition-all duration-300 cursor-pointer rounded-lg flex flex-row items-center justify-start`}
                >
                    <div className={`h-full w-1 rounded-br rounded-tr mr-2 ${active ? 'bg-blue-500' : ''}`}></div>
                    {icon}
                    <span className='ml-2 font-bold text-sm'>{title}</span>
                </div>
            }
        </>
    )
}

export default SideButtons