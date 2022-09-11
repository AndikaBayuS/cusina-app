import { Avatar, Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const ArticleCard = ({ image, title, tags, owner, date }) => {
  return (
    <Box borderRadius={12} bgColor="white">
      <Image
        src="https://bit.ly/sage-adebayo"
        borderTopRadius={12}
        h={64}
        w="full"
        objectFit="cover"
        alt="cover"
      />
      <Box p={3}>
        <Text size="sm" color="orange.500">
          {tags}
        </Text>
        <Heading size="md">{title}</Heading>
        <Flex alignItems="center" mt={5}>
          <Avatar
            size="xs"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Text fontSize="xs" color="gray.500" marginLeft={2}>
            {owner}
          </Text>
          <Text fontSize="xs" color="gray.500" marginLeft={2}>
            {date}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ArticleCard;
