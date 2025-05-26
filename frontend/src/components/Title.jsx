export function Title({title,subtitle}){
    return <div className="flex flex-col gap-2 p-8 text-center">
        <div className="text-3xl font-[500]">
            {title}
        </div>
        <div className="text-md font-light text-[#666]">
            {subtitle}
        </div>
    </div>
}