import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='min-h-screen mt-20' >
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left  */}
        <div className='flex-1'>
          <Link to='/' className=' text-4xl font-bold dark:text-white' ><span className='px-2 py-1 bg-gradient-to-r from-blue-200 via-cyan-500 to-blue-700 text-white rounded-md'>Jeca</span>Cracker</Link>
          <p className='text-sm mt-5'>Sign up to unlock exclusive mock tests and study resources.</p>
        </div>

        {/* right  */}
        <div className='flex-1'>
            <form className='flex flex-col gap-4'>
              <div className=''>
                <Label value='Email Address :'/><TextInput type='email' placeholder='studentname@gmail.com' id='email' required/>
                <Label value='Mobile Number :'/><TextInput type='tel' placeholder='081 222 2224' maxLength={10} id='phone' required/>
                <Label value='Full Name :'/><TextInput type='text' placeholder='Your Name' id='fullname' required/>
                <Label value='Username :'/><TextInput type='text' placeholder='name_xyz' id='username' required/>
                <Label value='Password :'/><TextInput type='text' placeholder='Password' id='password' required/>
              </div>
              <Button gradientDuoTone="purpleToBlue" type='submit'>Sign Up</Button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span><Link to='/signin' className='text-blue-500'> Sign In</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp