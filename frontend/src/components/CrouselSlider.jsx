import React, { useState } from "react";
import Slider from "react-slick";

import { Card} from "flowbite-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroImage from '../assets/homePage/hero.jpg';
import home1Image from '../assets/homePage/home2.3.jpg';
import home2Image from '../assets/homePage/home3.jpg';
import home3Image from '../assets/homePage/home4.3.jpg';
import home4Image from '../assets/homePage/home5.jpg';


export default function SimpleSlider() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: current => setActiveSlide2(current)
  };
       
  return (
    <div className="slider-container overflow-hidden">
    <Slider {...settings}>
      
      <div className="px-2 py-3">
      <Card className="max-w-sm h-96 ">
      <div className="flex flex-col h-full items-start pb-10 overflow-hidden">
        <div className="flex items-start w-full gap-5">
        <div>
        <img alt="Bonnie image" height="96" src={heroImage} width="96"className="mb-3 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jaidip Patra</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Rank 1 (2023)</span>
        </div>
        <div className="flex flex-col items-baseline">
          <p className="font-bold">Jadavpur University (MCA)</p>
          <p >⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <div className="mt-4 flex space-x-3 lg:mt-6">
         <p>Jeca cracker team will always remain in my heart. The wonderful group of students has helped me learn better and sharpen my knowledge. The entire jeca cracker mock test as well as the quizzes helped me in problem solving. The discussions in the group was always enriching.</p>
        </div>
      </div>
      </Card>
      </div>

      <div className="p-3 m-auto">
      <Card className="max-w-sm h-96 ">
      <div className="flex flex-col h-full items-center pb-10 overflow-hidden">
        <div className="flex items-start w-full gap-5">
        <div>
        <img alt="Bonnie image" height="96" src={heroImage} width="96"className="mb-3 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Brandon Luke Williams</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Rank 5 (2022)</span>
        </div>
        <div className="flex flex-col items-baseline">
          <p className="font-bold">Jadavpur University (MCA)</p>
          <p >⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p className="">I would say the mock tests really helped in discovering new questions and giving me confidence for the final exam and the notes were the only thing I used to prepare for the exam</p>
        </div>
      </div>
      </Card>
      </div>

      <div className="px-2 py-3">
      <Card className="max-w-sm h-96">
      <div className="flex flex-col h-full items-center pb-10 overflow-hidden">
      <div className="flex items-start w-full gap-5">
        <div>
        <img alt="Bonnie image" height="96" src={heroImage} width="96"className="mb-3 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Vishal Shaw</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Rank 10 (2022)</span>
        </div>
        <div className="flex flex-col items-baseline">
          <p className="font-bold">Jadavpur University (MCA)</p>
          <p >⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p>I want to express my gratitude to JECACRACKER for helping me throughout the journey. It is comprehensive and well-structured mock tests helped me to test my knowledge about individual topics with a detailed analysis of every mocks.</p>
        </div>
      </div>
      </Card>
      </div>

      <div className="px-2 py-3">
      <Card className="max-w-sm h-96">
      <div className="flex flex-col h-full items-center pb-10 overflow-hidden">
      <div className="flex items-start w-full gap-5">
        <div>
        <img alt="Bonnie image" height="96" src={heroImage} width="96"className="mb-3 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ankan Roy</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Rank 11 (2022)</span>
        </div>
        <div className="flex flex-col items-baseline">
          <p className="font-bold">Jadavpur University (MCA)</p>
          <p >⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p>From my initial phase of preparation to the final touch of Jadavpur Campus.</p>
        </div>
      </div>
      </Card>
      </div>

      <div className="px-2 py-3">
      <Card className="max-w-sm h-96">
      <div className="flex flex-col h-full items-start pb-10 overflow-hidden">
      <div className="flex items-start justify-between w-full gap-5">
        <div>
        <img alt="Bonnie image" height="96" src={heroImage} width="96"className="mb-3 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Arunima Karmakar</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Rank 27 (2022)</span>
        </div>
        <div className="flex flex-col items-baseline">
          <p className="font-bold">Jadavpur University (MCA)</p>
          <p >⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p>It was the best guide ever...it helped me in the optimum way to answer any type of question in the exam and hence built my confidence.</p>
        </div>
      </div>
      </Card>
      </div>

      <div className="px-2 py-3">
      <Card className="max-w-sm h-96">
      <div className="flex flex-col h-full items-center pb-10 overflow-hidden">
      <div className="flex items-start w-full gap-5">
        <div>
        <img alt="Bonnie image" height="96" src={heroImage} width="96"className="mb-3 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ankan Roy</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Rank 11 (2022)</span>
        </div>
        <div className="flex flex-col items-baseline">
          <p className="font-bold">Jadavpur University (MCA)</p>
          <p >⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p>I want to express my gratitude to JECACRACKER for helping me throughout the journey. It is comprehensive and well-structured mock tests helped me to test my knowledge about individual topics with a detailed analysis of every mocks.</p>
        </div>
      </div>
      </Card>
      </div>
     
      
    </Slider>
    </div>
  );
}