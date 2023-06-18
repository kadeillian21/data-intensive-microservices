import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-b from-[#2ed24f] to-[#a1c724] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image
            src="/favicon.svg"
            alt="Data Dive Logo"
            width={50}
            height={50}
          />
          <span className="font-semibold text-xl tracking-tight">Data Dive</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 5h16v1H2V5zm0 4h16v1H2V9zm0 4h16v1H2v-1z"
              />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Blog
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}; 