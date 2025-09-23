import Heading from "./Heading"
import CardAbout from "./CardAbout"
import itemAbout from "../../utils/itemABout"
export default function AboutSection(){
    return(
        <div className="py-10 space-y-5" id="about">
            <Heading title="About Me" description="Passionate AI engineer with expertise in machine learning, deep learning, and neural networks"/>
            <div className="space-y-5 md:flex md:space-y-0 md:space-x-5">
                {itemAbout.map((item,index)=>(
                    <CardAbout Icon={item.Icon} title={item.title} description={item.description} colorIcon={item.colorIcon} key={index}/>
                ))}
            </div>
        </div>
    )
}