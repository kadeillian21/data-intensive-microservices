import Image from "next/image";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-[#2B2D42] p-6">
        <Link
          className="flex items-center flex-shrink-0 text-white mr-6 hover:text-[#D90429]"
          href="/"
        >
          <Image
            src="/favicon.svg"
            alt="Data Dive Logo"
            width={50}
            height={50}
          />
          <span className="font-semibold text-2xl tracking-tight pl-4">Data Dive</span>
        </Link> 
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}; 