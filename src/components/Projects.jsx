import { projects } from "../constants/data";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  return (
    <ul className="max-w-[1000px] w-auto flex flex-col flex-nowrap items-start justify-center gap-10 md:flex-row md:flex-wrap md:gap-11">
      {projects.map((project, id) => (
        <li
          key={id}
          className="flex flex-col items-center justify-center gap-6 m-auto flex-nowrap project-collection basis-0 grow shrink-1"
        >
          <ProjectModal
            projectId={`project-modal-${id}`}
            projectData={project}
          />
        </li>
      ))}
    </ul>
  );
}
