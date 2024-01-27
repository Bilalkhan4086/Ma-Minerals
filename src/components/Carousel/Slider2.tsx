import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import three from "../../Images/customer1.webp"
import two from "../../Images/customer2.webp"
import SlideCard from "./SlideCard"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./styles.css"
import "swiper/css"

const data = [
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Lorem Ipsum as their default model text.",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Lorem Ipsum as their default model text.",
]
export default function Slider2() {
  const slides = [
    <SlideCard image={two} description={data[0]} name={"Austin Clark"} />,
    <SlideCard image={three} description={data[1]} name={"Rechel Smith"} />,
  ]
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides?.map(slide => (
          <SwiperSlide>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
