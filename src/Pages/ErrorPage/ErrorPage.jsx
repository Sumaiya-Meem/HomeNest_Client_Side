import Lottie from 'lottie-react';
import errorPageAnimation from "../../../public/Animation - 1699182655469.json"
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className=' flex justify-center items-center flex-col'>
        <Lottie animationData={errorPageAnimation} className='h-[400px]'></Lottie>
        <p className='mb-4 text-xl text-purple-600 font-semibold'>The page you are looking for doesn't exist</p>
         <Link to="/" > <Button className='bg-purple-800'>Back to Home</Button></Link>
         
        </div>
    );
};

export default ErrorPage;