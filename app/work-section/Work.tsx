import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-8 md:py-10 lg:py-8"
      id="work"
    >
      <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Featured Work
      </h2>

      <ProjectGrid />
    </section>
  );
};

export default Work;
