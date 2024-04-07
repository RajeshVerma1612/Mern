import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { set } from 'mongoose';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';


function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success===false){
        setLoading(false);
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/signin');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  return (
    <div className='min-h-screen mt-12' >
      <div className='flex p-6 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left  */}
        <div className='flex-1'>
          <Link to='/' className=' text-4xl font-bold dark:text-white' ><span className='px-2 py-1 bg-gradient-to-r from-blue-200 via-cyan-500 to-blue-700 text-white rounded-md'>Jeca</span>Cracker</Link>
          <p className='text-sm mt-5 font-semibold '>Sign up to unlock exclusive mock tests and study resources.</p>
          <div className='hidden md:inline'>
            <img src={'./images/signupgirl.png'} alt="Signup" />
          </div>
        </div>

        {/* right  */}
        <div className='flex-1 flex-col'>
        <div className='flex-1 p-3 border border-gray-300 rounded'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='md:mx-8 md:my-4'>
              <Label value='Email Address :' /><TextInput type='email' placeholder='studentname@gmail.com' id='email' onChange={handleChange} />
              {/* <Label value='Mobile Number :'/><TextInput type='tel' placeholder='081 222 2224' maxLength={10} id='phone' required onChange={handleChange}/> */}
              {/* <Label value='Full Name :'/><TextInput type='text' placeholder='Your Name' id='fullname' required onChange={handleChange}/> */}
              <Label value='Username :' /><TextInput type='text' placeholder='name_xyz' id='username' onChange={handleChange} />
              <Label value='Password :' /><TextInput type='password' placeholder='Password' id='password' onChange={handleChange} />
            </div>
            <Button gradientDuoTone="purpleToBlue" type='submit' disabled={loading}>
                {
                  loading ? (
                    <><Spinner size='sm'/>
                    <span className='pl-3'>Loading...</span></>
                  ) : 'Sign Up'
                }
            </Button>
            <OAuth/>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span><Link to='/signin' className='text-blue-500'> Sign In</Link>
          </div>
        </div>
        {
          errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default SignUp