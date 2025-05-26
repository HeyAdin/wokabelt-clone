export function FeedbackCard({feedback,img,name,profession}){
    return <div className="w-150 py-5 px-13 rounded-md shadow-lg">
        <p className="italic text-md font-light text-[#666] pb-7">{feedback}</p>
        <div className="flex gap-5 items-center">
            <div className="h-15 w-15 overflow-hidden rounded-full">
                <img className="w-full h-full object-cover object-top" src={img}/>
            </div>
            <div>
                <div className="text-[18px] font-medium">{name}</div>
                <div className="font-light text-sm text-[#666]">{profession}</div>
            </div>
        </div>
    </div>
}