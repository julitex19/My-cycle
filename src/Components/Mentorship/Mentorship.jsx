import React from "react";

function Mentorship() {
  const mentorDots = {
    position: "relative",
    backgroundImage: `url('./Assets/mentorShape.svg')`,
    backgroundSize: "950px",
    backgroundPosition: "center",
  };

  return (
    <div
      className=" shadow lg:pb-20 lg:pl-[110px] lg:pr-[110px]"
      style={mentorDots}
    >
      <div className="lg:flex lg:justify-evenly lg:items-center lg:gap-[150px]">
        <div className="md:flex justify-center p-4">
          <img src="./Assets/group1.svg" alt="" />
        </div>
        <div className="lg:w-[75%] xl:w-1/2">
          <h1 className=" mb-4 text-center tracking-wide text-5xl font-semibold lg:text-start">
            Mentorship
          </h1>

          <p className="leading-6 tracking-wider font-light md:px-20 lg:px-0 text-center pl-3 pr-3 text-[15px] lg:text-start lg:pt-4">
            Running a mentorship program and looking for tools to manage the
            process? Mycircle allows you to add on mentees and mentors, schedule
            calls, take notes, goals, check off the goals and track your mentee
            progress.
          </p>

          <div className="flex justify-center lg:flex lg:justify-start">
            <button className="bg-indigo-600 text-white py-3 px-8 rounded-xl hover:bg-blue-600 hover:text-white flex items-center mt-10 mb-12">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="">
        <h1 className="text-center text-5xl text-zinc-700 font-bold pt-6 lg:pt-8 pb-6 lg:text-5xl">
          Engagements
        </h1>

        <p className="leading-6 tracking-wider font-light text-center  text-zinc-600 text-[15px] pt-4 pb-8">
          Use our topics feature to engage your community on topics that matter
          to you.
        </p>
        <div className="lg:flex gap-10 lg:mt-10 px-2">
          <div className="container shadow-xl bg-white p-8 rounded-xl mx-auto">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="./Assets/smile.svg"
                  alt=""
                  className=" rounded-full "
                />
              </div>

              <div className="">
                <h3>Dark Wed</h3>
                <div className="flex gap-2 text-[12px]">
                  <p className="text-indigo-600">Host</p>
                  <p>23mins</p>
                </div>
              </div>
            </div>
            <p className=" font-thin pt-3 pb-3">
              You cannot be anything you want to be but you can be a whole lot
              more of who you already are - <span>“ Tom Rath”</span>
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-1 rounded bg-gray-100">
                <img src="./Assets/Heart.svg" alt="" />
                <p className="text-[10px]">96</p>
              </div>
              <div className="flex items-center gap-1 rounded bg-gray-100">
                <img src="./Assets/thumbs-up.svg" alt="" />
                <p className="text-[10px]">96</p>
              </div>
              <div className="flex items-center gap-1 rounded bg-gray-100">
                <img src="./Assets/clap.svg" alt="" />
                <p className="text-[10px]">96</p>
              </div>
            </div>
          </div>

          <div className="container shadow-xl bg-white p-8 rounded-xl mx-auto mt-8">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="./Assets/.svg"
                  alt=""
                  className=" rounded-full "
                />
              </div>

              <div className="">
                <h3>Thomas Jude</h3>
                <div className="flex gap-2 text-[12px]">
                  <p className="text-indigo-600">Host</p>
                  <p>23mins</p>
                </div>
              </div>
            </div>
            <p className=" font-thin pt-3 pb-3">
            What nearly stopped you from signing up today ?
            </p>
            <div className="flex gap-5">
              <div className="flex items-center gap-1 rounded bg-gray-100">
                <img src="./Assets/Heart.svg" alt="" />
                <p className="text-[10px]">96</p>
              </div>
              <div className="flex items-center gap-1 rounded bg-gray-100">
                <img src="./Assets/thumbs-up.svg" alt="" />
                <p className="text-[10px]">96</p>
              </div>
              <div className="flex items-center gap-1 rounded bg-gray-100">
                <img src="./Assets/clap.svg" alt="" />
                <p className="text-[10px]">96</p>
              </div>
              <p className="text-[12px] italic text-indigo-600 pt-1">9 comments</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Mentorship;
