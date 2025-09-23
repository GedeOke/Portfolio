import { FaArrowRight } from "react-icons/fa";
export default function CardProject({image,title,description,link,tech1,tech2="",tech3=""}){
    return(
        <div className="bg-slate-800 rounded-xl overflow-hidden">
            <img src={image} alt="" className="h-52 w-full object-cover"/>
            <div className="px-6 py-5 space-y-2">
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-slate-300">{description}</p>
            <div className="flex space-x-2 ">
                <p className="bg-blue-600 text-white/80 px-3 rounded">{tech1}</p>
                {tech2 != "" &&(
                    <p className="bg-purple-600 text-white/80 px-3 rounded">{tech2}</p>
                )}
                {tech3 != "" &&(
                    <p className="bg-pink-600 text-white/80 px-3 rounded">{tech3}</p>
                )}
            </div>
            <a href={link} className="text-blue-500 flex items-center">View Project <FaArrowRight className="ml-3"/></a>
            </div>
        </div>
    )
}