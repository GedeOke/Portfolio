import heroImage from "../assets/hero-image.jpg"
import diaPrognosis from "../assets/diaprognosis.jpg"
import sampahKu from "../assets/sampahKu.jpg"
import jamali from "../assets/jamali.jpg"

const itemProject = [
  {
    image: diaPrognosis,
    title: "DiaPrognosis – IBM Academy Best Project",
    description:
      "Developed an interactive web app for diabetes risk prediction using Scikit-Learn and Flask, with chatbot integration and deployment on IBM Cloud. Recognized as Best Project in IBM Advance AI program.",
    link: "https://github.com/GedeOke/DiaPrognosis", 
    tech1: "Flask",
    tech2: "Scikit-Learn",
    tech3: "IBM Cloud",
  },
  {
    image: heroImage,
    title: "Voice Command Recognition",
    description:
      "Created a real-time Indonesian voice command recognition system using TensorFlow and Keras, capable of detecting commands like 'Up', 'Down', 'Left', and 'Right'.",
    link: "https://github.com/GedeOke/Model-Pengenalan-Perintah-Suara", 
    tech1: "TensorFlow",
    tech2: "Keras",
    tech3: "Python",
  },
  {
    image: sampahKu,
    title: "SampahKu - Waste Classification System",
    description:
      "Designed and implemented a web-based waste classification model using MobileNetV2 and TFLite, achieving 3rd place at KOMPRES 15.",
    link: "https://sampahku-afqo.vercel.app/", 
    tech1: "TensorFlow",
    tech2: "TFLite",
    tech3: "Transfer Learning",
  },
  {
    image: jamali,
    title: "Smart Governance Desa Jamali",
    description:
      "Developed a digital village management website using Laravel for backend, including complaint portal, data dashboard, and modular letter management system.",
    link: "https://jamali.id/", 
    tech1: "Laravel",
    tech2: "MySQL",
    tech3: "REST API",
  },
]

export default itemProject