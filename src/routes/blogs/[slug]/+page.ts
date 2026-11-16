import { error } from '@sveltejs/kit';
import { BLOG_POSTS } from '$lib/blogs';

export const load = ({ params }) => {
	const post = BLOG_POSTS.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
};
