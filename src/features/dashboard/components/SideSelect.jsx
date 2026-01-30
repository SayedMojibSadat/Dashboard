import React, { useState } from 'react'
import SideButtons from './SideButtons'

function SideSelect({ icon, title, active, onClick, options }) {

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div
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
            <div className='h-fit flex flex-col pt-2 gap-1'>
                {options &&
                    options.map((item, index) => (
                        <SideButtons
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            active={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SideSelect
