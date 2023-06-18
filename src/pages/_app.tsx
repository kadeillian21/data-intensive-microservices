import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Navbar } from "./layout/navbar";
import Sidebar from "./layout/sidebar";

const MyApp: AppType = ({ Component, pageProps }) => {
  
  return (
  <>
    <Navbar />
    <Sidebar />
    <Component {...pageProps} />
  </>
  )
};

export default api.withTRPC(MyApp);
