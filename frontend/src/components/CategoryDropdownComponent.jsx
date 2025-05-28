export function CategoryDropdownComponent({categories}){
    return <div className="shadow-md rounded-md inline">
        <select className="p-[8px] text-sm text-[#666]">
            {categories.map((category)=>{
                return <option>{category}</option>
            })}
        </select>
    </div>
}