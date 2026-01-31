import { useState } from 'react';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { HiInboxArrowDown } from "react-icons/hi2";
import { BsCoin } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineElectricBolt } from "react-icons/md";
import { IoCalendar, IoDocumentsSharp, IoDocumentSharp } from "react-icons/io5";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { HiMiniKey, HiMiniUsers, HiDocumentText } from "react-icons/hi2";
import { IoIosWarning, IoMdSettings } from "react-icons/io";
import { BsFillInboxesFill, BsTable } from "react-icons/bs";
import { RiCodeBoxFill } from "react-icons/ri";
import SideButtons from '../components/SideButtons';
import { useNavigate } from 'react-router';

function Aside() {
  const [activeId, setActiveId] = useState({ menu: 0, sub: null });

  const navigate = useNavigate();

 const sideButtons = [
  { title: 'Dashboard', icon: <TbLayoutDashboardFilled className='text-2xl' /> },
  { title: 'ComponentBar', icon: <HiInboxArrowDown className='text-2xl' /> },

  { title: 'Components', icon: <RiCodeBoxFill className='text-2xl' /> },
  { title: 'Analytics', icon: <SiGoogleanalytics className='text-2xl' /> },
  { title: 'Issues', icon: <IoIosWarning className='text-2xl' /> },
  { title: 'Deployments', icon: <MdOutlineElectricBolt className='text-2xl' /> },
  { title: 'Financials', icon: <BsCoin className='text-2xl' /> },
  { title: 'Engagement', icon: <FaUser className='text-2xl' /> },

  { title: 'Reports', icon: <HiDocumentText className='text-2xl' /> },
  { title: 'Tables', icon: <BsTable className='text-2xl' /> },
  { title: 'Calendar', icon: <IoCalendar className='text-2xl' /> },

  {
    title: 'Settings',
    icon: <IoMdSettings className='text-2xl' />,
    options: [
      { title: 'LogOut', icon: <RiLoginBoxFill className='text-[1.1rem]' /> },
      { title: 'Security', icon: <HiMiniKey className='text-[1.1rem]' /> },
      { title: 'Preferences', icon: <FaUser className='text-[1.1rem]' /> },
    ]
  }
];

  return (
    <div className='h-full w-1/4 overflow-y-auto min-h-0 custom-scrollbar bg-neutral-200 dark:bg-neutral-800 p-3 pt-5 flex flex-col gap-1'>
      {sideButtons.map((item, index) => (
        <SideButtons
          key={index}
          icon={item.icon}
          title={item.title}
          active={activeId.menu == index}
          activeSubIndex={activeId.menu == index ? activeId.sub : null}
          options={item.options}
          onClick={() => {
            if (!item.options) {
              setActiveId({ menu: index, sub: null });
            }
            navigate(`/app/${item.title.toLowerCase()}`);
          }}
          onSubClick={(subIndex) => setActiveId({ menu: index, sub: subIndex })}
        />
      ))}
    </div>
  );
}

export default Aside;