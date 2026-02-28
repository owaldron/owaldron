import React, { useEffect, useState } from "react";
import PageContainer from "../../../components/page-container/PageContainer";
import Box from "../../../components/box/Box";
import { Link, useParams } from "react-router-dom";
import projects from '../../../content/projects/projects';
import OnButton from '../../../assets/images/radiobutton/buttonon.png'
import OffButton from '../../../assets/images/radiobutton/buttonoff.png'

const ProjectView = () => {
    let { name } = useParams();
    const [tempIndex, setIndex] = useState(0);
    const [cycling, setCycling] = useState(true);
    const [check, setCheck] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (cycling) setTimeout(() => setCounter(counter + 1), 3000)
    }, [cycling, counter])

    const project = projects.find(proj => proj.url === name);

    if (!project) {
        return <h1>
            Uh oh! Looks like this project doesn't exist...
        </h1>
    }
    
    const dif = cycling ? counter - check : 0;
    const index = (tempIndex + dif) % project.images.length;

    return (
        <PageContainer>
            <Box 
                label="Project View"
                leftButtons={
                    <Link className="whitespace-nowrap text-card-border underline" to="/projects">
                        {"< Projects"}
                    </Link>
                }
            >
                <div className="flex flex-col items-center py-6 px-8">
                    <h1 className="mb-4 text-4xl">{project.name}</h1>
                    <img 
                     className="w-[42rem] md:h-[26rem] object-cover border-card-border border-4" 
                     src={project.images[index]} alt="" 
                     />
                    <div className="flex gap-1 mt-2">
                        {project.images.map((_, i) => 
                            <img 
                             key={i}
                             style={{imageRendering: 'pixelated'}}
                             className="cursor-pointer h-6"
                             src={index === i ? OnButton : OffButton} 
                             onClick={() => { setCycling(false); setIndex(i); setCheck(counter) }}
                             alt=""
                             />
                        )}
                    </div>
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

export default ProjectView;
