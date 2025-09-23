export default function CardCertificate({image}){
    return(
        <div className="shadow-lg hover:scale-105 transition">
            <img src={image} alt="" className="w-md rounded-2xl"/>
        </div>
    )
}