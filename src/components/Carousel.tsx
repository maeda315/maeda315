import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'
import swiper from '../styles/swiper.module.scss'

const Carousel = (): JSX.Element => {
  const slides = [
    {
      img: '/swiper/fcowl.png',
      imgLink: 'http://fcowl.com.s3-website-ap-northeast-1.amazonaws.com/',
      text: 'Nuxt.js × Firebase × AWS',
      textLink: 'https://github.com/maeda315/fcowl'
    },
    {
      img: '/ogp.png',
      imgLink: '/',
      text: 'Next.js × GraphQL × AMP',
      textLink: 'https://github.com/maeda315/maeda315'
    },
    {
      img: '/swiper/orw.png',
      imgLink: 'https://one-recording-weight.com/',
      text: 'Dart × Flutter',
      textLink: 'https://github.com/maeda315/OneRecordingWeight'
    }
  ]

  return (
    <Swiper
      className={swiper.wrap}
      loop={true}
      slidesPerView="auto"
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        769: {
          slidesPerView: 3
        }
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <a href={slide.imgLink} target="_blank" rel="noreferrer">
            <div
              style={{ backgroundImage: `url(${slide.img})` }}
              className={swiper.img}
            />
          </a>
          <p className={swiper.p}>
            <a
              href={slide.textLink}
              className={swiper.p__link}
              target="_blank"
              rel="noreferrer"
            >
              <span>{slide.text}</span>
            </a>
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
