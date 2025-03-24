"use client";
import React from "react";
import { Card, Box, Image, Heading, Text, IconButton } from "@chakra-ui/react"; // Assuming you are using Chakra UI
import { FaBookmark, FaRegBookmark } from "react-icons/fa"; // For the bookmark icon
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  addBookmarkedArticleSuccess,
  removeBookmarkedArticleSuccess,
} from "@/store/reducers";
import { Article } from "@/types/types";

// interface NewsCardProps {
//   article: {
//     urlToImage: string;
//     title: string;
//     description: string;
//     url: string;
//   };
// }

const NewsCard = ({ article }: { article: Article }) => {
  const dispatch = useDispatch();
  const bookmarkedArticles = useSelector(
    (state: RootState) => state.bookmarkedArticles
  );
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+$/, "");
  };
  const isBookmarked = bookmarkedArticles.articles.some(
    (a) => a.url === article.url
  );
  const toggleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmarkedArticleSuccess(article.url));
    } else {
      dispatch(addBookmarkedArticleSuccess(article));
    }
  };
  return (
    <Card
      maxW="sm"
      overflow="hidden"
      boxShadow="md"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      _hover={{ boxShadow: "0px 4px 6px var(--secondary-opacity) " }}
    >
      <Link href={article.url}>
        <Box>
          <Image
            src={article.urlToImage}
            alt="image"
            width="full"
            height="200px"
            objectFit="cover"
          />
          <Heading px="2" fontFamily="body" fontSize="xs" py="4">
            {article.title}
          </Heading>
          <Text
            mx="2"
            fontFamily="body"
            fontSize="xs"
            pb="4"
            textAlign="justify"
            color="var(--opacity-black)"
          >
            {article.description}
          </Text>
        </Box>
      </Link>
      <Box
        p="4"
        display="flex"
        justifyContent="flex-end"
        borderTop="solid 0.5px var(--opacity-black)"
      >
        <IconButton
          aria-label="Bookmark Article"
          icon={isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
          color={isBookmarked ? "black" : "var(--opacity-black)"}
          variant="ghost"
          onClick={(e) => {
            e.preventDefault(); // Prevents link navigation when clicking the button
            toggleBookmark();
          }}
        />
      </Box>
    </Card>
  );
};

export default NewsCard;
