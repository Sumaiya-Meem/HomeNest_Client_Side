import { NavLink } from "react-router-dom";
import logo from "../../../public/icon.png"
import {Navbar } from 'flowbite-react';
import { CiLogin } from "react-icons/ci";
const Header = () => {
    const navItem = <>

    <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#0079c1]" : "text-black"
        }
    >
        Home
    </NavLink>
    <NavLink
        to="/Property"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#40b86a]" : "text-black"
        }
    >
        Property
    </NavLink>

    <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#40b86a]" : "text-black"
        }
    >
        Dashboard
    </NavLink>
</>

    return (
        <div>
            
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">HomeNest</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Dropdown
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
        </Dropdown> */}
         <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#0079c1] mr-6 font-serif" : "text-black mr-6 font-serif" 
        }
    >
     <div className="flex items-center gap-1"><CiLogin  className="text-xl"></CiLogin>   Login</div>
    </NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
    {navItem}

      </Navbar.Collapse>
    </Navbar>


        </div>
    );
};

export default Header;