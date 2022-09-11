import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import ArticleCard from './ArticleCard/ArticleCard';

const mockArticles = [
  { title: 'Test 1', tags: '#test', owner: 'Test 1', date: 'Test 1' },
  { title: 'Test 2', tags: '#test', owner: 'Test 2', date: 'Test 2' },
  { title: 'Test 3', tags: '#test', owner: 'Test 3', date: 'Test 3' },
  { title: 'Test 4', tags: '#test', owner: 'Test 4', date: 'Test 4' },
];

const Articles = () => {
  return (
    <Box p={12} bgColor="gray.200">
      <Container maxWidth="container.lg">
        <Heading size="lg" textAlign="center">
          Baca Artikel Terkini di Cusina
        </Heading>
        <VStack spacing={10}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5} mt={12}>
            {mockArticles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </SimpleGrid>

          <Button
            colorScheme={'telegram'}
            borderRadius="full"
            rightIcon={<ArrowForwardIcon />}
          >
            Lihat Selengkapnya
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Articles;
