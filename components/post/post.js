import Image from 'next/image'


const Posts=()=>{
    return(
        <div className='h-fit rounded-2xl'> 

                <div className="bg-[url('/abc.svg')] bg-cover">
                 <div className='pt-40'>

                 </div>
                 <div className='text-white text-3xl pl-5 font-bold'>Instagram Clone</div>
                 <div className='text-white text-xl pl-5 pt-2 pb-10'>Shreyansh Gupta</div>
                </div>
              
            
            <div className='bg-[#2b3e4f] rounded-b-2xl'>
              <p className=' text-xl  text-white text-center py-10 justify-center px-5 m-0 '>
              WeatherWise is a user-friendly, cross-platform weather forecasting application that provides real-time weather information to users.
              This app aims to deliver accurate and up-to-date weather forecasts, 
              helping users plan their activities and stay prepared for changing weather conditions.
              </p>
            </div>
            </div>
    );
}
export default Posts;