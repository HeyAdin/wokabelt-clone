export function CardComponent({img,heading, subheading,prices}){
    return <div className="border border-gray-100 p-8 px-10 rounded-md flex flex-col gap-2 shadow-md h-full justify-center items-center flex-1">
        <div className="text-4xl mb-4 overflow-hidden h-auto">{img}</div>
        <div className="text-2xl font-medium">{heading}</div>
        <div className="text-[#666] font-light">{subheading}</div>
        <div className="text-[#007bff] font-[400]">{prices}</div>
    </div>
}