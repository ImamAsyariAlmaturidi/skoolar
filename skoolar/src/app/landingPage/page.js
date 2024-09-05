import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
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
          <button className="px-4 py-2 text-base text-[#2B478B] hover:text-[#1E3A8A]">
            Login
          </button>
          <button className="px-4 py-2 text-base bg-[#2B478B] text-white rounded-md hover:bg-[#1E3A8A]">
            Signup
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 flex items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B478B] mb-2 md:mb-4">
            Educate Today,
            <br />
            Inovate Tomorrow
          </h1>
          <p className="text-gray-600 mb-4 md:mb-6 max-w-md text-sm md:text-base">
            "We provide the best facilities for your child's education,
            preparing them for success, with the skills for a bright future."
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-[#2B478B] text-white rounded-md hover:bg-[#1E3A8A] text-sm md:text-base">
              Start
            </button>
            <button className="px-4 py-2 border border-[#2B478B] text-[#2B478B] rounded-md hover:bg-gray-100 flex items-center text-sm md:text-base">
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
        </div>
        <div className="hidden md:block w-1/2">
          <Image
            src="/education-illustration.png"
            alt="Education Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
}
