import wokabeltLogo from '../assets/Wokabelt_logo.png';
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa6";

export function Footer(){
    return  <div className="bg-[#1E293B] h-80 overflow-hidden">
            <div className="flex justify-around items-start py-13 px-48">
                <div className="flex flex-col gap-2">
                    <img className='rounded-full overflow-hidden h-12.5 w-12.5' src={wokabeltLogo} alt="" />
                    <div className='text-[25px] font-[900] text-white '><b>Wokabelt</b></div>
                    <div className='text-white text-sm'>Connecting you with top local professionals.</div>
                </div>
                <div>
                    <div className='text-white text-md font-bold'>Quick Links
                        <div className="font-[300] text-[14px] mt-4">
                            <div className="hover:underline cursor-pointer py-0.5">Services</div>
                            <div className="hover:underline cursor-pointer py-0.5">Cart</div>
                            <div className="hover:underline cursor-pointer py-0.5">Learning</div>
                            <div className="hover:underline cursor-pointer py-0.5">Login</div>
                        </div>
                    </div>
                </div>
                <div className='text-white text-md font-bold'>
                    Contact Us
                    <div className="font-[300] text-[14px] mt-4">
                        <div className="py-0.5">Email: wokabelt@gmail.com</div>
                        <div className="py-0.5">Phone: +91 7558697774</div>
                        <div className="py-0.5">📍Banglore, India</div>
                        <div className="flex gap-3 text-[16px] mt-3">
                            <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaInstagram /></a>
                            <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaXTwitter /></a>
                            <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaLinkedinIn /></a>
                            <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaYoutube /></a>
                            <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaFacebookF /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 w-screen text-center pt-[30px] font-[300] text-white text-sm">© 2025 Wokabelt. All rights reserved.</div>
        </div>
}