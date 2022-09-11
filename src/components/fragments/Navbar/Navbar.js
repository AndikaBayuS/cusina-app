import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box as="section" bgColor="telegram.50">
      <Box as="nav">
        <Container
          py={{
            base: '4',
            lg: '5',
          }}
          maxWidth="container.xl"
        >
          <HStack spacing="10" justify="space-between">
            <p>Logo</p>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="ghost" spacing="5" colorScheme="telegram">
                  {['Product', 'Pricing', 'Resources', 'Support'].map(
                    (item) => (
                      <Button key={item}>{item}</Button>
                    )
                  )}
                </ButtonGroup>

                <HStack spacing="5">
                  <ButtonGroup colorScheme="telegram">
                    <Button variant="outline" borderRadius="full">
                      Log in
                    </Button>
                    <Button variant="solid" borderRadius="full">
                      Register
                    </Button>
                  </ButtonGroup>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                colorScheme="telegram"
                icon={<HamburgerIcon />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
