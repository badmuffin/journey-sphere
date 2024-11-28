import gal1 from "../assets/otherImg/gal1.png";
import gal2 from "../assets/otherImg/gal2.png";
import gal3 from "../assets/otherImg/gal3.png";
import gal4 from "../assets/otherImg/gal4.png";

const GalleryCard = () => {
  const gal:string[] = [gal1, gal2, gal3, gal4];

  return (
    <>
      {gal.map((data:string, idx:number) => (
        <div className="hover:scale-110 duration-300" key={idx}>
          <img src={data} className="w-[280px] h-[380px]" />
        </div>
      ))}
    </>
  );
};

export default GalleryCard;