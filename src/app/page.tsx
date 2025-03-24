"use client";
import CustomMenu from "@/components/ui/menu";
import NewsCard from "@/components/ui/newsCard";
import { getArticles, getSearchArticles } from "@/store/actions";
import { RootState } from "@/store/store";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState("");

  const {
    articles: allData,
    loading: allLoading,
    error: allError,
  } = useSelector((state: RootState) => state.articles);

  const {
    articles: searchData,
    loading: searchLoading,
    error: searchError,
  } = useSelector((state: RootState) => state.searchArticles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery) {
      dispatch(getSearchArticles(searchQuery));
    }
  }, [searchQuery, dispatch]);

  const heading = ["Recents", "Everything"];

  return (
    <Box p="6" width="100%" height={allLoading ? "90vh" : "auto"}>
      <InputGroup mb="10" width="50%">
        <InputLeftElement
          pointerEvents="none"
          display="flex"
          alignItems="center"
          color="gray"
          py="6"
        >
          <GoSearch color="gray.500" />
        </InputLeftElement>
        <Input
          borderRadius="10"
          flex="1"
          value={searchQuery}
          placeholder="Search articles"
          colorScheme="gray"
          size="sm"
          py="6"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>
      {searchQuery && searchData ? (
        <Box mt="5rem" mb="6">
          <Heading mb="6">Search results</Heading>
          {searchLoading ? (
            <Spinner size="lg" />
          ) : searchError ? (
            <Text color="red">{searchError}</Text>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {searchData?.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      ) : (
        ""
      )}
      <Heading mb="6">Discover</Heading>
      {/* recents */}
      {heading.map((item, index) => (
        <Box key={index}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt="5rem"
            mb="6"
          >
            <Heading size="md">{item}</Heading>
            {item === "Everything" && <CustomMenu />}
          </Box>
          {allLoading ? (
            <Spinner size="lg" />
          ) : allError ? (
            <Text color="red">{allError}</Text>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {item === "Recents"
                ? allData
                    ?.slice(0, 10)
                    .map((article, index) => (
                      <NewsCard key={index} article={article} />
                    ))
                : allData?.map((article, index) => (
                    <NewsCard key={index} article={article} />
                  ))}
            </SimpleGrid>
          )}
        </Box>
      ))}
    </Box>
  );
}
