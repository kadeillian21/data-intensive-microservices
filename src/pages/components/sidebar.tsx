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
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Data Dive Examples', href: '/data-dive', icon: DocumentDuplicateIcon },
  { name: 'Code', href: '/code', icon: FolderIcon },
  { name: 'About Us', href: '/about', icon: GlobeAltIcon },
  { name: 'Blog', href: '/blog', icon: PencilSquareIcon },
  { name: 'Contact Us', href: '/contact', icon: PhoneIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('/')
  const [activeTabName, setActiveTabName] = useState<string>('Home')
  const [activeTabIcon, setActiveTabIcon] = useState(HomeIcon as unknown)
  
  useEffect(() => {
    setActiveTab(window.location.pathname)
    if (window.location.pathname === '/') {
      setActiveTabName('Home')
      setActiveTabIcon(HomeIcon)
    } else if (window.location.pathname === '/data-dive') {
      setActiveTabName('Data Dive Examples')
      setActiveTabIcon(DocumentDuplicateIcon)
    } else if (window.location.pathname === '/code') {
      setActiveTabName('Code')
      setActiveTabIcon(FolderIcon)
    } else if (window.location.pathname === '/about') {
      setActiveTabName('About Us')
      setActiveTabIcon(GlobeAltIcon)
    } else if (window.location.pathname === '/blog') {
      setActiveTabName('Blog')
      setActiveTabIcon(PencilSquareIcon)
    } else if (window.location.pathname === '/contact') {
      setActiveTabName('Contact Us')
      setActiveTabIcon(PhoneIcon)
    }
  }, [activeTab])
  return (
    <div className="fixed top-0 left-0 h-screen w-64 flex flex-col gap-y-5 overflow-y-auto bg-[#FFD500] px-6 pt-8">
      <Link
        className="flex items-center flex-shrink-0 text-[#003F88] mr-6 hover:text-white"
        href="/"
      >
        <Image
          src="/favicon-blue.svg"
          alt="Data Dive Logo"
          width={50}
          height={50}
          className="fill"
        />
        <span className="font-semibold text-2xl tracking-tight pl-4">Data Dive</span>
      </Link> 
      <nav className="mt-4 flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((page) => (
                <li key={page.name}>
                  <a
                    href={page.href}
                    className={classNames(
                      activeTabName === page.name
                        ? 'bg-[#00296B] text-white'
                        : 'text-[#00296B] hover:text-white hover:bg-[#00296B]',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <page.icon
                      className={classNames(
                        activeTabIcon === page.icon ? 'text-white' : 'text-[#00296B] group-hover:text-white',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
