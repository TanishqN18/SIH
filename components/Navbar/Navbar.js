import Image from 'next/image';
import Link from 'next/link';

const Navbar=()=>{
    return(
        <>
        
<nav class="bg-[#172938]">
  <div class=" flex items-center justify-between p-4">
  <a href="" class="flex items-center">
      <Image src='/logo.svg' alt="Pbase" width={60}height={60} />
      
  </a>
  <div className=''>
  <ul className='flex flex-row space-x-8 text-white text-l max-md:hidden'>
    <Link href='/'> 
    <li className='hover:bg-white hover:text-black rounded-full px-3 py-2'>Home</li>
    </Link >
    <Link href=''>
    <li className='hover:bg-white hover:text-black rounded-full px-3 py-2'>Explore</li>
    </Link>
    <Link href='/'>
    <li className='hover:bg-white hover:text-black rounded-full px-3 py-2'>Post</li>
    </Link>
  </ul>
  </div>
  <div className='max-md:hidden'>
  <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-black sr-only dark:text-black ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        </div>
        <input type="search" id="default-search" class="w-96 py-3 px-5 text-sm text-gray-900 border border-gray-300 rounded-full  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-opacity-75" placeholder="Search..." required/>
        <button type="submit" class="absolute right-2.5 bottom-2.5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1  dark:focus:ring-blue-800"> 
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg></button>
    </div>
</form>
  </div>
  <div className=''>
    <ul className='flex flex-row space-x-10'>
    <Link href='/'>
    <li>
        <Image src='/notification.svg' width={30}height={30}></Image>
      </li>
      </Link>
      <Link href='/'>
      <li>
        <Image src='/chat.svg' width={30}height={30}></Image>
      </li>
      </Link>
      <Link href='/'>
      <li>
        <Image src='/user.svg' width={30}height={30}></Image>
      </li>
      </Link>
      <Link href='/'>
      <li>
        <Image src='/dash.svg' width={30}height={30}></Image>
      </li>
      </Link>
    </ul>
  </div>
  </div>
</nav>

        </>
    )
};
export default Navbar;