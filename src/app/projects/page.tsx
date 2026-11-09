import React, { FC } from "react";
import PageContainer from "../../components/page-container/PageContainer";
import projects, { Project } from '../../content/projects/projects';
import Box from "../../components/box/Box";
import styles from './ProjectPage.module.css';
import Link from "next/link";
import { pageMetadata } from "../../content/site";

export const metadata = pageMetadata({
    title: 'Projects',
    description: 'Projects by Owen Waldron, including unsupervised monocular depth estimation, DataPool swim analytics, '
        + 'and iOS apps like WaveAI and Toba Talks.',
    path: '/projects',
});

const ProjectPage = () => {
    return (
        <PageContainer>
            <main className="flex gap-8 md:flex-row flex-col flex-wrap items-center">
                {projects.map((proj, i) => <ProjectCard key={i} project={proj} />)}
            </main>
        </PageContainer>
    )
}

type ProjCardProps = { project: Project }

const ProjectCard: FC<ProjCardProps> = ({ project }) => {
    return (
        <Link
            href={'/projects/' + project.url}
            className={'block w-full md:w-[31%] ' + styles['proj-card']}
        >
            <Box label="Project" className="md:h-[25rem]">
                <div className="w-full h-full p-4">
                    <img className="border-card-border border-2 mb-2 w-full h-[60%] object-cover" src={project.images[0]} alt="" />
                    <h1 className="text-3xl max-h-[10%] mb-2">{project.name}</h1>
                    <p className="text-[0.95rem]" >{project.tldr}</p>
                </div>
            </Box>
        </Link>
    )
}

export default ProjectPage;
