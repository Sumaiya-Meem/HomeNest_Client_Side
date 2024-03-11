import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoIosAddCircle } from "react-icons/io";
import { TfiAlignJustify } from "react-icons/tfi";
import "./Dashboard.css";
const Dashboard = () => {

  const [isAgent, setIsAgent] = useState(false);

  const [navCollpase,setNavCollpase]=useState(false);
  const [smallnavCollpase,setSmallNavCollpase]=useState(false);

  return (
    <div>
      <div className="bg-gray-100 h-8 mb-1">
        <TfiAlignJustify className="ml-10 text-2xl largeDevice_justify" onClick={()=>setNavCollpase(!navCollpase)}></TfiAlignJustify>
        <TfiAlignJustify className="ml-10 text-2xl smallDevice_justify" onClick={()=>setSmallNavCollpase(!smallnavCollpase)}></TfiAlignJustify>
      </div>

      <div className="md:flex">
       
          <div className={`${smallnavCollpase ? "smallNav" : ""} side-container bg-[#f1f0f0]  text-black shadow-lg  w-full md:w-[150px] lg:w-64 ${navCollpase ? "navCollapse" : " "}`}>
            <div className="nav-option flex gap-2 items-center px-4 py-2">
              <RxDashboard></RxDashboard>
              <h2>Dashboard</h2>
            </div>
            <div className="nav-option flex gap-2 items-center p-2">
              <IoIosAddCircle></IoIosAddCircle>
              <h2>Add Property</h2>
            </div>
          </div>
        
        {/* content div */}
        <div className="flex-1 bg-red-200 mt-2">
             <h1>Meem</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
