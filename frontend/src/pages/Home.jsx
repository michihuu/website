import React from "react";
import Info from "../components/Info";
import ProjectSection from "../components/ProjectSection";
import ArtSection from "../components/ArtSection";
import ExperienceSection from "../components/ExperienceSection";
import { NavLink } from "react-router-dom";



const Home = ({ isLight, personalData, artData, projectData, expData }) => {
    let textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    return <>
        <div id="home-section" className="pb-40 fade-on-load flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex gap-0 sm:gap-20 flex-col mt-28 sm:mt-56 ">

                <Info isLight={isLight} personalData={personalData} projectData={projectData} />
                <section id="experience-section" className="pt-20">
                <ExperienceSection isLight={isLight} expData={expData} />
                </section>

                <section id="project-section" className="pt-20">
                    <div className="flex flex-row justify-between items-center px-10 sm:px-14">
                    <h1 className={`text-3xl font-semibold ${textColor} mb-6`}>Projects</h1>
                        <NavLink to="/projects" className={`text-xl font-semibold ${textColor} mb-6 hover:text-slate-400`}>See all</NavLink>
                    </div>
                    <ProjectSection isLight={isLight} numItem={3} projectData={projectData} />
                </section>

                {/* <section id="art-section" className="pt-32">
                    <div className="flex flex-row justify-between items-center px-10 sm:px-14">
                        <h1 className='text-2xl font-semibold text-[#3d52a1]'>Arts</h1>
                        <NavLink to="/art" className="text-[#3d52a1] hover:text-slate-400">See all</NavLink>
                    </div>
                    <ArtSection isLight={isLight} numItem={3} artData={artData} />
                </section> */}
                
            </div>
        </div>
    </>;
};

export default Home;
