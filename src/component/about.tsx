const AboutComponent = () => {
  return (
    <>
      <div className="w-full mb-20">
        <p className=" font-semibold text-black/70  text-2xl text-center mb-6">
          About Me<span className=" text-purplePrimary">?</span>
        </p>
        <p className=" text-center text-black opacity-70 px-8">
          Hi, I'm <strong className=" text-pinkPrimary">Miko Meysa</strong>, Web
          and mobile developer from
          <strong className=" text-bluePrimary"> Indonesia</strong>, high school
          graduate, who wants to become a Fullstack developer,{" "}
          <strong className="text-purplePrimary">
            loves classical music and art
          </strong>
        </p>
      </div>
    </>
  );
};

export default AboutComponent;
