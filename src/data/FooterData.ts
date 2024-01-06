//* LIB
import { v4 as uuid4 } from 'uuid';

//* IMPORT
import { FooterData } from '@/interfaces/redux/FooterInterface';
import { Github, Linkedin, LogoCompany, Telegram } from '@/statics/svg';

const FooterData: FooterData = {
	company: {
		id: uuid4(),
		logo: LogoCompany,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		socialMedia: [
			{ name: 'Github', link: 'https://github.com/fdhhhdjd', icon: Github },
			{ name: 'Telegram', link: 'https://t.me/taitiennguyen', icon: Telegram },
			{
				name: 'LinkedIn',
				link: 'https:profile-forme.com',
				icon: Linkedin,
			},
		],
	},
	features: [
		{ name: 'Marketing', link: '#' },
		{ name: 'Commerce', link: '#' },
		{ name: 'Analytics', link: '#' },
		{ name: 'Merchandise', link: '#' },
	],
	support: [
		{ name: 'Pricing', link: '#' },
		{ name: 'Docs', link: '#' },
		{ name: 'Audition', link: '#' },
		{ name: 'Art Status', link: '#' },
	],
	documents: [
		{ name: 'Terms', link: '#' },
		{ name: 'Conditions', link: '#' },
		{ name: 'Privacy', link: '#' },
		{ name: 'License', link: '#' },
	],
	delivery: [
		{ name: 'List of countries', link: '#' },
		{ name: 'Special information', link: '#' },
		{ name: 'Restrictions', link: '#' },
		{ name: 'Payment', link: '#' },
	],
};

export default FooterData;
