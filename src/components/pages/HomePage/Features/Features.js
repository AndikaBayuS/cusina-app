import {
  Box,
  Circle,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Stack,
} from '@chakra-ui/react';

const Features = () => {
  return (
    <Box mt={12}>
      <Container maxWidth="container.lg">
        <Heading
          color="telegram.500"
          size="lg"
          textAlign="center"
          marginBottom={12}
        >
          Fitur Unggulan Cusina
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <Box
            bgColor="telegram.50"
            borderRadius="xl"
            p={5}
            marginRight={{ base: 0, md: 5 }}
          >
            <Flex>
              <Box marginRight={5}>
                <Circle
                  size="50px"
                  borderRadius="full"
                  bgColor="telegram.100"
                />
              </Box>

              <Box>
                <Heading size="md" marginBottom={2} color="telegram.500">
                  Bebas Pilih Teman Curhat
                </Heading>
                <Text color="gray.500">
                  This software is very easy for you to manage. You can use it
                  as you wish.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            bgColor="telegram.50"
            borderRadius="xl"
            padding={5}
            marginTop={{ base: 3, md: 0 }}
          >
            <Flex>
              <Box marginRight={5}>
                <Circle
                  size="50px"
                  borderRadius="full"
                  bgColor="telegram.100"
                />
              </Box>

              <Box>
                <Heading size="md" marginBottom={2} color="telegram.500">
                  Privasi Terjaga
                </Heading>
                <Text color="gray.500">
                  This software is very easy for you to manage. You can use it
                  as you wish.
                </Text>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>

      <Box mt={12} bgColor="gray.100" p={10}>
        <Container maxWidth="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Image src="/images/FeaturesImage.png" alt="Features" />
            <Stack maxWidth="md" spacing={5} my="auto">
              <Heading size="md">
                Cusina hadir untuk teman-teman yang butuh teman curhat
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                a consequat dapibus iaculis. Feugiat lectus porttitor purus
                senectus ultricies non. In at nibh semper malesuada sit ornare
                magna arcu
              </Text>
              <SimpleGrid columns={2} spacing={3}>
                <Flex alignItems="center">
                  <Heading size="lg">1.5K+</Heading>
                  <Text>Chats in month</Text>
                </Flex>
                <Flex alignItems="center">
                  <Heading size="lg">50+</Heading>
                  <Text>Chat Request</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Features;
