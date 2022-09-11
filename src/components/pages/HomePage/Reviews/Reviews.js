import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const Reviews = () => {
  return (
    <Box bgColor="telegram.500" p={12}>
      <Container maxWidth="container.lg">
        <Heading color="white" size="lg" textAlign="center" marginBottom={12}>
          Apa kata mereka tentang Cusina?{' '}
        </Heading>

        <Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Box bgColor="white" borderRadius="5" textAlign="center" p="5">
                <Text color="telegram.500">“Incredible Experience”</Text>
                <Text color="gray.500" fontSize="sm" marginTop={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed vitae et semper nec in. Lorem massa facilisi
                  lectus eget neque arcu, arcu sem sapien. Consectetur porttitor
                  accumsan quis et lobortis lobortis nibh dolor ullamcorper.{' '}
                </Text>
              </Box>
              <Flex justifyContent="center" alignItems="center" marginTop="5">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Box>
                  <Text color="white" fontWeight="bold" marginLeft={2}>
                    Dan Abrahmov
                  </Text>
                  <Text color="white" marginLeft={2}>
                    CEO of Facebook
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box>
              <Box bgColor="white" borderRadius="5" textAlign="center" p="5">
                <Text color="telegram.500">“Incredible Experience”</Text>
                <Text color="gray.500" fontSize="sm" marginTop={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed vitae et semper nec in. Lorem massa facilisi
                  lectus eget neque arcu, arcu sem sapien. Consectetur porttitor
                  accumsan quis et lobortis lobortis nibh dolor ullamcorper.{' '}
                </Text>
              </Box>
              <Flex justifyContent="center" alignItems="center" marginTop="5">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Box>
                  <Text color="white" fontWeight="bold" marginLeft={2}>
                    Dan Abrahmov
                  </Text>
                  <Text color="white" marginLeft={2}>
                    CEO of Facebook
                  </Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;
