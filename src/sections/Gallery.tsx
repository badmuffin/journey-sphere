import GalleryCard from "../components/GalleryCard";

const Gallery = () => {
  return (
    <section className="w-full h-full py-40 bg-black text-white flex flex-col justify-center items-center">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl text-[#FFC110] font-bold">
          The Wonder of Nature
        </h1>
        <p className="text-sm w-[90%]">
          We seek to provide the authetic content for traveller around the world
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center mt-10 gap-10">
        <GalleryCard />
      </div>
    </section>
  );
};

export default Gallery;
