import request from "graphql-request"

import { SinglePostByPublicationDocument, type SinglePostByPublicationQuery, type SinglePostByPublicationQueryVariables, type Post, type PageByPublicationQuery, type PageByPublicationQueryVariables, PageByPublicationDocument, type StaticPage } from "@/utilities"

export interface DefaultLoadBlogBySlugDataOptions {
  slug: string
}

export async function loadBlogBySlugData<OptionsType extends DefaultLoadBlogBySlugDataOptions = DefaultLoadBlogBySlugDataOptions>(options: OptionsType) {
  const { slug } = options
  let publication: SinglePostByPublicationQuery['publication'] | null = null
  let post: Post | null = null
  let page: StaticPage | null = null

  const response = await request<SinglePostByPublicationQuery, SinglePostByPublicationQueryVariables>(
		import.meta.env.PUBLIC_HASHNODE_GQL_ENDPOINT,
		SinglePostByPublicationDocument,
		{
			host: import.meta.env.PUBLIC_HASHNODE_PUBLICATION_HOST,
			slug,
		},
	)
  publication = response?.publication ?? null
  post = (publication?.post ?? null) as Post | null

  if (post !== null) {
    const staticPageData = await request<PageByPublicationQuery, PageByPublicationQueryVariables>(
	  import.meta.env.PUBLIC_HASHNODE_GQL_ENDPOINT,
	  PageByPublicationDocument,
	  {
	    host: import.meta.env.PUBLIC_HASHNODE_PUBLICATION_HOST,
		slug,
      },
	);
    page = staticPageData?.publication?.staticPage as StaticPage ?? null
  }

  return {
    publication,
    post,
    page
  }
}
