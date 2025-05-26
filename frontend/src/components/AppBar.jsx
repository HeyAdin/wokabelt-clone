import wokabeltLogo from '../assets/Wokabelt_logo.png'
export function AppBar() {
    return <div className="flex justify-between items-center p-4 w-screen bg-white font-family">
        <div className='flex items-center gap-4'>
            <img className='rounded-full overflow-hidden h-12.5 w-12.5' src={wokabeltLogo} alt="" />
            <div>
                <div className='text-3xl font-black text-[#333]'>Wokabelt</div>
                <div className='text-[#666] text-sm'>Connecting local professionals</div>
            </div>
        </div>
        <div className="flex gap-4 text-lg">
            <div>Services</div>
            <div>Cart</div>
            <div>Learning</div>
            <div>Login</div>
            <div className='bg-blue-600 px-2.5 py-1'>Signup</div>
        </div>
    </div>
}