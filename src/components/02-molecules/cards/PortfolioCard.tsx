import { type HTMLAttributes, type MouseEvent, useEffect, useRef } from 'react'

export interface ScreenshotSource {
  srcset: string
  type?: string
}

export interface PortfolioData {
  name: string
  screenshots: string[]
  link?: string
}

export interface PortfolioPost {
  id: string
  data: PortfolioData
}

export interface PortfolioCardProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string
  className?: string
  post: PortfolioPost
  delay?: number
}

const FALLBACK_IMG_URL =
  'https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg'

export function PortfolioCard({
  post,
  href,
  className,
  delay = 0,
  ...props
}: PortfolioCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (post.data.link) {
      window.open(post.data.link, '_blank', 'noopener,noreferrer')
    }
  }

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
      href={href ?? '#'}
      data-delay={delay}
      className={`bezel-link reveal-card ${className ?? ''}`}
      {...props}
    >
      <div className="bezel-link-shell">
        <div className="bezel-link-core">
          <div className="card-img-wrapper">
            <picture>
              {post.data.screenshots.length >= 3 && (
                <source srcSet={post.data.screenshots[2]} type="image/avif" />
              )}
              {post.data.screenshots.length >= 2 && (
                <source srcSet={post.data.screenshots[1]} type="image/webp" />
              )}
              <img
                loading="lazy"
                src={post.data.screenshots[0] ?? FALLBACK_IMG_URL}
                alt={post.data.name}
                className="card-img"
              />
            </picture>
          </div>
          <div className="card-body portfolio-card-actions">
            <h3 className="card-title" title={post.data.name}>
              {post.data.name}
            </h3>
            {typeof href === 'string' && (
              <button
                className="portfolio-open-btn"
                title="Open project"
                onClick={handleButtonClick}
              >
                <span>Open project</span>
                <span className="portfolio-open-btn-arrow">↗</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </a>
  )
}

export default PortfolioCard
