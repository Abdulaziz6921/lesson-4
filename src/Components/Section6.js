import React from 'react'

function Section6() {
  let s = {
    size: ' w-full h-[100vh] border-4 border-red-700',
    title:
      'mt-[100px] text-center text-[33px] font-[700]  tracking-[6px] leading-[40px]',
    p_1: 'text-center font-[800] text-[17px] mt-[50px] tracking-[1px]',
    span: 'px-[15px] hover:text-blue-300',
    span_border:
      'hover:text-blue-300 px-[20px]  border-[3px] border-x-black border-y-0 ',
  }
  return (
    <div className={s.size}>
      <h1 className={s.title}>OUR OFFICES</h1>
      <p className={s.p_1}>
        <span className={s.span}>AMERICAS</span>{' '}
        <span className={s.span_border}>EMEA</span>
        <span className={s.span}>APAC</span>
      </p>
    </div>
  )
}

export default Section6
