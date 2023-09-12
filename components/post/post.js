import Image from 'next/image'

const Posts=()=>{
    return(
        <div className='h-screen'> 
        <div className="text-white border-2 border-[#2b3e4f] rounded-xl h-[30%] text-4xl  mx-5">
              <a href=''>
              <Image className=' w-[100%] h-full'
                src="/Main.svg"
                width={100}
                height={100}
                priority 
              />
              </a>
            </div>
            <div className='rounded-4xl h-[25%] bg-[#2b3e4f] mx-5 '>
              <p className='pt-4 text-xl  text-white text-center border-b-4'>
              WeatherWise is a user-friendly, cross-platform weather forecasting application that provides real-time weather information to users.
              This app aims to deliver accurate and up-to-date weather forecasts, 
              helping users plan their activities and stay prepared for changing weather conditions.
              </p>
            </div>
            </div>
    );
}
export default Posts;