import { type HTMLAttributes, useEffect, useRef } from 'react'

interface BlogCardProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  post: BlogPost
  delay?: number
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

export function BlogCard({ post, href, className, delay = 0, ...props }: BlogCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const baseDelay = parseInt(el.dataset.delay || '0', 10)
            setTimeout(() => {
              el.classList.add('is-revealed')
            }, baseDelay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08 }
    )

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      ref={cardRef}
      href={href}
      data-delay={delay}
      class={`bezel-link reveal-card ${className ?? ''}`}
      {...props}
    >
      <div class="bezel-link-shell">
        <div class="bezel-link-core">
          <div class="card-img-wrapper">
            <img
              loading="lazy"
              src={post.coverImage?.url ?? FALLBACK_IMG_URL}
              alt={post.title}
              class="card-img"
            />
          </div>
          <div class="card-body">
            <h3 class="card-title">{post.title}</h3>
            <p class="card-brief">{post.brief}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default BlogCard
