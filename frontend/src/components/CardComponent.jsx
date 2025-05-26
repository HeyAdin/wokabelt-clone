export function CardComponent({ img, heading, subheading, prices }) {
    return <div className="border border-gray-100 p-8 px-10 rounded-md flex flex-col gap-2 shadow-md h-full justify-center items-center flex-1">
        <div className="text-4xl mb-4 overflow-hidden h-auto">{img}</div>
        <div className="text-2xl font-medium">{heading}</div>
        <div className="text-[#666] font-light">{subheading}</div>
        <div className="text-[#007bff] font-[400]">{prices}</div>
    </div>
}

export function LearningCardComponent({ img, heading, subheading, hours, level }) {
    return <div className="border border-gray-100 p-8 px-10 rounded-md flex flex-col gap-2 shadow-md col-span-1 w-150 cursor-pointer transform hover:shadow-xl hover:-translate-y-1 duration-300">
        <div className="text-4xl mb-4 overflow-hidden h-auto">{img}</div>
        <div className="text-xl font-medium">{heading}</div>
        <div className="text-[#666] font-light">{subheading}</div>
        <div className="flex gap-4 text-[#666] font-light text-sm ">
            <div>{hours}</div>
            <div>{level}</div>
        </div>
    </div>
}