import React from 'react'
import ai from '../../public/Assets/AI.svg'
import ML from '../../public/Assets/ML.svg'
import Web from '../../public/Assets/Web.svg'
import App from '../../public/Assets/App.svg'

const Careers = () => {
    return (
        <>
            <div className=' careers mt-18 max-w-[1440px]'>
                <img src="https://cdn.vectorstock.com/i/preview-1x/00/54/abstract-grunge-tech-geometric-banner-design-vector-48710054.webp" alt="careers" className='w-[1400px] h-[400px]' />
            </div>
            <div className="grid grid-cols-4 w-full mt-4 mx-auto ">
                <div className="bg-slate-200 rounded-lg shadow-xl p-6 mx-auto w-72 h-full flex-cols hover:bg-orange-500  font-bold py-2 px-4 transform transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105">
                    <div className="mx-auto">
                        <img src={ai} alt="" className='w-20 h-20 mx-auto' />
                    </div>
                    <div className="flex items-center justify-center mx-auto ">We are Hiring AI Developer</div>
                </div>
                <div className="bg-slate-200 rounded-lg shadow-xl p-6 mx-auto w-72 h-full flex-cols hover:bg-orange-500  font-bold py-2 px-4 transform transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105">
                    <div className="mx-auto">
                        <img src={ML} alt="" className='w-20 h-20 mx-auto' />
                    </div>
                    <div className="flex items-center justify-center mx-auto ">We are Hiring ML Developer</div>
                </div>
                <div className="bg-slate-200 rounded-lg shadow-xl p-6 mx-auto w-72 h-full flex-cols hover:bg-orange-500  font-bold py-2 px-4 transform transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105">
                    <div className="mx-auto">
                        <img src={Web} alt="" className='w-20 h-20 mx-auto' />
                    </div>
                    <div className="flex items-center justify-center mx-auto ">We are Hiring Web Developer</div>
                </div>
                <div className="bg-slate-200 rounded-lg shadow-xl p-6 mx-auto w-72 h-full flex-cols hover:bg-orange-500  font-bold py-2 px-4 transform transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105">
                    <div className="mx-auto">
                        <img src={App} alt="" className='w-20 h-20 mx-auto' />
                    </div>
                    <div className="flex items-center justify-center mx-auto ">We are Hiring App Developer</div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-[-350px] capitalize font-bold text-5xl">We are Hiring All the Tallent Accross the Globe</div>

            <div className="flex items-center justify-center mt-[360px]">
                <button className='w-[400px] rounded-md bg-blue-500 hover:bg-blue-700 hover:text-white p-2 font-bold transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105'>Join Us As Developer</button>
            </div>
        </>
    )
}

export default Careers
