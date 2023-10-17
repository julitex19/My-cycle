import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const Testing = () => {
  const initialAccordionState = Array(5).fill(false);
  const [isOpen, setIsOpen] = useState(initialAccordionState);

  const toggleAccordion = (index) => {
    const updatedState = [...isOpen];
    updatedState[index] = !updatedState[index];
    setIsOpen(updatedState);
  };

  const questions = [
    "How to set up a plan within your community",
    "How to add a custom domain URL",
    "How do I manage events",
    "How do I see my downloaded courses",
    "Change colors to meet brand taste",
  ];

const answers = [
  "Occaecat Lorem anim labore nulla sit labore dolore excepteur excepteur amet consequat tempor. Aliquip in aliqua ullamco laboris tempor anim quis sint amet aliqua magna ea voluptate ea. Est mollit id reprehenderit dolore nisi do. Ex aliquip duis laborum enim nisi esse. Nostrud duis enim veniam duis esse laboris veniam in duis laborum duis ut ad. Eu magna deserunt esse officia non eiusmod adipisicing laboris elit.",

  "Occaecat Lorem anim labore nulla sit labore dolore excepteur excepteur amet consequat tempor. Aliquip in aliqua ullamco laboris tempor anim quis sint amet aliqua magna ea voluptate ea. Est mollit id reprehenderit dolore nisi do. Ex aliquip duis laborum enim nisi esse. Nostrud duis enim veniam duis esse laboris veniam in duis laborum duis ut ad. Eu magna deserunt esse officia non eiusmod adipisicing laboris elit.",

  "Occaecat Lorem anim labore nulla sit labore dolore excepteur excepteur amet consequat tempor. Aliquip in aliqua ullamco laboris tempor anim quis sint amet aliqua magna ea voluptate ea. Est mollit id reprehenderit dolore nisi do. Ex aliquip duis laborum enim nisi esse. Nostrud duis enim veniam duis esse laboris veniam in duis laborum duis ut ad. Eu magna deserunt esse officia non eiusmod adipisicing laboris elit.",

  "Occaecat Lorem anim labore nulla sit labore dolore excepteur excepteur amet consequat tempor. Aliquip in aliqua ullamco laboris tempor anim quis sint amet aliqua magna ea voluptate ea. Est mollit id reprehenderit dolore nisi do. Ex aliquip duis laborum enim nisi esse. Nostrud duis enim veniam duis esse laboris veniam in duis laborum duis ut ad. Eu magna deserunt esse officia non eiusmod adipisicing laboris elit.",
];


  return (
    <div className="container mx-auto p-4">
      {questions.map((question, index) => (
        <div className="accordion" key={index}>
          <div
            className="flex items-center justify-between cursor-pointer border-b text-[#5151FF] p-2 lg:w-[800px] lg:ml-60"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center">
              <div className="dot">
                <span className="text-5xl text-[#5151FF]">&#8226;</span>
              </div>
              <span className="ml-2 text-[#5151FF] font-bold">{question}</span>
            </div>
            {isOpen[index] ? <FaMinusSquare  className="text-xl"/> : <FaPlusSquare  className="text-xl"/>}
          </div>
          {isOpen[index] && (
            <p className="accordion-answer mt-2 text-[9px] font-light ml-6 w-[450px] lg:w-[640px] lg:ml-72 lg:pb-4 lg:text-[12px]">
              {answers[index]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Testing;
