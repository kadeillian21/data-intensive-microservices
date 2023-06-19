import Image from "next/image";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-[#003F88] p-6 ">
        <Link
          className="flex items-center flex-shrink-0 text-[#FFD500] mr-6 hover:text-white"
          href="/"
        >
          <Image
            src="/favicon-yellow.svg"
            alt="Data Dive Logo"
            width={50}
            height={50}
            className="fill"
          />
          <span className="font-semibold text-2xl tracking-tight pl-4">Data Dive</span>
        </Link> 
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <a
              href="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#FFD500] hover:text-white">
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}; 