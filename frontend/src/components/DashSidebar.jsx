import {Sidebar} from 'flowbite-react'
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { BsFillClipboard2MinusFill,BsCheck2Circle,BsStars} from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { PiExamFill } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa6";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { MdRestorePage } from "react-icons/md";



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
    <Sidebar className='w-full md:w-60'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'user'} labelColor='dark'>
                Profile </Sidebar.Item></Link>
                <Link to='/dashboard?tab=dashboard'>
                <Sidebar.Item active={tab==='dashboard'} icon={BiSolidDashboard}>
                Dashboard</Sidebar.Item></Link>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
               
                <Link to='/dashboard?tab=test-series'>
                <Sidebar.Item active={tab==='test-series'} icon={BsFillClipboard2MinusFill}>
                Test Series</Sidebar.Item></Link>

                <Link to='/dashboard?tab=previous-year'>
                <Sidebar.Item active={tab==='previous-year'} icon={MdRestorePage}>
                Previous Year Papers</Sidebar.Item></Link>

                <Link to='/dashboard?tab=resources'>
                <Sidebar.Item active={tab==='resources'} icon={FaNewspaper}>
                Resources</Sidebar.Item></Link>
              
                <Link to='/dashboard?tab=free-quizes'>
                <Sidebar.Item active={tab==='free-quizes'} icon={PiExamFill}>
                Free Quizzes</Sidebar.Item></Link>

                <Link to='/dashboard?tab=practice'>
                <Sidebar.Item active={tab==='practice'} icon={PiClockCounterClockwiseBold}>
                Practice</Sidebar.Item></Link>

                <Link to='/dashboard?tab=attempted-tests'>
                <Sidebar.Item active={tab==='attempted-tests'} icon={BsCheck2Circle}>
                Attempted Tests</Sidebar.Item></Link>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=premium'>
                <Sidebar.Item active={tab==='premium'} icon={BsStars} label={'Pre'}>
                Premium</Sidebar.Item></Link>

                <Sidebar.Item  icon={HiArrowSmRight} className='cursor-pointer' >
                Sign Out</Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
