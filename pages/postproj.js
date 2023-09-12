import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Postsproj(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [bonafide, setBonafide] = useState(null);
    const [tags, setTags] = useState([]);
    const [techStack, setTechStack] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const router = useRouter();
    const handleThumbnailUpload = (e) => {
        setThumbnail(e.target.files[0]);
      };
    
      const handleBonafideUpload = (e) => {
        setBonafide(e.target.files[0]);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Store data in arrays or perform any necessary processing.
        const projectData = {
          title,
          description,
          thumbnail,
          bonafide,
          tags,
          techStack,
          githubLink,
        };
    
        // You can store projectData in an array or send it to an API.
    
        // Redirect to a different page.
        router.push('/');
      };
    return(
        <>
        <div className='bg-[#172938] h-screen flex flex-row '>
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
              <a href='' className=" text-white font-bold">Shreyansh Gupta</a>
            </div>
            <a className='my-2 text-l text-white text-center'>Stress is the result of working hard for something we don’t care about. Working hard for something we care about is referred to as passion</a>
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
            {/* <div className='flex flex-col  my-5 border-2 rounded-2xl border-[#2b3e4f] bg-[#2b3e4f]'>
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

            </div> */}
          
          </div>
          <div className=' rounded-4xl w-[80%] '>
            <div className='ml-10 text-white bg-[#2b3e4f] rounded-xl p-5 text-xl font-bold'>
                Post New Projects
            </div> 
            <form onSubmit={handleSubmit} className='flex flex-col mt-5'>
      <input  className="mt-3 ml-20 text-white bg-[#2b3e4f] rounded-xl p-5 text-xl " type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="mt-3 ml-20 text-white bg-[#2b3e4f] rounded-xl p-5 text-xl " placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <div className='text-3xl text-white font-bold ml-20 mt-3 mb-3'>Upload Content...</div>
      <div className='flex flex-row'>
      <input className="mt-3 ml-20 text-white bg-[#2b3e4f] rounded-xl p-5 text-xl " type="file" accept="image/*" onChange={handleThumbnailUpload} />
      <input className="mt-3 ml-20 text-white bg-[#2b3e4f] rounded-xl p-5 text-xl " type="file" accept=".pdf" onChange={handleBonafideUpload} />
      </div>
      <div className='text-3xl text-white font-bold ml-20 mt-3 mb-3'>More Info...</div>
      <input className="mt-3 ml-20 text-white bg-[#2b3e4f] rounded-xl p-5 text-xl " type="text" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value.split(','))} />
      <input className="mt-3 ml-20 text-white bg-[#2b3e4f] rounded-xl p-5 text-xl " type="text" placeholder="Tech Stack" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
      <input className="mt-3 ml-20 text-white bg-[#2b3e4f] rounded-xl p-5 text-xl " type="text" placeholder="GitHub Link" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
      <button className="bg-[#50D1BF] w-[15%] ml-20 mt-4 rounded-xl text-2xl p-2 text-white" type="submit">Post Project</button>
    </form>
          </div>

          </div>
        </>
    );
}
export default Postsproj;