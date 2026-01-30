import React, { useState } from 'react'
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

function SideButtons({ icon, title, active, onClick, options, activeSubIndex, onSubClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!options) {
            onClick();
        }
    };

    return (
        <div className="flex flex-col w-full shrink-0">
            {options ? (
                <div className="w-full flex flex-col">
                    <div
                        onClick={handleToggle}
                        className={`h-10 w-full hover:bg-[#73737340] 
                        ${active && activeSubIndex === null ? 'bg-[#73737340]' : ''} 
                        text-neutral-400 transition-all duration-300
                        cursor-pointer rounded-lg flex items-center`}
                    >
                        <div className="h-full w-1 mr-2"></div>
                        <div className='flex flex-row items-center justify-between w-full pr-4'>
                            <div className='flex flex-row items-center'>
                                {icon}
                                <span className='ml-2 font-bold text-sm'>{title}</span>
                            </div>
                            <span>{isOpen ? <RiArrowUpSLine size={22} /> : <RiArrowDownSLine size={22} />}</span>
                        </div>
                    </div>

                    {isOpen && (
                        <div className='flex flex-col ml-4 border-l-2 mb-2 mt-1 pl-1 border-neutral-700 gap-1'>
                            {options.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onSubClick(index);
                                        if (item.onClick) item.onClick();
                                    }}
                                    className={`h-10 w-full hover:bg-[#73737340] transition-all duration-300
                                    ${activeSubIndex === index ? 'bg-[#73737340] text-neutral-200' : 'text-neutral-500'}
                                    cursor-pointer rounded-lg flex items-center`}
                                >
                                    <div className={`h-full rounded-l-lg w-1 mr-2 ${activeSubIndex === index ? 'bg-blue-500' : ''}`}></div>
                                    {item.icon}
                                    <span className='ml-2 font-bold text-sm'>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div
                    onClick={onClick}
                    className={`h-10 w-full shrink-0 hover:bg-[#73737340]
                        ${active ? 'bg-[#73737340]' : ''}
                        text-neutral-400 transition-all duration-300
                        cursor-pointer rounded-lg flex items-center`}
                >
                    <div className={`h-full rounded-l-lg w-1 mr-2 ${active ? 'bg-blue-500' : ''}`}></div>
                    {icon}
                    <span className='ml-2 font-bold text-sm'>{title}</span>
                </div>
            )}
        </div>
    )
}

export default SideButtons