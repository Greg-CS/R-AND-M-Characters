import { useState, useEffect } from "react";
import {
  Card,
  Box,
  Center,
  Heading,
  Flex,
  CardBody,
  Image,
} from "@chakra-ui/react";

export const CharacterCard = (info) => {
  const status = info.status;
  const [selector, setSelector] = useState("");

  if (!info) {
    return (
      <Box>
        <Center>
          <Heading as="h2" size="lg" mb={4}>
            No data found.
          </Heading>
        </Center>
      </Box>
    );
  }

  console.log(info);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (status === "Alive") {
      setSelector("status-alive");
    } else if (status === "Dead") {
      setSelector("status-dead");
    } else {
        setSelector("status-unknown");
    }
  }, [status]);

  return (
    <Card maxW="sm" boxShadow={"2xl"} my={10} mx={10}>
      <CardBody>
        <Center>
          <Image src={info.image} alt="info image" borderRadius="lg" />
        </Center>
        <Flex justifyContent={"space-between"} mt={"20px"}>
          <Heading size="md">{info.name}</Heading>
          <Heading fontSize="md" className={selector}>
            {status}
          </Heading>
        </Flex>
      </CardBody>
      {/* <Divider /> */}
      {/* <CardFooter></CardFooter> */}
    </Card>
  );
};
