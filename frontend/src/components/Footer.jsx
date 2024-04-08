import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook,BsLinkedin,BsWhatsapp,BsTelegram,BsYoutube} from 'react-icons/bs'


function FooterCom() {
    return (
        <Footer container className=''>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex sm:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to='/' className='self-center whitespace-nowrap text-xl sm:text-2xl font-semibold dark:text-white' ><span className='px-2 py-1 bg-gradient-to-r from-blue-200 via-cyan-500 to-blue-700 text-white rounded-md'>Jeca</span>Cracker</Link>
                        <div className='mt-3 sm:pl-4'>
                                {/* <div>
                                <h4 className='font-semibold'>Address:</h4>
                                <a href='https://www.google.com/maps/place/Department+of+Computer+Science+and+Engineering/@22.4968865,88.3705518,19.07z/data=!4m6!3m5!1s0x3a0271234003e379:0x62b2304c5d096063!8m2!3d22.4970149!4d88.3710834!16s%2Fg%2F1tdqm1qw?entry=ttu' rel='noopener noreferrer' target='_blank'>Jadavpur 700075</a>
                                </div> */}
                                <div>
                                <h4 className='font-semibold text-sm lg:text-lg'>Email:</h4>
                                <a href="mailto:jecacracker@gmail.com" className='text-sm lg:text-base'>jecacracker@gmail.com</a>
                                </div>
                                <div className='mt-2'>
                                <h4 className='font-semibold text-sm lg:text-lg'>Phone:</h4>
                                <a href="tel:+917365007299" className='text-sm lg:text-base'>+917365007299</a>
                                </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-10'>
                        <div>
                            <Footer.Title title='links' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/' rel='noopener noreferrer'>Home</Footer.Link>
                                <Footer.Link href='#' rel='noopener noreferrer'>About</Footer.Link>
                                <Footer.Link href='/blogs' rel='noopener noreferrer'>Blogs</Footer.Link>
                                <Footer.Link href='/rankers' rel='noopener noreferrer'>Rankers</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='https://www.facebook.com/people/Jeca-Cracker/100089079349462/' target='_blank' rel='noopener noreferrer'>Facebook</Footer.Link>
                                <Footer.Link href='https://www.youtube.com/@jecacracker/featured' rel='noopener noreferrer' target='_blank'>Youtube</Footer.Link>
                                <Footer.Link href='https://www.linkedin.com/company/jeca-cracker/' rel='noopener noreferrer' target='_blank'>Linkedin</Footer.Link>
                                <Footer.Link href='https://t.me/JecaCrackers2024' rel='noopener noreferrer' target='_blank'>Telegram</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='LEGAL' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#' rel='noopener noreferrer'  target='_blank'>Privacy Policy</Footer.Link>
                                <Footer.Link href='#' rel='noopener noreferrer'  target='_blank'>Licensing</Footer.Link>
                                <Footer.Link href='#' rel='noopener noreferrer'  target='_blank'>Terms & Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by='JecaCracker' year={new Date().getFullYear()}/>
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='https://www.facebook.com/people/Jeca-Cracker/100089079349462/' icon={BsFacebook}/>
                        <Footer.Icon href='https://www.linkedin.com/company/jeca-cracker/' icon={BsLinkedin}/>
                        <Footer.Icon href='https://chat.whatsapp.com/FmzOw197GpU2zkmgWcCOe0' icon={BsWhatsapp}/>
                        <Footer.Icon href='https://t.me/JecaCrackers2024' icon={BsTelegram}/>
                        <Footer.Icon href='https://www.youtube.com/@jecacracker/featured' icon={BsYoutube}/>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom;