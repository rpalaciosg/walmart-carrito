import { CircularProgress, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import api from "~/product/api";
import ProductList from "~/product/components/ProductList";
import { Product } from "~/product/types";

const HomeScreen: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [status, setStatus] = React.useState<
    "pending" | "resolved" | "rejected"
  >("pending");

  React.useEffect(() => {
    api.list().then((products) => {
      setProducts(products);
      setStatus("resolved");
    });
  }, []);

  if (status === "pending") {
    return (
      <Flex alignItems="center" justifyContent="center" paddingY={12}>
        <CircularProgress isIndeterminate color="primary.500" />
      </Flex>
    );
  }

  return (
    <Stack flex={1} spacing={6}>
      <Heading color="gray.400" fontSize="4xl">
        Products
      </Heading>
      <ProductList products={products} />
    </Stack>
  );
};

export default HomeScreen;
