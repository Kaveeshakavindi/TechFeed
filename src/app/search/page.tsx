"use client";
import NewsCard from "@/components/ui/newsCard";
import { getSearchArticles } from "@/store/actions";
import { AppDispatch, RootState } from "@/store/store";
import {
  Box,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    articles: searchData,
    loading: searchLoading,
    error: searchError,
  } = useSelector((state: RootState) => state.searchArticles);

  useEffect(() => {
    if (searchQuery) {
      dispatch(getSearchArticles(searchQuery));
    }
  }, [searchQuery, dispatch]);

  return (
    <Box
      p="6"
      display="flex"
      flexDirection="column"
      height="90vh"
      alignItems="center"
      mt="15%"
      width={`calc(100vw - 350px)`}
    >
      <InputGroup mb="10" width="60%">
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
        <Box mt="3rem" mb="6">
          <Heading mb="6">Search results</Heading>
          {searchLoading ? (
            <Spinner size="lg" />
          ) : searchError ? (
            <Text color="red">{searchError}</Text>
          ) : (
            <SimpleGrid mb={5} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {searchData?.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
