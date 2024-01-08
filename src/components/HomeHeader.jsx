import Link from "next/link"
import { TbGridDots } from "react-icons/tb";

export const HomeHeader = () => {
  return (
    <header className=" flex justify-end p-5">
        <div className="flex space-x-4 items-center">
          <Link href='https://mail.google.come' className="hover:underline">Gmail</Link>  
          <Link href='https://www.google.com/imghp?hl=en-GB&tab=ri&authuser=0&ogbl' className="hover:underline">Images</Link>  
          <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
          <button className="bg-blue-500 text-medium text-white hover:brightness-105 rounded-md py-2 px-6 hover:shadow-md transition-shadow">Sign In</button>
        </div>
    </header>
  )
}
