import { type HTMLAttributes, useEffect, useRef } from 'react'
import type { JSX } from 'react'

interface BlogCardProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  post: BlogPost
}

const FALLBACK_IMG_URL =
  'https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg'

export interface BlogPost {
  id: string
  slug: string
  coverImage?: { url?: string | null } | null
  title: string
  brief: string
}

export function BlogCard({ post, href, className, ...props }: BlogCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(card)

    return () => observer.disconnect()
  }, [])

  return (
    <a
      ref={cardRef}
      href={href}
      className={`card w-96 bg-base-100 shadow-xl hover:text-primary dark:shadow-2xl ${className}`}
      {...props}
    >
      <figure>
        <img
          loading='lazy'
          src={post.coverImage?.url ?? FALLBACK_IMG_URL}
          className='min-h-[12.5rem] object-cover'
          alt={post.title}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{post.title}</h2>
        <p>{post.brief}</p>
      </div>
    </a>
  )
}

export default BlogCard
