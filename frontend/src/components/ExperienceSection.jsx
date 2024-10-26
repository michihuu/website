import React from 'react'
import ExperienceCard from './ExperienceCard'

const ExperienceSection = ({ isLight, expData }) => {
    let textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    return (
        <>
            <section className="body-font">
                <div className="container px-10 sm:px-14 flex flex-col ">
                    <h1 className={`text-3xl font-semibold ${textColor} mb-6`}>Experiences</h1>
                    {expData && expData.map((exp, index) => {
                        return <ExperienceCard isLight={isLight} exp={exp} />
                    })}
                </div>
            </section>
        </>
    )
}

export default ExperienceSection
