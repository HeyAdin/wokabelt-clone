import { useState } from "react"

export function CartCardComponent({ cartItems }) {
    const [counter, setCounter] = useState(0);
    const [item, setItem] = useState(cartItems)
    return <div className="mt-2">
        {
            cartItems.map((item) => {
                return <div key={item.id} className="p-[24px] flex justify-between shadow-lg transform hover:-translate-y-1 duration-300 hover:shadow-xl">
                    <div className="flex gap-4 items-center">
                        <div className=" h-[110px] w-[110px] rounded-sm overflow-hidden">
                            <img className="object-cover h-[120px] w-[120px]" src={item.img} alt="" />
                        </div>
                        <div>
                            <div className="text-xl font-medium py-[2px]">{item.itemTitle}</div>
                            <div className="font-light text-sm pb-[4px]">{item.itemSubTitle}</div>
                            <div className="flex gap-2">
                                <div className="flex gap-2 text-[#666] text-sm items-center"><span className="text-[#007BFF]">{item.locationIcon}</span><span>{item.location}</span></div>
                                <div className="flex gap-2 text-[#666] text-sm items-center"><span className="text-[#007BFF]">{item.hoursIcon}</span><span>{item.duration}</span></div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-[#ffc43f] text-2xl">{item.rating[0]}</div>
                                <div className="text-[#666]">{item.rating[1]}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                        <div className="text-lg font-medium">{item.price}</div>
                        <div className="flex gap-1 shadow  py-1 justify-between items-center text-[#666]">
                            <button className=" w-5 text-xl cursor-pointer" onClick={() => setCounter(counter - 1)}>-</button>
                            <div className="px-3">{counter < 0 ? "0" : counter}</div>
                            <button className=" w-5 text-xl cursor-pointer" onClick={() => setCounter(counter + 1)}>+</button>
                        </div>
                        <button className="text-red-500 hover:text-red-700 text-lg cursor-pointer">
                            {item.deleteIcon}
                        </button>
                    </div>
                </div>
            })
        }
    </div>
}