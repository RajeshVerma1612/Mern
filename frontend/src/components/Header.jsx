import { useLocation, Link} from 'react-router-dom';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';


function Header() {
    const path=useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <Navbar.Toggle/>
            <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white' ><span className='px-2 py-1 bg-gradient-to-r from-blue-200 via-cyan-500 to-blue-700 text-white rounded-md'>Jeca</span>Cracker</Link>
            <form>
                <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden md:inline' />
            </form>
            {/* <Button className='md:hidden self-center rounded-full' color='gray' >
                <AiOutlineSearch/>
            </Button> */}

            <div className='flex gap-2 md:order-1'>
                <Button className=' hidden md:inline' color='gray' pill >
                    <FaMoon />
                </Button>
                <Link>
                    <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
                </Link>
            </div>
            <Navbar.Collapse>
                    <Navbar.Link active={path === '/' }as={'div'} >
                        <Link to='/'>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/about'} as={'div'} >
                        <Link to='/about'>About</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/projects'} as={'div'} >
                        <Link to='/projects'>Projects</Link>
                    </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header