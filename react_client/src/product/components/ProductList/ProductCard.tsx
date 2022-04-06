import {
  Box,
  Button,
  Center,
  Divider,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../types";

interface Props extends BoxProps {
  product: Product;
  isSelected: boolean;
}

const ProductCard: React.FC<Props> = ({ product, isSelected, ...props }) => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="lg"
      boxShadow="md"
      padding={6}
      position="relative"
      {...props}
    >
      <Stack spacing={3}>
        <Center>
          <Image
            objectFit="contain"
            src={`https://${product.image}`}
            width={64}
          />
        </Center>
        <Divider />
        <Stack alignItems="flex-start" direction="row" spacing={2}>
          <Text color="black" fontSize="sm" fontWeight="500">
            {product.brand}
          </Text>
          <Text color="gray.500" fontSize="sm">
            {product.description}
          </Text>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Text color="gray.500" fontSize="2xl" fontWeight="500">
            ${product.price}
          </Text>
          <Stack
            alignContent="center"
            backgroundColor="red"
            borderRadius="9999"
            borderWidth={1}
            color="white"
            fontSize="xs"
            fontWeight="500"
            justifyContent="center"
            paddingX={2}
          >
            <Text>{product.price}%</Text>
          </Stack>
        </Stack>
        <Stack>
          <Button>Add</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductCard;
