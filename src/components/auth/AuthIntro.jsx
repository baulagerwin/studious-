import { Link } from "react-router-dom";

function AuthIntro({
  firstWords,
  secondWord,
  thirdWords,
  fourthWords,
  fifthWord,
  link,
}) {
  return (
    <>
      <p className="text-xl font-semibold uppercase text-gray-400 mb-2">
        {firstWords}{" "}
        <span className="text-third border-b-2 border-third">{secondWord}</span>
      </p>
      <h1 className="text-6xl font-bold mb-4">
        {thirdWords}
        <span className="text-second">.</span>{" "}
      </h1>
      <p className="text-xl font-medium text-gray-400 mb-10">
        {fourthWords}{" "}
        <Link to={link} className="text-second">
          {fifthWord}
        </Link>
        .
      </p>
    </>
  );
}

export default AuthIntro;
