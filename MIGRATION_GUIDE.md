# Migration Guide: Astro Cards → React Components

## Overview

This guide documents the migration of Astro blog and portfolio cards to React components.

## Changes Made

### New Files Created

1. `src/components/02-molecules/cards/BlogCard.tsx` - React blog card component
2. `src/components/02-molecules/cards/PortfolioCard.tsx` - React portfolio card component
3. `src/components/02-molecules/cards/CardsContainer.tsx` - Generic container for card lists

### Key Features Preserved

- **Responsive design** - Same card layout (w-96, bg-base-100, shadow-xl)
- **Hover effects** - Primary color text on hover
- **Dark mode support** - Dark shadow variants
- **Lazy loading** - Images with `loading="lazy"`
- **Scroll animations** - Intersection Observer for staggered entrance
- **Conditional actions** - Portfolio cards show external link buttons
- **Fallback images** - Default images when none provided

### Component Props

#### BlogCard

```typescript
interface BlogPost {
  id: string
  slug: string
  coverImage?: { url?: string | null } | null
  title: string
  brief: string
}

interface BlogCardProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  post: BlogPost
}
```

#### PortfolioCard

```typescript
interface PortfolioData {
  name: string
  screenshots: string[]
  link?: string
}

interface PortfolioPost {
  id: string
  data: PortfolioData
}

interface PortfolioCardProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string
  className?: string
  post: PortfolioPost
}
```

#### CardsContainer (Generic)

```typescript
interface CardsContainerProps<T = any> {
  posts: T[]
  render: (post: T) => JSX.Element
  className?: string
}
```

### Migration Steps

1. **Update imports** in page components:
   - Replace Astro `import` with React component imports
   - Example: `import BlogCard from '@/components/02-molecules/cards/BlogCard'`

2. **Transform data** to match new props:
   - Blog posts: Extract `id`, `slug`, `coverImage`, `title`, `brief`
   - Portfolio items: Extract `id`, `data.name`, `data.screenshots`, `data.link`

3. **Remove Astro-specific features**:
   - `transition:name` attributes (optional: can add back with `view-transition`)
   - `getStaticPaths` (handle in parent page)

4. **Update page components**:
   - Use `BlogCard`/`PortfolioCard` instead of inline card markup
   - Pass transformed data as props

### Data Transformation Examples

#### Blog Posts Transformation

```typescript
// Astro data from getCollection('blogs')
const astroBlogs = await getCollection('blogs')

// Transform for React BlogCard
const blogPosts = astroBlogs.map((post: any) => ({
  id: post.id,
  slug: post.slug,
  coverImage: post.data.coverImage,
  title: post.data.title,
  brief: post.data.brief
}))

// Usage in page component
<BlogCard
  key={post.id}
  post={post}
  href={`/blogs/${post.slug}/`}
/>
```

#### Portfolio Items Transformation

```typescript
// Astro data from getCollection('portfolios')
const astroPortfolios = await getCollection('portfolios')

// Transform for React PortfolioCard
const portfolioPosts = astroPortfolios.map((post: any) => ({
  id: post.id,
  data: {
    name: post.data.name,
    screenshots: post.data.screenshots,
    link: post.data.link
  }
}))

// Usage in page component
<PortfolioCard
  key={post.id}
  post={post}
/>
```

#### Conditional Rendering Example

```typescript
// Only show external link button for portfolios with a link
{post.data.link && (
  <button data-url={post.data.link}>
    Open Project
  </button>
)}
```

#### Type-Safe Filtering

```typescript
// Type guard from CardsContainer
import { isPortfolioPost } from '@/components/02-molecules/cards/CardsContainer'

const filtered = allPosts.filter(isPortfolioPost)
```

### Files to Update

- `src/pages/blogs/index.astro` → Use `BlogCard` components
- `src/pages/portfolios/index.astro` → Use `PortfolioCard` components
- Remove inline card markup and replace with component calls

### Compatibility Notes

- **No breaking changes** to data structure
- **Enhanced flexibility** - React components can be used anywhere
- **Better integration** with React ecosystem (hooks, state management)
- **SSR/SSG** compatible with Next.js or other React frameworks
- **Type-safe** with proper TypeScript interfaces

## Complete Example

```typescript
// src/pages/blogs/page.tsx
import { getCollection } from 'astro:content'
import { BlogCard } from '@/components/02-molecules/cards/BlogCard'
import { CardsContainer } from '@/components/02-molecules/cards/CardsContainer'

export async function BlogsPage() {
  const posts = await getCollection('blogs')

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
        <BlogCard
          key={post.id}
          post={post}
          href={`/blogs/${post.slug}/`}
        />
      )} />
    </main>
  )
}
```
