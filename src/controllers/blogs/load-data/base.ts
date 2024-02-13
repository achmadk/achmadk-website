import request from 'graphql-request'

import {
  MorePostsByPublicationDocument,
  type MorePostsByPublicationQuery,
  type MorePostsByPublicationQueryVariables,
  type PageInfo,
  type Post
} from '@/utilities'

export interface DefaultLoadBlogsDataOptions {
  /**
   * @default null
   */
  endCursor?: string | null
}

export async function loadBlogsData<
  Options extends DefaultLoadBlogsDataOptions = DefaultLoadBlogsDataOptions
>(options?: Options) {
  const endCursor = options?.endCursor ?? null

  let publication: MorePostsByPublicationQuery['publication'] | null = null
  let posts: Post[] = []
  let pageInfo: PageInfo | null = null

  const response = await request<MorePostsByPublicationQuery, MorePostsByPublicationQueryVariables>(
    import.meta.env.PUBLIC_HASHNODE_GQL_ENDPOINT,
    MorePostsByPublicationDocument,
    { first: 20, host: import.meta.env.PUBLIC_HASHNODE_PUBLICATION_HOST, ...(endCursor !== null ? { after: endCursor } : {}) }
  )
  publication = response.publication ?? null
  if (publication !== null) {
    pageInfo = publication.posts.pageInfo
    posts = publication.posts.edges?.map((item) => item.node) as Post[]
  }

  return {
    publication,
    posts,
    pageInfo
  }
}
