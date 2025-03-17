"use client";
import { useFetchAllEnglishArticles } from "@/hooks/hooks";

export default function Home() {
  const { data, isLoading, error } = useFetchAllEnglishArticles();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div>
      <ul>
        {data?.map((article, index: number) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}
