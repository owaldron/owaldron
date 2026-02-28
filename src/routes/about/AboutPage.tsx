import React, { FC } from "react";
import Box from "../../components/box/Box";
import Owen from '../../assets/images/saycheese.png';
import Button from "../../components/button/Button";
import { aboutMeText, Taggable, educationHistory, workHistory } from "../../content/about/about";
import PageContainer from "../../components/page-container/PageContainer";

const AboutPage = () => {
    return (
        <PageContainer>
            <div className="flex flex-col gap-8">
                <Box label="About Me">
                    <div className="flex justify-between gap-8 px-8 py-4">
                        <div className="flex flex-col w-full">
                            <img className="max-w-[80%] mx-auto rounded-sm mb-8 border-[3px] border-card-border-gray md:hidden block" src={Owen} alt="Me" />
                            <h1 className="text-3xl" >Hello, World!</h1>
                            <p>{aboutMeText}</p>
                            <div className='flex md:flex-row flex-col gap-4 mt-4'>
                                <Button label='Download resume PDF' variant='hollow' href="/resume" newTab/>
                                <Button label='Contact me' href="mailto:me@owaldron.ca" newTab />
                                <Button label='Leave a log!' href="/logbook"/>
                            </div>
                        </div>
                        <img className="max-w-52 object-cover rounded-sm border-[3px] border-card-border md:block hidden" src={Owen} alt="Me" />
                    </div>
                </Box>
                <Box label="Education">
                    <div className="flex flex-col gap-8 px-8 py-6">
                        {educationHistory.map((educ, i) => <TagContent key={i} taggable={educ} />)}
                    </div>
                </Box>
                <Box label="Work Experience">
                    <div className="flex flex-col gap-8 px-8 py-6">
                        {workHistory.map((work, i) => <TagContent key={i} taggable={work} />)}
                    </div>
                </Box>
            </div>
        </PageContainer>
    );
}

type TagContentProps = { taggable: Taggable }
const TagContent: FC<TagContentProps> = ({taggable}) => {
    return (
        <div>
            <div className="flex gap-4 md:pb-0 pb-3">
                <a href={taggable.link} className="mt-auto mb-auto border-[2px] border-card-border md:block bg-white" target="_blank" rel="noreferrer" >
                    <img src={taggable.image} className="md:w-12 md:h-12 w-16 h-16 max-w-16 object-cover" alt=""/>
                </a>
                <div className="w-full">
                    <div className="flex justify-between md:flex-row flex-col w-full">
                        <h2 className="md:text-2xl text-xl">
                            {taggable.title}
                        </h2>
                        <h3 className="text-md md:block hidden">
                            {taggable.date}
                        </h3>
                    </div>
                    <a href={taggable.link} className="bg-owaldron-blue text-sm py-1 text-white px-2 mt-1 mb-2 rounded-xl w-fit">
                        {taggable.tag}
                    </a>
                    <h3 className="text-md md:hidden">
                        {taggable.date}
                    </h3>
                </div>
            </div>
            <ul className="flex flex-col pt-2 gap-2 list-disc pl-5">
                {taggable.description.map((line, index) => (
                <li key={index} className="leading-tight">
                    {line}
                    {index < taggable.description.length - 1 && <br />}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default AboutPage;
