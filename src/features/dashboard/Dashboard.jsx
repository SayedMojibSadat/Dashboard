import React, { Children, useState } from 'react'
import { TbDashboardFilled, TbLayoutDashboardFilled } from "react-icons/tb";
import { HiInboxArrowDown } from "react-icons/hi2";
import { BsCoin } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineElectricBolt } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import SideSelect from './components/SideSelect';
import SideButtons from './components/SideButtons';

function Dashboard() {

    const [activeIndex, setActiveIndex] = useState(0)

    const sideButtons = [
        {
            title: 'Overview',
            icon: <TbLayoutDashboardFilled className='text-2xl' />
        },
        {
            title: 'Leads',
            icon: <HiInboxArrowDown className='text-2xl' />
        },
        {
            title: 'Transactions',
            icon: <BsCoin className='text-2xl' />
        },
        {
            title: 'Analytics',
            icon: <SiGoogleanalytics className='text-2xl' />
        },
        {
            title: 'Integrations',
            icon: <MdOutlineElectricBolt className='text-2xl' />
        },
        {
            title: 'Calendar',
            icon: <IoCalendar className='text-2xl' />
        },
        {
            title: 'Overview',
            icon: <TbLayoutDashboardFilled className='text-2xl' />,
            options: [
                {
                    title: 'title_1',
                    icon: <MdOutlineElectricBolt className='text-2xl' />
                },
                {
                    title: 'title_2',
                    icon: <MdOutlineElectricBolt className='text-2xl' />
                },
                {
                    title: 'title_3',
                    icon: <MdOutlineElectricBolt className='text-2xl' />
                },
            ]
        },
    ]

    // const sideSelects = [
        // {
        //     title: 'Leads',
        //     icon: <HiInboxArrowDown className='text-2xl' />,
        //     options: [
        //         {
        //             title: 'title_1',
        //             icon: <MdOutlineElectricBolt className='text-2xl' />
        //         },
        //         {
        //             title: 'title_2',
        //             icon: <MdOutlineElectricBolt className='text-2xl' />
        //         },
        //         {
        //             title: 'title_3',
        //             icon: <MdOutlineElectricBolt className='text-2xl' />
        //         },
        //     ]
        // },
        // {
        //     title: 'Transactions',
        //     icon: <BsCoin className='text-2xl' />,
        //     options: [
        //         {
        //             title: 'title_1',
        //             icon: <MdOutlineElectricBolt className='text-2xl' />
        //         },
        //         {
        //             title: 'title_2',
        //             icon: <MdOutlineElectricBolt className='text-2xl' />
        //         },
        //         {
        //             title: 'title_3',
        //             icon: <MdOutlineElectricBolt className='text-2xl' />
        //         },
        //     ]
        // },
    // ]

    return (
        <div className='h-screen w-full bg-neutral-900'>

            {/* ================= Header ================= */}
            <div className='h-1/9 w-full flex bg-neutral-800'>
                <div className='h-full w-1/4 p-2'>
                    <div className='h-full w-full hover:bg-[#73737340]
                    transition-all duration-300 cursor-pointer
                    p-2 rounded-xl flex flex-row items-center justify-start'>
                        <TbDashboardFilled className='text-blue-500 text-5xl' />
                        <span className='ml-2 font-bold text-xl text-stone-400'>
                            Dashboard
                        </span>
                    </div>
                </div>
                <div className='h-full w-3/4'></div>
            </div>

            {/* ================= Section ================= */}
            <div className='h-8/9 w-full flex flex-row'>

                {/* ================= Aside ================= */}
                <div className='h-full w-1/4 bg-neutral-800 p-3 pt-5 flex flex-col gap-1'>

                    {sideButtons &&
                        sideButtons.map((item, index) => (
                            <SideButtons
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                active={activeIndex === index}
                                options= { item.options && item.options } 
                                onClick={() => setActiveIndex(index)}
                            />
                        ))
                    }
                    {/* {sideSelects &&
                        sideSelects.map((item, index) => (
                            <SideSelect
                                key={index + sideButtons.length}
                                icon={item.icon}
                                title={item.title}
                                options={item.options}
                                onClick={() => setActiveIndex(index + sideButtons.length)}
                            />
                        ))
                    } */}

                </div>

                {/* ================= Content ================= */}
                <div className='h-full w-3/4'></div>

            </div>
        </div>
    )
}

export default Dashboard
