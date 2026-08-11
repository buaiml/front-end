export interface ProjectGroup {
	id: string;
	tag: string;
	title: string;
	/** May contain inline `<a>` tags — rendered with `{@html}`, so only trusted content belongs here. */
	description: string;
	image: string;
}

const LINK_CLASS = 'text-brick-ember underline underline-offset-2 hover:opacity-80';

export const PROJECT_GROUPS: ProjectGroup[] = [
	{
		id: 'robotics',
		tag: 'Project Group 1',
		title: 'Robotics',
		image: '/images/robot_spider.jpg',
		description:
			"We have three robotic cars, one robotic spider, and a robotic arm. We'll be working to turn these into a project. The project is still unclear, but we will figure it out."
	},
	{
		id: 'drug-discovery',
		tag: 'Project Group 2',
		title: 'Drug Discovery',
		image: '/images/CYP.jpeg',
		description:
			`Denali and Achyut competed in the <a href="https://openadmet.ghost.io/predicting-pxr-induction-we-have-liftoff/" target="_blank" rel="noopener noreferrer" class="${LINK_CLASS}">PXR Datathon</a> hosted by OpenADMET, a challenge to predict a drug's metabolism by predicting its binding to PXR, a key xenobiotic receptor. The <a href="https://openadmet.ghost.io/announcing-openadmets-cyp-inhibition-blind-challenge/" target="_blank" rel="noopener noreferrer" class="${LINK_CLASS}">follow-up challenge</a>, also hosted by OpenADMET, focuses on predicting binding to cytochrome P450. The enzyme that metabolizes most drugs flagged by PXR. What stood out to them was the community: top teams openly sharing how they reached their results, recurring webinars, and ongoing discussions around the fast-moving field of computational biology.`
	},
	{
		id: 'local-intelligence',
		tag: 'Project Group 3',
		title: 'Local Intelligence Group',
		image: '/images/llm_training.JPG',
		description:
			"We previously trained a GPT-2-level model from scratch. Building on that, we're now exploring local LLMs. Frontier labs threaten to monopolize the intelligence space, but we believe smaller on-device models can rival current state-of-the-art performance. We're leveraging new research in diffusion, flow matching, quantization, and custom inference kernels to maximize tokens per second without sacrificing intelligence."
	}
];
