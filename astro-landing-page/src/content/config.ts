import { defineCollection, z } from 'astro:content';

// Content Collections
// These schemas validate frontmatter for Markdown files inside src/content/*.
// Decap CMS will create/edit these files.

const orar = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    active: z.boolean().default(true),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number().int().default(1),
    active: z.boolean().default(true),
  }),
});

const contact = defineCollection({
  type: 'content',
  schema: z.object({
    phone: z.string(),
    whatsapp: z.string(),
    facebook: z.string(),
    address: z.string(),
    email: z.string().optional().default(''),
  }),
});

export const collections = { orar, faq, contact };
