export default function FourthStep({
  setSelectedTab,
  isYearly,
  selectedPlan,
  selectedAddOns,
}) {
  return (
    <>
      <div className="mx-5 h-fit max-h-[80%] w-full overflow-y-auto rounded-lg bg-white px-5 py-7 shadow-md md:px-10 md:py-12 md:shadow-none">
        <h1 className="text-2xl font-extrabold text-[#072B5B] md:text-4xl">
          Finishing up
        </h1>
        <p className="mt-2 max-w-[300px] text-lg text-gray-500/80 md:max-w-none">
          Double-check everything looks OK before confirming.
        </p>
        <div className="mt-4 flex w-full flex-col gap-4 rounded-xl bg-slate-100 p-5 md:mt-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-start">
              <h1 className="font-[500] text-[#1a3253]">
                {selectedPlan == 1
                  ? "Arcade"
                  : selectedPlan == 2
                  ? "Pro"
                  : "Advanced"}
                {isYearly ? " (Yearly)" : " (Monthly)"}
              </h1>
              <button
                className="text-gray-500 underline hover:text-gray-700"
                onClick={() => setSelectedTab(2)}
              >
                Change
              </button>
            </div>
            <h2 className="font-[600] text-[#142946]">
              $
              {isYearly
                ? selectedPlan == 1
                  ? "90/yr"
                  : selectedPlan == 2
                  ? "120/yr"
                  : "150/yr"
                : selectedPlan == 1
                ? "9/mo"
                : selectedPlan == 2
                ? "12/mo"
                : "15/mo"}
            </h2>
          </div>
          <hr className="rounded border-2" />
          <div className="flex flex-col gap-2 text-gray-500">
            {selectedAddOns[0] && (
              <div className="flex items-center justify-between">
                <h2>Online service</h2>
                <h2 className="text-black">
                  {isYearly ? "+$10/yr" : "+$1/mo"}
                </h2>
              </div>
            )}
            {selectedAddOns[1] && (
              <div className="flex items-center justify-between">
                <h2>Larger storage</h2>
                <h2 className="text-black">
                  {isYearly ? "+$20/yr" : "+$2/mo"}
                </h2>
              </div>
            )}
            {selectedAddOns[2] && (
              <div className="flex items-center justify-between">
                <h2>Customizable profile</h2>
                <h2 className="text-black">
                  {isYearly ? "+$20/yr" : "+$2/mo"}
                </h2>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between p-5">
          <h1 className="text-gray-500">
            Total {isYearly ? " (per year)" : " (per month)"}
          </h1>
          <h2 className="text-lg font-[600] text-[#483EFF]">
            $
            {9 +
              (selectedPlan - 1) * 3 +
              selectedAddOns[0] * 1 +
              selectedAddOns[1] * 2 +
              selectedAddOns[2] * 2}
            {isYearly ? "0/yr" : "/mo"}
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 flex h-[80px] w-full flex-row-reverse items-center justify-between bg-white p-5 font-[500] md:right-0 md:w-[calc(100%-368px)] md:rounded-br-2xl">
        <button className="flex items-center justify-center rounded-lg bg-[#483EFF] px-5 py-3 text-white transition-colors hover:bg-[#938CFE]">
          Confirm
        </button>
        <button
          className="text-gray-400 transition-colors hover:text-gray-800"
          onClick={() => {
            setSelectedTab(3);
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
