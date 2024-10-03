import React, { useState } from "react";
import { Card, Button, Accordion } from "flowbite-react";
import { MdDateRange } from "react-icons/md";
import { MdThumbUp, MdVisibility } from "react-icons/md";

function Blogs() {
  // Dummy data for blog posts when we fetch data make sure it contains only top 8 blogs
  const blogPosts = [
    {
      id: 1,
      title: "Important Notice for Wb-Jeca 2024 Registration",
      description:
        "The West Bengal Joint Entrance Examinations Board has released the JECA application form online.",
      author: "Neil Sims",
      date: "Jan 19, 2024",
      imgSrc: "./images/poster6.jpg",
      authorImg: "./images/signupgirl.png",
    },
    {
      id: 2,
      title: "New Update for JEE 2024",
      description:
        "The latest updates and guides for JEE 2024 preparation are out.",
      author: "Sarah Johnson",
      date: "Feb 25, 2024",
      imgSrc: "./images/poster6.jpg",
      authorImg: "./images/signupgirl.png",
    },
    {
      id: 3,
      title: "How to Ace Your Exams",
      description:
        "Expert tips and strategies to excel in your exams and score high.",
      author: "Mark Wood",
      date: "Mar 10, 2024",
      imgSrc: "./images/poster6.jpg",
      authorImg: "./images/signupgirl.png",
    },
    {
      id: 4,
      title: "How to Ace Your Exams",
      description:
        "Expert tips and strategies to excel in your exams and score high.",
      author: "Mark Wood",
      date: "Mar 10, 2024",
      imgSrc: "./images/poster6.jpg",
      authorImg: "./images/signupgirl.png",
    },
    // Add more blog posts as needed
  ];

  // Dummy data for videos same for videos also
  const videoContent = [
    {
      id: 1,
      title: "How to Study for Exams Effectively",
      description:
        "Tips on effective study habits for better exam performance.",
      date: "Jan 10, 2024",
      videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID1",
      thumbnail: "./images/poster5.jpeg",
      videoId: "VIDEO_ID2", // Replace with actual video ID
      views: 20000,
      likes: 1500,
    },
    {
      id: 2,
      title: "JEE 2024 Preparation Guide",
      description: "Comprehensive guide to prepare for JEE 2024.",
      date: "Feb 12, 2024",
      videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID2",
      thumbnail: "./images/poster5.jpeg",
      videoId: "VIDEO_ID2", // Replace with actual video ID
      views: 35000,
      likes: 2500,
    },
    {
      id: 3,
      title: "Scholarship Opportunities for 2024",
      description:
        "Learn about scholarship opportunities available for students in 2024.",
      date: "Mar 15, 2024",
      videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID3",
      videoId: "VIDEO_ID2", // Replace with actual video ID
      thumbnail: "./images/poster5.jpeg",
      views: 18000,
      likes: 1200,
    },
    {
      id: 4,
      title: "Scholarship Opportunities for 2024",
      description:
        "Learn about scholarship opportunities available for students in 2024.",
      date: "Mar 15, 2024",
      videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID3",
      videoId: "VIDEO_ID2", // Replace with actual video ID
      thumbnail: "./images/poster5.jpeg",
      views: 18000,
      likes: 1200,
    },
    // Add more video content as needed
  ];

  //Dumm data for colleges
  const colleges = [
    {
      id: 1,
      name: "Jadavpur University",
      logo: "./images/logos/Jadavpur_University_Logo.webp",
      website: "https://jadavpuruniversity.in/",
    },
    {
      id: 2,
      name: "University College of Science & Technology, Calcutta University",
      logo: "./images/logos/Calcutta_University.png",
      website: "https://www.caluniv.ac.in/",
    },
    {
      id: 3,
      name: "Kalyani Government Engineering College, Kalyani, Nadia",
      logo: "./images/logos/KGEC_Logo.png",
      website: "http://www.kgec.edu.in/",
    },
    {
      id: 4,
      name: "North Bengal University",
      logo: "./images/logos/NBU_Logo.png",
      website: "http://www.nbu.ac.in/",
    },
    {
      id: 5,
      name: "Vidyasagar University",
      logo: "./images/logos/Vidyasagar_University_Logo.webp",
      website: "https://www.vidyasagar.ac.in/Default.aspx",
    },
    {
      id: 6,
      name: "Maulana Abul Kalam Azad University of Technology",
      logo: "./images/logos/MAKAUT_Logo.svg",
      website: "https://makautwb.ac.in/",
    },
    {
      id: 7,
      name: "Academy of Technology, Adisaptagram, Hooghly",
      logo: "./images/logos/AOT_Logo.jpg",
      website: "https://www.aot.edu.in/",
    },
    {
      id: 8,
      name: "Asansol Engineering College, Asansol, Burdwan",
      logo: "./images/logos/Asansol_Engineering_Logo.png",
      website: "http://www.aecwb.edu.in/",
    },
    {
      id: 9,
      name: "B.P. Poddar Institute of Management & Technology, Kolkata",
      logo: "./images/logos/BP_Poddar_Logo.png",
      website: "http://www.bppimt.ac.in/",
    },
    {
      id: 10,
      name: "Calcutta Institute of Technology, Uluberia, Howrah",
      logo: "./images/logos/CIT_Logo.jpeg",
      website: "https://citulb.in/",
    },
    {
      id: 11,
      name: "Dr. B. C. Roy Engineering College, Durgapur",
      logo: "./images/logos/BCRoy_Logo.png",
      website: "http://www.bcrec.ac.in/",
    },
    {
      id: 12,
      name: "Future Institute of Engineering & Management, Sonarpur",
      logo: "./images/logos/FIEM_Logo.png",
      website: "https://www.futureeducation.in/fiem/",
    },
    {
      id: 13,
      name: "Guru Nanak Institute of Technology, Panihati, Sodepur",
      logo: "./images/logos/GNIT_Logo.png",
      website: "http://www.gnit.ac.in/",
    },
    {
      id: 14,
      name: "Haldia Institute of Technology, Haldia, Purba Medinipur",
      logo: "./images/logos/HIT_Logo.png",
      website: "http://www.hithaldia.in/",
    },
    {
      id: 15,
      name: "Heritage Institute of Technology, Kolkata",
      logo: "./images/logos/Heritage_logo.jpeg",
      website: "http://www.heritageit.edu/",
    },
    {
      id: 16,
      name: "Institute of Engineering & Management, Salt Lake",
      logo: "./images/logos/IEM_Logo.webp",
      website: "https://iem.edu.in/",
    },
    {
      id: 17,
      name: "Institute of Science and Technology, Paschim Medinipur",
      logo: "./images/logos/IST_Logo.jpg",
      website: "http://www.istonline.org.in/",
    },
    {
      id: 18,
      name: "JIS College of Engineering, Kalyani, Nadia",
      logo: "./images/logos/JIS_Logo.jpeg",
      website: "http://www.jiscollege.ac.in/",
    },
    {
      id: 19,
      name: "University of Kalyani",
      logo: "./images/logos/Kalyani_University_Logo.webp",
      website: "http://www.klyuniv.ac.in/",
    },
    {
      id: 20,
      name: "Meghnad Saha Institute of Technology, Kolkata",
      logo: "./images/logos/MSIT_Logo.png",
      website: "http://www.msit.edu.in/",
    },
    {
      id: 21,
      name: "Narula Institute of Technology, Agarpara, Kolkata",
      logo: "./images/logos/NIT_Logo.png",
      website: "http://www.nit.ac.in/",
    },
    {
      id: 22,
      name: "Netaji Subhas Engineering College, Garia, Kolkata",
      logo: "./images/logos/NSEC_Logo.png",
      website: "http://www.nsec.ac.in/",
    },
    {
      id: 23,
      name: "RCC Institute of Information Technology, Kolkata",
      logo: "./images/logos/RCCIIT_Logo.png",
      website: "http://www.rcciit.org/",
    },
    {
      id: 24,
      name: "Regent Education and Research Foundation, Barasat, Kolkata",
      logo: "./images/logos/RERF_Logo.jpeg",
      website: "https://www.rerf.in/",
    },
    {
      id: 25,
      name: "Seacom Engineering College, Sankrail, Howrah",
      logo: "./images/logos/Seacom_Logo.jpg",
      website: "http://www.seacomengineering.org/",
    },
    {
      id: 26,
      name: "Siliguri Institute of Technology, Siliguri",
      logo: "./images/logos/SIT_Logo.jpeg",
      website: "http://www.sittechno.org/",
    },
    {
      id: 27,
      name: "Swami Vivekananda University",
      logo: "./images/logos/SVU_Logo.png",
      website: "https://www.swamivivekanandauniversity.ac.in/",
    },
    {
      id: 28,
      name: "Techno College Hoogly",
      logo: "./images/logos/Techno_Hoogly_Logo.jpeg",
      website: "https://www.technoindiahooghly.org/",
    },
    {
      id: 29,
      name: "Techno India University, Salt Lake",
      logo: "./images/logos/TIU_Logo.jpg",
      website: "http://www.technoindiauniversity.ac.in/",
    },
    {
      id: 30,
      name: "Techno International New Town, Rajarhat, New Town",
      logo: "./images/logos/TINT_Logo.jpeg",
      website: "http://www.tint.edu.in/",
    },
    {
      id: 31,
      name: "Techno Main Salt Lake, Sector-V, Salt Lake",
      logo: "./images/logos/TMSL_Logo.jpeg",
      website: "https://www.ticollege.ac.in/",
    },
  ];
  

  // Fetch YouTube video statistics
  //  const fetchYouTubeData = async (videoId) => {
  //   const API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace with your API key
  //   const response = await fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`
  //   );
  //   const data = await response.json();
  //   return data.items[0]?.statistics || {};
  // };

  // Fetch stats for all videos on component mount
  // useEffect(() => {
  //   videoContent.forEach(async (video) => {
  //     const stats = await fetchYouTubeData(video.videoId);
  //     setVideoStats((prev) => ({
  //       ...prev,
  //       [video.videoId]: stats,
  //     }));
  //   });
  // }, []);

  // State to track if all cards should be shown
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [showAllColleges, setShowAllColleges] = useState(false); // State to toggle view


  // Function to handle "View All" button click
  const handleViewAllBlogs = () => {
    setShowAllBlogs(true);
  };

  const handleViewAllVideos = () => {
    setShowAllVideos(true);
  };

  // Limit the initial display to 3 cards for blogs and videos
  const visibleBlogs = showAllBlogs ? blogPosts : blogPosts.slice(0, 4);
  const visibleVideos = showAllVideos ? videoContent : videoContent.slice(0, 4);
  const collegesToShow = showAllColleges ? colleges : colleges.slice(0, 12);

  return (
    <div className="max-w-7xl m-auto">
      {/* Blog Section */}
      <div className="p-3 lg:p-0 flex flex-col items-center">
        <div className="sm:my-4 p-3 lg:py-12 flex flex-col max-w-2xl gap-6">
          <h1 className="text-3xl font-bold lg:text-6xl text-center">
            Unlock Insights, Gain Expertise
          </h1>
          <p className="text-gray-500 text-sm sm:text-lg text-center">
            Explore our featured blogs and empower your journey to success!
          </p>
        </div>
      </div>

      <div className="mt-10 p-3">
        <div className="mb-10">
          <p className="text-sm sm:text-lg font-bold">Latest</p>
          <h2 className="text-3xl lg:text-5xl max-w-3xl font-bold">
            Stay Informed with Our Blog
          </h2>
          <p className="mt-2 text-gray-500 text-sm sm:text-lg">
            Get the latest updates and guides on exams.
          </p>
        </div>

        <div className="my-2 sm:my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 justify-items-center">
          {visibleBlogs.map((post) => (
            <Card
              key={post.id}
              className="max-w-sm"
              imgAlt={post.title}
              imgSrc={post.imgSrc}
            >
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h5>
              </a>
              <div className="mb-2 flex items-center">
                <p>{post.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      alt={`${post.author} image`}
                      height="32"
                      src={post.authorImg}
                      width="32"
                      className="rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    
                    <div className="truncate text-sm text-gray-500 flex items-center gap-2 dark:text-gray-400">
                      <MdDateRange />
                      <p>{post.date}</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                >
                <Button gradientDuoTone="purpleToBlue">
                  Read
                </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {!showAllBlogs && (
          <div className="flex justify-end mt-10">
            <Button outline gradientDuoTone="purpleToPink" onClick={handleViewAllBlogs}>
              View all
            </Button>
          </div>
        )}
      </div>

      {/* Video Section */}
      <div className="mt-10 p-3">
        <div className="mb-10">
          <p className="text-sm sm:text-lg font-bold">Latest</p>
          <h2 className="text-3xl lg:text-5xl max-w-3xl font-bold">
            Explore Our Educational Content
          </h2>
          <p className="mt-2 text-gray-500 text-sm sm:text-lg">
            Discover video guides, tutorials, and educational content.
          </p>
        </div>

        <div className="my-2 sm:my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 justify-items-center">
          {visibleVideos.map((video) => (
            <Card
              key={video.id}
              className="max-w-sm"
              imgAlt={video.title}
              imgSrc={video.thumbnail}
            >
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {video.title}
                </h5>
              </a>
              <div className="mb-2 flex items-center">
                <p>{video.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MdVisibility />
                    <p>{video.views}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <MdThumbUp />
                    <p>{video.likes}</p>
                  </div>
                  
                </div>
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button gradientDuoTone="purpleToBlue">
                  Watch
                </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {!showAllVideos && (
          <div className="flex justify-end mt-10">
            <Button
              outline
              gradientDuoTone="purpleToPink"
              onClick={handleViewAllVideos}
            >
              View all
            </Button>
          </div>
        )}
      </div>

      {/*Syllabus*/}
      <div className="p-3 lg:mt-0">
        <div className="my-10">
          <h2 className="text-3xl font-bold lg:text-6xl">JECA syllabus</h2>
          <p className="mt-2 text-gray-500 text-sm sm:text-lg">
            The papers will be based on Undergraduate Computer Application and
            equivalent courses followed in various Universities in India and on
            the following topics.
          </p>
        </div>

        <Accordion
          collapseAll
          className=" bg-slate-200 dark:bg-slate-700 rounded-xl"
        >
          <Accordion.Panel>
            <Accordion.Title>C Programming</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Variables and Data types, IO Operations, Operators and
                Expressions, Control Flow statements, Functions, Array,
                Pointers, String Handling, Structures and Unions, Files
                Handling, Pre-Processor Directives, Command Line Arguments.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Object Oriented Programming</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Data Types, If / Else If / Else, Loops, Function, Switch case,
                Pointer, Structure, Array, String, Function Overloading,
                Function templates, SCOPE of variable, Type aliases (typedef /
                using), Unions, Enumerated types (enum), Class, Constructors,
                Overloading Constructors, Member initialization in constructors,
                Pointers to classes, Overloading Operators, Keyword ‘this’,
                Static Members, Const Member Functions, Class Templates,
                Template Specialization, Namespace, Friendship (Friend Functions
                & Friend Classes), Inheritance, Polymorphism, Virtual Members,
                Abstract base class.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Unix</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Following commands and its different options: Is, ps, pwd, mv,
                cp, touch, cat, time, cal, bc, sort, diff, wc, comm, In, du,
                kill, sleep, chmod, chown, chgrp, top, nice, renice, cut, paste,
                grep, file, whereis, which, echo, env, PATH, CLASSPATH, find. vi
                editor, shell, wildcard, shell script.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Data Structure</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Searching, Sorting, Stack, Queue, Linked List, Tree, Graph.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Introduction of Computers</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Bus structure, Basic I/O, Subroutines, Interrupt, DMA, RAM, ROM,
                pipeline, system calls.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Operating System</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Process, Thread, CPU Scheduling, Deadlock, Synchronization,
                Memory Management, Disk Management, File Management.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Computer Network</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Concepts of networking, Application areas, Classification,
                Reference models, Transmission environment & technologies,
                Routing algorithms, IP, UDP & TCP protocols, IPv4 and IPv6,
                Reliable data transferring methods, Application protocols,
                Network Security, Management systems, Perspectives of
                communication networks.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Database Management System</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Introductions to Databases, ER diagram, Relational Algebra,
                Relational Calculus, SQL, Normalization, Transactions, Indexing,
                Query optimization.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Software Engineering</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Introduction to Software Engineering, A Generic view of process,
                Process models, Software Requirements, Requirements engineering
                process, System models, Design Engineering, Testing Strategies,
                Product metrices, Metrices for Process & Products, Risk
                management, Quality Management.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Machine Learning</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Classification, Decision Tree Learning, Artificial Neural
                Networks, Support Vector Machines, Bayesian Learning,
                Clustering, Hidden Markov Models.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        <div className="my-10">
          <Button outline gradientDuoTone="purpleToPink" className="mt-2">
            Download Syllabus
          </Button>
        </div>
      </div>

      {/*Colleges */}
      <div className="p-3 lg:mt-0">
      <div className="my-10">
        <h2 className="text-3xl font-bold lg:text-6xl text-center">
          Participating Colleges
        </h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-lg text-center">
          Explore the list of top colleges offering Master in Computer
          Application (MCA) programs accepting JECA scores across India.
        </p>
      </div>

      {/* College Grid */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {collegesToShow.map((college) => (
          <div key={college.id} className="flex flex-col items-center">
            <a
              href={college.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={college.logo}
                alt={`${college.name} logo`}
                className="w-32 h-32 object-contain mb-4 m-auto bg-white rounded-sm"
                style={{ width: "150px", height: "150px" }} // Fixed size for logos
              />
              <h3 className="text-lg font-semibold text-center">{college.name}</h3>
            </a>
          </div>
        ))}
      </div>

      {/* Button to toggle "View All" */}
      <div className="text-center flex justify-end mt-6">
        <Button
          outline
          gradientDuoTone="purpleToPink"
          onClick={() => setShowAllColleges(!showAllColleges)}
        >
          {showAllColleges ? "Show Less" : "View All"}
        </Button>
      </div>
      </div>

    </div>
  );
}

export default Blogs;
