import HeroSection from "./ui/HeroSection"
import AboutSection from "./ui/AboutSection"
import ProjectSection from "./ui/ProjectSection"
import CertificateSection from "./ui/CertificateSection"
export default function Home(){
    return(
        <div className="mx-5 lg:mx-25">
            <HeroSection/>
            <AboutSection/>
            <ProjectSection/>
            <CertificateSection/>
        </div>
    )
}