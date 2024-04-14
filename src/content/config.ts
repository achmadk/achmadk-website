import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const portfolios = defineCollection({
  schema: z.object({
    name: z.string(),
    type: z.enum(['MOBILE_APP', 'WEB_APP', 'LIBRARY']),
    techStacks: z.array(z.string()).optional(),
    monthStarted: z.string(),
    monthEnded: z.string(),
    screenshots: z.array(z.string()).optional(),
    links: z.array(z.string()).optional(),
    link: z.string().optional()
  })
})

export const collections = { blogs, portfolios };
