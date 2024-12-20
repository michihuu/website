import React from 'react';
import { useInView } from 'react-intersection-observer';

const ExperienceCard = ({ isLight, exp }) => {
    const companyName = exp.properties.Company.rich_text[0].plain_text;
    const positionName = exp.properties.Title.title[0].plain_text;
    const location = exp.properties.Location.rich_text[0].plain_text;
    const description = exp.properties.Description.rich_text[0].plain_text;
    const imageUrl = exp.properties.File?.files[0]?.file.url || exp.cover.external.url;
    const skills = exp.properties.Skills.multi_select;
    const startDate = exp.properties.Date.date.start || "Incoming";
    const endDate = exp.properties.Date.date.end || "Present";

    function formatDate(start, end) {
        const [startYear, startMonth] = start.split('-');
        const [endYear, endMonth] = end.split('-');
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        let formattedStart = `${months[Number(startMonth) - 1]} ${startYear}`;
        let formattedEnd = `${months[Number(endMonth) - 1]} ${endYear}`;

        if (endDate === "Present") { formattedEnd = "Present"; }

        return `${formattedStart} - ${formattedEnd}`;
    }

    let formattedDate = (startDate === endDate ? "Incoming" : formatDate(startDate, endDate));
    let textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    let subColor = isLight ? "text-[#3d52a1]" : "text-[#adbbda]";
    let subBgColor = isLight ? "bg-[#3d52a1]" : "bg-[#adbbda]";
    let flipColor = isLight ? "text-[#EDE8F9]" : "text-[#2e313c]";

    const { ref, inView } = useInView({
        threshold: 0.2, 
        triggerOnce: true, 
    });

    return (
        <div className="flex relative pt-4 pb-16 sm:items-center md:w-2/3">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-px bg-[#808080] pointer-events-none"></div>
            </div>
            <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-8 sm:mt-7 inline-flex items-center justify-center ${subBgColor} relative left-1 z-10 title-font font-medium text-sm`}></div>
            
            <div 
                ref={ref}
                className={`flex-grow px-6 flex sm:items-start flex-col sm:flex-row transition-all duration-[1s] ease-out ${
                    inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
                <img className="rounded-md object-cover w-16 h-16 border border-gray-200 border-opacity-60" src={imageUrl} alt=""></img>
                <div className="flex-grow sm:pl-5 mt-4 sm:mt-0">
                    <p className="leading-relaxed text-sm text-[#808080]">{formattedDate}</p>
                    {companyName === "CI Technologies - Versaterm" && <p className="leading-relaxed text-sm text-[#808080]">September 2024 - December 2024</p>}
                    <h1 className={`font-medium title-font ${textColor} mb-1 text-lg`}>{companyName}</h1>
                    <h2 className={`font-medium title-font ${subColor} mb-1 text-base`}>{positionName}</h2>
                    <p className="leading-relaxed text-sm text-[#808080] mb-2">{location}</p>
                    <p className="leading-relaxed text-base text-[#808080] mb-2">{description}</p>
                    <div className={"flex flex-wrap flex-row gap-1"}>
                        {skills.map((skill, idx) => (
                            <p key={idx} className={`py-[2.5px] p-1.5 rounded text-xs ${flipColor} ${subBgColor}`}>{skill.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
