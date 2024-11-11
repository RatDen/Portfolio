export type TPortfolioItem = {
	title: string;
	url: string;
	img: string;
	alt: string;
	description: string[];
};
export type TPortfolioItems = TPortfolioItem[];

export const PortfolioItems: TPortfolioItems = [
	{
		title: 'Проектная работа Яндекс Практикум',
		url: 'https://ratden.github.io/stellar-burgers/',
		img: 'https://sun9-23.userapi.com/s/v1/ig2/dHc_LuOx_41DeRjBzSOGQhWO6FGXr1raYHh3-NG22fK9PwtCdqieCjZuydF4Kpc8vRUQuy7sD5ZtvKw_Mda6M161.jpg?quality=95&crop=0,12,1593,1198&as=32x24,48x36,72x54,108x81,160x120,240x180,360x271,480x361,540x406,640x481,720x541,1080x812,1280x963,1440x1083,1593x1198&from=bu&cs=1280x963',
		alt: 'Скриншот работы',
		description: [
			'Работа выполнена на React + TypeScript',
			'Хранение данных реализовано с помощью Redux',
			'Настроена работа с access и refresh токенами',
			'Настроена маршрутизация с помощью React Router',
			'Написаны тесты для слайсов с помощью Jest и интеграционные тесты для страницы конструктора с помощью Cypress',
			'В приложении имеется возможность заходить в личный кабинет и смотреть историю заказов',
			'Так же можно посмотреть все заказы во вкладке ленты заказов',
			'Реализована возможность сборки и заказа бургера',
			'В редакторе заказа можно перемещать и удалять ингредиенты',
		],
	},
	{
		title: 'Тестовое задание FrameWork-Team',
		url: 'https://ratden.github.io/FrameworkTeam-test/',
		img: 'https://sun9-14.userapi.com/s/v1/ig2/iMAC2fnoYmX9ySvH0IgJKp1gY-tKNhNaSQ-lZQJevcHo21XZBt6-X5Ddo76Smw_Y15ib6m915JIBu43vVo7v9GYF.jpg?quality=95&crop=66,0,1279,719&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1279x719&from=bu&cs=1080x607',
		alt: 'Скриншот работы',
		description: [
			'Работа выполнена на React + TypeScript',
			'Использовался Redux toolkit совместно с RTK query',
			'Использовались: ESLint с настройками Airbnb, Prettier для автоматического форматирования файлов кода и стилей, PostCSS sorting для сортировки свойств стилей',
			'Сборщик - Vite',
			'Основной функционал: просмотр картин с функцией поиска и фильтрации; реализована смена темы (темная и светлая); реализована пагинация с помощью React-Paginate',
		],
	},
	{
		title: 'Десятая практическая работа Яндекс Практикум',
		url: 'https://ratden.github.io/blog-customizer/',
		img: 'https://sun9-40.userapi.com/impg/0--mlGe9Rgt_6D0VW1BBCoTl0cN5fdAJ8SUpew/8T7XFzATp7w.jpg?size=2533x1234&quality=95&sign=f34891d9cd12ee0a0467d595688ca9e8&type=album',
		alt: 'Скриншот работы',
		description: [
			'Работа выполнена на React + TypeScript',
			'Были отработаны навыки настройки и использования Webpack',
			'Имеется возможность стилизовать страницу с помощью формы, для этого использовались основные возможности React',
		],
	},
	{
		title: 'Восьмая практическая работа Яндекс Практикум',
		url: 'https://ratden.github.io/web-larek-frontend/',
		img: 'https://sun9-27.userapi.com/impg/R32-E0zNNNeskxZkqEn9E8xDARGAv_d54HcFSA/o2k1eDtq-J8.jpg?size=2509x1221&quality=95&sign=caaea423e91362d2081de2c84604ce2e&type=album',
		alt: 'Скриншот работы',
		description: [
			'Отработаны навыки работы с TypeScript',
			'Отработаны навыки проектирования архитектуры приложения',
			'Приложение было разделено на модель отображения, модель данных и контроллер',
		],
	},
	{
		title: 'Пятая практическая работа Яндекс Практикум',
		url: 'https://ratden.github.io/mesto-project-ff/',
		img: 'https://sun9-9.userapi.com/impg/ORjgP6INkPVRGuiO65zwauzySmDtfvlO1QQHMg/yc4S38J0GKg.jpg?size=1116x890&quality=96&sign=8a96aea8e3f9dfc8cea807778587c6b9&type=album',
		alt: 'Скриншот работы',
		description: [
			'Реализована фронтэнд часть одностраничной социальной сети',
			'Использовались асинхронные запросы к серверу с дальнейшим преобразованием и выводом информации на страницу',
			'Имеется возможность добавлять, удалять (свои), лайкать карточки. Можно редактировать профиль (изменять аватар, имя и подпись)',
			'Были отработаны навыки взаимодействия фронтэнд части с уже готовым API сервера',
			'В процессе разработки использовался сборщик Webpack с различными минификаторами и пост обработчиками кода',
		],
	},
	{
		title: 'Четвертая практическая работа Яндекс Практикум',
		url: 'https://ratden.github.io/zakrivayuschiy-teg-f/',
		img: 'https://sun9-30.userapi.com/impg/NwS3yNagWBXmRzca-_2D72Aw4Wy-DGKE-WDHaw/bEcmx2HL9JI.jpg?size=957x526&quality=96&sign=2def29dd74fd5f1c24c773b6c3b2603b&type=album',
		alt: 'Скриншот работы',
		description: [
			'Реализован одностраничный отзывчивый, адаптивный сайт. Размеры и положение элементов меняются в зависимости от размера экрана устройства',
			'Отработаны навыки работы с графическими элементами (картинки, svg, градиенты и фильтры)',
			'Отработаны навыки работы с анимациями пользовательского интерфейса',
			'Реализована смена темы (автоматическая, светлая и темная)',
		],
	},
	{
		title: 'Курсовая работа',
		url: 'https://ratden.github.io/Coursework/',
		img: 'https://sun9-13.userapi.com/impg/wnRb3J5TWsg05Usutu_I_Psug6Za2FSbvwzx9A/tYAI7ukLUJ4.jpg?size=1870x945&quality=96&sign=5fde98cb1052b66bd7cf8961485b351d&type=album',
		alt: 'Скриншот работы',
		description: [
			'Реализована упрощенная таблица для учета товара на некотором предприятии.',
			'Разработана простая база данных и пользовательский интерфейс взаимодействия с ней. Имеется возможность добавлять, удалять и изменять записи.',
			'При большом количестве записей у таблицы появляется прокрутка.',
			'Разметка выполнена с помощью bootstrap',
			'К сожалению на github pages нет возможности работать с бд, поэтому по ссылке видна только верстка. Серверную часть можно посмотреть в самом репозитории.',
			'Примерное время - 4 часа',
		],
	},
	{
		title: 'Курсовая работа',
		url: 'https://ratden.github.io/DimaExpress/',
		img: 'https://sun9-78.userapi.com/impg/EVNT8CWMZx95mfA0tK8ttY08KgPXmk7s3EC_LA/2ob6mk5XMK0.jpg?size=1871x940&quality=96&sign=8d92457ff7ba35056c2fb32316097584&type=album',
		alt: 'Скриншот работы',
		description: [
			'Реализована упрощенная таблица для учета товара на некотором предприятии.',
			'Разработана простая база данных и пользовательский интерфейс взаимодействия с ней. Имеется возможность добавлять, удалять и изменять записи.',
			'При большом количестве записей у таблицы появляется прокрутка.',
			'Разметка выполнена с помощью bootstrap',
			'К сожалению на github pages нет возможности работать с бд, поэтому по ссылке видна только верстка. Серверную часть можно посмотреть в самом репозитории.',
			'Примерное время - 4 часа',
		],
	},
	{
		title: 'Третья практическая работа Яндекс Практикума',
		url: 'https://ratden.github.io/slozhno-sosredotochitsya/',
		img: 'https://sun9-20.userapi.com/impg/qOZUyfkjFrCQeXQ3s-prn5E7B_tNl6ACDnPEfg/DXMEKWo-04g.jpg?size=1004x1109&quality=96&sign=c4b2c9c59e3d374579b7f87acf5ca376&type=album',
		alt: 'Скриншот работы',
		description: [
			'Реализован одностраничный отзывчивый, адаптивный сайт. Размеры и положение элементов меняются в зависимости от размера экрана устройства',
			'Отработана работа с flex и grid элементами',
			'Реализована смена темы (автоматическая, светлая и темная)',
		],
	},
	{
		title: 'Вторая практическая работа Яндекс Практикума',
		url: 'https://ratden.github.io/posmotri_v_okno/',
		img: 'https://sun9-13.userapi.com/impg/BCrK4elUkQIjye4Z5naS5UmPXe1FgNqfar0k_Q/JmZeZA2reks.jpg?size=1299x610&quality=95&sign=b99eb0e7eb26610cc42dfdfdf38ef9b6&type=album',
		alt: 'Скриншот работы',
		description: [
			'Реализован одностраничный сайт с отзывчивым интерфейсом',
			'Отрабатывались навыки работы с видео и работы с готовым кодом',
		],
	},
	{
		title: 'Первая практическая работа Яндекс Практикум',
		url: 'https://ratden.github.io/ono-tebe-nado/',
		img: 'https://sun9-35.userapi.com/impg/zNilcWYf7V7IviGFFJBlUEex3MsoU8yquE-L1A/8pTiO5s0FSk.jpg?size=1633x1108&quality=95&sign=630333381fbcf8dd50e9fb2966c2b53a&type=album',
		alt: 'Скриншот работы',
		description: [
			'Реализован одностраничный статичный сайт с простым функционалом для отработки навыков верстки и кодстайла',
			'Использовалась семантическая верстка',
		],
	},
];
