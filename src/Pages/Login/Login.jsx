import Lottie from "lottie-react";
// import logo from "../../../public/icon.png";
import loginAnimation from "../../../public/Animation - 1701619502457.json";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import bg from "../../../public/bg1.avif";
import { useContext, useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const {signIn, signInWithGoogle} =useContext(AuthContext)
  const location =useLocation()

  const navigate =useNavigate()
  const from =location.state?.from?.pathname || "/";

  const handleLogin = e =>{
      e.preventDefault();

      const form = e.target;

      const email= form.email.value;
      const password= form.password.value;
      console.log(email,password)
      
      signIn(email,password)
      .then(res=>{
          const user =res.user;
          console.log("Login User: ",user);
          Swal.fire({
              title: "Login Successfully",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
          navigate(from,{replace:true})
      })

  }

  const handleGoogle = () =>{
    signInWithGoogle()
    .then(res=>{
      console.log(res);
      Swal.fire({
        title: "Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from,{replace:true})

    })
    .catch(error=>{
      console.log(error)
    })
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  return (
    <div className="flex gap-2 h-[100vh] bg-container" style={backgroundImageStyle}>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="hidden lg:block w-[40%]  mt-12">
        <Lottie animationData={loginAnimation} className="h-[300px] "></Lottie>
      </div>
      <div className="flex-1 ">
        <div className="w-[80%] m-auto bg-transparent rounded-xl">
          <form action="" className="mt-5  p-3 space-y-2 shadow-md" onSubmit={handleLogin}>
            {/* <div className="flex items-center gap-2">
              <img src={logo} alt="" className="w-[40px] h-[35px]" />
              <h1 className="font-semibold italic">HomeNest</h1>
            </div> */}
            <h1 className="font-semibold text-xl">Log in</h1>
            {/* <p className="text-gray-700 text-sm">
              Continue to <span className="italic">HomeNest</span>
            </p> */}
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email4" value="Email" />
              </div>
              <TextInput
                id="email4"
                name="email"
                type="email"
                rightIcon={HiMail}
                placeholder=""
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 ">
                <Label htmlFor="pass" value="Password" />
              </div>
              <div className="flex items-center relative">
                <TextInput
                  id="email4"
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder=""
                  required
                  className="w-full"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-2 text-xl"
                >
                  {showPass ? (
                    <IoIosEyeOff className=""></IoIosEyeOff>
                  ) : (
                    <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center relative">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <div className="md:absolute right-36 ">
                <p className="text-sm text-[#0079c1] font-medium">
                  Forgot password ?
                </p>
              </div>
            </div>

            <div className="">
              <Button pill className="bg-[#0079c1] w-[78%] mx-auto md:mx-0" type="submit">
                Login
              </Button>
            </div>

            <div className="flex items-center ">
              <div className="h-[2px] bg-gray-500 w-52 mt-[6px] mr-2"></div>
              <p className="">or</p>
              <div className="h-[2px] bg-gray-500 w-48 mt-[6px] ml-2"></div>
            </div>

            <div className="flex justify-center w-[78%]">
              <Button outline pill className="hover:bg-slate-200" onClick={handleGoogle}>
                <FcGoogle className="text-2xl text-blue-500 mr-4 " />
                <span>Continue With Google</span>
              </Button>
            </div>
            <div className="flex items-center">
              <p className="">
                New to <span className="italic">HomeNest</span> ?
              </p>
              <Link to="/register">
                <div className="flex items-center">
                  <span className="text-black ml-2 mr-2 font-medium">
                    Sing Up
                  </span>
                  <FaLongArrowAltRight className="text-black mt-1"></FaLongArrowAltRight>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
