import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'

function Section5() {
  let s = {
    size: ' w-full h-[790px] text-white',
    container:
      ' relative flex flex-col justify-center items-center w-full h-[55%] bg-[#263852] border-2 border-red-700',
    title: 'text-center text-[33px] font-[700]  tracking-[6px] leading-[40px]',
    p_1: 'text-center text-[18px] mt-[30px] tracking-[2px]',
    container_btn:
      'w-[330px]  h-[47px] bg-white mt-[40px] rounded-[10px] text-black tracking-[4px] font-[800] text-[17px]  hover:bg-blue-50',
    container2:
      ' mx-auto flex flex-col justify-start items-center w-[75%] h-[45%]  border-x-0 border-t-0  border-[2px] border-b-gray',
    container2_p1:
      'mt-[70px] text-center text-[33px] font-[700] text-black tracking-[5px] mb-[20px]',
    container2_p2:
      'mb-[35px] text-center text-[18px]  text-gray-500 tracking-[1px]',
    container2_btn:
      'w-[200px] px-[15px] h-[47px] bg-black  rounded-[10px] text-white tracking-[5px] font-[700] text-[17px]',
    plus:
      'text-[75px] text-[#F15C43]  bg-white absolute top-[-50px] rounded-[50%]',
  }
  return (
    <div className={s.size}>
      <div className={s.container}>
        <p className={s.plus}>
          <AiFillPlusCircle />
        </p>

        <h1 className={s.title}>​JOIN OUR TEAM TODAY!</h1>
        <p className={s.p_1}>Work with the best minds in the business.</p>
        <button className={s.container_btn}>FIND YOUR DREAM JOB</button>
      </div>

      <div className={s.container2}>
        <p className={s.container2_p1}>HELLO. HOW CAN WE HELP YOU?</p>
        <p className={s.container2_p2}>
          Get in touch with us. We'd love to hear from you.
        </p>
        <button className={s.container2_btn}>CONTACT US</button>
      </div>
    </div>
  )
}

export default Section5
