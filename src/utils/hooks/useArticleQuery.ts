import { useQuery } from '@tanstack/react-query';
import matter from 'gray-matter';

// 1. Define the TypeScript Interface for Article Data
export interface ArticleData {
    title: string;
    date: string; // Formatted date string
    author: string;
    slug: string;
    content: string; // Raw markdown content (without frontmatter)
    description?: string; // Optional field
    image?: string; // Optional field for image/icon source
}

// 2. Define a type for the metadata (used by the Index page)
export type ArticleMetadata = Omit<ArticleData, 'content'>;

// 3. Updated Vite Glob Import (using the modern 'query' syntax)
const modules = import.meta.glob('../../articles/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
}) as Record<string, string>;


// --- Core Fetching Logic ---

/**
 * Utility function to find, parse, and return a SINGLE article's content and metadata.
 * @param slug - The article slug (from the URL parameter).
 */
const fetchArticleBySlug = (slug: string): ArticleData | null => {
    let rawMarkdown: string | null = null;

    // Find the correct raw Markdown content
    for (const path in modules) {
        const content = modules[path];
        const { data } = matter(content);

        // Ensure the slug matches and required fields exist in frontmatter
        if (data.slug === slug && data.title && data.date && data.author) {
            rawMarkdown = content;
            break;
        }
    }

    if (!rawMarkdown) {
        return null; // Article not found
    }

    // Parse the content and metadata
    const { content, data } = matter(rawMarkdown);
    const frontmatter = data as ArticleMetadata;

    return {
        ...frontmatter,
        content: content,
        date: new Date(frontmatter.date).toLocaleDateString(),
        slug: frontmatter.slug,
    } as ArticleData;
};


/**
 * Utility function to list ALL articles' frontmatter metadata (for the index).
 */
const fetchAllArticles = (): ArticleMetadata[] => {
    const articles: ArticleMetadata[] = [];

    for (const path in modules) {
        const rawContent = modules[path];

        try {
            const { data } = matter(rawContent);

            // 1. Validate required fields
            if (data.slug && data.title && data.date && data.author) {

                // 2. Validate Date Parsing
                const dateObj = new Date(data.date);
                if (isNaN(dateObj.getTime())) {
                    // Log an error if the date is invalid but skip the article
                    console.error(`ERROR: Invalid date found for article: ${data.title || path}. Skipping.`);
                    continue;
                }

                articles.push({
                    slug: data.slug,
                    title: data.title,
                    // Use the safely parsed date object
                    date: dateObj.toLocaleDateString(),
                    author: data.author,
                    description: data.description,
                    image: data.image,
                } as ArticleMetadata);
            }
        } catch (error) {
            // 3. Catch general parsing errors (e.g., malformed YAML)
            console.error(`Critical error parsing file at path: ${path}`, error);
            // Throwing here will bubble the error up to React Query's isError state
            throw new Error(`Failed to parse article metadata: ${path}. See console for details.`);
        }
    }

    // Sort articles by date descending
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};


// --- React Query Hooks (Exports) ---

/**
 * React Query hook to fetch and cache a single article data.
 * @param slug - The article slug.
 */
export const useArticleQuery = (slug: string) => {
    return useQuery<ArticleData | null, Error>({
        queryKey: ['article', slug],
        queryFn: () => fetchArticleBySlug(slug),
        enabled: !!slug,
    });
};

/**
 * React Query hook to fetch and cache all article metadata.
 */
export const useAllArticlesQuery = () => {
    // The returned data will be an array of article metadata
    return useQuery<ArticleMetadata[], Error>({
        queryKey: ['allArticles'],
        queryFn: fetchAllArticles,
    });
};