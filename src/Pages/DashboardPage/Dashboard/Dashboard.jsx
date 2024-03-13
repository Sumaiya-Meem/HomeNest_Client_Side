import { useContext, useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoIosAddCircle } from "react-icons/io";
import { TfiAlignJustify } from "react-icons/tfi";
import "./Dashboard.css";
import { AuthContext } from "../../../Context/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/icon.png";
import {  Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import { MdSearch } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdMessage } from "react-icons/md";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [isAgent, setIsAgent] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const [navCollpase, setNavCollpase] = useState(false);
  const [smallnavCollpase, setSmallNavCollpase] = useState(false);

  useEffect(() => {
    const userData = async () => {
      const res = await axiosSecure.get(`users/${user.email}`);
      const data = res.data;

      if (data.role === "Agent") {
        setIsAgent(true);
        setIsUser(false);
      } else {
        setIsAgent(false);
        setIsUser(true);
      }
    };

    if (user && user.email) {
      userData();
    }
  }, [axiosSecure, user]);

  return (
    <div>
      {/* header  start*/}
      <div className="flex mb-1 items-center justify-between p-2">
        {/* logo content div */}
        <div className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9 ml-3" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-bold text-[#000] italic">
            <span className="text-[#bc0024]">H</span>ome
            <span className="text-[#bc0024]">N</span>est
          </span>
        </div>
        {/* justify icon div */}
        <div className="">
          <TfiAlignJustify
            className="ml-10 text-2xl largeDevice_justify"
            onClick={() => setNavCollpase(!navCollpase)}
          ></TfiAlignJustify>
          <TfiAlignJustify
            className="ml-10 text-2xl smallDevice_justify"
            onClick={() => setSmallNavCollpase(!smallnavCollpase)}
          ></TfiAlignJustify>
        </div>
        {/* search div */}
        <div className="max-w-md">
          <TextInput
            type="text"
           
            placeholder="search"
            required
          />
        </div>
        
        <div className="flex items-center gap-2">
            <IoMdNotificationsOutline className="text-2xl"></IoMdNotificationsOutline>
            <MdMessage className="text-[21px]"></MdMessage>

            <Navbar >
      
      <div className="flex">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        </div>
        </Navbar>
       

      </div>  {/* header end */}
      
      </div> 
      <div className="md:flex">
        <div
          className={`${
            smallnavCollpase ? "smallNav" : ""
          } side-container bg-[#f1f0f0]  text-black shadow-lg  w-full md:w-[150px] lg:w-64 ${
            navCollpase ? "navCollapse" : " "
          }`}
        >
          {isAgent ? (
            <>
              <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                <NavLink to="/dashboard/properties">Agent</NavLink>
              </li>
            </>
          ) : isUser ? (
            <>
              <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                <NavLink to="/dashboard/properties">User</NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
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
