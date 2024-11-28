import GalleryCard from "../components/GalleryCard";


const Gallery = () => {
  return (
    <section className="w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl text-[#FFC110] font-bold">
          The Wonder of Nature
        </h1>
        <p className="text-sm">
          We seek to provide the authetic content for traveller around the world
        </p>
      </div>
      <div className="flex justify-center items-center mt-10 gap-10">
        <GalleryCard />
      </div>
    </section>
  );
};

export default Gallery;
