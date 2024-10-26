import React from 'react'
import { ReactComponent as LinkedinLogo } from '../logos/linkedin.svg'
import { ReactComponent as ResumeLogo } from '../logos/resume.svg'
import { ReactComponent as GithubLogo } from '../logos/github.svg'
import { ReactComponent as EmailLogo } from '../logos/mail.svg'

const Info = ({ isLight, personalData }) => {
    const titleText = personalData[0].properties.Title.title[0].plain_text;
    const desc1 = personalData[0].properties.Description1.rich_text[0].plain_text;
    const desc2 = personalData[0].properties.Description2.rich_text[0].plain_text;
    const githubUrl = personalData[0].properties.Github.url;
    const linkedinUrl = personalData[0].properties.Linkedin.url;
    const resumePdf = personalData[0].properties.Resume.files[0].file.url;
    const email = personalData[0].properties.Email.email;

    let textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    let resumeText = isLight ? "text-[#EDE8F9]" : "text-[#2e313c]";
    let titleColor = isLight ? "text-[#3d52a1]" : "text-[#adbbda]";

    // nice point colour : bg-[#3d52a1] button colour

    return (
        <>
        <div class="flex flex-row justify-between items-center sm:px-12 mb-0 md:mb-12">
            <div class="invisible w-[0px] md:visible md:w-1/3 mr-10">
                <img src="/profile.png" alt="Profile Photo" className={`rounded-2xl border-2 ${isLight ? "border-[#2e313c]" : "border-[#fef8f1c7]"}`}/>
            </div>
            <div id='info-section' className="flex flex-col items-left max-w-[60%]">
                <h1 className={`title-font text-5xl mb-4 font-semibold ${textColor}`}>{titleText}
                </h1>
                <p className="mb-3 leading-relaxed text-[#808080] text-base ">{desc1}
                    <br></br>
                    <br></br>
                    {desc2}</p>
                <div className="flex justify-start items-center gap-3">
                    <button className={`items-center ${resumeText} ${isLight ? "bg-[#3d52a1]" : "bg-[#adbbda]"} flex border-0 h-8 px-3 focus:outline-none hover:bg-[#3d52a1] rounded text-lg`}>
                        <a href={resumePdf} target='_blank'>
                            <div className='flex flex-row gap-2 text-base items-center'>
                                <ResumeLogo className='w-3' />
                                Resume
                            </div>
                        </a>
                    </button>
                    <div className={`flex flex-row gap-2.5 items-end mb-1`}>
                        <a href={githubUrl} target='_blank'>
                            <GithubLogo className={`w-[20px] ${titleColor} hover:text-[#3d52a1]`} />
                        </a>
                        <a href={linkedinUrl} target='_blank'>
                            <LinkedinLogo className={`w-[20px] ${titleColor} hover:text-[#3d52a1]`} />
                        </a>
                        <a href={`mailto:${email}`} target='_blank'>
                            <EmailLogo className={`w-[20px] ${titleColor} hover:text-[#3d52a1]`} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Info
