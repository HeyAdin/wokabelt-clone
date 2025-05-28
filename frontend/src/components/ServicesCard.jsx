export function ServicesCard({ services }) {
    return <div className="flex gap-8 w-full pb-10 justify-center">
        {services.map((service) => {
            return <div className="group shadow-xl transform hover:-translate-y-1 hover:shadow-2xl duration-300 w-95 h-140 p-6 flex flex-col justify-center items-center">
                <div className="h-50 w-80 overflow-hidden">
                    <img className=" object-cover h-45 w-full transform group-hover:scale-105 duration-200" src={service.img} alt="" />
                </div>
                <div className=" text-center flex flex-col items-center justify-center gap-2 w-70">
                    <div className="text-[25px] font-medium">{service.title}</div>
                    <div>
                        <div className="flex gap-2 items-center">
                            <div className="text-[#ffc43f] text-2xl">{service.rating[0]}</div>
                            <div className="text-[#666]">{service.rating[1]}</div>
                        </div>
                    </div>
                    <div className="text-[#666]">{service.description}</div>
                    <div className="flex items-center gap-7">
                        <div className="flex gap-2 text-[#666] items-center"><span>{service.locationIcon}</span><span>{service.location}</span></div>
                        <div className="flex gap-2 text-[#666] items-center"><span>{service.hoursIcon}</span><span>{service.hours}</span></div>
                    </div>
                    <button className="bg-[#007BFF] px-10 py-[6px] text-white text-lg w-full rounded-sm cursor-pointer mt-3">Book Now</button>

                </div>
            </div>
        })}
    </div>
}