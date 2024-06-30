import {Button, Sidebar} from 'flowbite-react'
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { BsFillClipboard2MinusFill,BsCheck2Circle,BsStars} from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { PiExamFill,PiSignOutBold,PiClockCounterClockwiseBold } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa6";
import { MdRestorePage } from "react-icons/md";
import { RiMenuUnfoldLine } from "react-icons/ri";




import { useEffect, useState } from 'react';
import { useLocation,Link } from 'react-router-dom';

export default function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlPrams = new URLSearchParams(location.search)
      const tabFormUrl = urlPrams.get('tab');
      if(tabFormUrl){
        setTab(tabFormUrl);
      }
    }, [location.search]);
  
  return (
    <Sidebar className={`w-auto flex lg:w-60 `}>
        <Sidebar.Items> 
            <Sidebar.ItemGroup className='w-full flex  items-baseline  overflow-auto scrollbar-hidden lg:overflow-hidden lg:flex-col lg:items-start' >
                <Link to='/dashboard?tab=profile' >
                <Sidebar.Item active={tab==='profile'} icon={HiUser} labelColor='dark' as='div' label={'user'}>
                Profile
                </Sidebar.Item></Link>
                <Link to='/dashboard?tab=dashboard' >
                <Sidebar.Item active={tab==='dashboard'} icon={BiSolidDashboard} as='div'>
                Dashboard
                </Sidebar.Item></Link>

                <Link to='/dashboard?tab=test-series' >
                <Sidebar.Item active={tab==='test-series'} icon={BsFillClipboard2MinusFill} as='div'>
                Test Series
                </Sidebar.Item></Link>

                <Link to='/dashboard?tab=previous-year' >
                <Sidebar.Item active={tab==='previous-year'} icon={MdRestorePage} as='div'>
                Previous Year Papers
                </Sidebar.Item></Link>

                <Link to='/dashboard?tab=resources'>
                <Sidebar.Item active={tab==='resources'} icon={FaNewspaper}  as='div'>
                Study Resources
                </Sidebar.Item></Link>
              
                <Link to='/dashboard?tab=free-quizes' >
                <Sidebar.Item active={tab==='free-quizes'} icon={PiExamFill} as='div'>
                Free Quizzes
                </Sidebar.Item></Link>

                <Link to='/dashboard?tab=practice' >
                <Sidebar.Item active={tab==='practice'} icon={PiClockCounterClockwiseBold} as='div'>
                Practice
                </Sidebar.Item></Link>

                <Link to='/dashboard?tab=attempted-tests' >
                <Sidebar.Item active={tab==='attempted-tests'} icon={BsCheck2Circle} as='div'>
                Attempted Tests
                </Sidebar.Item></Link>

                <Link to='/dashboard?tab=premium'>
                <Sidebar.Item active={tab==='premium'} icon={BsStars}  as='div' label={'Pre'} labelColor='blue'>
                Premium
                </Sidebar.Item></Link>

                <Sidebar.Item  icon={HiArrowSmRight} className='cursor-pointer' >
                Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}