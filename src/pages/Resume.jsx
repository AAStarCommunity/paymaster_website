import Socials from "../components/Socials";
import TechSkills from "../components/TechSkills";
import SoftSkills from "../components/SoftSkills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { workExp, extracurriculars } from "../constants/data";

export default function Resume() {
  return (
    <>
      <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h1 className="text-center max-w-[18em]">Resume</h1>
        <p className="text-center">
          If you wish to have a copy of my resume, please click below.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 glassy-icon"
        >
          View SomeOne
        </a>
      </section>
      time line
    </>
  );
}
