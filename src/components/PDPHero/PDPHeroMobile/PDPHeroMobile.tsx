"use client";

import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  Button
} from "@chakra-ui/react";
import {SLIDES} from "./mockData";
import Image from "next/image";

import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PDPHeroMobile.module.css";

export const PDPHeroMobile = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  // const [slideIndex, setSlideIndex] = useState(0);
  // const [updateCount, setUpdateCount] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };

  function selectProduct(id: number){
    console.log("%c - ITEM ID -", "color: lime; font-size: 20px;", id);
    setSelectedProduct(id)
  }

  return (
    <Box bg={"#fff"} w="400px" className={styles.mobileSwapSlider}>
      <Slider {...settings}>
        {
          SLIDES.map(({src, id, alt} ) => (
            <Box h="490px" key={id} px="2">
              <Image
                src={src}
                alt={alt}
                width={350}
                height={490}
                className={styles.mobileSliderImage}
              />
            </Box>
          ))
        }
      </Slider>
    </Box>
  );
};
