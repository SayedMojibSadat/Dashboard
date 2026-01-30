import { TbDashboardFilled } from "react-icons/tb";

function Header() {
    return (
        <div className='h-1/9 w-full flex bg-neutral-800'>
            <div className='h-full w-1/4 p-2'>
                <div className='h-full w-full hover:bg-[#73737340] transition-all duration-300 cursor-pointer p-2 rounded-xl flex flex-row items-center justify-start'>
                    <TbDashboardFilled className='text-blue-500 text-5xl' />
                    <span className='ml-2 font-bold text-xl text-stone-400'>Dashboard</span>
                </div>
            </div>
            <div className='h-full w-3/4'>
                <h3 className='text-2xl text-white mt-8'>Dashboard</h3>
            </div>
        </div>
    )
}

export default Header