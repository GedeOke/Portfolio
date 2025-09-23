export default function Button({download=false}){
    return(
        <button className={`text-white text-lg rounded-md py-3 hover:cursor-pointer px-10 ${download == true ? "border border-slate-500": "bg-gradient-to-r from-blue-500 to-purple-500"} `}>{download == true ? "Explore Projects":"Download CV"}</button>
    )
}