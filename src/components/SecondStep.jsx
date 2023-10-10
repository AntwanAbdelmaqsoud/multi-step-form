import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";
import advanced from "../assets/images/icon-advanced.svg";

export default function SecondStep({
  setSelectedTab,
  selectedPlan,
  setSelectedPlan,
  isYearly,
  setIsYearly,
}) {
  return (
    <>
      <div className="mx-5 h-fit max-h-[80%] w-full overflow-y-auto rounded-lg bg-white px-5 py-7 shadow-md md:px-10 md:py-12 md:shadow-none">
        <h1 className="text-2xl font-extrabold text-[#072B5B] md:text-4xl">
          Select your plan
        </h1>
        <p className="mt-2 max-w-[300px] text-lg text-gray-500/80 md:max-w-none">
          You have the option of monthly or yearly billing.
        </p>
        <div className="mt-4 flex w-full flex-col gap-2 md:mt-8 md:flex-row">
          <div
            className={
              (selectedPlan == 1 ? "border-[#072B5B]/50 bg-[#F8F9FE]" : "") +
              " flex w-full items-center gap-4 rounded-lg border-2 p-4 transition-colors md:flex-col md:items-start"
            }
            onClick={() => setSelectedPlan(1)}
          >
            <img src={arcade} />
            <div className="flex flex-col">
              <h1 className="font-extrabold text-[#072B5B]">Arcade</h1>
              <h2 className="font-[400] text-gray-500">
                {isYearly ? "$90/yr" : "$9/mo"}
              </h2>
              {isYearly && <h3 className="text-sm">2 months free</h3>}
            </div>
          </div>
          <div
            className={
              (selectedPlan == 2 ? "border-[#072B5B]/50 bg-[#F8F9FE]" : "") +
              " flex w-full items-center gap-4 rounded-lg border-2 p-4 transition-colors md:flex-col md:items-start"
            }
            onClick={() => setSelectedPlan(2)}
          >
            <img src={advanced} />
            <div className="flex flex-col">
              <h1 className="font-extrabold text-[#072B5B]">Advanced</h1>
              <h2 className="font-[400] text-gray-500">
                {isYearly ? "$120/yr" : "$12/mo"}
              </h2>
              {isYearly && <h3 className="text-sm">2 months free</h3>}
            </div>
          </div>
          <div
            className={
              (selectedPlan == 3 ? "border-[#072B5B]/50 bg-[#F8F9FE]" : "") +
              " flex w-full items-center gap-4  rounded-lg border-2 p-4 transition-colors md:flex-col md:items-start"
            }
            onClick={() => setSelectedPlan(3)}
          >
            <img src={pro} />
            <div className="flex flex-col">
              <h1 className="font-extrabold text-[#072B5B]">Pro</h1>
              <h2 className="font-[400] text-gray-500">
                {isYearly ? "$150/yr" : "$15/mo"}
              </h2>
              {isYearly && <h3 className="text-sm">2 months free</h3>}
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-4 rounded-lg bg-slate-100 p-2 font-[500] md:mt-8">
          <h1 className={isYearly ? "text-gray-400" : ""}>Monthly</h1>
          <button
            className="h-5 w-10 rounded-3xl bg-[#072B5B] p-1"
            onClick={() => setIsYearly((prev) => !prev)}
          >
            <span
              className="block h-3 w-3 rounded-full bg-white transition-transform"
              style={{ transform: `translateX(${isYearly ? "20px" : "0"})` }}
            ></span>
          </button>
          <h1 className={isYearly ? "" : "text-gray-400"}>Yearly</h1>
        </div>
      </div>
      <div className="absolute bottom-0 flex h-[80px] w-full flex-row-reverse items-center justify-between bg-white p-5 font-[500] md:right-0 md:w-[calc(100%-368px)] md:rounded-br-2xl">
        <button
          className="flex items-center justify-center rounded-lg bg-[#072B5B] px-5 py-3 text-white transition-colors hover:bg-[#174A8B]"
          onClick={() => setSelectedTab(3)}
        >
          Next Step
        </button>
        <button
          className="text-gray-400 transition-colors hover:text-gray-800"
          onClick={() => {
            setSelectedTab(1);
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
