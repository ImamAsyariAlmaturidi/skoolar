"use client";

import Image from "next/image";
import illustration from "../../public/Untitled.svg";
import illustration2 from "../../public/illustration_2.svg";
import feature2 from "../../public/Feature5.svg";
import Link from "next/link";
import { BookOpen, Users, Trophy, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestiCard from "../components/TestiCard";
import FeatureScroll from "../components/FeatureScroll";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";
import { Link as ScrollLink } from "react-scroll";

const slideIn = {
  hidden: { x: "-100vw", opacity: 0 },
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

const infiniteScrollVariants = {
  animate: {
    x: [-1000, 0], // Start at -1000px, move to 0px
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
        ease: "linear",
      },
    },
  },
};

const testimonials = [
  {
    name: "Imam Imam Asyari",
    relation: "Dylan's Parent",
    message: "Skoolar helps me monitor my child's progress in real-time.",
    image: "https://cdn-icons-png.freepik.com/512/10302/10302971.png",
  },
  {
    name: "Sarah Thompson",
    relation: "Lily's Parent",
    message: "I love how easy it is to communicate with teachers via Skoolar.",
    image: "https://cdn-icons-png.freepik.com/512/10302/10302971.png",
  },
  {
    name: "John Doe",
    relation: "Sophia's Parent",
    message: "Skoolar allows me to stay connected with my child's school life.",
    image: "https://cdn-icons-png.freepik.com/512/10302/10302971.png",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, 100]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya dipicu sekali
    threshold: 0.1, // 10% elemen harus terlihat sebelum animasi dimulai
  });
  return (
    <div className="min-h-screen bg-white flex flex-col w-full">
      <header className="fixed py-4 px-28 flex justify-between items-center bg-white z-50 w-screen">
        <img
          className="h-10"
          src="https://res.cloudinary.com/dqrmcom6v/image/upload/v1725532172/SKOOLAR_trw2yi.png"
          alt=""
        />
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-[#2B478B] text-base">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-[#1E3A8A] cursor-pointer"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="feature"
                smooth={true}
                duration={500}
                className="hover:text-[#1E3A8A] cursor-pointer"
              >
                Feature
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="why-us"
                smooth={true}
                duration={500}
                className="hover:text-[#1E3A8A] cursor-pointer"
              >
                Why Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="review"
                smooth={true}
                duration={500}
                className="hover:text-[#1E3A8A] cursor-pointer"
              >
                Reviews
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <Link href={"/login"}>
            <button className="px-4 py-2 rounded-lg bg-[#0165FF] text-base text-white hover:bg-[#203466]">
              Login
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-grow bg-white">
        <section
          id="home"
          className="container mx-auto py-12 flex items-center px-7"
        >
          <motion.div
            ref={ref}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/2 pr-0 md:pr-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-2 md:mb-4">
              Educate Today,
              <br />
              Innovate Tomorrow
            </h1>
            <p className="text-gray-600 mb-4 md:mb-6 max-w-md text-sm md:text-base">
              We provide the best facilities for your childs education,
              preparing them for success, with the skills for a bright future.
            </p>
            <div className="flex space-x-4">
              <Link
                href={"/login"}
                className="px-4 py-2 bg-[#0165FF] text-white rounded-md hover:bg-[#0167ffc1] text-sm md:text-base"
              >
                Start
              </Link>
              <ScrollLink
                to="why-us"
                smooth={true}
                duration={500}
                className="px-4 py-2 border border-[#0165FF] text-[#0165FF] rounded-md hover:bg-gray-100 flex items-center text-sm md:text-base"
              >
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
              </ScrollLink>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 3 }}
            className="hidden md:block w-1/2"
          >
            <Image
              src={illustration2}
              alt="Education Illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </section>

        <FadeInSection>
          <div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center items-center w-full px-36"
          >
            <p className="text-center font-semibold text-4xl">
              We Serve You With Various <br /> Feature For{" "}
              <span className="underline"> School </span> and{" "}
              <span className="underline">Parent</span>
            </p>
            <div className="relative w-full overflow-hidden ">
              <div className=" flex items-center gap-24 my-10  mt-14 logo-slider">
                <FeatureScroll />
              </div>
            </div>
          </div>
        </FadeInSection>

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

        <FadeInSection>
          <div id="why-us" className="py-16 bg-white px-28">
            <div className="container mx-auto px-4">
              <div className="flex justify-between">
                <div className="w-full md:w-1/2 space-y-8 mb-8 md:mb-0">
                  <div className="">
                    <h2 className="text-2xl font-semibold w-full pl-5">
                      Why Choose
                    </h2>
                    <img
                      className="h-20"
                      src="https://res.cloudinary.com/dqrmcom6v/image/upload/v1725532172/SKOOLAR_trw2yi.png"
                      alt=""
                    />
                    <p className=" text-neutral-400 mb-12 w-[35rem] pl-5">
                      Skoolar is a platform that improves collaboration between
                      parents and teachers for better involvement in a childs
                      education.
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
                        Skoolar ensures private communication between parents
                        and teachers, keeping sensitive information secure.
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
                        Skoolar lets parents track their childs school
                        activities and assignments, helping them support their
                        childs education.
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
          </div>
        </FadeInSection>

        <section
          id="feature"
          className="w-full h-auto mt-10 flex justify-between "
        >
          <div className="mt-20">
            <p className=" text-neutral-700 text-6xl font-semibold ml-32 mt-28 pr-10">
              Stay connected easily and securely through Skoolar.
            </p>

            <p className="ml-32 mt-10 pr-16 text-neutral-400">
              Our app provides fast and reliable communication through an
              integrated platform that features real-time chat for easy
              conversations between parents, teachers, and students.
              Additionally, it includes a payment system for handling
              school-related transactions and an assignment management tool,
              allowing students to track and submit their work while parents
              monitor their progress—all within a single, user-friendly
              application designed to streamline communication and enhance the
              overall educational experience.
            </p>
          </div>

          <Image className="w-[45rem]" src={feature2} />
        </section>
        <FadeInSection>
          <section
            id="review"
            className="px-32 mt-12 flex w-full mb-20 bg-blue-50 py-16 bg-opacity-70"
          >
            <div className="w-[37%] mr-16">
              <p className="text-5xl font-medium tracking-wide">
                What Our Alumni <br /> Parents Said About{" "}
                <span className="text-blue-700">Skoolar?</span>
              </p>
              <p className="pt-5 text-neutral-400">
                Skoolar is a web app that connects teachers and parents,
                allowing parents to track their childrens school activities and
                stay involved in their education.
              </p>
            </div>

            {/* Infinite scrolling container */}
            <div className="w-[60%] overflow-hidden relative">
              <motion.div
                className="flex ml-10 space-x-5"
                variants={infiniteScrollVariants}
                animate="animate"
              >
                {testimonials.concat(testimonials).map((testi, index) => (
                  <TestiCard
                    key={index}
                    name={testi.name}
                    relation={testi.relation}
                    message={testi.message}
                    image={testi.image}
                  />
                ))}
              </motion.div>
            </div>
          </section>
        </FadeInSection>
      </main>

      <Footer />
    </div>
  );
}
