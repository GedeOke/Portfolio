import { FaBrain } from "react-icons/fa";
import itemNavbar from "../../utils/itemNavbar";
import itemSosmed from "../../utils/itemSosmed";
export default function Footer(){
    return(
        <div className="bg-slate-950">
        <div className=" py-10 px-8 space-y-5 md:flex md:justify-around">
            <div>
                <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3  rounded-xl">
                        <FaBrain className="text-md"/>
                    </div>
                    <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">My Portfolio</p>
                </div>
                <p className="text-slate-400">Pushing the boundaries of artificial intelligence</p>
            </div>
            <div className="space-y-3">
                <p className="font-semibold">Quick Links</p>
                <ul className="text-slate-400 space-y-1">
                    {itemNavbar.map((item,index)=>(
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
            </div>
            <div className="space-y-2">
                <p className="font-semibold">Connect</p>
                <ul className="flex space-x-2 text-lg text-slate-400">
                    {itemSosmed.map((item,index)=>(
                        <li key={index}><a href={item.href}><item.Icon/></a></li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="text-center py-5 border  border-t-slate-700 border-x-0 border-b-0">
            <p>© 2024 AI Portfolio. All rights reserved.</p>
        </div>
        </div>
    )
}