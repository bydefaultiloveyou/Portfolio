import { useState } from "react";
import { language, framework, database } from "../data/skill";

const SkillComponent = () => {
  const [skillShow, setSkillShow] = useState("language");

  return (
    <div className="w-full mb-20">
      <p className=" font-semibold text-black/70  text-2xl text-center mb-6">
        What can i do <span className=" text-pinkPrimary">?</span>
      </p>
      <div className="flex gap-2 justify-center overflow-x-auto">
        <div
          onClick={() => setSkillShow("language")}
          className={`bg-purpleSecondary/25 py-1 ml-3 px-4 border rounded-full ${
            skillShow === "language"
              ? "border-purplePrimary"
              : "border-transparent"
          }`}
        >
          <p className="text-purplePrimary font-semibold">Language</p>
        </div>
        <div
          onClick={() => setSkillShow("framework")}
          className={`bg-blueSecondary/25 py-1 px-4 rounded-full border ${
            skillShow === "framework"
              ? "border-bluePrimary"
              : "border-transparent"
          }`}
        >
          <p className="text-bluePrimary font-semibold">Framework</p>
        </div>
        <div
          onClick={() => setSkillShow("database")}
          className={`bg-pinkSecondary/25 py-1 px-4 mr-3 rounded-full border ${
            skillShow === "database"
              ? "border-pinkPrimary"
              : "border-transparent"
          }`}
        >
          <p className="text-pinkPrimary font-semibold">Database</p>
        </div>
      </div>
      <div className="w-full flex gap-3 p-4 flex-wrap">
        {skillShow === "language" && <LanguageContainer />}
        {skillShow === "framework" && <FrameworkContainer />}
        {skillShow === "database" && <DatabaseContainer />}
      </div>
    </div>
  );
};

const LanguageContainer = () => {
  return (
    <>
      {language.map((item, idx) => {
        return (
          <CardComponent
            icon={item.icon}
            title={item.title}
            key={idx}
            backgroundColor="bg-purpleSecondary/20"
            fontColor="text-purplePrimary"
          />
        );
      })}
    </>
  );
};

const DatabaseContainer = () => {
  return (
    <>
      {database.map((item, idx) => {
        return (
          <CardComponent
            icon={item.icon}
            title={item.title}
            key={idx}
            backgroundColor="bg-pinkSecondary/20"
            fontColor="text-pinkPrimary"
          />
        );
      })}
    </>
  );
};

const FrameworkContainer = () => {
  return (
    <>
      {framework.map((item, idx) => {
        return (
          <CardComponent
            icon={item.icon}
            title={item.title}
            key={idx}
            backgroundColor="bg-blueSecondary/20"
            fontColor="text-bluePrimary"
          />
        );
      })}
    </>
  );
};

const CardComponent = ({
  icon,
  title,
  backgroundColor,
  fontColor,
}: {
  icon: string;
  title: string;
  backgroundColor: string;
  fontColor: string;
}) => {
  return (
    <div
      className={`w-[48%] p-2 grid place-items-center rounded-lg ${backgroundColor}`}
    >
      <div className="w-24 h-28 grid place-items-center">
        <img src={icon} alt={title} loading="lazy" />
      </div>
      <p className={`mt-2 font-semibold ${fontColor}`}>{title}</p>
    </div>
  );
};

export default SkillComponent;
