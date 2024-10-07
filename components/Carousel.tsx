import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./Carousel.module.css"

import languageData from "../data/languages";
import AutoScroll from "embla-carousel-auto-scroll";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop:true
  }, [
    AutoScroll({
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      playOnInit: true,
      active: true,
      speed: 0.6
    })
  ])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {
          Object.entries(languageData).map(([key, value]) =>(
            <div className={styles.embla__slide} key={key}>
              <img src={value.imageUri} className={styles.langlogo}/>
            </div>

          ))
        }
      </div>
    </div>
  )
}