import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const Header = () => {

  return (
    <div
      className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
        `)}
    >
      <div
        className="
            w-full
            mb-4
            flex
            justify-between
            items-center
            "
      >
                  <h1 className="text-3xl font-bold text-white">
              Musicas
            </h1>
        <div
          className="
            hidden
            md:flex
            gap-x-2
            items-center
            "
        >
          <button
            className="
            rounded-full
            bg-black
            flex
            justify-center
            items-center
            hover: opacity-75
            transition
          "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>


          <button
            className="
            rounded-full
            bg-black
            flex
            justify-center
            items-center
            hover: opacity-75
            transition
          "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
