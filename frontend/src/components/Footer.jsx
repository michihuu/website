import { ReactComponent as LinkedinLogo } from '../logos/linkedin.svg'
import { ReactComponent as ResumeLogo } from '../logos/resume.svg'
import { ReactComponent as GithubLogo } from '../logos/github.svg'
import { ReactComponent as EmailLogo } from '../logos/mail.svg'

export default function Footer({ isLight, personalData }) {

    let bgColour = isLight ? "bg-[#EDE8F9]" : "bg-[#201f1f]";
    let textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    const resumePdf = personalData[0].properties.Resume.files[0].file.url;
    const githubUrl = personalData[0].properties.Github.url;
    const linkedinUrl = personalData[0].properties.Linkedin.url;
    const email = personalData[0].properties.Email.email;

    return (

        <>
            <footer className={`${textColor} body-font`}>
                <div className={`footer-transition ${bgColour}`}>
                    <div className=" px-10 sm:px-14 py-6 sm:items-center flex flex-col sm:flex-row justify-between">
                        <a className="">
                            <img src="/android-chrome-512x512.png" alt="Chrome Icon" className="h-14 w-14"/>
                        </a>    
                        <span className="mb-1">
                            <span className="flex flex-row gap-3 items-end">
                                <a href={resumePdf} target='_blank'>
                                    <ResumeLogo className={`w-[14px] ${textColor} hover:text-[#3d52a1]`} />
                                </a>
                                <a href={githubUrl} target='_blank'>
                                    <GithubLogo className={`w-[18px] ${textColor} hover:text-[#3d52a1]`} />
                                </a>
                                <a href={linkedinUrl} target='_blank'>
                                    <LinkedinLogo className={`w-[18px] ${textColor} hover:text-[#3d52a1]`} />
                                </a>
                                <a href={`mailto:${email}`} target='_blank'>
                                    <EmailLogo className={`w-[18px] ${textColor} hover:text-[#3d52a1]`} />
                                </a>
                            </span>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}
