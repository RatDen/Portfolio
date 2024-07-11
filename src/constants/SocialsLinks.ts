import Vk from '../images/socials/vk.svg?react';
import Telegram from '../images/socials/telegram.svg?react';
import Github from '../images/socials/github.svg?react';

type TSocialsLink = {
	href: string;
	name: string;
	Logo: React.FunctionComponent<React.SVGProps<SVGElement>>;
};

export const SocialsLinks: TSocialsLink[] = [
	{
		href: 'https://vk.com/anikeev_fullstack',
		name: 'ВКонтакте',
		Logo: Vk,
	},
	{
		href: 'https://t.me/anikeev_fullstack',
		name: 'Телеграм',
		Logo: Telegram,
	},
	{
		href: 'https://github.com/RatDen?tab=repositories',
		name: 'Github',
		Logo: Github,
	},
];
