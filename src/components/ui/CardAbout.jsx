
export default function CardAbout({Icon,title,description,colorIcon}){
    return(
        <div className="bg-slate-800 px-10 py-5 rounded-xl space-y-2">
            <div>
                <Icon className={`text-2xl ${colorIcon}`}/>
                <p className="text-xl font-semibold">{title}</p>
            </div>
            <p className="text-slate-300 ">{description}</p>
        </div>
    )
}