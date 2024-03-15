import { useContext, useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdHome } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import "./Dashboard.css";
import { AuthContext } from "../../../Context/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../../public/icon.png";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdMessage } from "react-icons/md";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [isAgent, setIsAgent] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

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
        <div className="flex items-center">
          {/* logo content div */}
          <div className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9 ml-3" alt="Logo" />
            <span className="self-center whitespace-nowrap text-xl font-bold text-[#000] italic">
              <span className="text-[#bc0024]">H</span>ome
              <span className="text-[#bc0024]">N</span>est
            </span>
          </div>
          <div className="">
            <TfiAlignJustify
              className="ml-5 md:ml-3 lg:ml-10 text-2xl largeDevice_justify"
              onClick={() => setNavCollpase(!navCollpase)}
            ></TfiAlignJustify>
            <TfiAlignJustify
              className="ml-5 md:ml-3 lg:ml-10 text-2xl smallDevice_justify"
              onClick={() => setSmallNavCollpase(!smallnavCollpase)}
            ></TfiAlignJustify>
          </div>
        </div>

        {/* search div */}
        <div className="">
          <div className="relative md:w-96 flex items-center">
            <input
              type="search"
              name=""
              placeholder="Search here"
              className="hidden md:block  md:w-full px-4 py-1  rounded shadow-md outline-none"
            />
            <span className="absolute right-2">
              <button
                className="md:hidden focus:outline-none text-black"
                onClick={() => setIsSearch(!isSearch)}
              >
                <FaSearch></FaSearch>
              </button>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <IoMdNotificationsOutline className="text-2xl"></IoMdNotificationsOutline>
          <MdMessage className="text-[21px]"></MdMessage>

          <Navbar>
            <div className="flex">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
          </Navbar>
        </div>
      </div>
      {/* search for small device */}
      {isSearch ? (
        <>
          <div className="sm-search">
            <div className="relative md:w-56 flex items-center mx-2">
              <input
                type="search"
                name=""
                placeholder="Search here"
                className="w-full px-4 py-1  rounded shadow-sm outline-none"
              />
              <span className="absolute right-2">
                <button className=" focus:outline-none text-black">
                  <FaSearch></FaSearch>
                </button>
              </span>
            </div>
          </div>
        </>
      ) : (
        " "
      )}
      {/* header end */}
      <div className="md:flex ">
        <div
          className={`${smallnavCollpase ? "smallNav" : ""}
           side-container bg-[#f1f0f0]  text-black shadow-lg  w-full md:w-[150px] lg:w-64 pl-4  ${
             navCollpase ? "navCollapse" : " "
           }`}
        >
          {isAgent ? (
            <>
              <div className="flex items-center gap-2 p-2 border-b-[1px]">
                <RxDashboard className="text-xl"></RxDashboard>
                <NavLink to="/dashboard/properties" className="text-lg">
                  Dashboard
                </NavLink>
              </div>
              <div className="flex items-center gap-2 p-2 border-b-[1px]">
                <IoIosAddCircleOutline className="text-xl"></IoIosAddCircleOutline>
                <NavLink to="/dashboard/addProperty" className="text-lg">
                  Add Property
                </NavLink>
              </div>
              <div><h1 className="text-sm ml-4 mt-4 text-gray-500">PAGES</h1></div>
              <div className="flex items-center gap-2 p-2 border-b-[1px]">
                <IoPersonOutline className="text-xl"></IoPersonOutline>
                <NavLink to="" className="text-lg">
                 Profile
                </NavLink>
              </div>
              <div className="flex items-center gap-2 p-2 border-b-[1px]">
                <GoQuestion className="text-xl"></GoQuestion>
                <NavLink to="" className="text-lg">
                 F.A.Q
                </NavLink>
              </div>
              <div className="flex items-center gap-2 p-2 border-b-[1px]">
                <IoMdHome className="text-xl"></IoMdHome>
                <NavLink to="/" className="text-lg">
                 Home
                </NavLink>
              </div>
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
        <div className="flex-1 ">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
