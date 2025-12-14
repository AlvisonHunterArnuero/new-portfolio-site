import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useArticleQuery } from '../utils/hooks/useArticleQuery';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen } from 'lucide-react';
import { convertToLocaleDate } from '@/utils/convertToLocaleDate';
import FloatingAnchor from '@/components/FloatingAnchor';

const Article: React.FC = () => {
  // useParams returns a map of string parameters
  const { articleSlug } = useParams<{ articleSlug: string }>();

  // Ensure articleSlug is defined before calling the query
  const slug = articleSlug || '';
  const {
    data: article,
    isLoading,
    isError,
    isFetched,
  } = useArticleQuery(slug);

  // --- State Handling ---

  if (isLoading) {
    return (
      <div className="container py-8 max-w-3xl mx-auto">
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="h-4 w-1/4 mb-10" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  // If the query finished fetching and no article data was returned
  if (isError || (isFetched && !article)) {
    return <Navigate to="/404" replace />;
  }

  // --- Success State ---

  return (
    <>
      <div className="container py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl text-sky-400 dark:text-blue-500 font-bold mb-2">
          {article.title}
        </h1>
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover my-4 rounded-lg"
          />
        )}
        <p className="text-sm text-muted-foreground mb-8">
          Published by
          <span className="text-amber-500 text-bold mx-2">
            {article.author}
          </span>
          Posted on:
          <span className="text-sky-500 text-bold mx-2">
            {convertToLocaleDate(article.date)}
          </span>
        </p>

        <div className="prose dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
      <FloatingAnchor
        anchorCaption="Return to Blog"
        anchorLink="/blog"
        anchorIcon={<BookOpen className="w-6 h-6" />}
      />
    </>
  );
};

export default Article;
