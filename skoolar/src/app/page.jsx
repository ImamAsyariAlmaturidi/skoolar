"use client";

import Image from "next/image";
import illustration from "../../public/Untitled.svg"
import illustration2 from "../../public/illustration_2.svg"
import feature from "../../public/Feature2.svg"
import feature2 from "../../public/Feature4.svg"
import Link from "next/link";
import { BookOpen, Users, Trophy, ChevronRight } from "lucide-react";
import { useState } from "react";

import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const slideIn = {
  hidden: { x: '-100vw', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20, // Bergerak dari bawah
    scale: 0.95, // Ukuran sedikit lebih kecil
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: { duration: 0.5 },
      y: { duration: 0.7 },
      scale: { duration: 0.7 },
    },
  },
};


const testimonials = [
  {
    quote:
      "As a parent, I have found Skoolar to be extremely helpful. With the direct communication feature with teachers, I can monitor my child's progress and assignments in real-time. My child feels more supported because I am always aware of what they are doing at school. Skoolar truly facilitates our communication and tracking of my child's performance, allowing me to be more actively involved in their learning.",
    name: "Tiara",
    role: "Kimberly Parents",
    avatar: "/tiara.jpg",
  },
  {
    quote:
      "Using Skoolar has been a game-changer for me as a parent. The direct messaging feature with teachers allows me to keep a close eye on my child's progress and assignments in real-time. Knowing what my child is working on at school makes them feel more supported, and it enhances our ability to stay connected. Skoolar makes it easy to communicate and track my child's achievements, helping me be more engaged in their educational journey.",
    name: "William",
    role: "Alexandra parents",
    avatar: "/alex.jpg",
  },
  {
    quote:
      "Skoolar has truly transformed the way I support my child's education. The real-time messaging feature with teachers keeps me updated on my child's progress and assignments, making it easier to stay involved. My child feels more encouraged knowing that I am aware of their school activities. Skoolar simplifies communication and tracking, allowing me to be an active participant in their learning journey and fostering a stronger connection between us.",
    name: "Naufal",
    role: "Kiara parents",
    avatar: "/naufal.jpg",
  },
  {
    quote:
      "Using Skoolar has been incredibly beneficial for me as a parent. The platform’s direct communication with teachers helps me monitor my child's academic progress and assignments effortlessly. This transparency makes my child feel more supported and motivated, knowing that I am informed about their schoolwork. Skoolar’s ease of use in tracking achievements and staying connected with teachers has significantly enhanced my involvement in my child’s educational experience.",
    name: "Zaky",
    role: "Ahmad parents",
    avatar: "/zaky.jpg",
  },
  {
    quote:
      "Using Skoolar has been a game-changer for me as a parent. The direct messaging feature with teachers allows me to keep a close eye on my child's progress and assignments in real-time. Knowing what my child is working on at school makes them feel more supported, and it enhances our ability to stay connected. Skoolar makes it easy to communicate and track my child's achievements, helping me be more engaged in their educational journey.",
    name: "Fajri",
    role: "Dylan parents",
    avatar: "/fajri.jpg",
  },
];

const innovations = [
  {
    title: "Teacher Productivity",
    description:
      "Skoolar helps teachers become more productive by simplifying the process of monitoring student assignments and allowing personal communication with parents.",
    image: "/teacher.jpg",
    color: "bg-blue-500",
    tag: "Teachers",
  },
  {
    title: "Engaged Students",
    description:
      "Students are happier because parents are more involved in their learning journey, providing support and contributing to their educational progress.",
    image: "/student.jpg",
    color: "bg-orange-500",
    tag: "Students",
  },
  {
    title: "Convenient for Working Parents",
    description:
      "Working parents get easy access to their children's school progress and important updates, even with a busy schedule.",
    image: "/parent.jpg",
    color: "bg-green-500",
    tag: "Parents",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya dipicu sekali
    threshold: 0.1, // 10% elemen harus terlihat sebelum animasi dimulai
  });
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#2B478B]">Skoolar</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-[#2B478B] text-base">
            <li>
              <Link href="#" className="hover:text-[#1E3A8A]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1E3A8A]">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1E3A8A]">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1E3A8A]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1E3A8A]">
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Link
            href={"/login"}
            className="px-4 py-2 text-base text-[#2B478B] hover:text-[#1E3A8A]"
          >
            Login
          </Link>
          <button className="px-4 py-2 text-base bg-[#2B478B] text-white rounded-md hover:bg-[#1E3A8A]">
            Signup
          </button>
        </div>
      </header>

      <main className="flex-grow bg-white">
        <section className="container mx-auto py-12 flex items-center px-7">
          <motion.div ref={ref} initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }} className="w-full md:w-1/2 pr-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-2 md:mb-4">
              Educate Today,
              <br />
              Innovate Tomorrow
            </h1>
            <p className="text-gray-600 mb-4 md:mb-6 max-w-md text-sm md:text-base">
              "We provide the best facilities for your child's education,
              preparing them for success, with the skills for a bright future."
            </p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-[#0165FF] text-white rounded-md hover:bg-[#0167ffc1] text-sm md:text-base">
                Start
              </button>
              <button className="px-4 py-2 border border-[#0165FF] text-[#0165FF] rounded-md hover:bg-gray-100 flex items-center text-sm md:text-base">
                Find More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
          <motion.div initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 3 }} className="hidden md:block w-1/2">
            <Image
              src={illustration2}
              alt="Education Illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </section>

        <motion.section ref={ref} initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }} className="flex flex-col justify-center items-center w-full px-28">
          <p className="text-center font-semibold text-4xl">
            We Collaborate With Various <br /> Big <span className="underline">School</span>
          </p>
          <div className="relative w-full overflow-hidden">
            <div className="logo-slider flex items-center gap-16">
              <img className="h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUUlpksqQ5ZC0o-RIDUUklHC2CUHjfzJXlA&s" alt="School 1" />
              <img className="w-60 h-20" src="https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/xMoyiqJZLwCdkNjOrKVoIChaFAjpKGMEHrrxvUQJ.png" alt="School 2" />
              <img className="h-24" src="https://www.cikal.co.id/file/2021/07/01c2113f0f485074ab8ed4ffd2da582f3c91431f.jpg" alt="School 3" />
              <img className="h-20" src="https://yt3.googleusercontent.com/ytc/AIdro_mXvd5X-cPcPgYGhRnxbpOLLS1bpbicBtONFGd_6yvKVw=s900-c-k-c0x00ffffff-no-rj" alt="School 4" />
              <img className="h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUUlpksqQ5ZC0o-RIDUUklHC2CUHjfzJXlA&s" alt="School 1" />
              <img className="w-60 h-20" src="https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/xMoyiqJZLwCdkNjOrKVoIChaFAjpKGMEHrrxvUQJ.png" alt="School 2" />
              <img className="h-24" src="https://www.cikal.co.id/file/2021/07/01c2113f0f485074ab8ed4ffd2da582f3c91431f.jpg" alt="School 3" />
              <img className="h-20" src="https://yt3.googleusercontent.com/ytc/AIdro_mXvd5X-cPcPgYGhRnxbpOLLS1bpbicBtONFGd_6yvKVw=s900-c-k-c0x00ffffff-no-rj" alt="School 4" />
            </div>
          </div>
        </motion.section>

        <style jsx>{`
  .logo-slider {
    animation: slide 15s linear infinite;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`}</style>

        <motion.section ref={ref} initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }} className="py-16 bg-white px-28">
          <div className="container mx-auto px-4">
            <div className="flex justify-between">
              <div className="w-full md:w-1/2 space-y-8 mb-8 md:mb-0">
                <div className="">
                  <h2 className="text-2xl font-semibold w-full pl-5">
                    Why Choose
                  </h2>
                  <img className="h-20" src="https://res.cloudinary.com/dqrmcom6v/image/upload/v1725532172/SKOOLAR_trw2yi.png" alt="" />
                  <p className=" text-neutral-400 mb-12 w-[35rem] pl-5">
                    Skoolar is a platform that improves collaboration between parents and teachers for better involvement in a child's education.
                  </p>
                </div>
                <div className="flex items-start pl-3">
                  <div className="bg-blue-500 p-3 rounded-full mr-6">
                    <Users className="w-6 h-6 text-blue-100" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Private and Secure Communication
                    </h3>
                    <p className="text-neutral-400 ">
                      Skoolar ensures private communication between parents and teachers, keeping sensitive information secure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start pl-3">
                  <div className="bg-[#EC5A53] p-3 rounded-full mr-6">
                    <BookOpen className="w-6 h-6  text-[#F7BDBA]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Enhanced Parental Involvement
                    </h3>
                    <p className="text-neutral-400 ">
                      Skoolar lets parents track their child’s school activities and assignments, helping them support their child’s education.
                    </p>
                  </div>
                </div>
                <div className="flex items-start pl-3">
                  <div className="bg-[#FFAB11] p-3 rounded-full mr-6">
                    <Trophy className="w-6 h-6 text-[#FFDFA0]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Better Learning Control
                    </h3>
                    <p className="text-neutral-400">
                      Learning is more controlled as parents and teachers work
                      together to ensure a smooth learning process for the
                      student.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex pl-7 justify-center">
                <Image
                  src={illustration}
                  alt="Learning and Communication Illustration"
                  width={500}
                  height={400}
                  className="max-w-full h-auto scale-105"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <section className="w-full h-auto mt-10 relative">
          <Image
            className=""
            height={1000}
            src={feature2}
          />
        </section>

        <section className="px-32  mt-12 flex w-full mb-20 bg-blue-50 py-16 bg-opacity-70">
          <div className="w-[37%]">
            <p className="text-5xl font-medium tracking-wide">
              What Our Alumni <br /> Parents Said About <br /> <span className="text-blue-700">Skoolar?</span>
            </p>
            <p className=" pt-5 text-neutral-400">
              Skoolar is a web app that connects teachers and parents, allowing parents to track their children's school activities and stay involved in their education.
            </p>
          </div>

          <div className="ml-32">
            <div className="bg-white h-64 w-96 rounded-xl ">
              <p className="p-7">
                As a parent, Skoolar helps me monitor my child's progress and assignments in real-time through direct communication with teachers.
              </p>
            </div>
          </div>
        </section>




        {/* <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Esteemed Parents
                <br />
                Have to Say About
                <br />
                <span className="text-[#2B478B]">Skoolar?</span>
              </h2>
              <p className="text-gray-600 mb-12 max-w-2xl">
                Skoolar is a web-based application that allows teachers and
                parents to communicate directly. It enables parents to monitor
                their children's school activities and assignments closely,
                ensuring they feel supported and cared for. With Skoolar,
                parents can stay informed about what their kids are doing at
                school, fostering a strong connection between home and school
                life.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="mb-6">
                  <p className="text-lg text-gray-700 italic relative z-10">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={nextTestimonial}
                  className="absolute bottom-8 right-8 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>  */}

        <section className="bg-[#2B478B] py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Educate Today, Innovate Tomorrow
            </h2>
            <p className="mb-8">
              Join Skoolar today and unlock your potential to shape a brighter
              future!
            </p>
            <button className="px-6 py-3 bg-white text-[#2B478B] rounded-md hover:bg-gray-100 text-lg font-semibold">
              Enroll Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Skoolar</h3>
              <p className="text-gray-400">Educate Today, Innovate Tomorrow</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Pricese
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">08111-909-089</p>
              <p className="text-gray-400">contact@skoolar.com</p>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Skoolar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
