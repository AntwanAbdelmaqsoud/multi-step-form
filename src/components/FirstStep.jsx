import { useState } from "react";

const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function FirstStep({ setSelectedTab, selectedTab }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [validName, setValidName] = useState(null);
  const [validEmail, setValidEmail] = useState(null);
  const [validPhone, setValidPhone] = useState(null);

  return (
    <>
      <div className="mx-5 h-fit w-full rounded-lg bg-white px-5 py-7 shadow-md md:px-10 md:py-12 md:shadow-none">
        <h1 className="text-2xl font-extrabold text-[#072B5B] md:text-4xl">
          Personal info
        </h1>
        <p className="mt-2 max-w-[300px] text-lg text-gray-500/80 md:max-w-none">
          Please provide your name, email, address, and phone number.
        </p>
        <form className="mt-4 flex flex-col md:[&>div]:mt-2 [&>input]:p-2 [&>input]:indent-2 [&>input]:font-[500] md:[&>input]:rounded-lg md:[&>input]:p-3">
          <div className="flex justify-between text-sm">
            <label htmlFor="name" className="mt-2">
              Name
            </label>
            {validName != null &&
              (validName ? (
                ""
              ) : (
                <h2 className="mt-2 text-red-600">This section is required</h2>
              ))}
          </div>
          <input
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value) {
                setValidName(true);
              } else {
                setValidName(false);
              }
            }}
            value={name}
            type="text"
            name="name"
            className="rounded border-2"
            placeholder="e.g. Stephen King"
          />
          <div className="flex justify-between text-sm">
            <label htmlFor="email" className="mt-2">
              Email Address
            </label>
            {validEmail != null &&
              (validEmail ? (
                ""
              ) : (
                <h2 className="mt-2 text-red-600">Enter a valid email</h2>
              ))}
          </div>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              if (validEmail != null) {
                setValidEmail(Boolean(email.match(mailRegex)));
              }
            }}
            value={email}
            onBlur={() => setValidEmail(Boolean(email.match(mailRegex)))}
            type="email"
            name="email"
            className="rounded border-2"
            placeholder="e.g. stephenking@lorem.com"
          />
          <div className="flex justify-between text-sm">
            <label htmlFor="phone" className="mt-2">
              Phone Number
            </label>
            {validPhone != null &&
              (validPhone ? (
                ""
              ) : (
                <h2 className="mt-2 text-red-600">Enter a valid email</h2>
              ))}
          </div>
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (e.target.value) {
                setValidPhone(true);
              } else {
                setValidPhone(false);
              }
            }}
            type="number"
            name="phone"
            className="rounded border-2"
            placeholder="e.g. +1 234 567 890"
          />
        </form>
      </div>
      <div className="absolute bottom-0 flex h-[80px] w-full flex-row-reverse items-center justify-between bg-white p-5 font-[500] md:right-0 md:w-[calc(100%-358px)] md:rounded-br-2xl">
        <button
          className="flex items-center justify-center rounded-lg bg-[#072B5B] px-5 py-3 text-white transition-colors hover:bg-[#174A8B]"
          onClick={() => {
            if (validPhone && validName && validEmail) {
              setSelectedTab((prev) => prev + 1);
            } else {
              setValidName(Boolean(name));
              setValidEmail(Boolean(email.match(mailRegex)));
              setValidPhone(Boolean(phone));
            }
          }}
        >
          Next Step
        </button>
      </div>
    </>
  );
}
