import { useSelector } from "react-redux"

export default function DashProfile() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div className='p-4 max-w-lg mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
        <form className="flex flex-col gap-4 ">
          <img src={currentUser.profilePicture} alt="profile" className="rounded-full h-24 w-24 object-cover cursor-pointer self-center my-3 border-2 border-blue-200" />
          <input type="text" placeholder="username" id="username" className="bordet p-3 rounded-lg"/>
          <input type="text" placeholder="email" id="email" className="bordet p-3 rounded-lg"/>
          <input type="text" placeholder="password" id="password" className="bordet p-3 rounded-lg"/>
          {/* <input type="text" placeholder="phone number" id="phonenumber" className="bordet p-3 rounded-lg"/> */}
          {/* <input type="text" placeholder="year" id="year" className="bordet p-3 rounded-lg"/> */}
          <button className="bg-slate-700 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-80">UPDATE</button>
        </form>
        <div className="mt-5 flex justify-between">
          <span className="text-orange-500 cursor-pointer">Delete Account</span>
          <span className="text-orange-500 cursor-pointer">Sign Out</span>
        </div>
    </div>
  )
}
