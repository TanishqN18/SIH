import Image from 'next/image';
import link from '../assets/images/logos/link.svg'
import insta from '../assets/images/logos/insta.svg'
import git from '../assets/images/logos/git.svg'
import twit from '../assets/images/logos/twitter.svg'
import mail from '../assets/images/logos/mail.svg'
import pp from '../assets/images/profilephoto.svg'
const profile=()=>{
    return(
        <>
        <div className=" flex  flex-col h-full bg-[#172838] p-5">
         <div className="rounded-xl bg-[url('/pp.svg')] " >
            <div className="flex flex-row items-center">
                <Image className=" m-10 rounded-full" src={pp} width={208} height={208}></Image>
                <div className='flex flex-col'>
                    <div className='text-3xl text-white'>Marcelo Dias</div>
                    <div className='text-sm text-white text-opacity-75'>I have not failed. I've just found 1000 ways that won't work.</div>

                </div>
                <Image className='mx-3 ml-10'src={link} width={30} height={30}></Image>
                <Image className='mx-3'src={git} width={30} height={30}></Image>
                <Image className='mx-3'src={insta} width={30} height={30}></Image>
                <Image className='mx-3'src={twit} width={30} height={30}></Image>
                <Image className='mx-3'src={mail} width={30} height={30}></Image>
            </div>

         </div>
         <div className='text-white text-3xl font-bold mt-5'>Posts</div>
         <div className='text-white text-opacity-75'>14 posts found...</div>
         <div className='mt-10'>
          <div className='flex flex-row box'>
            <div className='flex flex-col post'>
              
            </div>
          </div>

         </div>
        </div>
        </>
    );
}
export default profile;