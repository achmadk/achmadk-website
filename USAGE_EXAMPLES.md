// Example usage of React blog and portfolio cards
// This shows how to transform existing Astro data for use with the new React components

import { BlogCard } from '@/components/02-molecules/cards/BlogCard'
import { PortfolioCard } from '@/components/02-molecules/cards/PortfolioCard'
import { CardsContainer } from '@/components/02-molecules/cards/CardsContainer'
import { isBlogPost, isPortfolioPost } from '@/components/02-molecules/cards/CardsContainer'

// Example 1: Blog posts page
export async function BlogPage() {
// Fetch blog posts from your data source
const posts = await getCollection('blogs') // Astro collection

// Transform data to match BlogPost interface
const blogPosts = posts.map((post: any) => ({
id: post.id,
slug: post.slug,
coverImage: post.data.coverImage,
title: post.data.title,
brief: post.data.brief
}))

return (
<main className="container mx-auto mt-20">
<h1>Blogs</h1>
<CardsContainer posts={blogPosts} render={(post) => (
<BlogCard key={post.id} post={post} href={`/blogs/${post.slug}/`} />
)} />
</main>
)
}

// Example 2: Portfolio page
export async function PortfolioPage() {
// Fetch portfolio items from your data source
const portfolios = await getCollection('portfolios') // Astro collection

// Transform data to match PortfolioPost interface
const portfolioPosts = portfolios.map((post: any) => ({
id: post.id,
data: {
name: post.data.name,
screenshots: post.data.screenshots,
link: post.data.link
}
}))

return (
<main className="container mx-auto mt-20">
<h1>Portfolios</h1>
<CardsContainer posts={portfolioPosts} render={(post) => (
<PortfolioCard key={post.id} post={post} />
)} />
</main>
)
}

// Example 3: Type-safe filtering
export function filterBlogsByType(posts: any[], type: string) {
// Type guard ensures type safety
const blogPosts = posts.filter(isBlogPost)
return blogPosts.filter(post => post.data?.type === type)
}

// Example 4: With additional props
export function BlogCardWithLink({ post, href, className }: any) {
return (
<BlogCard
      post={post}
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    />
)
}
