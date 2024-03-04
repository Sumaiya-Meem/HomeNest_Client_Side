import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import axios from "axios";
import { Carousel } from "flowbite-react";
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
    <div className="border-2 border-yellow-600">

<div className="h-[450px]">
      <Carousel leftControl="left" rightControl="right">
      {slides.map((slide) => (
          // eslint-disable-next-line react/jsx-key
          <>
          <img src={slide.image} alt="" className="w-full h-[450px]" />
          <div className="w-[70%] m-auto bg-white flex justify-evenly relative  -mt-20  border-2 border-red-600">
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
            </div>
          </>
      ))}
      
      </Carousel>
    </div>

      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full">
        {slides.map((slide, index) => (
         <>
          

          <SwiperSlide key={index}>
            <img src={slide.image} alt="" className="" />
            
          </SwiperSlide>
       
         </>
        ))}
      </Swiper> */}
      
     
    </div>
  );
};

export default Banner;
