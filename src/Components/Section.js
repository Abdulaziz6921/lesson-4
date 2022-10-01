import video from '../Video/video.mp4'

function Section() {
  let style = {
    size: 'relative w-full h-[80vh] ',
    video: 'w-full h-full  absolute top-0 right-0 -z-10 ',
    video_self: 'w-full  h-full object-cover',
    h1: 'pt-[60px] text-center text-[100px] font-[600] text-white',
  }

  return (
    <div className={style.size}>
      <h1 className={style.h1}>
        Engineering <br /> the Future
      </h1>
      <div className={style.video}>
        <video
          className={style.video_self}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src={video} />
        </video>
      </div>
    </div>
  )
}

export default Section
