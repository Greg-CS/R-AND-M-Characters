import { Box, Center, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import { useState, useEffect } from "react"
import { CharacterCard } from '../components/CharacterCard/CharacterCard';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';
export default function Home() {

  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/names")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        // setLoading(false);
      });
  }, []);

    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // set loading to false after 5 seconds
      return (
        <Box my={311}>
          <Center my={40}>
            <Stack>
              <Center my={10}>
                <LoadingSpinner/>
              </Center>
              <Heading fontSize={"50px"}>Loading...</Heading>
            </Stack>
          </Center>
        </Box>
      );
    }

  return (
    <Box>
      <Center my={40}>
        <Stack textAlign={"center"}>
          <Heading fontSize={"50px"}>Rick and Morty</Heading>
          <Heading fontSize={"25px"}>Characters</Heading>
        </Stack>
      </Center>
      <Box
        bg={"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}
      >
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
          {data.map((info) => {
            return <CharacterCard key={info.id} {...info} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
