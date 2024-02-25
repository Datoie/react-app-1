import React, { useContext, useState } from 'react'
import { logo, iconArrowUp, iconArrowDown, iconMenu, iconCloseMenu } from '../assets'
import { navLinks, features, company } from '../constants'
import Button from './Button'
import { Context } from '../App'

function Navbar() {
    const [clickBar, setClickBar] = useContext(Context)
    const [click, setClick] = useState(true)
    const [click1, setClick1] = useState(true)
    function handleClick (index) {
        if(index == 1){
            setClick(!click)
        }
        if(index == 0){
            setClick1(!click1)
        }
    }
    function hndleClickBar(){
        setClickBar(!clickBar)
    }

    return(
        <div className='flex w-full h-0 p-3 z-[2] relative'>
            <div className={` transition-all fixed ${clickBar ? 'bg-inherit' : 'bg-white'} w-[50vw] h-[100%] right-0 top-0`} />
            <div className={`opacity-[.5] transition-all fixed
             ${clickBar ? 'bg-inherit z-[-3]' : 'z-[-3]'} 
             w-[100vw] h-full right-0 top-0 
             ${!clickBar ? 'bg-[#4d4d4d] z-[-9999]' : 'bg-inherit z-[-9999]' }`} />
        <div className={`flex items-center w-full bg-black
         gap-[50px] text-color text-slate-600  justify-between relative`}>
            <img src={logo} alt="logo" className=' fixed' />
            <img src={clickBar ? iconMenu  : iconCloseMenu}
             className={`z-[99] cursor-pointer md:hidden transition-all
             text-[#111749] text-[20px] fixed right-[1.5rem] w-[20px] h-[20px]`} onClick={hndleClickBar}/> 
            <ul className='flex absolute left-[160px] md:opacity-1 opacity-1  z-[999]'>
                {/* contianer of menu bar */}
                <div className={`flex gap-6 md:flex-row flex-col z-[999]
                 md:relative fixed md:right-0 md:left-[0%] left-[50%] md:p-0 p-[20px]
                 md:top-0 top-[70px] left-10px md:opacity-[1] opacity-1 transition-all
                  ${clickBar ? 'opacity-[0]' : 'opacity-[1]'} `}>
                    {navLinks.map((nav, index) => (
                        <div className='flex md:items-center  items-baseline gap-2' onClick={() => handleClick(index)} key={index}>
                            <li className={`hover:opacity-[.5] opacity-[1] cursor-pointer transition-all md:items-center `}>
                                {nav.title}
                                </li>
                            {index == 1 ? <img src={(click ? iconArrowDown   : iconArrowUp) } 
                            className={` w-[10px] h-[7px] cursor-pointer ${!click && 'md:mb-0 mb-[120px]'}`} /> : '' }
                            {index <= 0 ? <img src={(click1 ? iconArrowDown  : iconArrowUp) }
                            className={`z-[-5] w-[10px] h-[7px] cursor-pointer ${!click1 && 'md:mb-0 mb-[160px]'}`}/> : '' }
                        </div>
                    ))}
                    {/* features */}
                    <ul className={`absolute z-[-1] md:left-[-50px] md:top-10 top-[4rem] left-[2rem]
                     md:bg-white bg-inherit w-[150px] h-[170px] flex flex-col text-[black]
                      gap-3 md:p-[20px] p-0 rounded-[10px] md:shadow-lg shadow-none 
                      ${!click1 ? `opacity-[1] ${() => hanldeUnHide()}` : 'opacity-[0]'}
                       transition-all`}>
                        {features.map((list, index) => (
                            <div key={index} className='font-normal cursor-pointer  hover:opacity-[.5] z-[11]
                             flex items-center gap-4 transition-all'>
                                <img src={list.icon} alt={list.id} className='w-[20px] h-[20px]' />
                                <li className=''>{list.title}</li>
                            </div>
                        ))}
                    </ul>
                    {/* company */}
                    <ul className={`z-[99] ${click1 ? ' md:mt-0 mt-[1rem]' : 'top-[9rem] md:mt-0 mt-[120px]'} 
                    absolute md:top-10 top-[6rem] md:left-[120px] left-[2rem]
                     md:bg-white bg-inherit md:p-[20px] p-[0] text-black  md:w-[120px] md:h-[120px]
                      w-[150px] h-[170px] flex flex-col md:gap-2 gap-[1rem] rounded-[10px] md:shadow-lg  shadow-none 
                        ${!click ? `opacity-[1]` : 'opacity-[0] z-[2]'}
                        transition-all`}>
                        {company.map((list, index) => (
                            <div key={index} className='abslolute font-normal cursor-pointer hover:opacity-[.5]
                             flex items-center gap-4 transition-all w-[90px]'>
                                <li className=''>{list.title}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </ul>
        </div>
        <div className={`md:opacity-[1] opacity-[0] z-[999]
         scroll-m-1
         ${!clickBar ? 'opacity-[1]' : 'opacty-[0]' }
         ${!click || !click1 ? 'top-[25rem]': 'top-0'} md:relative
         ${!click && !click1 ? 'top-[35rem]': 'top-0'}
         fixed capitalize items-center flex gap-5
          md:right-0 md:top-0 right-[0] md:p-0 p-5 
          md:flex-row flex-col top-[17rem] md:w-[250px] w-[50%]`}>
            <h3 className='w-[120px] text-center transition-all 
            z-[99] cursor-pointer hover:font-bold'>login in</h3>
            <Button value={'register'} styles={`right-[0] `}/>
        </div>
    </div>
    )
}

export default Navbar
