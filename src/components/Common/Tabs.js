import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const Tabs = (props) => {
  const swiperRef = useRef(null)
  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={'auto'}
      className='pg_board_tab'
      wrapperTag="ul"
    >
      <SwiperSlide
        tag="li"
        className={`${
          props.pathname === "component/button" || props.pathname === ""
            ? "active"
            : ""
        }`}
      >
        <Link href={"/component/button"}>버튼</Link>
      </SwiperSlide>
      <SwiperSlide
        tag="li"
        className={`${props.pathname === "component/text" ? "active" : ""}`}
      >
        <Link href={"/component/text"}>타이틀/텍스트</Link>
      </SwiperSlide>
      <SwiperSlide
        tag="li"
        className={`${
          props.pathname === "component/input" ? "active" : ""
        }`}
      >
        <Link href={"/component/input"}>인풋</Link>
      </SwiperSlide>
      <SwiperSlide
        tag="li"
        className={`${
          props.pathname === "component/radioChk" ? "active" : ""
        }`}
      >
        <Link href={"/component/radioChk"}>라디오/체크박스</Link>
      </SwiperSlide>
      <SwiperSlide
        tag="li"
        className={`${
          props.pathname === "component/popup" ? "active" : ""
        }`}
      >
        <Link href={"/component/popup"}>팝업/알럿</Link>
      </SwiperSlide>
      <SwiperSlide
        tag="li"
        className={`${
          props.pathname === "component/accordion" ? "active" : ""
        }`}
      >
        <Link href={"/component/accordion"}>아코디언</Link>
      </SwiperSlide>
      <SwiperSlide
        tag="li"
        className={`${
          props.pathname === "component/tabmenu" ? "active" : ""
        }`}
      >
        <Link href={"/component/tabmenu"}>탭 메뉴</Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Tabs;
