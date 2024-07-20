// import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import { Interweave } from 'interweave'
import { UrlMatcher } from 'interweave-autolink'

export interface ArticleContentProps {
  /**
   * @default null
   */
  content?: string | null
}

export const ArticleContent = <PropType extends ArticleContentProps = ArticleContentProps>({ content = null }: PropType) => {
  return typeof content === 'string' && (
    <Interweave content={content} matchers={[ new UrlMatcher('url')]} />
    // <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    // <Markdown>{content}</Markdown>
  )
}
