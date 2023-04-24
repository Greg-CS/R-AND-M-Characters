import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
  LinkProps,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const accounts = [
  {
    url: "https://github.com/Greg-CS",
    label: "Github Account",
    type: "blue",
    icon: <FaGithub />,
  },
  {
    url: "https://www.linkedin.com/in/gregor-rodriguez-685329185/",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

export const Footer = () => {
  return (
    <Stack
      marginInline="auto"
      p={8}
      bg={"black"}
      color={"white"}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Link href="https://rickandmortyapi.com/" isExternal>
        <Image
          w="100px"
          borderRadius={"20px"}
          src="/img/ricklogo.jpg"
          alt="TemplatesKart"
        />
      </Link>

      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};