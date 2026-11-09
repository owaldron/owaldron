import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageContainer from "../../../components/page-container/PageContainer";
import Box from "../../../components/box/Box";
import projects from '../../../content/projects/projects';
import { pageMetadata } from "../../../content/site";
import ImageCarousel from "./ImageCarousel";

type Params = { name: string };
type Props = { params: Promise<Params> };

// Only the projects listed in content/projects are built; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
    return projects.map(project => ({ name: project.url }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { name } = await params;
    const project = projects.find(proj => proj.url === name);
    if (!project) return {};
    return pageMetadata({
        title: project.name,
        description: project.tldr.trim(),
        path: `/projects/${project.url}`,
        image: project.images[0],
    });
}

export default async function ProjectView({ params }: Props) {
    const { name } = await params;
    const project = projects.find(proj => proj.url === name);

    if (!project) notFound();

    return (
        <PageContainer>
            <Box 
                label="Project View"
                leftButtons={
                    <Link className="whitespace-nowrap text-card-border underline" href="/projects">
                        {"< Projects"}
                    </Link>
                }
            >
                <div className="flex flex-col items-center py-6 px-8">
                    <h1 className="mb-4 text-4xl">{project.name}</h1>
                    <ImageCarousel images={project.images} />
                    <div className="flex mt-6 gap-8 md:flex-row flex-col">
                        <div>
                            <h2 className="text-2xl mb-2">Description</h2>
                            <p>{project.description}</p>
                        </div>
                        <div className="flex flex-col min-w-56">
                            <h2 className="text-2xl mb-2">Technologies</h2>
                            <div className="flex pl-4 text-white mb-4 gap-1">
                                {project.tags.map((tag, i) => 
                                    <strong key={i} 
                                     className="bg-owaldron-blue font-normal w-fit px-2 py-[2px] rounded-xl"
                                     >
                                        {tag}
                                    </strong>
                                )}
                            </div>
                            <h2 className="text-2xl">Links</h2>
                            <div className="flex flex-col pl-4">
                                {project.links.length > 0 && project.links.map((link, i) => 
                                    <a 
                                        target='_blank'
                                        rel='noreferrer'
                                        key={i} 
                                        href={link.to} 
                                        className="underline"
                                    >{link.text}</a>
                                )}
                                {project.links.length === 0 &&
                                    <p>None... yet!</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </PageContainer>
    )
}
