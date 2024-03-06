import { useEffect } from "react";
import { FaBath, FaVectorSquare } from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import slide1 from "../../../../public/slide1.jpg";
import slide2 from "../../../../public/slide4.jpg";
import slide3 from "../../../../public/slide3.jpg";
import slide4 from "../../../../public/slide2.jpg";
import "./style.css";
import initializeSlider from "./style.js";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  useEffect(() => {
    initializeSlider();
}, []);

  return (
    <div className="slider">
      <div className="list">
        <div className="item active">
          <img src={slide1} />
          <div className="content flex justify-evenly rounded-xl" >
            <div>
              <h1 className="font-semibold font-serif text-black">Villa on Grand Avenue</h1>
              <p className="text-sm text-gray-700">Dhaka,Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <MdBedroomParent className=" text-white text-xl"></MdBedroomParent>
              </div>
              <div className="flex flex-col items-center">
                <h4>Bedroom</h4>
                <p className="font-semibold">3</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <FaBath className=" text-white text-xl"></FaBath>
              </div>
              <div className="flex flex-col items-center">
                <h4>Bath</h4>
                <p className="font-semibold">2</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <FaVectorSquare className=" text-white text-xl"></FaVectorSquare>
              </div>
              <div className="flex flex-col items-center">
                <h4>Area</h4>
                <p className="font-semibold capitalize">3500 Sq Ft</p>
              </div>
            </div>
            <div className="ml-10">
              <h4 className="text-sm">For sale</h4>
              <p className="font-bold capitalize text-blue-700 price">$122,000</p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={slide2} />
          <div className="content flex justify-evenly rounded-xl">
            <div>
              <h1 className="font-semibold font-serif text-black">Luxury family home</h1>
              <p className="text-sm text-gray-700">Barishal,Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <MdBedroomParent className=" text-white text-xl"></MdBedroomParent>
              </div>
              <div className="flex flex-col items-center">
                <h4>Bedroom</h4>
                <p className="font-semibold">3</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <FaBath className=" text-white text-xl"></FaBath>
              </div>
              <div className="flex flex-col items-center">
                <h4>Bath</h4>
                <p className="font-semibold">2</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <FaVectorSquare className=" text-white text-xl"></FaVectorSquare>
              </div>
              <div className="flex flex-col items-center">
                <h4>Area</h4>
                <p className="font-semibold capitalize">4500 Sq Ft</p>
              </div>
            </div>
            <div className="ml-10">
              <h4 className="text-sm">For sale</h4>
              <p className="font-bold capitalize text-blue-700 price">$339,000</p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={slide3} />
          <div className="content flex justify-evenly rounded-xl">
            <div>
              <h1 className="font-semibold font-serif text-black">Awesome family home</h1>
              <p className="text-sm text-gray-700">Sylhet,Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <MdBedroomParent className=" text-white text-xl"></MdBedroomParent>
              </div>
              <div className="flex flex-col items-center">
                <h4>Bedroom</h4>
                <p className="font-semibold">5</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <FaBath className=" text-white text-xl"></FaBath>
              </div>
              <div className="flex flex-col items-center">
                <h4>Bath</h4>
                <p className="font-semibold">2</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <FaVectorSquare className=" text-white text-xl"></FaVectorSquare>
              </div>
              <div className="flex flex-col items-center">
                <h4>Area</h4>
                <p className="font-semibold capitalize">2444 Sq Ft</p>
              </div>
            </div>
            <div className="ml-10">
              <h4 className="text-sm">For sale</h4>
              <p className="font-bold capitalize text-blue-700 price">$287,500</p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={slide4} />
          <div className="content flex justify-evenly rounded-xl">
            <div>
              <h1 className="font-semibold font-serif text-black">Apartment on Avenue</h1>
              <p className="text-sm text-gray-700">Sylhet,Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <MdBedroomParent className=" text-white text-xl"></MdBedroomParent>
              </div>
              <div className="flex flex-col items-center">
                <h4>Bedroom</h4>
                <p className="font-semibold">4</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <FaBath className=" text-white text-xl"></FaBath>
              </div>
              <div className="flex flex-col items-center">
                <h4>Bath</h4>
                <p className="font-semibold">3</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-2 py-1 icon">
                <FaVectorSquare className=" text-white text-xl"></FaVectorSquare>
              </div>
              <div className="flex flex-col items-center">
                <h4>Area</h4>
                <p className="font-semibold capitalize">3600 Sq Ft</p>
              </div>
            </div>
            <div className="ml-10">
              <h4 className="text-sm">For sale</h4>
              <p className="font-bold capitalize text-blue-700 price">$238,800</p>
            </div>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button id="prev">
          <IoIosArrowBack></IoIosArrowBack>
        </button>
        <button id="next">
          <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div>


      <div className="thumbnail">
        <div className="item active">
          <img src={slide1} />
        </div>
        <div className="item">
          <img src={slide2} />
        </div>
        <div className="item">
          <img src={slide3} />
        </div>
        <div className="item">
          <img src={slide4} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
