import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

export default function Dashboard() {
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
    <div className='min-h-screen flex flex-col lg:flex-row'>
      <div className='w-auto'>
        {/* Sidebar*/}
        <DashSidebar/>
      </div>
      <div className='w-full '>
      { tab==='profile' && <DashProfile/>}
    
      </div>
      {/* profile  */}
    </div>
  )
}
