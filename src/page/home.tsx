import AboutComponent from "../component/about";
import FooterComponent from "../component/footer";
import HeaderComponent from "../component/header";
import JumbotronComponent from "../component/jumbotron";
import ProjectComponent from "../component/project";
import SkillComponent from "../component/skill";
import { MdArrowDownward } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="w-full lg:w-[480px] m-auto relative">
      <HeaderComponent />
      <JumbotronComponent />
      <IconScrollMe />
      <AboutComponent />
      <SkillComponent />
      <ProjectComponent />
      <FooterComponent />
    </div>
  );
};

const IconScrollMe = () => {
  return (
    <div className="grid place-items-center mt-24 mb-32">
      <span className="py-3 border border-pinkPrimary/60 px-2 rounded-full animate-bounce bg-pinkSecondary/25">
        <MdArrowDownward className=" text-xl text-pinkPrimary" />
      </span>
    </div>
  );
};

export default HomePage;
