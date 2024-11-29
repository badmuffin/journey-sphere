import bg from "../assets/otherImg/bg.png";

const AboutPage = () => {
  return (
    <section className="relative w-full h-screen">
      <div>
        <img src={bg} className=" absolute top-0 w-full h-full object-cover" />
        <div className="bg-gradient-to-b absolute top-0 w-full h-1/2 from-[#000000d1] via-[#00000085] to-[#0000001b]"></div>
        <div className="bg-gradient-to-t absolute bottom-0 w-full h-1/2 from-[#000000d1] via-[#00000029] to-[#0000001b]"></div>
      </div>
    </section>
  );
};

export default AboutPage;
