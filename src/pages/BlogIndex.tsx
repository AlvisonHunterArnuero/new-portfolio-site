import React from 'react';
import { Link } from 'react-router-dom';
import { House } from 'lucide-react';

import {
  useAllArticlesQuery,
  ArticleData,
} from '../utils/hooks/useArticleQuery';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import FloatingAnchor from '@/components/FloatingAnchor';

type ArticleMetadata = Omit<ArticleData, 'content'>;

const BlogIndex: React.FC = () => {
  const {
    data: articles,
    isLoading,
    isError,
  } = useAllArticlesQuery();

  if (isLoading) {
    // Show loading state for the index page
    return (
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-28 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (isError || !articles) {
    return (
      <div className="container py-8 text-red-500 text-lg">
        Error loading articles.
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: ArticleMetadata) => (
          <Link key={article.slug} to={`/blog/${article.slug}`}>
            <Card className="hover:shadow-lg transition-shadow overflow-hidden min-h-[180px] h-full">
              {' '}
              {/* Added overflow-hidden for rounded corners */}
              {/* Conditional Image/Thumbnail Render */}
              {article.image && (
                <CardContent className="p-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover" // Ensure consistent sizing
                  />
                </CardContent>
              )}
              <CardHeader>
                <CardTitle className="text-sky-500 text-lg">
                  {article.title}
                </CardTitle>
                <CardDescription>
                  {article.description || 'No description available.'}
                </CardDescription>
              </CardHeader>
              <CardFooter className="text-xs text-purple-400 w-full flex justify-start">
                Posted On:{' '}
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <FloatingAnchor
        anchorCaption="Return to Home"
        anchorLink="/"
        anchorIcon={<House className="w-6 h-6" />}
      />
    </div>
  );
};

export default BlogIndex;
