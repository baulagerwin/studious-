import Container from "../containers/Container";
import Paraphernalia from "../components/Paraphernalia";
import TwoThirdsContainer from "../containers/TwoThirdsContainer";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import { useState } from "react";
import mockSubjects from "./subjects";
import mockQnas from "./qnas";
import getSubjectsWithCount from "./getSubjectsWithCount";
import FlexColGap4 from "../layouts/FlexColGap4";

function HomePage() {
  const [filter, setFilter] = useState("All Subjects");

  let qnas = mockQnas;
  let subjects = getSubjectsWithCount(mockSubjects, qnas);

  return (
    <Container>
      <TwoThirdsContainer>
        <FlexColGap4>
          <Paraphernalia
            filterBy={filter}
            onFilter={setFilter}
            subjects={subjects}
          />
          <hr className="mb-10" />
          <QuestionsAndAnswers qnas={qnas} />
          <div className="flex justify-end">
            <div className="flex text-white rounded-md">
              <button
                type="button"
                className="flex justify-center items-center rounded-tl-md rounded-bl-md bg-third hover:bg-first h-10 w-10 relative after:content-[''] after:bg-white after:absolute after:w-px after:opacity-30 after:h-1/2 after:left-full after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <div className="flex justify-center items-center bg-third hover:bg-first text-lg h-10 w-10 px-0.5 shadow cursor-pointer relative">
                <div
                  className="absolute -translate-y-8 shadow bg-third h-3 w-3 rotate-180 z-10 cursor-auto"
                  style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
                ></div>
                <div className="cursor-auto overflow-auto absolute bottom-0 right-0 -translate-y-14 bg-third text-white border-2 border-third shadow whitespace-nowrap h-56 w-40 rounded-lg">
                  <ul className="flex flex-wrap">
                    <li className="h-10 w-10 cursor-pointer flex justify-center items-center shrink-0 hover:bg-first hover:rounded-md hover:text-white">
                      2
                    </li>
                    <li className="h-10 w-10 cursor-pointer flex justify-center items-center shrink-0 hover:bg-first hover:rounded-md hover:text-white">
                      2
                    </li>
                  </ul>
                </div>
                <span>1</span>
              </div>
              <button
                type="button"
                className="flex justify-center items-center rounded-br-md rounded-tr-md bg-third hover:bg-first h-10 w-10 relative before:content-[''] before:bg-white before:absolute before:w-px before:opacity-30 before:h-1/2 before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </FlexColGap4>
      </TwoThirdsContainer>
    </Container>
  );
}

export default HomePage;
