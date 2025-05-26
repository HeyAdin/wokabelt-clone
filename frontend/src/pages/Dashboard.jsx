import { AppBar } from "../components/AppBar";
import { Buttons } from "../components/Buttons";
import { CardComponent, LearningCardComponent } from "../components/CardComponent";
import { Container } from "../components/Container";
import { Detail } from "../components/Detail";
import { Title } from "../components/Title";
import { ShieldCheckIcon, HandRaisedIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid';
import kit from "../assets/plumbing-kit.png";
import laptopStand from "../assets/laptopstand.png";
import powerTool from "../assets/power-tool.png";
import { ToolCard } from "../components/ToolCard";
import { FeedbackCard } from "../components/FeedbackCard";
import profile from '../assets/boy.png';
import sarah from '../assets/sarah.png';
import wokabeltLogo from '../assets/Wokabelt_logo.png';
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa6";

export function Dashboard() {
    return <div className="bg-[#F4F4F4] overflow-hidden">
        <AppBar />
        <div className="bg-gradient-to-b from-[#006DE3] to-[#0160c5] bg-[#006DE3] text-white">
            <Container>
                <div className=" m-[35rem] text-center flex flex-col gap-5">
                    <div className="text-[2.5rem] font-black">Transform Your Projects with Expert Services</div>
                    <div className="text-lg font-light">Connect with skilled professionals for all your needs - from home maintenance to digital solutions. Quality service, just a click away.</div>
                    <div className="flex justify-center items-center gap-4 ">
                        <div className="bg-white text-[#006DE3] rounded-sm transform hover:-translate-y-1 hover:shadow-xl duration-300">
                            <Buttons buttonText={"Find Services"} />
                        </div>
                        <div className="rounded-sm border-2 transform hover:-translate-y-1 hover:shadow-xl duration-300">
                            <Buttons buttonText={"Join as Professional"} />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-12 mt-10">
                        <Detail title={"5000+"} subHeading={"Active Professionls"} />
                        <Detail title={"4.8"} subHeading={"Average Rating"} />
                        <Detail title={"10000+"} subHeading={"Completed Projects"} />
                    </div>
                </div>
            </Container>
        </div>
        <div className="mt-9 border-t border-gray-300 w-screen bg-white">
            <Container>
                <div className="text-center flex flex-col gap-5">
                    <Title title={"Popular Services"} subtitle={"Browse our most requested services"} />
                    <div className="grid grid-cols-4 gap-5 px-7">
                        <div className="cursor-pointer transform hover:shadow-xl hover:-translate-y-1 duration-300">
                            <CardComponent img={"🛠️"} heading={"Plumbing"} subheading={"Expert plumbing solutions for your home and business"} prices={"Starting from ₹500"} /></div>
                        <div className="cursor-pointer transform hover:shadow-xl hover:-translate-y-1 duration-300">
                            <CardComponent img={"💻"} heading={"Web Development"} subheading={"Custom websites and digital solutions"} prices={"Starting from ₹5000"} /></div>
                        <div className="cursor-pointer transform hover:shadow-xl hover:-translate-y-1 duration-300">
                            <CardComponent img={"📦"} heading={"Delivery Services"} subheading={"Fast and reliable delivery across Bangalore"} prices={"Starting from ₹100"} />
                        </div>
                        <div className="cursor-pointer transform hover:shadow-xl hover:-translate-y-1 duration-300"><CardComponent img={"📸"} heading={"Photography"} subheading={"Professional photography for all occassions"} prices={"Starting from ₹2000"} /></div>
                    </div>
                </div>
            </Container>
        </div>
        <div className="mt-9 w-screen bg-white">
            <Container>
                <Title title={"Why Choose Wokabelt?"} subtitle={"Experience the difference with out platform"} />
                <div className="flex flex-row text-center justify-center items-center w-320 gap-5 px-7 ">
                    <CardComponent img={<ShieldCheckIcon className="w-15 h-15 text-blue-500" />} heading={"Verified Professionals"} subheading={"All our service providers are thoroughly vetted and background checked"} prices={""} />
                    <CardComponent img={<HandRaisedIcon className="w-15 h-15 text-blue-500" />} heading={"Transparent Pricing"} subheading={"No hidden charges - know exactly what you're paying for"} prices={""} />
                    <CardComponent img={<ClockIcon className="w-15 h-15 text-blue-500" />} heading={"Quick Response"} subheading={"Get connected with professionals within minutes"} prices={""} />
                    <CardComponent img={<StarIcon className="w-15 h-15 text-blue-500" />} heading={"Quality Guaranteed"} subheading={"We ensure high-quality service delivery every time"} prices={""} />
                </div>
            </Container>
        </div>
        <div className="mt-9 w-screen bg-white">
            <Container>
                <Title title={"Tool Shop"} subtitle={"Rent or purchase professional tools for your projects"} />
                <div className="flex gap-8 justify-center items-center">
                    <ToolCard img={kit} title={"Professional Plumbing Kit"} subTitle={"Complete set of tools for plumbing work"} price={"₹500/day"} rating={"4.8 ★"} />
                    <ToolCard img={laptopStand} title={"Ergonomic Laptop Stand"} subTitle={"Adjustable stand for comfortable work"} price={"₹200/day"} rating={"4.8 ★"} />
                    <ToolCard img={powerTool} title={"Power Tools Set"} subTitle={"Essential power tools for construction"} price={"₹800/day"} rating={"4.8 ★"} />
                </div>
            </Container>
        </div>
        <div className="mt-9 w-screen bg-white">
            <Container>
                <Title title={"Learning Center"} subtitle={"Enhance your skills with our free resources"} />
                <div className="grid grid-cols-3 gap-7">
                    <LearningCardComponent img={"📘"} heading={"Web Development Basics"} subheading={"Learn HTML, CSS, and JavaScript fundamentals"} hours={"2 hours"} level={"Beginner"} onClick={() => { }} />
                    <LearningCardComponent img={"📘"} heading={"Freelancing Guide"} subheading={"Start your freelancing journey with expert tips"} hours={"1.5 hours"} level={"All Levels"} onClick={() => { }} />
                    <LearningCardComponent img={"📘"} heading={"Web Development Basics"} subheading={"Learn HTML, CSS, and JavaScript fundamentals"} hours={"2 hours"} level={"Beginner"} onClick={() => { }} />
                </div>
            </Container>
        </div>
        <div className="mt-9 w-screen bg-white">
            <Container>
                <Title title={"What Our Users Say"} subtitle={"Real experiences from our community"} />
                <div className="flex gap-5 mt-10">
                    <FeedbackCard feedback={"I started my own digital marketing agency after completing the course. The practical knowledge was invaluable."} img={profile} name={"David Luka"} profession={"Digital Marketing"} />
                    <FeedbackCard feedback={"Wokabelt helped me find a reliable plumber within minutes. The service was professional and reasonably priced."} img={sarah} name={"Sarah Jane"} profession={"Home Ownner"} />
                </div>
            </Container>
        </div>
        <div className="h-80 bg-gradient-to-b from-[#006DE3] to-[#0160c5] bg-[#006DE3] text-white flex flex-col justify-center items-center gap-4">
            <div className="text-4xl font-[500]">Ready to Get Started?</div>
            <div className="text-[18px] font-light ">Join thousands of satisfied users who trust Wokabelt for their service needs</div>
            <div className="flex justify-center items-center gap-4 mt-3">
                <div className="bg-white text-[#006DE3] rounded-sm transform hover:-translate-y-1 hover:shadow-xl duration-300">
                    <Buttons buttonText={"Sign Up Now"} />
                </div>
                <div className="rounded-sm border-2 transform hover:-translate-y-1 hover:shadow-xl duration-300">
                    <Buttons buttonText={"Browse Services"} />
                </div>
            </div>
        </div>
        <div className="bg-[#1E293B] h-80 flex justify-around items-start py-13 px-48">
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
                        <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaInstagram/></a>
                        <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaXTwitter/></a>
                        <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaLinkedinIn/></a>
                        <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaYoutube/></a>
                        <a href="#" className="text-blue-600 hover:text-white cursor-pointer"><FaFacebookF/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}