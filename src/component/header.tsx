import { RiTerminalBoxLine } from "react-icons/ri";
import { FaGithub, FaInstagram } from "react-icons/fa6";

const HeaderComponent = () => {
  return (
    <header className="w-full py-4 flex px-4 items-center justify-between">
      <div className="flex gap-1 text-pinkPrimary bg-pinkSecondary/25 p-2 px-4 rounded-full items-center text-md">
        <RiTerminalBoxLine className="text-xl" />
        <p className=" font-semibold mt-[2px]">Miko Meysa</p>
      </div>

      <div className="flex gap-3 items-center">
        <div className="p-1.5 rounded-full bg-purpleSecondary/25">
          <FaInstagram className="text-2xl text-purplePrimary" />
        </div>
        <div className="p-1.5 rounded-full bg-blueSecondary/25">
          <FaGithub className="text-2xl text-bluePrimary" />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
