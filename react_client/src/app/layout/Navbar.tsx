import {
  Badge,
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Navbar: React.FC = () => (
  <Box backgroundColor="primary" boxShadow="md">
    <Container maxWidth="6xl">
      <Stack
        alignItems="center"
        as="nav"
        direction="row"
        justifyContent="space-between"
        paddingY={3}
      >
        <Stack alignContent="center" direction="row">
          <Text color={"white"} fontSize="large">
            Walmart
          </Text>
          <Image
            height={8}
            src={"https://i.imgur.com/C5HIaST.png"}
            width={35}
          />
        </Stack>
        <Stack alignItems="center" direction="row">
          <Stack direction="row" spacing={4}>
            <Button
              colorScheme="yellow"
              leftIcon={<MdShoppingCart />}
              variant="solid"
            >
              <Badge
                borderRadius={9999}
                colorScheme="green"
                cursor="pointer"
                ml="1"
                paddingX={2}
                paddingY={1}
                variant="solid"
              >
                2
              </Badge>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Navbar;
