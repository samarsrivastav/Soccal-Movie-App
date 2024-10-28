import { Carousel } from "flowbite-react";
import img1 from '/carousel1.avif'
import img2 from '/carousel2.avif'
import img3 from '/carousel3.avif'
export default function CarouselComp() {
  return (
    <div className="flex justify-center">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[95%] my-3 bg-[#eae8e8]">
        <Carousel slideInterval={5000}>
            <img src={img2} alt="..." className="h-full"/>
            <img src={img1} alt="..." className="h-full"/>
            <img src={img3} alt="..." className="h-full"/>
        </Carousel>
        </div>
    </div>
  );
}