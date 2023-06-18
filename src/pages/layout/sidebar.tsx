import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Data Dive</h2>
        <p className="text-sm text-gray-400 dark:text-gray-300">Welcome to Data Dive!  Browse some of our projects to see clever solutions to complex data problems.</p>
        <div className="flex flex-col mt-8">
        </div>
      </div>
    </>
  )
}

export default Sidebar;