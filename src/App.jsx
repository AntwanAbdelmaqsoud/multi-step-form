import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="relative flex h-full w-full bg-slate-100/50 shadow-md md:h-[45rem] md:max-w-5xl md:justify-between md:rounded-2xl md:bg-white md:p-5 ">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Main selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </div>
  );
}
