import type { BlogTagId } from './blogs';

export interface ProjectGroup {
	id: string;
	tag: string;
	title: string;
	/** May contain inline `<a>` tags — rendered with `{@html}`, so only trusted content belongs here. */
	description: string;
	image: string;
	/** Blog tag this group's posts are filed under. */
	blogTag: BlogTagId;
}

const LINK_CLASS = 'text-brick-ember underline underline-offset-2 hover:opacity-80';

export const PROJECT_GROUPS: ProjectGroup[] = [
	{
		id: 'robotics',
		tag: 'Project Group 1',
		title: 'Robotics',
		image: '/images/robot_spider.jpg',
		blogTag: 'robotics',
		description:
			"We're building a robotic office assistant that can sense and interact with its environment. Using our fleet of three robotic cars, a robotic spider, and a robotic arm, we're working toward a system that can deliver notes, open doors, and coordinate the cars as a team to get everyday tasks done around the office."
	},
	{
		id: 'drug-discovery',
		tag: 'Project Group 2',
		title: 'Drug Discovery',
		image: '/images/CYP.jpeg',
		blogTag: 'comp-bio',
		description:
			`Denali and Achyut competed in the <a href="https://openadmet.ghost.io/predicting-pxr-induction-we-have-liftoff/" target="_blank" rel="noopener noreferrer" class="${LINK_CLASS}">PXR Datathon</a> hosted by OpenADMET, a challenge to predict a drug's metabolism by predicting its binding to PXR, a key xenobiotic receptor. In the <a href="https://openadmet.ghost.io/announcing-openadmets-cyp-inhibition-blind-challenge/" target="_blank" rel="noopener noreferrer" class="${LINK_CLASS}">follow-up challenge</a>, also hosted by OpenADMET, our team of 12 undergraduates placed 58th out of 103 teams predicting cytochrome P450 inhibition, the enzyme that metabolizes most drugs flagged by PXR. Next, we're looking to take on the OpenADMET Phare Bio challenge. What stood out to them was the community: top teams openly sharing how they reached their results, recurring webinars, and ongoing discussions around the fast-moving field of computational biology.`
	},
	{
		id: 'local-intelligence',
		tag: 'Project Group 3',
		title: 'Local Intelligence Group',
		image: '/images/llm_training.JPG',
		blogTag: 'local-llms',
		description:
			"We previously trained a GPT-2-level model from scratch. Building on that, we're now exploring local LLMs. Frontier labs threaten to monopolize the intelligence space, but we believe smaller on-device models can rival current state-of-the-art performance. So far we've tested diffusion language models, quantization, and speculative decoding, and we're now working to find the best models for our local hardware, maximizing tokens per second without sacrificing intelligence."
	}
];
