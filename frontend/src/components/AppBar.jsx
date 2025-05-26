import wokabeltLogo from '../assets/Wokabelt_logo.png'
export function AppBar() {
    return <div className="flex justify-between items-center px-24 py-2  w-screen bg-white font-family">
        <div className='flex items-center gap-4'>
            <img className='rounded-full overflow-hidden h-12.5 w-12.5' src={wokabeltLogo} alt="" />
            <div className='cursor-pointer'>
                <div className='text-[28px] font-[900] text-[#333] '><b>Wokabelt</b></div>
                <div className='text-[#666] text-sm'>Connecting local professionals</div>
            </div>
        </div>
        <div className="flex gap-15 text-lg items-center ">
            <div className='cursor-pointer hover:text-[#0063CD]'>Services</div>
            <div className='cursor-pointer hover:text-[#0063CD]'>Cart</div>
            <div className='cursor-pointer hover:text-[#0063CD]'>Learning</div>
            <div className='cursor-pointer hover:text-[#0063CD]'>Login</div>
            <div className='cursor-pointer px-[13px] pb-1 rounded-sm text-white bg-[#1e3c72] hover:bg-[#666] '>Signup</div>
        </div>
    </div>
}