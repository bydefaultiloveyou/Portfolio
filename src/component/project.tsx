import { useState } from "react";
import { CiLink } from "react-icons/ci";
import { api, mobile, web } from "../data/project";

const ProjectComponent = () => {
  const [skillShow, setSkillShow] = useState("web");

  return (
    <div className="w-full">
      <p className=" font-semibold text-black/70  text-2xl text-center mb-6">
        My project <span className=" text-bluePrimary">?</span>
      </p>
      <div className="flex gap-2 justify-center overflow-x-auto">
        <div
          onClick={() => setSkillShow("web")}
          className={`bg-purpleSecondary/25 py-1 px-4 border rounded-full ${
            skillShow === "web" ? "border-purplePrimary" : "border-transparent"
          }`}
        >
          <p className="text-purplePrimary font-semibold">Web</p>
        </div>
        <div
          onClick={() => setSkillShow("mobile")}
          className={`bg-blueSecondary/25 py-1 px-4 rounded-full border ${
            skillShow === "mobile" ? "border-bluePrimary" : "border-transparent"
          }`}
        >
          <p className="text-bluePrimary font-semibold">Mobile</p>
        </div>
        <div
          onClick={() => setSkillShow("api")}
          className={`bg-pinkSecondary/25 py-1 px-4 rounded-full border ${
            skillShow === "api" ? "border-pinkPrimary" : "border-transparent"
          }`}
        >
          <p className="text-pinkPrimary font-semibold">Rest Api</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 p-4">
        {skillShow === "web" && <WebComponent />}
        {skillShow === "mobile" && <MobileComponent />}
        {skillShow === "api" && <ApiComponent />}
      </div>
    </div>
  );
};

const MobileComponent = () => {
  return (
    <>
      {mobile.map((item, idx) => {
        return (
          <CardComponent
            key={idx}
            link={item.link}
            title={item.title}
            description={item.description}
            backgroundColor="bg-blueSecondary/10"
            fontColor="text-bluePrimary"
          />
        );
      })}
    </>
  );
};

const ApiComponent = () => {
  return (
    <>
      {api.map((item, idx) => {
        return (
          <CardComponent
            key={idx}
            link={item.link}
            title={item.title}
            description={item.description}
            backgroundColor="bg-pinkSecondary/10"
            fontColor="text-pinkPrimary"
          />
        );
      })}
    </>
  );
};

const WebComponent = () => {
  return (
    <>
      {web.map((item, idx) => {
        return (
          <CardComponent
            key={idx}
            link={item.link}
            title={item.title}
            description={item.description}
            backgroundColor="bg-purpleSecondary/10"
            fontColor="text-purplePrimary"
          />
        );
      })}
    </>
  );
};

const CardComponent = ({
  link,
  title,
  description,
  backgroundColor,
  fontColor,
}: {
  link: string;
  title: string;
  description: string;
  backgroundColor: string;
  fontColor: string;
}) => {
  return (
    <a href={link} target="_blank">
      <div
        className={" w-full p-2 relative px-4 mb rounded-lg " + backgroundColor}
      >
        <p className={" text-lg font-semibold " + fontColor}>{title}</p>
        <p className={" text-sm line-clamp-2 text-black/50"}>{description}</p>
        <CiLink className={"absolute right-2 top-2 text-xl " + fontColor} />
      </div>
    </a>
  );
};

export default ProjectComponent;
