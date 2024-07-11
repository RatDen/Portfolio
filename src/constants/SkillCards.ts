type TSkillCard = {
	img: string;
	alt: string;
	articles: string[];
};

export const SkillCards: TSkillCard[] = [
	{
		img: require('/src/images/about-cards/html.png'),
		alt: 'Лого HTML',
		articles: [
			'Адаптивная верстка',
			'Отзывчивая вертска',
			'Семантичная вертска',
		],
	},
	{
		img: require('/src/images/about-cards/css.png'),
		alt: 'Лого CSS',
		articles: ['Sass/Less', 'Bootstrap', 'Koala'],
	},
	{
		img: require('/src/images/about-cards/js.png'),
		alt: 'Лого JS',
		articles: [
			'TypeScript',
			'JQuery (Ajax)',
			'Асинхронные запросы',
			'Работа с Api',
		],
	},
	{
		img: require('/src/images/about-cards/react.png'),
		alt: 'Лого React',
		articles: ['styled-components', 'react-hook-form', 'polished'],
	},
	{
		img: require('/src/images/about-cards/additional.png'),
		alt: 'Лого',
		articles: ['Git', 'Webpack', 'Vite'],
	},
	{
		img: require('/src/images/about-cards/sql.png'),
		alt: 'Лого SQL',
		articles: ['PostgreSQL', 'pgAdmin4', 'PowerDesigner'],
	},
];
