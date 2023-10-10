import CheckMark from "../assets/images/icon-checkmark.svg";

export default function ThirdStep({
  setSelectedTab,
  selectedAddOns,
  setSelectedAddons,
  isYearly,
}) {
  return (
    <>
      <div className="mx-5 h-fit max-h-[80%] w-full overflow-y-auto rounded-lg bg-white px-5 py-7 shadow-md md:px-10 md:py-12 md:shadow-none">
        <h1 className="text-2xl font-extrabold text-[#072B5B] md:text-4xl">
          Pick add-ons
        </h1>
        <p className="mt-2 max-w-[300px] text-lg text-gray-500/80 md:max-w-none">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="mt-4 flex w-full flex-col gap-2 md:mt-8">
          <div
            className={
              (selectedAddOns[0] == 1
                ? "border-[#072B5B]/50 bg-[#F8F9FE]"
                : "") +
              " flex w-full items-center gap-4 rounded-lg border-2 p-3 transition-colors"
            }
            onClick={() =>
              setSelectedAddons((prev) =>
                prev.map((item, index) => {
                  if (index == 0) {
                    return !item;
                  } else {
                    return item;
                  }
                }),
              )
            }
          >
            <div
              className={
                (selectedAddOns[0] ? "bg-purple-600" : "") +
                " grid h-5 w-5 place-items-center rounded-md border"
              }
            >
              <img src={CheckMark} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-extrabold text-[#072B5B]">Online service</h1>
              <h2 className="text-sm text-gray-500">
                Access to multiplayer games.
              </h2>
            </div>
            <div className="ml-auto text-purple-700">
              {isYearly ? "+$10/yr" : "+$1/mo"}
            </div>
          </div>
          <div
            className={
              (selectedAddOns[1] == 1
                ? "border-[#072B5B]/50 bg-[#F8F9FE]"
                : "") +
              " flex w-full items-center gap-4 rounded-lg border-2 p-3 transition-colors"
            }
            onClick={() =>
              setSelectedAddons((prev) =>
                prev.map((item, index) => {
                  if (index == 1) {
                    return !item;
                  } else {
                    return item;
                  }
                }),
              )
            }
          >
            <div
              className={
                (selectedAddOns[1] ? "bg-purple-600" : "") +
                " grid h-5 w-5 place-items-center rounded-md border"
              }
            >
              <img src={CheckMark} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-extrabold text-[#072B5B]">Larger storage</h1>
              <h2 className="text-sm text-gray-500">
                Extra 1TB of cloud save.
              </h2>
            </div>
            <div className="ml-auto text-purple-700">
              {isYearly ? "+$20/yr" : "+$2/mo"}
            </div>
          </div>
          <div
            className={
              (selectedAddOns[2] == 1
                ? "border-[#072B5B]/50 bg-[#F8F9FE]"
                : "") +
              " flex w-full items-center gap-4 rounded-lg border-2 p-3 transition-colors"
            }
            onClick={() =>
              setSelectedAddons((prev) =>
                prev.map((item, index) => {
                  if (index == 2) {
                    return !item;
                  } else {
                    return item;
                  }
                }),
              )
            }
          >
            <div
              className={
                (selectedAddOns[2] ? "bg-purple-600" : "") +
                " grid h-5 w-5 place-items-center rounded-md border"
              }
            >
              <img src={CheckMark} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-extrabold text-[#072B5B]">
                Customizable profile
              </h1>
              <h2 className="text-sm text-gray-500">
                Custom theme on your profile.
              </h2>
            </div>
            <div className="ml-auto text-purple-700">
              {isYearly ? "+$20/yr" : "+$2/mo"}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex h-[80px] w-full flex-row-reverse items-center justify-between bg-white p-5 font-[500] md:right-0 md:w-[calc(100%-368px)] md:rounded-br-2xl">
        <button
          className="flex items-center justify-center rounded-lg bg-[#072B5B] px-5 py-3 text-white transition-colors hover:bg-[#174A8B]"
          onClick={() => setSelectedTab(4)}
        >
          Next Step
        </button>
        <button
          className="text-gray-400 transition-colors hover:text-gray-800"
          onClick={() => {
            setSelectedTab(2);
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
