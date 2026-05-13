import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const postSchema = ({ image }: { image: () => z.ZodType }) =>
	z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.optional(image()),
	});

const blogPt = defineCollection({
	loader: glob({ base: './src/content/blog/pt', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => postSchema({ image }),
});

const blogEn = defineCollection({
	loader: glob({ base: './src/content/blog/en', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => postSchema({ image }),
});

export const collections = { blogPt, blogEn };
