import heroImage from "../assets/hero_image.png"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <div>
      {" "}
      <section className="bg-[#2B2B3C] text-white px-8 py-16 min-h-screen border-t-2 border-[#FAFAFA]">
        <div className="flex items-center justify-between h-full">
          {/* Left Content - Text */}
          <div className="w-1/2">
            <h1 className="text-5xl font-bold font-montserrat leading-tight">
              Fele Ayodeji <br /> Samuel
            </h1>
            <p className="mt-6 text-base font-poppins text-gray-300">
              A Software Engineer passionate about building scalable web
              applications that makes a difference and creating seamless user
              experiences.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-[#BDBDFF] mt-6 font-medium font-poppins hover:underline"
            >
              View My Work
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Fele Ayodeji Samuel"
              className="w-[300px] h-[300px] object-cover rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
