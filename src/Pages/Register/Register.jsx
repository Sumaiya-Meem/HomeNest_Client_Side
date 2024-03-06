import bg from "../../../public/bg.avif";
import ani from "../../../public/Animation - 1701619162523.json";
import Lottie from "lottie-react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import logo from "../../../public/icon.png";
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosEyeOff } from "react-icons/io";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Register = () => {
  const axiosSecure = useAxiosSecure()
  const [showPass, setShowPass] = useState(false);
  const {createUser,updateUserProfile,logOut } =useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const userRole = form.user_role.value;
    const userInfo = {
        name,email, password,userRole
    }
    console.log(userInfo)

    setRegisterError('');
    if (!/^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/.test(password)) {
        setRegisterError('Password should be at least six characters, one uppercase letter and one special character');
        return;
    }

    createUser(email,password)
    .then(res=>{
      const loggedUser = res.user;
      console.log(loggedUser)
      updateUserProfile(name)
      .then(()=>{
        console.log("user profile updated successfully")
        // create user in database
        const userInfo={
          name:name,
          email:email
        }
        axiosSecure.post('/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log("user add in database")
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Register Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            logOut().then(() => {
              console.log("User logged out")
              navigate("/login");
            });
          }
        })
        
      })
      .catch(err=>console.log(err))

    })
  }




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
        <form action="" onSubmit={handleRegister}>
          <div className="max-w-md mt-2">
            <div className="mb-2 block">
              <Label htmlFor="" value="Name" />
            </div>
            <TextInput name='name' type="text" placeholder="" required />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="" value="Email" />
            </div>
            <TextInput name='email' type="email" placeholder="" required />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="" value="User role" />
            </div>
            <Select id="user_role" required>
              <option>Select user role</option>
              <option>User</option>
              <option>Agent</option>
            </Select>
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="" value="Password" />
            </div>
            <div className="flex items-center relative">
                <TextInput
                  id="email4"
                  type={showPass ? "text" : "password"}
                  placeholder=""
                  required
                  name="password"
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
          <div>
            {
              registerError && <p className="text-red-500">{registerError}</p>
            }
            </div>

          <div className="">
              <Button pill className="bg-[#0079c1] w-[70%] mt-2" type="submit">
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


