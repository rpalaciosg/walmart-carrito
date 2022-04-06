import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "~/app/layout";
import HomeScreen from "~/app/screens/Homescreen";
import theme from "./theme";
import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Layout>
        <HomeScreen />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
