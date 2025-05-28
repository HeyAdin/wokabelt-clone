import { AppBar } from "../components/AppBar";
import { CategoryCard } from "../components/CategoryCard";
import { CategoryDropdownComponent } from "../components/CategoryDropdownComponent";
import { Footer } from "../components/Footer";
import { SearchBar } from "../components/Searchbar";
import { ServicesCard } from "../components/ServicesCard";
import { Title } from "../components/Title";
import { FaWrench, FaLaptopCode, FaTruck, FaCamera, FaPaintBrush, FaChalkboardTeacher, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import plumber from '../assets/plumber.png';
import photography from '../assets/photography.png';
import webDev from '../assets/webd.png'
const categoryCards = [{
    categoryName: "Plumbing",
    icon: <FaWrench className="text-blue-500 text-[38px]" />
},
{
    categoryName: "Web Development",
    icon: <FaLaptopCode className="text-blue-500 text-[38px]" />
},
{
    categoryName: "Delivery",
    icon: <FaTruck className="text-blue-500 text-[38px]" />
},
{
    categoryName: "Photography",
    icon: <FaCamera className="text-blue-500 text-[38px]" />
},
{
    categoryName: "Design",
    icon: <FaPaintBrush className="text-blue-500 text-[38px]" />
},
{
    categoryName: "Tutoring",
    icon: <FaChalkboardTeacher className="text-blue-500 text-[38px]" />
}];

const services = [{
    img: plumber,
    title: "Professional Plumbing Services",
    rating: ["★★★★★", "(4.5)"],
    description: "Expert plumbing solutions for homes and businesses. 24/7 emergency service available.",
    locationIcon: <FaMapMarkerAlt className="text-base" />,
    location: "Banglore",
    hoursIcon: <FaClock className="text-base" />,
    hours: "2-4 hours"
},
{
    img: webDev,
    title: "Web Development & Design",
    rating: ["★★★★★", "(5)"],
    description: "Custom website development, responsive design, and maintenance services.",
    locationIcon: <FaMapMarkerAlt className="text-base" />,
    location: "Remote",
    hoursIcon: <FaClock className="text-base" />,
    hours: "Flexible"
},
{
    img: photography,
    title: "Professional Plumbing Services",
    rating: ["★★★★★", "(4.5)"],
    description: "Expert plumbing solutions for homes and businesses. 24/7 emergency service available.",
    locationIcon: <FaMapMarkerAlt className="text-base" />,
    location: "Banglore",
    hoursIcon: <FaClock className="text-base" />,
    hours: "1-2 hours"
}]





export function Services() {
    return <div className="bg-white">
        <AppBar />
        <div className="px-[320px] py-5">
            <SearchBar />
            <div className="flex gap-3 pt-4">
                <CategoryDropdownComponent categories={["All Categories", "Plumbing", "Web Development", "Delivery", "Photography"]} />
                <CategoryDropdownComponent categories={["Sort By", "Highest Rated", "Price: Low to High", "Price: High to Loe"]} />
            </div>
            <Title title={"Popular Category"} />
            <CategoryCard  cards={categoryCards} /> <br />
            <Title title={"Available Services"} />
            <ServicesCard services={services} />
        </div>
        <Footer />
    </div>
}