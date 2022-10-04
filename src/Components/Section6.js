import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

function Section6() {
  let s = {
    size: ' w-full h-[93vh] ',
    title:
      'mt-[100px] text-center text-[33px] font-[700]  tracking-[6px] leading-[40px]',
    p_1: 'text-center font-[800] text-[17px] mt-[50px] tracking-[1px]',
    span: 'px-[15px] hover:text-blue-300',
    span_border:
      'hover:text-blue-300 px-[20px]  border-[3px] border-x-black border-y-0 ',

    swiper: 'w-[80%] h-[280px] mt-[80px] mx-auto  ',
    swiper_slide: 'flex justify-center items-center relative text-center ',
    img: 'w-full h-full object-contain absolute -z-10',
    btn:
      'w-[200px] h-[45px] bg-blue-400 rounded-[8px] text-white font-[700] text-[14px] tracking-[2px] hover:bg-yellow-500',
  }
  return (
    <div className={s.size}>
      <h1 className={s.title}>OUR OFFICES</h1>
      <p className={s.p_1}>
        <span className={s.span}>AMERICAS</span>{' '}
        <span className={s.span_border}>EMEA</span>
        <span className={s.span}>APAC</span>
      </p>

      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className={s.swiper}
      >
        <SwiperSlide className={s.swiper_slide}>
          <img
            src="https://www.epam.com/content/dam/epam/locations/offices/Office-Canada_305x314.jpg"
            alt=""
            className={s.img}
          />

          <button className={s.btn}>CANADA</button>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
          <img
            src="https://www.epam.com/content/dam/epam/locations/offices/Office_Colombia.jpg"
            alt=""
            className={s.img}
          />

          <button className={s.btn}>COLUMBIA</button>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
          <img
            src="https://www.epam.com/content/dam/epam/locations/offices/dominican_republic_office.jpg"
            alt=""
            className={s.img}
          />

          <button className={s.btn}>DOMINICAN REPUBLIC</button>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
          <img
            src="https://www.epam.com/content/dam/epam/locations/offices/Office-Mexico_305x314.jpg"
            alt=""
            className={s.img}
          />

          <button className={s.btn}>MEXICO</button>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
          <img
            src="https://www.epam.com/content/dam/epam/locations/offices/Office-USA_305x314.jpg"
            alt=""
            className={s.img}
          />

          <button className={s.btn}>UNITED STATES</button>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Section6
