import React from "react";
import { Card, Box, Image, Heading, Text } from "@chakra-ui/react"; // Assuming you are using Chakra UI
import { FaRegBookmark } from "react-icons/fa"; // For the bookmark icon
import Link from "next/link";

interface NewsCardProps {
  article: {
    urlToImage: string;
    title: string;
    description: string;
    url: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+$/, "");
  };

  const articleSlug = generateSlug(article.title);
  return (
    <Card
      maxW="sm"
      overflow="hidden"
      boxShadow="md"
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
            borderBottom="solid 0.5px var(--opacity-black)"
            color="var(--opacity-black)"
          >
            {article.description}
          </Text>
        </Box>
        <Box p="4" display="flex" justifyContent="flex-end">
          <FaRegBookmark color="var(--opacity-black)" />
        </Box>
      </Link>
    </Card>
  );
};

export default NewsCard;
