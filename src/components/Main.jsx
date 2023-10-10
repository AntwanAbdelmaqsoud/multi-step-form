import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { useState } from "react";

export default function Main({ setSelectedTab, selectedTab }) {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddOns, setSelectedAddons] = useState([false, false, false]);
  return (
    <div className="absolute inset-0 top-[100px] flex justify-center font-[Ubuntu] md:static md:w-[calc(100%-328px)]">
      {selectedTab == 1 && (
        <FirstStep selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      )}
      {selectedTab == 2 && (
        <SecondStep
          setSelectedTab={setSelectedTab}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          isYearly={isYearly}
          setIsYearly={setIsYearly}
        />
      )}
      {selectedTab == 3 && (
        <ThirdStep
          setSelectedTab={setSelectedTab}
          selectedAddOns={selectedAddOns}
          setSelectedAddons={setSelectedAddons}
          isYearly={isYearly}
        />
      )}
      {selectedTab == 4 && (
        <FourthStep
          setSelectedTab={setSelectedTab}
          selectedPlan={selectedPlan}
          selectedAddOns={selectedAddOns}
          isYearly={isYearly}
        />
      )}
    </div>
  );
}
