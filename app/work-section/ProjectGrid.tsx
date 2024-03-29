import ProjectCard from "./ProjectCard";
import DesignCard from "./DesignCard";
import {
  devProjects,
  designProjects,
  ProjectProps,
  DesignProps,
} from "./projectDetails";
import { useState } from "react";

const ProjectGrid = () => {
  const [filter, setFilter] = useState(false);

  return (
    <>
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]/30" : "text-[#e4ded7]"
          }`}
          onClick={() => setFilter(false)}
        >
          Design
        </h4>{" "}
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setFilter(true)}
        >
          Development
        </h4>
      </div>

      {filter ? (
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {devProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="grid   w-[98%] grid-cols-1 gap-5 lg:grid-cols-2">
            {designProjects.map((project: DesignProps) => (
              <DesignCard
                id={project.id}
                key={project.id}
                name={project.name}
                figma={project.figma}
                image={project.image}
                available={project.available}
              />
            ))}
          </div>
          <h2 className=" mt-5 text-[16px]  text-[#e4ded7]  md:text-[20px] lg:text-[25px]">
            and many more . .
          </h2>
        </>
      )}
    </>
  );
};

export default ProjectGrid;
