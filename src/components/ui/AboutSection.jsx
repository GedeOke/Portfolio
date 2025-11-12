import Heading from "./Heading"
import CardAbout from "./CardAbout"
import itemAbout from "../../utils/itemABout"

export default function AboutSection() {
  return (
    <div className="py-10 space-y-8" id="about">
      <Heading title="About Me" description="" />

      {/* Container deskripsi biar sejajar & rapi */}
      <div className="max-w-4xl mx-auto text-justify leading-relaxed text-gray-300 px-4">
        <p>
          Hello! My name is <span className="font-semibold">Gede Oke</span>, a Fresh Graduate in Informatics from Gunadarma University,
          focusing on Machine Learning and Artificial Intelligence. I have experience developing various ML projects,
          including image classification (<em>SampahKu – 3rd place KOMPres 15</em>), diabetes risk prediction chatbot
          (<em>DiaPrognosis – Best Project IBM Academy</em>), and real-time voice command recognition systems using TensorFlow and Keras.
        </p>
        <p className="mt-5">
          I am skilled in implementing end-to-end models, from training to web deployment using Python, Flask, TFLite, and IBM Cloud.
          I also served as an Informatics Laboratory Assistant, responsible for teaching and mentoring programming practicums
          (Python, C, Java, and Statistics), and participated in backend development for the <em>Smart Governance Desa Jamali</em>
          system using Laravel.
        </p>
        <p className="mt-5">
          I consider myself a proactive, communicative, and collaborative individual with a strong enthusiasm for leveraging
          AI technologies to deliver real-world solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 justify-center items-center">
        {itemAbout.map((item, index) => (
          <CardAbout
            Icon={item.Icon}
            title={item.title}
            description={item.description}
            colorIcon={item.colorIcon}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
