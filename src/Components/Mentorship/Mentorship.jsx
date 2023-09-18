import React from "react";

function Mentorship() {
  const mentorDots = {
    position: "relative",
    backgroundImage: `url('./Assets/mentorShape.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "950px",
    backgroundPosition: "center",
  };

  return (
    <div
      className="mb-72 shadow lg:pb-20 lg:pl-[110px] lg:pr-[110px]"
      style={mentorDots}
    >
      <div className="lg:flex lg:justify-evenly lg:items-center lg:gap-[150px]">
        <div className="">
          <img src="./Assets/group1.svg" alt="" />
        </div>
        <div className="lg:w-[50%]">
          <h1 className=" mb-4 text-center tracking-wide text-5xl font-semibold lg:text-start">
            Mentorship
          </h1>

          <p className="leading-6 tracking-wider font-light text-center pl-3 pr-3 text-[15px] lg:text-start lg:pt-4">
            Running a mentorship program and looking for tools to manage the
            process? Mycircle allows you to add on mentees and mentors, schedule
            calls, take notes, goals, check off the goals and track your mentee
            progress.
          </p>

          <div className="flex justify-center lg:flex lg:justify-start">
            <button className="bg-indigo-600 text-white py-4 px-8 rounded-xl hover:bg-blue-600 hover:text-white flex items-center mt-10 px-20 mb-12">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-5xl pt-6 pb-3 lg:pt-8 pb-6 lg:text-5xl">
          Engagements
        </h1>
        <p className="leading-6 tracking-wider font-light text-center  text-zinc-600 text-[15px] pt-4 pb-8">
          Use our topics feature to engage your community on topics that matter
          to you.
        </p>
      </div>
    </div>
  );
}

export default Mentorship;
