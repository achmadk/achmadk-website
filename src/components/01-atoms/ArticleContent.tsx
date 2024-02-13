import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export interface ArticleContentProps {
  /**
   * @default null
   */
  content?: string | null
}

export const ArticleContent = <PropType extends ArticleContentProps = ArticleContentProps>({ content = null }: PropType) => {
  return typeof content === 'string' && (
    <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
  )
}
