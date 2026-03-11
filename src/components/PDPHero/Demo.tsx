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
import { SLIDES, PRICING } from "./mockData";
import Image from "next/image";
// import { gsap } from "gsap";

import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PDPHero.module.css";

// const AUTO_PLAY_INTERVAL = 4000; // ms

export const Demo = () => {
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

  function openCartAlert() {
    console.log("%c- CART MODAL OPENS -", "color: lime; font-size: 20px;");
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
        <VStack w="325px" gap="4">
          {PRICING.map((item, i) => (
            <Box
              as="button"
              cursor="pointer"
              p="4"
              key={i}
              display="block"
              w="full"
              bg="#EBE6E0"
              color="#000"
              rounded="xl"
            >
              <Flex justifyContent="space-between">
                <Text textStyle="xs">{item.label}</Text>
                {item.badge && (
                  <Box
                    as="span"
                    bg="#F0B377"
                    px="6px"
                    py="3px"
                    rounded="sm"
                    color="#000"
                    textStyle="xs"
                    fontWeight="600"
                  >
                    {item.badge}
                  </Box>
                )}
              </Flex>
              <Flex justifyContent="space-between">
                <Text textStyle="lg">{item.product}</Text>
                <Flex align="center" gap="1">
                  <Text textStyle="lg">{item.price}</Text>
                  {item.originalPrice && (
                    <Text textStyle="xs" as="s" color="#291928">
                      {item.originalPrice}
                    </Text>
                  )}
                </Flex>
              </Flex>
              {item.bullets && (
                <>
                  <Separator borderColor="#000" my="2" />
                  <List.Root>
                    {item.bullets.map((bullet, j) => (
                      <List.Item
                        key={j}
                        textAlign="left"
                        listStyleType="none"
                        textStyle="sm"
                      >
                        • {bullet}
                      </List.Item>
                    ))}
                  </List.Root>
                </>
              )}
            </Box>
          ))}
          <Button
            variant="solid"
            p="4"
            width="full"
            rounded="full"
            onClick={openCartAlert}
          >
            Add to cart
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};
