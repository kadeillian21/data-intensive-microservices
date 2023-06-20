import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from ".";
import About from "./about";
import Blog from "./blog";
import Contact from "./contact";
import Projects from "./projects";
import DataDive from "./data-dive";
import { useEffect, useState } from "react";

const MyApp: AppType = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
   setIsBrowser(typeof window !== "undefined");
  }, []);
  
  return isBrowser ? (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/data-dive' element={<DataDive />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
  ) : null
};

export default api.withTRPC(MyApp);
