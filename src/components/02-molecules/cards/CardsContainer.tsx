import { type JSX } from 'react'
import type { BlogPost } from './BlogCard'
import type { PortfolioPost } from './PortfolioCard'

export function isBlogPost(post: any): post is BlogPost {
  return typeof post?.title === 'string' && typeof post?.slug === 'string'
}

export function isPortfolioPost(post: any): post is PortfolioPost {
  return (
    typeof post?.data?.name === 'string' &&
    Array.isArray(post?.data?.screenshots)
  )
}

export interface CardsContainerProps<T = any> {
  posts: T[]
  render: (post: T) => JSX.Element
  className?: string
}

export function CardsContainer<T = any>({
  posts,
  render,
  className
}: CardsContainerProps<T>) {
  return (
    <section
      className={`flex flex-wrap justify-center ${className}`}
      style={{ gap: '1rem' }}
    >
      {posts.map((post) => (
        <div key={(post as any).id} className='card-wrapper'>
          {render(post)}
        </div>
      ))}
    </section>
  )
}
