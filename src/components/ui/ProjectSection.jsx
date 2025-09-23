import Heading from "./Heading"
import CardProject from "./CardProjects"
import itemProject from "../../utils/itemProject"
export default function ProjectSection(){
    return(
        <div className="py-10 space-y-5" id="project">
            <Heading title="Featured Projects" description="Innovative AI solutions that push the boundaries of technology"/>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {itemProject.map((item,index)=>(
                    <CardProject key={index} image={item.image} title={item.title} description={item.description} link={item.link} tech1={item.tech1} tech2={item.tech2} tech3={item.tech3}/>
                ))}
            </div>
        </div>
    )
}