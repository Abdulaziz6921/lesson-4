import React from 'react'

function Section3() {
  let s = {
    size: ' flex w-full h-[330px]  bg-[#263852] text-white',
    box:
      'group flex-col flex justify-center items-center relative w-[20%] h-full ',
    box_img: ' w-[100px] h-[100px]  object-contain',
    box_p: 'text-[22px] font-[700] mt-[15px] tracking-[5px]',
    onHover:
      'flex flex-col justify-center items-center w-full h-0 absolute bottom-[100%] left-0 right-0  bg-[#FEC010] duration-500 overflow-hidden group-hover:bottom-0 group-hover:h-full group-hover:duration-500',

    onHover_p: 'text-center text-[18px] mt-[15px] px-[35px]',
    onHover2:
      'flex flex-col justify-center items-center w-full h-[0px] absolute bottom-[100%] left-0 right-0  bg-blue-400 duration-500 overflow-hidden group-hover:bottom-0 group-hover:h-full group-hover:duration-500',
  }
  return (
    <div className={s.size}>
      <div className={s.box}>
        <img
          src="https://www.epam.com/content/dam/epam/what_we_do/Consult-Yellow.svg"
          alt=""
          className={s.box_img}
        />
        <p className={s.box_p}>CONSULT</p>

        <div className={s.onHover}>
          <p className={s.box_p}>CONSULT</p>
          <p className={s.onHover_p}>
            We harness the power of our integrated consulting talent, alongside
            our data expertise, to work out where we can provide value and
            address your unique needs.
          </p>
        </div>
      </div>
      <div className={s.box}>
        <img
          src="https://www.epam.com/content/dam/epam/what_we_do/Design-Yellow.svg"
          alt=""
          className={s.box_img}
        />
        <p className={s.box_p}>DESIGN</p>

        <div className={s.onHover}>
          <p className={s.box_p}>DESIGN</p>
          <p className={s.onHover_p}>
            Our talented designers bring your ideas to life. They know how to
            humanize technology and business to create meaningful, multimodal
            digital experiences.
          </p>
        </div>
      </div>
      <div className={s.box}>
        <img
          src="https://www.epam.com/content/dam/epam/what_we_do/Engineer-Blue.svg"
          alt=""
          className={s.box_img}
        />
        <p className={s.box_p}>ENGINEER</p>

        <div className={s.onHover2}>
          <p className={s.box_p}>ENGINEER</p>
          <p className={s.onHover_p}>
            We make technology transformation happen. You get omnichannel
            software platforms architected for the future and built to scale.
          </p>
        </div>
      </div>
      <div className={s.box}>
        <img
          src="https://www.epam.com/content/dam/epam/what_we_do/Operate-Blue.svg"
          alt=""
          className={s.box_img}
        />
        <p className={s.box_p}>OPERATE</p>

        <div className={s.onHover2}>
          <p className={s.box_p}>OPERATE</p>
          <p className={s.onHover_p}>
            We deploy commercial software product practices to deliver
            next-generation integrated and smart-run services.
          </p>
        </div>
      </div>
      <div className={s.box}>
        <img
          src="https://www.epam.com/content/dam/epam/what_we_do/Optimize-Blue.svg"
          alt=""
          className={s.box_img}
        />
        <p className={s.box_p}>OPTIMIZE</p>

        <div className={s.onHover2}>
          <p className={s.box_p}>OPTIMIZE</p>
          <p className={s.onHover_p}>
            We turn process optimization into platforms for innovation through
            data-driven decisions, using a product-centric approach.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section3
