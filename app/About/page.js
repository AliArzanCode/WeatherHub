import React from 'react'

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
       
       <div className='cover w-full relative'>
                <img className='object-cover w-full h-48 md:h-[400]'  src="https://wallpaperaccess.com/full/5567872.jpg" alt="" />
<div className='absolute -bottom-14 right-[38%] md:right-[48%] border-2 overflow-hidden border-white rounded-full size-36'>
    <img className=' rounded-full object-contain size-36 ' width={100} height={100}  src="/profile.png" alt="" />
</div>

       </div>

 <div className="max-w-2xl w-full relative top-9 md:top-0 md:left-1/2 text-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-300 text-center">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Hey there! I&apos;m <span className="font-semibold text-blue-600">Ali Arzan Zaidi</span>, an engineering student
          pursuing B.Tech in Computer Science and Engineering.
        </p>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          My hobby is trying new things—especially in tech. I built this website out of pure curiosity and a love for coding. I enjoy exploring how things work and turning ideas into working software.
        </p>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic text-center">
          “I love coding!!”
        </p>
      </div>

       </div>
  </>
  )
}

export default About
