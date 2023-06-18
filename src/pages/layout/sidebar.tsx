import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Brand</h2>
        <p className="text-sm text-gray-400 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
        <div className="flex flex-col mt-8">
          <span className="text-sm text-gray-400 dark:text-gray-300">Projects</span>
          <div className="flex flex-col mt-2">
            <span className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4C3 2.89543 3.89543 2 5 2H15C16.1046 2 17 2.89543 17 4V16C17 17.1046 16.1046 18 15 18H5C3.89543 18 3 17.1046 3 16V4ZM5 4H15V16H5V4Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 10C8 8.89543 8.89543 8 10 8H15C16.1046 8 17 8.89543 17 10V16C17 17.1046 16.1046 18 15 18H10C8.89543 18 8 17.1046 8 16V10ZM10 10H15V16H10V10Z"
                  fillOpacity="0.5"
                />
              </svg>
              <span>NextJs</span>
            </span>
            <span className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4C3 2.89543 3.89543 2 5 2H15C16.1046 2 17 2.89543 17 4V16C17 17.1046 16.1046 18 15 18H5C3.89543 18 3 17.1046 3 16V4ZM5 4H15V16H5V4Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 10C8 8.89543 8.89543 8 10 8H15C16.1046 8 17 8.89543 17 10V16C17 17.1046 16.1046 18 15 18H10C8.89543 18 8 17.1046 8 16V10ZM10 10H15V16H10V10Z"
                  fillOpacity="0.5"
                />
              </svg>
              <span>ReactJs</span>
            </span>
            <span className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4C3 2.89543 3.89543 2 5 2H15C16.1046 2 17 2.89543 17 4V16C17 17.1046 16.1046 18 15 18H5C3.89543 18 3 17.1046 3 16V4ZM5 4H15V16H5V4Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 10C8 8.89543 8.89543 8 10 8H15C16.1046 8 17 8.89543 17 10V16C17 17.1046 16.1046 18 15 18H10C8.89543 18 8 17.1046 8 16V10ZM10 10H15V16H10V10Z"
                  fillOpacity="0.5"
                />
              </svg>
              <span>VueJs</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <span className="text-sm text-gray-400 dark:text-gray-300">Members</span>
          <div className="flex flex-col mt-2">
            <span className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <Image
                className="w-6 h-6 rounded-full mr-2"
                src="https://pbs.twimg.com/profile_images/1259926100261601280/OgmLtUZJ_400x400.jpg"
                alt="Avatar of Jonathan Reinink"
                width={50}
                height={50}
              />
              <span>Jonathan Reinink</span>
            </span>
            <span className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <Image
                className="w-6 h-6 rounded-full mr-2"
                src="https://pbs.twimg.com/profile_images/1259926100261601280/OgmLtUZJ_400x400.jpg"
                alt="Avatar of Jonathan Reinink"
                width={50}
                height={50}
              />
              <span>Jonathan Reinink</span>
            </span>
            <span className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <Image
                className="w-6 h-6 rounded-full mr-2"
                src="https://pbs.twimg.com/profile_images/1259926100261601280/OgmLtUZJ_400x400.jpg"
                alt="Avatar of Jonathan Reinink"
                width={50}
                height={50}
              />
              <span>Jonathan Reinink</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;