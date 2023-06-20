import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

const style = {
  container: 'bg-gray-200 flex flex-row flex-grow min-h-screen max-h-screen min-w-full max-w-full overflow-none',
  mainContainer: 'flex flex-col flex-grow overflow-hidden pl-2 space-y-2',
  main: 'flex-grow overflow-auto rounded-2xl'
}

export default function Layout() {

  return (
    <div className={style.container}>
      <Sidebar />
      <div className={`${style.mainContainer}`}>
        <Navbar />
        <main className={style.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
