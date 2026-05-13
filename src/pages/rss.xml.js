import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const ptPosts = await getCollection('blogPt');
	const enPosts = await getCollection('blogEn');
	const allItems = [
		...ptPosts.map((post) => ({ ...post.data, link: `/blog/${post.id}/` })),
		...enPosts.map((post) => ({ ...post.data, link: `/en/blog/${post.id}/` })),
	].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION.pt,
		site: context.site,
		items: allItems,
	});
}
