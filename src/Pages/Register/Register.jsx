import bg from "../../../public/bg.avif";
import ani from "../../../public/Animation - 1701619162523.json";
import Lottie from "lottie-react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import logo from "../../../public/icon.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
const Register = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="flex gap-2 h-[100vh]" style={backgroundImageStyle}>
      <div className="flex-1 ml-28 mt-10">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-[40px] h-[35px]" />
          <h1 className="font-semibold italic">HomeNest</h1>
        </div>
        <h1 className="font-semibold text-xl">Create a <span className="italic">HomeNest</span> account</h1>
        <form action="">
          <div className="max-w-md mt-2">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Name" />
            </div>
            <TextInput id="email4" type="text" placeholder="" required />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Email" />
            </div>
            <TextInput id="email4" type="email" placeholder="" required />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="User role" />
            </div>
            <Select id="countries" required>
              <option>Select user role</option>
              <option>User</option>
              <option>Agent</option>
            </Select>
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Password" />
            </div>
            <TextInput id="email4" type="password" placeholder="" required />
          </div>

          <div className="">
              <Button pill className="bg-[#0079c1] w-[70%] mt-2">
                Register
              </Button>
            </div>

            <div className="flex items-center mt-2 ml-2">
              <p className="">
              Already have a <span className="italic">HomeNest</span> account?
              </p>
              <Link to="/login">
                <div className="flex items-center">
                  <span className="text-blue-600 ml-2 mr-2 font-medium">
                    Login
                  </span>
                  <FaLongArrowAltRight className="text-blue-600 mt-1"></FaLongArrowAltRight>
                </div>
              </Link>
            </div>

        </form>
      </div>
      <div className="hidden lg:block w-[40%]  mt-12">
        <Lottie animationData={ani} className="h-[300px] "></Lottie>
      </div>
    </div>
  );
};

export default Register;

01717531193
