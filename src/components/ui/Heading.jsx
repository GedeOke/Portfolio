export default function Heading({title,description}){
    return(
        <div className="text-center space-y-3">
            <p className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{title}</p>
            <p className="text-slate-300">{description}</p>
        </div>
    )
}