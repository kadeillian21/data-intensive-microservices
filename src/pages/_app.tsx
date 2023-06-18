import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Navbar } from "./layout/navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
  )
};

export default api.withTRPC(MyApp);
