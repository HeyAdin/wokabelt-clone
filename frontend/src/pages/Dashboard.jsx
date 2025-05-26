import { AppBar } from "../components/AppBar";
import { Buttons } from "../components/Buttons";
import { CardComponent } from "../components/CardComponent";
import { Container } from "../components/Container";
import { Detail } from "../components/Detail";
import { Title } from "../components/Title";
import { ShieldCheckIcon, HandRaisedIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid';
import kit from "../assets/plumbing-kit.png";
import laptopStand from "../assets/laptopstand.png";
import powerTool from "../assets/power-tool.png";

export function Dashboard() {
    return <div className="bg-[#F4F4F4] overflow-hidden">
        <AppBar />
        <div className="bg-gradient-to-b from-[#006DE3] to-[#0160c5] bg-[#006DE3] text-white">
            <Container>
                <div className=" m-[35rem] text-center flex flex-col gap-5">
                    <div className="text-[2.5rem] font-black">Transform Your Projects with Expert Services</div>
                    <div className="text-lg font-light">Connect with skilled professionals for all your needs - from home maintenance to digital solutions. Quality service, just a click away.</div>
                    <div className="flex justify-center items-center gap-4 ">
                        <div className="bg-white text-[#006DE3] rounded-sm">
                            <Buttons buttonText={"Find Services"} />
                        </div>
                        <div className="rounded-sm border-2">
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
                        <div className="cursor-pointer">
                            <CardComponent img={"🛠️"} heading={"Plumbing"} subheading={"Expert plumbing solutions for your home and business"} prices={"Starting from ₹500"} /></div>
                        <div className="cursor-pointer">
                            <CardComponent img={"💻"} heading={"Web Development"} subheading={"Custom websites and digital solutions"} prices={"Starting from ₹5000"} /></div>
                        <div className="cursor-pointer">
                            <CardComponent img={"📦"} heading={"Delivery Services"} subheading={"Fast and reliable delivery across Bangalore"} prices={"Starting from ₹100"} />
                        </div>
                        <div className="cursor-pointer "><CardComponent img={"📸"} heading={"Photography"} subheading={"Professional photography for all occassions"} prices={"Starting from ₹2000"} /></div>
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
                     <div className="flex-1 h-80 shadow-lg w-150 rounded-md" >
                        <div className="w-[100%] h-[60%] overflow-hidden"><img className="w-full h-full object-cover overflow-clip" src={kit} /></div>
                       <div className="px-12 py-5 flex flex-col gap-2">
                            <div className="text-2xl font-medium">Professional Plumbing Kit</div>
                            <div className="text-[#666] font-light">Complete set of tools for plumbing work</div>
                            <div className="flex justify-between">
                                <div className="text-[#007bff] font-[400]">₹500/day</div>
                                <div className="text-[#ffc43f]">4.8 ★</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-80 shadow-lg w-150 rounded-md" >
                        <div className="w-[100%] h-[60%] overflow-hidden"><img className="w-full h-full object-cover overflow-clip" src={laptopStand} /></div>
                       <div className="px-12 py-5 flex flex-col gap-2">
                            <div className="text-2xl font-medium">Ergonomic Laptop Stand</div>
                            <div className="text-[#666] font-light">Adjustable stand for comfortable work</div>
                            <div className="flex justify-between">
                                <div className="text-[#007bff] font-[400]">₹200/day</div>
                                <div className="text-[#ffc43f]">4.8 ★</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-80 shadow-lg w-150 rounded-md" >
                        <div className="w-[100%] h-[60%] overflow-hidden"><img className="w-full h-full object-cover overflow-clip" src={powerTool} /></div>
                        <div className="px-12 py-5 flex flex-col gap-2">
                            <div className="text-2xl font-medium">Power Tools Set</div>
                            <div className="text-[#666] font-light">Essential power tools for construction</div>
                            <div className="flex justify-between">
                                <div className="text-[#007bff] font-[400]">₹800/day</div>
                                <div className="text-[#ffc43f]">4.8 ★</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
         <div className="mt-9 w-screen bg-white">
            <Container>
                
            </Container>
         </div>
    </div>
}