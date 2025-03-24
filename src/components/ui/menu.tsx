"use client";

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { HiSortAscending } from "react-icons/hi";

export default function CustomMenu() {
  const [option] = useState("");
  //const [value, setValue] = useState("asc");
  // function handleSort(arg0: string): void {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline"
        size="sm"
        rightIcon={<HiSortAscending />}
        fontWeight="normal"
        color="var(--opacity-black)"
      >
        {option ? option : "Sort by"}
      </MenuButton>
      <MenuList>
        <MenuItem value={"relevancy"}>Relevancy</MenuItem>
        <MenuItem value={"popularity"}>Popularity</MenuItem>
        <MenuItem value={"publishedAt"}>Newest</MenuItem>
      </MenuList>
    </Menu>
  );
}

const items = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];
