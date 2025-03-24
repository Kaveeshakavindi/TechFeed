"use client";
import NewsCard from "@/components/ui/newsCard";
import { RootState } from "@/store/store";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const page = () => {
  const bookmarkedArticles = useSelector(
    (state: RootState) => state.bookmarkedArticles.articles
  );
  return (
    <Box p={6} mb="6">
      <Heading size="lg" mb="5rem">
        Bookmarked Articles
      </Heading>
      {bookmarkedArticles.length === 0 ? (
        <Text>No articles bookmarked yet.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {bookmarkedArticles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default page;
