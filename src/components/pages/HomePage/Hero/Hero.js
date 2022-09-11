import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box bgColor="telegram.50" py={12}>
      <Container maxWidth="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box>
            <VStack
              alignItems="start"
              spacing={8}
              marginTop={{ base: 0, md: 10 }}
            >
              <Box>
                <Heading size="3xl">Hi, Cusina</Heading>
                <Heading size="3xl">Here to Hear</Heading>
              </Box>

              <Text maxWidth="xs" color="gray.500">
                Siap mendengarkan cerita dan curhatmu Layanan Curhat dan Teman
                Cerita langsung
              </Text>

              <Button
                colorScheme="telegram"
                borderRadius="full"
                rightIcon={<ArrowForwardIcon />}
              >
                Curhat di sini
              </Button>
            </VStack>
          </Box>

          <Box display={{ base: 'none', md: 'block' }}>
            <Image src="/images/HeaderCover.png" alt="Header Cover" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
