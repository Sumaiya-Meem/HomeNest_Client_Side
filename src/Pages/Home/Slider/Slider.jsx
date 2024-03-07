
import { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";
import axios from "axios";
import { Carousel } from "flowbite-react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
const Banner = () => {
  const [slides, setSlide] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("/advertise.json");
      setSlide(res.data);
    };
    data();
  }, []);
  return (
    <div className="">

<div className="h-[450px]">
      <Carousel leftControl={<FaCircleArrowLeft className="text-3xl text-white"></FaCircleArrowLeft>}
       rightControl={<FaCircleArrowRight className="text-3xl text-white"></FaCircleArrowRight>}>
      {slides.map((slide) => (
          // eslint-disable-next-line react/jsx-key
          <>
          <img src={slide.image} alt="" className="w-full h-[450px]" />
          <div className="w-[80%] m-auto py-4 bg-white flex justify-evenly relative  -mt-24 rounded-lg">       
               <div>
                   <h1 className="font-semibold font-serif ml-6">{slide.villaName}</h1>
                   <p className="text-sm text-gray-700">{slide.location}</p>
               </div>
                <div className="flex items-center gap-2">
                    <div className="bg-blue-700 px-2 py-1"> 
                        <IoBedOutline className=" text-white text-xl"></IoBedOutline>
                    </div>
                    <div>
                        <p>Bedroom</p>
                        <p className="font-semibold">{slide.bedroom}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-blue-700 px-2 py-1"> 
                        <FaBath className=" text-white text-xl"></FaBath>
                    </div>
                    <div>
                        <p>Bath</p>
                        <p className="font-semibold">{slide.bathroom}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-blue-700 px-2 py-1"> 
                        <FaVectorSquare className=" text-white text-xl"></FaVectorSquare>
                    </div>
                    <div>
                        <p>Area</p>
                        <p className="font-semibold capitalize">{slide.area}</p>
                    </div>
                </div>

               
                    <div className="ml-10">
                        <p className="text-sm">For sale</p>
                        <p className="font-bold capitalize text-blue-700">${slide.price}</p>
                    </div>
            </div>
          </>
      ))}
      
      </Carousel>
    </div>

     
     
    </div>
  );
};

export default Banner;