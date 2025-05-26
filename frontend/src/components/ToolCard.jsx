export function ToolCard({ img, title, subTitle, price, rating }) {
    return <div className="flex-1 h-80 shadow-lg w-150 rounded-md transform hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer">
        <div className="w-[100%] h-[60%] overflow-hidden"><img className="w-full h-full object-cover overflow-clip" src={img} /></div>
        <div className="px-12 py-5 flex flex-col gap-2">
            <div className="text-2xl font-medium">{title}</div>
            <div className="text-[#666] font-light">{subTitle}</div>
            <div className="flex justify-between">
                <div className="text-[#007bff] font-[400]">{price}</div>
                <div className="text-[#ffc43f]">{rating}</div>
            </div>
        </div>
    </div>
}