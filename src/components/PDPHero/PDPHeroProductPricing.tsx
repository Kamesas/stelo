import React, {FC, useState} from "react";
import {Box, Button, Flex, List, Separator, Text, VStack} from "@chakra-ui/react";
import {PRICING} from "@/components/PDPHero/mockData";

type tProductPricingProps = {
  onSelectCallback: (id: number) => void
}

export const ProductPricing: FC<tProductPricingProps> = ({onSelectCallback}) => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  function selectProduct(id: number){
    setSelectedProduct(id)
    onSelectCallback(id);
  }


  return (
    <VStack w="325px" gap="4">
      {PRICING.map((item, i) => (
        <Box
          as="button"
          cursor="pointer"
          p="4"
          key={item.id}
          display="block"
          w="full"
          bg="#EBE6E0"
          color="#000"
          rounded="xl"
          border={ item.id === selectedProduct ? "2px solid #F0B377" : "2px solid transparent"}
          backgroundColor={ item.id === selectedProduct ? "rgba(240, 179, 119, 0.20)" : "2px solid transparent"}
          onClick={() => selectProduct(item.id)}
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

  );
};
