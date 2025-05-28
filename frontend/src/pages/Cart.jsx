import { useState } from "react";
import { AppBar } from "../components/AppBar";
import { FaMapMarkerAlt, FaClock, FaTrashAlt, FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay } from "react-icons/fa";
import { CartCardComponent } from "../components/CartCardComponent";
import plumber from '../assets/plumber.png';
import photography from '../assets/photography.png';
import webDev from '../assets/webd.png'
import { Footer } from "../components/Footer";
let id = 4
export function Cart() {
    const [cartItems, setCartItems] = useState([{
        img: plumber,
        id: 1,
        itemTitle: "Professional Plumbing Services",
        itemSubTitle: "Expert plumbing solutions for homes and businesses",
        locationIcon: <FaMapMarkerAlt className="text-base" />,
        location: "Bangalore",
        hoursIcon: <FaClock className="text-base" />,
        price: "₹500/hr",
        rating: ["★★★★★", "(4.5)"],
        duration: "2-4 hours",
        deleteIcon: <FaTrashAlt />
    }, {
        img: webDev,
        id: 2,
        itemTitle: "Web Development & Design",
        itemSubTitle: "Custom website development and maintenance",
        locationIcon: <FaMapMarkerAlt className="text-base" />,
        location: "Remote",
        hoursIcon: <FaClock className="text-base" />,
        price: "₹1500/hr",
        rating: ["★★★★★", "(5)"],
        duration: "Project-based",
        deleteIcon: <FaTrashAlt />
    }, {
        img: photography,
        id: 3,
        itemTitle: "Professional Photography",
        itemSubTitle: "Complete set of tools for plumbing work",
        locationIcon: <FaMapMarkerAlt className="text-base" />,
        location: "Bangalore",
        hoursIcon: <FaClock className="text-base" />,
        price: "₹2000/hr",
        rating: ["★★★★★", "(4.5)"],
        duration: "5-6 hours",
        deleteIcon: <FaTrashAlt />
    },])
    return <div className="bg-white">
        <AppBar />
        <div className="px-[330px] py-5">
            <div className="flex flex-col gap-2 p-3">
                <div className="text-3xl font-bold">Your Cart</div>
                <div className="text-[#666] text-lg">{cartItems.length} items in your cart</div>
            </div>
            <div className="flex gap-8 justify-between">
                <div className="flex-2">
                    <CartCardComponent cartItems={cartItems} />
                </div>
                <div className="w-80  p-6 shadow-lg">
                    <div className=" flex flex-col justify-center items-center mt-8">
                        <div className="text-2xl font-medium">Order Summary</div>
                    </div>
                    <div className="flex flex-col text-[#666] gap-3 pt-8">
                        <div className="flex justify-between" ><span>Subtotal</span><span>₹2500</span></div>
                        <div className="flex justify-between" ><span>Service Fee</span><span>₹250</span></div>
                        <div className="flex justify-between" ><span>Tax (18%)</span><span>₹450</span></div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between ">
                        <div className="font-medium text-lg">Total</div>
                        <div className="font-medium text-lg">₹3200</div>
                    </div>
                    <div className="flex gap-2 pt-6 ">
                        <input className="px-3 py-2 outline-none border  border-gray-400 rounded-sm w-full border-gray-600" type="text" placeholder="Enter promo code" />
                        <button className="cursor-pointer border border-gray-400 px-4 text-sm rounded-sm"> Apply</button>
                    </div>
                    <button className="w-full bg-[#007BFF] p-3 text-white rounded-sm mt-6 cursor-pointer">Proceed to checkout</button>

                    <div className="text-[#666] text-center mt-9">Secure Payment Methods</div>
                    <div className="flex justify-center items-center mt-2">
                        <FaCcVisa className="text-gray w-10 h-6 rounded" />
                        <FaCcMastercard className="text-gray w-10 h-6 rounded" />
                        <FaCcPaypal className="text-gray  w-10 h-6 rounded" />
                        <FaGooglePay className="text-gray-700 w-14 h-8" />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}