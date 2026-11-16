export const BLOG_TAGS = [
	{ id: 'comp-bio', label: 'Comp Bio' },
	{ id: 'robotics', label: 'Robotics' },
	{ id: 'local-llms', label: 'Local LLMs' }
] as const;

export type BlogTagId = (typeof BLOG_TAGS)[number]['id'];

export interface BlogPost {
	slug: string;
	title: string;
	tag: BlogTagId;
	/** ISO date, e.g. 2026-11-16 */
	date: string;
	excerpt: string;
	/** Paragraphs of plain text. */
	body: string[];
	draft?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [];

export const tagLabel = (id: string) => BLOG_TAGS.find((t) => t.id === id)?.label ?? id;

export const formatDate = (iso: string) =>
	new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
