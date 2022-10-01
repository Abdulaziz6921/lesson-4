// import React, { useState } from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'

function Navbar() {
  // const [hover, setHover] = useState(false)

  // let hover_li = document.querySelectorAll('#li_dropdown')
  // console.log(hover_li)
  // hover_li.forEach((el) =>
  //   el.addEventListener('mouseenter', (e) => {
  //     e.target.querySelector('#dropdown').style.display = 'flex'
  //   }),
  // )
  // hover_li.forEach((el) =>
  //   el.addEventListener('mouseleave', (e) => {
  //     e.target.querySelector('#dropdown').style.display = 'none'
  //   }),
  // )
  let style = {
    size: 'sticky z-30 top-0 bg-[#231F20] w-full h-[70px]  text-white',
    inner_size:
      'relative flex justify-between items-center w-[76%] h-full m-auto',
    img: 'flex justify-center items-center w-[12%] h-full ',
    img_self: 'w-[60%] h-[80%]  object-contain',
    ul: ' w-[53%] flex justify-between items-center h-full ',
    li:
      ' pl-[-25px] pr-[15px] font-[700] text-[13px] border-r-2 border-r-white hover:text-blue-300',
    hover_li:
      'group  pl-[-25px] pr-[15px] font-[700] text-[13px] border-r-2 border-r-white hover:text-blue-300',
    dropdown1:
      'hidden flex justify-start items-center w-full h-[300px] border-2 border-black absolute top-[70px] right-0 bg-white group-hover:flex',
    box_1:
      ' w-[300px] h-[170px] border-y-0 border-l-0 border-2 border-r-gray ml-[90px]',
    box_1_h1:
      'text-black text-[16px] font-[700] mb-[9px] tracking-[1px] pr-[20px] leading-[24px]',
    box_1_p1: 'text-black text-[12px]  font-[400]  pr-[50px]',
    box_1_p2: 'text-black text-[12px]  font-[400] mt-[20px] tracking-[1px]',
    box_1_span: 'font-[700] ',
    box_2:
      'flex fle w-[100px] h-[170px]  leading-[35px] ml-[30px] text-black  text-[16px] font-bold',

    dropdown2:
      'hidden flex justify-start items-center w-full h-[350px] border-2 border-black absolute top-[70px] right-0 bg-white group-hover:flex',
    last: 'w-[25%] flex justify-between items-center h-full ',
    btn:
      'w-[100px]  h-[22px] text-[10px] tracking-[2px]  font-[800] border border-white hover:text-blue-300 hover:border-blue-300',
    select: 'w-[100px] h-[30px] bg-black text-[13px] font-[700]',
    glass: 'text-[27px]',
  }

  return (
    <div className={style.size}>
      <div className={style.inner_size}>
        <div className={style.img}>
          <img
            src="https://www.epam.com/content/dam/epam/global/logo_white-blue.svg"
            alt=""
            className={style.img_self}
          />
        </div>
        <ul className={style.ul}>
          <li className={style.hover_li}>
            SERVICES
            <div className={style.dropdown1}>
              <div className={style.box_1}>
                <h1 className={style.box_1_h1}>CONSULT & DESIGN</h1>
                <p className={style.box_1_p1}>
                  {' '}
                  Turning breakthrough thinking into tangible results
                </p>
                <p className={style.box_1_p2}>
                  <span className={style.box_1_span}>EPAM</span> CONTINUUM
                </p>
              </div>
              <div className={style.box_2}>
                ENGINEER <br />
                OPERATE <br />
                OPTIMIZE
              </div>
            </div>
          </li>
          <li className={style.li}>HOW WE DO IT</li>
          <li className={style.hover_li}>
            OUR WORK
            <div className={style.dropdown2}>
              <div className={style.box_1}>
                {' '}
                <p className={style.box_1_h1}>FINANCIAL SERVICES</p>
                <p className={style.box_1_h1}>MEDIA, ENTERTAINMENT & TELECOM</p>
                <p className={style.box_1_h1}>BUSINESS INFORMATION SERVICES</p>
                <p className={style.box_1_h1}>RETAIL & CONSUMER</p>
              </div>
              <div className={style.box_1}>
                <p className={style.box_1_h1}>SOFTWARE & HI-TECH</p>
                <p className={style.box_1_h1}>TRAVEL & HOSPITALITY</p>
                <p className={style.box_1_h1}>LIFE SCIENCES</p>
                <p className={style.box_1_h1}>HEALTHCARE</p>
              </div>

              <div className={style.box_1}>
                <p className={style.box_1_h1}>ENERGY & UTILITIES</p>
                <p className={style.box_1_h1}>AUTOMOTIVE & MANUFACTURING</p>
                <p className={style.box_1_h1}>INSURANCE</p>
              </div>
            </div>
          </li>
          <li className={style.li}>INSIGHTS</li>
          <li className={style.hover_li}>ABOUT</li>
          <li className="pr-[15px] font-[700] text-[13px] hover:text-blue-300">
            CAREERS <div className={style.dropdown1}></div>
          </li>
        </ul>
        <div className={style.last}>
          <button className={style.btn}>CONTACT US</button>
          <select className={style.select}>
            <option value="English">Global (EN)</option>
            <option value="Uzbek">Uzbek</option>
            <option value="Russian">Russian</option>
          </select>

          <p className={style.glass}>
            <GiMagnifyingGlass />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
