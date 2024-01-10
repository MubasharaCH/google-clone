 'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { PiMicrophoneFill } from "react-icons/pi";
export const HomeSearch = () => {
  const [input,setInput]=useState('')
  const [sloading,setSloading]=useState(false)
  const router=useRouter()
  const handleSubmit=(e)=>{
    e.preventDefault();
     if(!input.trim()) return;
     router.push(`/search/web?searchTerm=${input}`)

  }
 async function randomSearch(){
  setSloading(true)
  const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setSloading(false)
  }
  return (
    <>
    <form onSubmit={handleSubmit} className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
   <AiOutlineSearch className='text-xl text-gray-500 mr-3' onSubmit={handleSubmit}/>
   <input type="text" className=' flex-grow focus:outline-none '  onChange={(e)=> setInput(e.target.value)} value={input}/>
   <PiMicrophoneFill className='text-lg '/>
    </form>
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-8 justify-center ">
        <button onClick={handleSubmit} className='btn'>Google Search</button>
        <button disabled={sloading} onClick={randomSearch} className=' btn flex items-center justify-center disabled:opacity-80'>
        { sloading ? ( <img src='spinner.svg' alt="loading.." className=" h-8 text-center " />)
           :("I Am Feeling Lucky")
        }
        
        </button>
    </div>
    </>
  )
}
