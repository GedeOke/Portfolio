export default function Button({ download = false }) {
  const handleClick = () => {
    if (download) {
      const link = document.createElement("a");
      link.href = "/CV_Gede_Oke.pdf"; 
      link.download = "CV_Gede_Oke.pdf";
      link.click();
    } else {
      const projectSection = document.getElementById("projects");
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`text-white text-lg rounded-md py-3 hover:cursor-pointer px-10 ${
        download
          ? "bg-gradient-to-r from-blue-500 to-purple-500"
          : "border border-slate-500"
      }`}
    >
      {download ? "Download CV" : "Explore Projects"}
    </button>
  );
}
