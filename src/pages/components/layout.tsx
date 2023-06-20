import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

const style = {
  container: 'bg-white flex flex-row flex-grow min-h-screen max-h-screen min-w-full max-w-full overflow-none',
  mainContainer: 'flex flex-col flex-grow overflow-hidden pl-2 space-y-2',
  main: 'left-0 flex flex-col flex-grow overflow-y-auto p-4 space-y-4'
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
