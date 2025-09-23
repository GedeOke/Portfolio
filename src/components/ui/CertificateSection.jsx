import Heading from "./Heading"
import CardCertificate from "./CardCertificate"
import itemCertificate from "../../utils/itemCertificate"
export default function CertificateSection(){
    return(
        <div className="space-y-5 py-10" id="certificate">
            <Heading title="Certifications" description="Professional credentials and achievements"/>
            <div className="grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-3">
                {itemCertificate.map((item,index)=>(
                    <CardCertificate image={item.image} key={index}/>
                ))}
            </div>
        </div>
    )
}