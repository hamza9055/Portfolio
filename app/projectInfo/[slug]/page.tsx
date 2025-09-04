
import { portfolioItems } from "@/components/data";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";


export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

const ProjectInfo = ({ params }: { params: { slug: string } }) => {


  const project = portfolioItems.find((item) => item.slug === params.slug);
  if (!project) return <div>Project not found</div>;

  return (
    <div className="w-ful">
  

      {/* Hero Image with overlay */}
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/20 z-10" />
        <Image
          className="absolute z-1"
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
          <h2 className="text-4xl font-bold py-2">{project.title}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-gray-600 dark:text-gray-300">Project</p>
          <h2 className="text-4xl font-bold dark:text-white">Overview</h2>
          <p className="mt-4 dark:text-gray-300">{project.description}</p>

          {project.points?.map((point, index) => (
            <p key={index} className="mt-4 flex items-center dark:text-gray-300">
              <RiRadioButtonFill className="pr-1" /> {point}
            </p>
          ))}

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4">Demo</button>
            </a>
          )}
        </div>

        {/* Right Section - Tech Stack */}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-gray-700">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-gray-300">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {project.technologies?.map((tech) => (
                <p key={tech} className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Link href="/#portfolio">
          <p className="underline cursor-pointer dark:text-gray-300">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectInfo;
