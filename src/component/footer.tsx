import { RiTerminalBoxLine } from "react-icons/ri";

const FooterComponent = () => {
  return (
    <div className="w-full h-28  mt-20 p-4 flex items-center justify-between">
      <div className="flex gap-1 w-36 text-pinkPrimary bg-pinkSecondary/25 p-2 px-4 rounded-full items-center text-md">
        <RiTerminalBoxLine className="text-xl" />
        <p className=" font-semibold mt-[2px]">Miko Meysa</p>
      </div>
      <p className=" mt-2 text-pinkPrimary/70 mb-2">&copy; Copyright 2023</p>
    </div>
  );
};

export default FooterComponent;
