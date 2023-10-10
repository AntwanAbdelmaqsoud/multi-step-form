import SideBarBgDesktop from "../assets/images/bg-sidebar-desktop.svg";
import SideBarBgMobile from "../assets/images/bg-sidebar-mobile.svg";

import { useState, useEffect } from "react";

export default function Sidebar({ selectedTab, setSelectedTab }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="sideBar"
      className="h-[175px] w-full shrink-0 overflow-hidden bg-cover bg-center p-10 md:h-full md:w-[20.5rem] md:rounded-2xl"
      style={
        windowWidth <= 768
          ? { backgroundImage: `url(${SideBarBgMobile})` }
          : { backgroundImage: `url(${SideBarBgDesktop})` }
      }
    >
      <div className="flex h-1/2 w-full justify-center gap-4 text-white md:h-full md:flex-col md:justify-normal md:gap-8">
        <div
          className="md:flex md:w-full md:items-center md:gap-5"
          onClick={() => setSelectedTab(1)}
        >
          <div
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#BDE2FD] font-bold transition-colors"
            style={
              selectedTab == 1
                ? { backgroundColor: "#BDE2FD", color: "black" }
                : {}
            }
          >
            1
          </div>
          <div className="hidden flex-col font-[Ubuntu] md:flex">
            <h1 className="font-light opacity-60">STEP 1</h1>
            <h1 className="font-bold tracking-widest">YOUR INFO</h1>
          </div>
        </div>
        <div
          className="md:flex md:w-full md:items-center md:gap-5"
          onClick={() => setSelectedTab(2)}
        >
          <div
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#BDE2FD] font-bold transition-colors"
            style={
              selectedTab == 2
                ? { backgroundColor: "#BDE2FD", color: "black" }
                : {}
            }
          >
            2
          </div>
          <div className="hidden flex-col font-[Ubuntu] md:flex ">
            <h1 className="font-light opacity-60">STEP 2</h1>
            <h1 className="font-bold tracking-widest">SELECT PLAN</h1>
          </div>
        </div>
        <div
          className="md:flex md:w-full md:items-center md:gap-5"
          onClick={() => setSelectedTab(3)}
        >
          <div
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#BDE2FD] font-bold transition-colors"
            style={
              selectedTab == 3
                ? { backgroundColor: "#BDE2FD", color: "black" }
                : {}
            }
          >
            3
          </div>
          <div className="hidden flex-col font-[Ubuntu] md:flex ">
            <h1 className="font-light opacity-60">STEP 3</h1>
            <h1 className="font-bold tracking-widest">ADD-ONS</h1>
          </div>
        </div>
        <div
          className="md:flex md:w-full md:items-center md:gap-5"
          onClick={() => setSelectedTab(4)}
        >
          <div
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#BDE2FD] font-bold transition-colors"
            style={
              selectedTab == 4
                ? { backgroundColor: "#BDE2FD", color: "black" }
                : {}
            }
          >
            4
          </div>
          <div className="hidden flex-col font-[Ubuntu] md:flex ">
            <h1 className="font-light opacity-60">STEP 4</h1>
            <h1 className="font-bold tracking-widest">SUMMARY</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
