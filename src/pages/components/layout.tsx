import { Navbar } from './navbar'
import { Sidebar } from './sidebar'
 
interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Sidebar />
    </>
  )
}

export default Layout;