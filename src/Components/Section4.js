import React from 'react'

function Section4() {
  let s = {
    size: ' w-full h-[957px]',
    container: 'mx-auto mt-[70px] flex justify-between w-[75%] h-[500px]',
    box:
      'border-y-0 border-l-0  border-[2px] border-r-gray  flex flex-col justify-center items-center w-[30%] h-full ',
    box_p: 'text-center text-[33px] font-[700]  tracking-[5px] leading-[40px]',
    box_p2: 'text-center text-[16px] mt-[15px] px-[29px]',
    box_btn:
      'w-[200px] px-[15px] h-[47px] bg-black mt-[40px] rounded-[10px] text-white tracking-[5px] font-[700] text-[17px]',
    box2: 'flex flex-wrap justify-between items-start w-[66%] h-full ',
    inner_box:
      'w-[239px] h-[200px] border-y-0 border-l-0  border-[2px] border-r-gray ',
    inner_box_p: 'text-center text-[55px] font-[700]  tracking-[5px] ',
    container2:
      'mx-auto  mt-[80px] flex flex-col justify-center items-center w-[75%] h-[300px] border-x-0 border-b-0  border-[2px] border-t-gray',
    container2_p1:
      'pt-[60px]  mb-[20px] text-center text-[25px] font-[800]  tracking-[3px] ',
    container2_p2:
      'mb-[20px] text-center text-[33px] font-[600] text-blue-300 tracking-[1px]',
    container2_p3: 'mb-[20px] text-center text-[18px] tracking-[1px]',
    container2_p4: 'text-center text-[18px] text-blue-300 tracking-[1px]',
  }
  return (
    <div className={s.size}>
      <div className={s.container}>
        <div className={s.box}>
          <p className={s.box_p}>
            OUR <br /> RESULTS
          </p>
          <p className={s.box_p2}>
            Our teams of technologists, strategists and designers deliver
            powerful digital experiences. We specialize in 11 industries in 50+
            countries, delivering innovative solutions to our customers’ most
            challenging problems. The numbers speak for themselves.
          </p>
          <button className={s.box_btn}>LEARN MORE</button>
        </div>

        <div className={s.box2}>
          <div className={s.inner_box}>
            <p className={s.inner_box_p}>16x </p>
            <p className={s.box_p2}>
              Greater Website Deployment Capacity for Bacardi
            </p>
          </div>
          <div className={s.inner_box}>
            <p className={s.inner_box_p}>350M </p>
            <p className={s.box_p2}>
              Players for <br /> Epic Games
            </p>
          </div>
          <div className={s.inner_box}>
            <p className={s.inner_box_p}>30% </p>
            <p className={s.box_p2}>
              Increase in <br /> Online Quotes for <br /> LV= General Insurance
            </p>
          </div>
          <hr />
          <div className={s.inner_box}>
            <p className={s.inner_box_p}>20K </p>
            <p className={s.box_p2}>
              Unique Visitors/Hour Supported for <br /> Tele2 Netherlands
            </p>
          </div>
          <div className={s.inner_box}>
            <p className={s.inner_box_p}>400K+ </p>
            <p className={s.box_p2}>Active Users/Month for Liberty Global</p>
          </div>
          <div className={s.inner_box}>
            <p className={s.inner_box_p}>75K </p>
            <p className={s.box_p2}>Bookings/Day for Vue</p>
          </div>
        </div>
      </div>

      <div className={s.container2}>
        <p className={s.container2_p1}>WE'VE PARTNERED WITH OVER</p>
        <p className={s.container2_p2}>160 leading technology companies</p>
        <p className={s.container2_p3}>
          to deliver truly transformative solutions around the world.
        </p>
        <p className={s.container2_p4}>Learn more about our partners</p>
      </div>
    </div>
  )
}

export default Section4
