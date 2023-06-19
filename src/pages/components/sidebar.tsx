/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  PhoneIcon,
  PencilSquareIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Data Dive Examples', href: '/data-dive', icon: DocumentDuplicateIcon, current: false },
  { name: 'Projects', href: '/projects', icon: FolderIcon, current: false },
  { name: 'About Us', href: '/about', icon: GlobeAltIcon, current: false },
  { name: 'Blog', href: '/blog', icon: PencilSquareIcon, current: false },
  { name: 'Contact Us', href: '/contact', icon: PhoneIcon, current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-[98px] left-0 h-screen w-64 flex flex-col gap-y-5 overflow-y-auto bg-[#FFD500] px-6">
      <nav className="mt-4 flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-[#00296B] text-white'
                        : 'text-[#00296B] hover:text-white hover:bg-indigo-700',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-white' : 'text-[#00296B] group-hover:text-white',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
            >
              <Image
                className="h-8 w-8 rounded-full bg-indigo-700"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={32}
                height={32}
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
