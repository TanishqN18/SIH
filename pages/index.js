import React from 'react'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="w-screen h-[100vh] overflow-hiddden bg-[#172838]">
      <div className="w-full h-[10%] "></div>
      <div className="md:flex w-screen  h-screen justify-between  h-[90%] px-4">
          <div className='w-[15%] h-full'>
            <div className='flex flex-col  border-2  rounded-2xl border-[#2b3e4f] bg-[#2b3e4f] p-4'>
              <div className='justify-center align-center'> 
                <Image src="/profile.png"
                width={100}
                height={100}
                priority 
                className="mx-auto w-[70%] h-auto"
                />
              </div>
            <div className='text-center text-2xl font-bold mt-3'>
              <a href='' className="font-light">abcdefg</a>
            </div>
            <a className='my-1 text-l text-center'>kamariya..kamariya....Kamariya Kaude lapalop lollipop lagelu</a>
            <div className='flex my-2 justify-center '> 

              <a href=''>
              <Image className='px-2'
                src="/linkedin.png"
                width={50}
                height={5}
                priority 
              />
              </a>
              <a href=''>
              <Image className='px-2'
                src="/github.png"
                width={50}
                height={5}
                priority 
              />
              </a>
              <a href=''>
              <Image className='px-2'
                src="/new.png"
                width={50}
                height={5}
                priority 
              />
              </a>
              <a href=''>
              <Image className='px-2'
                src="/instagram.png"
                width={50}
                height={5}
                priority 
              />
              </a>
              <a href=''>
              <Image className='px-2'
                src="/twitter.png"
                width={50}
                height={5}
                priority 
              />
              </a>
              
              </div>
            </div>
            <div className='flex flex-col  my-5 border-2 rounded-2xl border-[#2b3e4f] bg-[#2b3e4f]'>
              <div className='text-2xl mt-2 font-bold text-center'>
                Analytics
                </div>

              <div className='mx-2 my-4'>
              <div className='text-l border-2 m-2 py-2 h-[50%] w-auto border-dashed  '>
                Analytics
                </div>
              <div className='text-l border-2 m-2 py-2 h-[50%] w-auto border-dashed'>
                Analytics
              </div>
              <div className='text-l border-2 m-2 py-2 h-[50%] w-auto border-dashed'>
                Analytics
                </div>
              </div>

            </div>
          
          </div>

          <div className=' rounded-4xl   w-[60%]'>
            <div className="text-white h-[30%] text-4xl bg-black mx-5">
              Hello
            </div>
            <div className='rounded-4xl h-[30%] bg-white mx-5 '>
              comment
            </div>
            

          </div>

          <div className='border-2 border-[#2b3e4f] rounded-2xl bg-[#2b3e4f] w-[20%] h-[60%]'>
            <div className='text-white text-center font-bold m-2 text-3xl'>Top Projects</div>
            <ul className='flex flex-col my-5 mx-2 list-disc list-inside text-xl'>
            <li className='my-1' href=''>1</li>
            <li className='my-1' href=''>2</li>
            <li className='my-1' href=''>3</li>
            <li className='my-1' href=''>4</li>
            </ul>

          </div>

      </div>
    </div>
    );
}