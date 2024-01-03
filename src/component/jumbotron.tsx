import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaRegSquare, FaRegHeart } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";

const JumbotronComponent = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Mobile Developer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="jumbotron"
      className="w-full flex justify-center items-center flex-col"
    >
      <FaRegSquare className="absolute top-44 text-xl text-purplePrimary/50 left-14 animate-[spinNew_5s_linear_infinite] " />
      <FiTriangle className="absolute top-32 text-xl text-bluePrimary/50 left-24 animate-[spinNew_5s_linear_infinite]" />
      <FaRegHeart className="absolute top-24 text-xl text-pinkPrimary/50 animate-[spinNew_5s_linear_infinite] " />
      <FiTriangle className="absolute top-44 text-xl text-bluePrimary/50 right-14 animate-[spinNew_5s_linear_infinite]" />
      <FaRegSquare className="absolute top-32 text-xl text-purplePrimary/50 right-24 animate-[spinNew_5s_linear_infinite] " />

      <div className=" text-center mt-32 mb-10">
        <p className="mb-1 text-md">
          <span className="m-2 p-1 px-2 rounded-full pt-1 mb-4 text-pinkPrimary font-bold bg-pinkSecondary/25">
            Hello There!
          </span>
        </p>
        <p className="text-lg font-bold text-black/70 my-2">
          I<span className=" text-purplePrimary">'</span>m Miko Meysa Bima
        </p>
        <p className=" font-extrabold text-transparent bg-clip-text text-4xl bg-gradient-to-r from-pinkPrimary via-purplePrimary to-bluePrimary ">
          <span ref={el}></span>
        </p>
      </div>
      <div className="flex gap-3 mb-10">
        <div className=" bg-pinkSecondary/25 py-1 px-4 rounded-full">
          <p className=" text-pinkPrimary font-semibold">About Me</p>
        </div>
        <div className=" bg-purpleSecondary/25 py-1 px-4 rounded-full">
          <p className="text-purplePrimary font-semibold">Download CV</p>
        </div>
      </div>
    </div>
  );
};

export default JumbotronComponent;
