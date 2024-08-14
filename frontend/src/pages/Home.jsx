import React from 'react'
import { Button, Accordion, TextInput,Carousel } from "flowbite-react";
import { FaAngleRight, FaCube } from "react-icons/fa";
import { HiMail } from "react-icons/hi";



import heroImage from '../assets/homePage/hero.jpg';
import home1Image from '../assets/homePage/home2.3.jpg';
import home2Image from '../assets/homePage/home3.jpg';
import home3Image from '../assets/homePage/home4.3.jpg';
import home4Image from '../assets/homePage/home5.jpg';

import CrouselSlider from '../components/CrouselSlider';

function Home() {
  return (
    <div className='max-w-7xl m-auto'>

      {/* hero section  */}
      <div className='p-3 lg:p-0  flex flex-col md:flex-row-reverse items-center'>
        <div className='sm:my-32'>
          <img className='w-full sm:max-w-2xl rounded-2xl' src={heroImage} alt="Hero" />
        </div>
        <div className='sm:my-4 p-3 lg:py-12 flex flex-col max-w-2xl gap-6'>
          <h1 className='text-3xl font-bold lg:text-6xl'>Prepare for Success with JecaCracker</h1>
          <p className='text-gray-500 text-sm sm:text-lg'>Join JecaCracker and improve your test-taking skills with our interactive quizzes and mock tests.</p>
          <div className="flex flex-wrap gap-2">
            <Button gradientDuoTone="purpleToBlue">Join</Button>
            <Button outline gradientDuoTone="purpleToPink">Learn More</Button>
          </div>
        </div>
      </div>

      {/* take mock test in realistic environment */}
      <div className='p-3 lg:p-0 bg-slate-200 dark:bg-slate-700 rounded-xl flex flex-col md:flex-row-reverse items-center'>
        <div className='sm:my-20 p-3'>
          <img className='w-full sm:max-w-2xl rounded-2xl' src={home1Image} alt="Home1" />
        </div>
        <div className='sm:my-4 p-3 lg:py-12 flex flex-col max-w-2xl gap-4'>
          <p className='text-sm sm:text-lg font-bold'>Empower</p>
          <h1 className='text-3xl font-bold lg:text-6xl'>Take Mock Tests in a Realistic Environment</h1>
          <p className='text-gray-500 text-sm sm:text-lg'>Experience the thrill of simulated exams and track your progress.</p>
          <div className='flex gap-2'>
            <div>
              <p className='text-md sm:text-lg font-bold'>Simulated Exams</p>
              <p className='mt-2 text-gray-500 text-sm sm:text-lg max-w-48 sm:max-w-xs'>Solve multiple choice questions in a realistic exam environment.</p>
            </div>
            <div>
              <p className='text-md sm:text-lg font-bold'>Track Progress</p>
              <p className='mt-2 text-gray-500 text-sm sm:text-lg max-w-48 sm:max-w-xs'>Monitor your performance and ranking after each mock test.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button outline gradientDuoTone="purpleToBlue">Learn More</Button>
            <Button gradientDuoTone="purpleToPink">Sign up <FaAngleRight className='mr-2 h-5 w-5' /></Button>
          </div>
        </div>
      </div>

      {/* Expand your knowledge with daily quizzes */}
      <div className='p-3 lg:p-0  flex flex-col md:flex-row-reverse items-center'>
        <div className='sm:my-20'>
          <img className='w-full sm:max-w-2xl rounded-2xl' src={home2Image} alt="Home2" />
        </div>
        <div className='sm:my-4 p-3 lg:py-12 flex flex-col max-w-2xl gap-6'>
          <p className='text-sm sm:text-lg font-bold'>Discover</p>
          <h1 className='text-3xl font-bold lg:text-6xl'>Expand Your Knowledge with Daily Quizzes</h1>
          <p className='text-gray-500 text-sm sm:text-lg'>Challenge yourself with new questions every day and track your progress.</p>
          <div className='flex gap-4'>
            <div>
              <FaCube className='h-6 w-6' />
              <p className='mt-2 text-md sm:text-lg font-bold'>Engage</p>
              <p className='mt-2 text-gray-500 text-sm sm:text-lg max-w-48 sm:max-w-xs'>Participate in daily quizzes and improve your knowledge and skills.</p>
            </div>
            <div>
              <FaCube className='h-6 w-6' />
              <p className='mt-2 text-md sm:text-lg font-bold'>Compete</p>
              <p className='mt-2 text-gray-500 text-sm sm:text-lg max-w-48 sm:max-w-xs'>See how you rank among other students and strive for the top.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button outline gradientDuoTone="purpleToBlue">Learn More</Button>
            <Button gradientDuoTone="purpleToPink">Sign up <FaAngleRight className='mr-2 h-5 w-5' /></Button>
          </div>
        </div>
      </div>

      {/* Track your progress and improve your learning */}
      <div className='p-3 lg:p-0  flex flex-col md:flex-row-reverse items-center'>
        <div className='sm:my-20'>
          <img className='w-full sm:max-w-2xl rounded-2xl' src={home3Image} alt="Home3" />
        </div>
        <div className='sm:my-4 p-3 lg:py-12 flex flex-col max-w-sm lg:max-w-2xl gap-6'>
          <p className='text-sm sm:text-lg font-bold'>Discover</p>
          <h1 className='text-3xl font-bold lg:text-6xl'>Track Your Progress and Improve Your Learning</h1>
          <p className='text-gray-500 text-sm sm:text-lg'>Our progress tracking tool allows you to monitor your learning over time and identify areas for improvement. Stay motivated and achieve your goals with JecaCracker.</p>
          <div className='flex gap-4'>
            <div>
              <p className='text-md sm:text-lg font-bold'>Track</p>
              <p className='mt-2 text-gray-500 text-sm sm:text-lg max-w-48 sm:max-w-xs'>Monitor your learning progress and identify areas for improvement.</p>
            </div>
            <div>
              <p className='text-md sm:text-lg font-bold'>Improve</p>
              <p className='mt-2 text-gray-500 text-sm sm:text-lg max-w-48 sm:max-w-xs'>Stay motivated and achieve your learning goals with JecaCracker.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button outline gradientDuoTone="purpleToBlue">Learn More</Button>
            <Button gradientDuoTone="purpleToPink">Sign up <FaAngleRight className='mr-2 h-5 w-5' /></Button>
          </div>
        </div>
      </div>

      {/* Compare your performance and exel among peers */}
      <div className='p-3 lg:p-0  flex flex-col md:flex-row-reverse items-center'>
        <div className='sm:my-20'>
          <img className='w-full sm:max-w-2xl rounded-2xl' src={home4Image} alt="Home4" />
        </div>
        <div className='sm:my-4 p-3 lg:py-12 flex flex-col max-w-sm lg:max-w-2xl gap-6'>
          <p className='text-sm sm:text-lg font-bold'>Boost</p>
          <h1 className='text-3xl font-bold lg:text-6xl'>Compare Your Performance and Excel Among Peers</h1>
          <p className='text-gray-500 text-sm sm:text-lg'>Our ranking system allows you to track your progress and see how you stack up against other students. Gain a competitive edge and strive for excellence.</p>
          <div>
            <p className='text-gray-500 text-sm sm:text-lg flex'><FaCube className='mr-2 h-6 w-6' />Track Your Progress and Improve Your Ranking</p>
            <p className='mt-2 text-gray-500 text-sm sm:text-lg flex'><FaCube className='mr-2 h-6 w-6' />Compete with Peers and Aim for the Top</p>
            <p className='mt-2 text-gray-500 text-sm sm:text-lg flex'><FaCube className='mr-2 h-6 w-6' />Measure Your Performance and Stand Out from the Crowd</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button outline gradientDuoTone="purpleToBlue">Learn More</Button>
            <Button gradientDuoTone="purpleToPink">Sign up <FaAngleRight className='mr-2 h-5 w-5' /></Button>
          </div>
        </div>
      </div>

      {/* Improve your test-taking skill */}
      <div className='p-3 my-10 lg:my-10 lg:p-8 lg:py-10  bg-slate-200 dark:bg-slate-700 rounded-xl'>
        <div className='flex flex-wrap gap-4 justify-between'>
          <div>
            <h2 className='text-3xl lg:text-6xl font-bold'>Improve Your Test-Taking Skills</h2>
            <p className='mt-2 text-gray-500 text-sm sm:text-lg'>Sign up for free and start practicing today!</p>
          </div>
          <div className="flex items-center gap-4">
            <Button gradientDuoTone="purpleToBlue">Get Started</Button>
            <Button outline gradientDuoTone="purpleToPink">Learn More</Button>
          </div>
        </div>

      </div>

      {/* crousel hoga */}
      <div className='mt-10 p-3'>
        <div>
          <h2 className='text-3xl lg:text-5xl max-w-3xl font-bold'>What Students Say</h2>
          <p className='mt-2 text-gray-500 text-sm sm:text-lg'>Read testimonials from our successful students</p>
        </div>
        <div className="my-2 sm:my-8">
          <CrouselSlider/>
        </div>

      </div>

      {/* faqs */}
      <div className='p-3 lg:mt-0'>
        <div className='my-10'>
          <h2 className='text-3xl font-bold lg:text-6xl'>FAQs</h2>
          <p className='mt-2 text-gray-500 text-sm sm:text-lg'>Find answers to common questions about JecaCracker, including how to sign up and what makes it unique.</p>
        </div>

        <Accordion collapseAll className=' bg-slate-200 dark:bg-slate-700 rounded-xl'>
          <Accordion.Panel>
            <Accordion.Title>How to sign up?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                To sign up for JecaCracker, simply visit our website and click on the 'Sign Up' button. Fill in the required information and create your account. Once you've completed the sign-up process, you'll have access to our mock tests and daily quizzes.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How to take a mock test?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Taking a mock test on JecaCracker is easy. Log in to your account and navigate to the 'Mock Tests' section. Choose the test you want to take and click on the 'Start Test' button. Answer the multiple-choice questions within the given time and submit your answers.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How to track progress?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Tracking your progress on JecaCracker is simple. After completing a mock test or daily quiz, you'll receive a detailed report that shows your score, time taken, and the correct answers. You can also view your ranking compared to other students.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What makes us unique?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                JecaCracker stands out from other educational websites because of its comprehensive mock tests, daily quizzes, and detailed performance analysis. We provide a user-friendly interface and valuable insights to help students improve their exam preparation.</p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                We provides you with the best quality mock test, daily quiz & doubt solving by top rankers that help your secure rank below 30 in JECA 2024. Crack the JECA Exam with Confidence: Your Path to Success Starts Here.</p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How to contact us?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                If you have any further questions or need assistance, please don't hesitate to contact our support team. You can reach us by clicking on the 'Contact' button below or by sending an email to support@jecacracker.com.</p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        <div className='my-10'>
          <h2 className='text-3xl lg:text-4xl font-bold'>Still have questions?</h2>
          <p className='mt-2 text-gray-500 text-sm sm:text-lg'>Contact us for more information or assistance.</p>
          <Button outline gradientDuoTone="purpleToPink" className='mt-2'>Contact</Button>
        </div>
      </div>


      {/* Unlock your potential with jecacracker */}
      <div className='p-3 my-10 lg:my-20 '>
        <div className='flex flex-wrap lg:flex-nowrap  gap-4 justify-between'>
          <div className='max-w-2xl' >
            <p className='mt-2 text-sm sm:text-lg font-bold'>Empowering</p>
            <h2 className='text-3xl font-bold lg:text-6xl'>Unlock Your Potential with JecaCracker</h2>
          </div>

          <div className="flex items-center flex-wrap gap-4 max-w-2xl ">
            <p className='mt-2 text-gray-500 text-sm sm:text-lg'>Join thousands of students who have improved their scores with JecaCracker. Our platform offers a comprehensive range of mock tests and daily quizzes to help you track your progress and achieve your goals.</p>

            <div className='w-full p-3 flex gap-2 justify-between '>
              <div className='max-w-2xl'>
                <h2 className='text-3xl font-bold'>50%+</h2>
                <p className='mt-2 text-gray-500 text-sm sm:text-lg'>Average Score Improvement</p>
              </div>
              <div className='max-w-2xl' >
                <h2 className='text-3xl font-bold'>50%+</h2>
                <p className='mt-2 text-gray-500 text-sm sm:text-lg'>Students Who Use JecaCracker Regularly</p>
              </div>
            </div>

            <div className='flex gap-2'>
              <Button gradientDuoTone="purpleToBlue">Get Started</Button>
              <Button outline gradientDuoTone="purpleToPink">Learn More</Button>
            </div>

          </div>
        </div>
      </div>

      {/* stay updated with jecacracker newsletter */}
      <div className='p-3 py-8 mb-20 lg:p-8 lg:py-10   bg-slate-200 dark:bg-slate-700 rounded-xl'>
        <h2 className='text-3xl lg:text-5xl max-w-3xl font-bold'>Stay Updated with JecaCracker Newsletter</h2>
        <p className='mt-2 text-gray-500 text-sm sm:text-lg'>Get tips, updates, and new quizzes delivered straight to your inbox.</p>
        <div className='my-2 flex max-w-xl items-center gap-4'>
          <form action="">
            <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="Your Email Address" required />
          </form>
          <Button gradientDuoTone="pinkToOrange" className=''>Subscribe Now</Button>
        </div>
        <p className='mt-2 text-gray-500 text-xs sm:text-md'>Get tips, updates, and new quizzes delivered straight to your inbox.</p>
      </div>


    </div>
  )
}

export default Home