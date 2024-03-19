import { BsEmojiSmile } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaUserTie } from "react-icons/fa6";

const Achivement = () => {
    return (
        <div className='md:w-[1200px] mx-auto my-20'>
            <div className='flex items-center gap-4 py-2'>
                <h2 className='text-xl text-green-500 font-bold'>SOME FUN FACT</h2>
                <p className='w-[100px] font-extrabold text-green-500'>
                    -------------
                </p>
            </div>

            <h1 className='font-bold text-5xl text-blue-900'>Our Great <span className='underline text-green-500'>Achievement</span></h1>


            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-16 '>
                <div className="flex items-center p-6 text-blue-900 gap-4 shadow-lg">
                    <h1 className="text-4xl"><BsEmojiSmile></BsEmojiSmile></h1>
                    <div className="">
                        <h1 className="text-3xl text-black">854</h1>
                        <p className="text-xl text-gray-500">Enrolled Student</p>
                    </div>
                </div>
                <div className="flex items-center p-6 text-orange-600 gap-4 shadow-lg">
                    <h1 className="text-4xl"><CiFileOn></CiFileOn></h1>
                    <div className="">
                        <h1 className="text-3xl text-black">521</h1>
                        <p className="text-xl text-gray-500">Academic Programs</p>
                    </div>
                </div>
                <div className="flex items-center p-6 text-green-500 gap-4 shadow-lg">
                    <h1 className="text-4xl"><TfiHeadphoneAlt></TfiHeadphoneAlt></h1>
                    <div className="">
                        <h1 className="text-3xl text-black">958</h1>
                        <p className="text-xl text-gray-500">Winning Award</p>
                    </div>
                </div>
                <div className="flex items-center p-6 text-red-800 gap-4 shadow-lg">
                    <h1 className="text-4xl"><FaUserTie></FaUserTie></h1>
                    <div className="">
                        <h1 className="text-3xl text-black">548</h1>
                        <p className="text-xl text-gray-500">Certified Students</p>
                    </div>
                </div>
              




            </div>


        </div>
    );
};

export default Achivement;