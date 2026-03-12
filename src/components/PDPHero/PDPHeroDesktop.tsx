"use client";

import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  Button,
  VStack,
  Separator,
  List,
} from "@chakra-ui/react";
// import { useState, useRef, useCallback, useEffect } from "react";
import {SLIDES, PRICING, PricingOption} from "./mockData";
import Image from "next/image";
// import { gsap } from "gsap";

import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PDPHero.module.css";
import {PDPHeroProductPricing} from "@/components/PDPHero/PDPHeroProductPricing";

// const AUTO_PLAY_INTERVAL = 4000; // ms

export const Demo = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    arrows: false,

    fade: true,
    infinite: true,
    speed: 1000,
    // TODO uncomment
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in",
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (
      _current: React.SetStateAction<number>,
      next: React.SetStateAction<number>,
    ) => setSlideIndex(next),
  };

  function selectProduct(id: number){
    console.log("%c - ITEM ID -", "color: lime; font-size: 20px;", id);
    setSelectedProduct(id)
  }

  return (
    <Box
      p="12"
      position={"relative"}
      height={800}
      width={"100%"}
      alignItems={"end"}
      justifyContent={"center"}
    >
      <Box
        height={"full"}
        width={"full"}
        position={"absolute"}
        left={0}
        top={0}
        zIndex={0}
      >
        <Slider
          {...settings}
          className={styles.slider}
          ref={(slider) => {
            sliderRef.current = slider;
          }}
        >
          {SLIDES.map((slide, i) => (
            <Image
              src={slide.src}
              key={slide.id}
              height={1440}
              width={800}
              className={styles.image}
              objectFit="cover"
              alt="simple text"
            />
          ))}
        </Slider>
      </Box>
      <Flex
        alignItems={"end"}
        justifyContent={"space-between"}
        height={"full"}
        position={"relative"}
        zIndex={1}
      >
        <Box maxW="440px">
          <Heading as={"h1"} textStyle="5xl" marginBottom="2">
            Stelo Glucose Biosensor
          </Heading>
          <Text marginBottom="4">
            Stelo tracks your glucose with a small arm sensor, showing your
            trends with the app.
          </Text>
          <Box as={"span"}>
            <Icon size="lg" color="tomato" marginRight="3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="#6B5B45"
                  strokeWidth="1.5"
                />
                <path
                  d="M5 8l2 2 4-4"
                  stroke="#6B5B45"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Icon>
            <Text as={"span"}>HSA/FSA eligible</Text>
          </Box>

          <Flex gap="2" mt="8">
            {SLIDES.map((slide, i) => (
              <Button
                onClick={(e) => sliderRef.current?.slickGoTo(i)}
                key={slide.id}
                variant={"plain"}
                width={"44px"}
                height={"44px"}
                rounded="4px"
                border={
                  slideIndex === i ? "2px solid red" : "2px solid transparent"
                }
                overflow="hidden"
              >
                <Image
                  src={slide.src}
                  height={44}
                  width={44}
                  alt={slide.alt}
                  className={styles.image}
                />
              </Button>
            ))}
          </Flex>
        </Box>
        <PDPHeroProductPricing onSelectCallback={setSelectedProduct} />
      </Flex>
    </Box>
  );
};
