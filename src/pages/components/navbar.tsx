export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-[#003F88] p-6 ">
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