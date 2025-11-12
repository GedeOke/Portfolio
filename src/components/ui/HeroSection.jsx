import Button from "./Button";
import heroImage from "../../assets/hero-image.jpg";

export default function HeroSection() {
  return (
    <div className="space-y-5 py-10 md:flex items-center space-x-5" id="hero">
      <div className="space-y-5">
        <p className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Gede Oke
          </span>
          <br />
          AI & Machine Learning Enthusiast
        </p>
        <p className="text-lg text-gray-300 max-w-2xl">
          Passionate about exploring Artificial Intelligence to build smart and
          impactful solutions. Experienced in developing machine learning
          models, web deployment, and real-time systems using TensorFlow, Flask,
          and IBM Cloud. Always eager to learn, collaborate, and turn innovative
          ideas into reality.
        </p>

        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button />
          <Button download={true} />
        </div>
      </div>

      <div>
        <img
          src={heroImage}
          alt="Hero Image"
          className="object-cover w-full max-w-4xl lg:max-w-2xl rounded-2xl"
        />
      </div>
    </div>
  );
}
