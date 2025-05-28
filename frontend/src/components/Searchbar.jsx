export function SearchBar() {
    return <div className="w-315  h-13 bg-white flex items-center rounded-md shadow-md justify-between border border-gray-200">
        <svg className="ml-4 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
        <input className="w-full mx-2 outline-0" type="text" placeholder="Search for services...." />
        <div className="bg-[#007BFF] px-[25px] py-[6px] rounded-sm mr-2 text-white text-sm hover:bg-[#0056B3] cursor-pointer">
            <button className="cursor-pointer">Search</button>
        </div>
    </div>
}