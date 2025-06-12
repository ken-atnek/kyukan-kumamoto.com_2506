/* =======================================
 * TOP スライド
 * URL: src/components/top/ContainerSlide.tsx
 * Created: 2025-06-11
 * Last updated: 2025-06-11
 * ======================================= */
'use client';
import type { SwiperRef } from 'swiper/react';
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Slide01 from '@/assets/images/top/slide/slide01.webp';
import Slide02 from '@/assets/images/top/slide/slide02.webp';
import Slide03 from '@/assets/images/top/slide/slide03.webp';
import Slide04 from '@/assets/images/top/slide/slide04.webp';
import Slide05 from '@/assets/images/top/slide/slide05.webp';
import Slide06 from '@/assets/images/top/slide/slide06.webp';

const slides = [
  { src: Slide01, alt: '工事現場1' },
  { src: Slide02, alt: '工事現場2' },
  { src: Slide03, alt: '工事現場3' },
  { src: Slide04, alt: '重機作業の様子1' },
  { src: Slide05, alt: '工事現場4' },
  { src: Slide06, alt: '重機作業の様子2' },
];

const ContainerSlide = () => {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.containerSlide}>
      <Swiper
        ref={swiperRef}
        className={styles.blockSlide}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={0}
        centeredSlides
        loop
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index} className={styles.slideItem}>
            <Image src={img.src} alt={img.alt} fill sizes="100vw" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ContainerSlide;
