import type { Metadata, ResolvingMetadata } from "next";

import PageTitle from "@/components/page-title";
import ProjectCard from "@/components/project-card";
import site from "@/config/site";
import { allProjects } from "@/content/AllProject";
import Pinned from "./pinned";

export const runtime = "edge";
const title = "Projects";
const description = "The list of my projects.";

/**
 * The props of {@link ProjectsPage}.
 */
type ProjectsPageProps = {
  /**
   * The params of the URL.
   */
  params: Record<string, never>;
  /**
   * The search params of the URL.
   */
  searchParams: Record<string, never>;
};

export const generateMetadata = async (
  _: ProjectsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {};
  const previousTwitter = (await parent)?.twitter ?? {};

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/projects`,
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/projects`,
      title,
      description,
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
    },
  };
};

const ProjectsPage = () => {
  return (
    <>
      <PageTitle
        title="Projects"
        description="The list of my projects. Everything was made with ❤️."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="mt-7">
        <Pinned />
      </div>
    </>
  );
};

export default ProjectsPage;
