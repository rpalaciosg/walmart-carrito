import { Center, CircularProgress } from "@chakra-ui/react";
import React from "react";
import api from "./api";
import { Product } from "./types";

export interface Context {
  state: {
    product: Product;
  };
  // actions: {};
}

const ProductContext = React.createContext({} as Context);

const ProductProvider: React.FC = ({ children }) => {
  const [product, setProduct] = React.useState<Product>();
  const [status, setStatus] = React.useState<
    "pending" | "resolved" | "rejected"
  >("pending");

  React.useEffect(() => {
    api.list();
  });

  if (!product || status === "pending") {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color="primary.500" />
      </Center>
    );
  }

  const state: Context["state"] = {
    product,
  };

  return (
    <ProductContext.Provider value={{ state }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext as default, ProductProvider as Provider };
