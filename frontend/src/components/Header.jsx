import { useLocation, Link} from 'react-router-dom';
import { Button, Navbar, TextInput,Dropdown, Avatar } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon,FaSignOutAlt} from 'react-icons/fa';
import { MdLightMode } from "react-icons/md";
import {useSelector,useDispatch} from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';



function Header() {
    const path=useLocation().pathname;
    const dispatch=useDispatch();
    const {currentUser}=useSelector(state=> state.user);
    const {theme}=useSelector(state=> state.theme);
    const handleSignout= async()=>{
        try {
          const res= await fetch(`/api/user/signout`,{
            method:'POST',
        });
        const data=res.json();
        if(!res.ok){
          console.log(data.message);
        }else{
          dispatch(signoutSuccess());
        }
        } catch (error) {
          console.log(error.message);
        }
      }
    return (
        <Navbar className='border-b-2'>
            <Navbar.Toggle />
            <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white' ><span className='px-2 py-1 bg-gradient-to-r from-blue-200 via-cyan-500 to-blue-700 text-white rounded-md'>Jeca</span>Cracker</Link>
            <form>
                <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden md:inline' />
            </form>
            {/* <Button className='md:hidden self-center rounded-full' color='gray' >
                <AiOutlineSearch/>
            </Button> */}

            <div className='flex gap-2 md:order-1'>
                <Button className=' hidden md:inline' color='gray' pill onClick={()=> dispatch(toggleTheme())} >
                    {theme==='light'?<MdLightMode className='w-5 h-5'/>:<FaMoon />}
                </Button>
                { currentUser ? (
                    <Dropdown arrowIcon={false} inline label={<Avatar alt='user' img={currentUser.profilePicture} rounded/>}>
                        <Dropdown.Header>
                            <span className='block text-sm'>@{currentUser.username}</span>
                            <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                        </Dropdown.Header>
                        <Link to={'/dashboard?tab=dashboard'}>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider/>  
                        <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>                    
                    </Dropdown>
                ):
                (
                         <Link to='/signin'>
                         <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
                        </Link>
                )
            }
               
            </div>
            <Navbar.Collapse>
                    <Navbar.Link active={path === '/' }as={'div'} >
                        <Link to='/'>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/blogs'} as={'div'} >
                        <Link to='/blogs'>Blogs</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/rankers'} as={'div'} >
                        <Link to='/rankers'>Rankers</Link>
                    </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header