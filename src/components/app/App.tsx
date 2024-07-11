import { useState } from 'react';
import styled from 'styled-components';
import { cssVar } from 'polished';
import { VerticalSlider } from '../vertical-slider';
import { Header } from '../header';
import { Socials, SocialsItem } from '../socials';
import { Menu } from '../menu';
import {
	HologramHeader,
	HologramModal,
	HologramText,
} from '../modals/hologram-modal';
import { Button } from '../buttons/button';
import { ModalCard } from '../article-elements/modal-card';
import { ContactsForm } from '../forms/contacts-form';
import { StarWarsScroller } from '../star-wars-scroller/StarWarsScroller';

import { getWindowWidth, toggleState } from '../../utils/functions';
import { ScreenWidth } from '../../constants/ScreenWidth';
import { SocialsLinks } from '../../constants/SocialsLinks';
import { SkillCards } from '../../constants/SkillCards';
import { PortfolioItems } from '../../constants/PortfolioItems';
import { CaseItem } from '../article-elements/case-item/CaseItem';
import { ScrollPromtArrows } from '../scroll-promt-arrows';

enum EUserDialog {
	about,
	contacts,
	portfolio,
}

export function App() {
	const [userDialog, setUserDialog] = useState<EUserDialog | null>(null);
	const [menuIsOpen, setMenuIsOpen] = useState(true);

	function onScreenWidthMenuToggle(width: number) {
		if (getWindowWidth() < width) {
			toggleState(menuIsOpen, setMenuIsOpen);
		}
	}

	function handleMenuButton(dialog: EUserDialog) {
		setUserDialog(dialog);
		onScreenWidthMenuToggle(ScreenWidth.desctopS);
	}

	function handleModalClose() {
		setUserDialog(null);
	}

	return (
		<>
			<Header name='Anikeev Denis' caption='Fullstack developer' />
			<Socials content={SocialsLinks} />
			<Menu
				isOpen={menuIsOpen}
				onToggle={() => toggleState(menuIsOpen, setMenuIsOpen)}>
				<button
					disabled={userDialog === EUserDialog.about ? true : false}
					onClick={() => {
						handleMenuButton(EUserDialog.about);
					}}>
					About me
				</button>
				<button
					disabled={userDialog === EUserDialog.contacts ? true : false}
					onClick={() => {
						handleMenuButton(EUserDialog.contacts);
					}}>
					Contacts
				</button>
				<button
					className={userDialog === EUserDialog.portfolio ? 'active' : ''}
					onClick={() => {
						if (userDialog !== EUserDialog.portfolio) {
							handleMenuButton(EUserDialog.portfolio);
						} else {
							setUserDialog(null);
						}
					}}>
					Portfolio
				</button>
			</Menu>
			<VerticalSlider
				element={userDialog === EUserDialog.portfolio ? 0 : 1}
				height='100vh'
				width='100hw'>
				<PortfolioContainer id='portfolio'>
					<StarWarsScroller>
						<Filler />
						<ScrollPromtContainer>
							<ScrollPromtArrows
								scale={0.7}
								color={cssVar('--main-theme-color') as string}
							/>
						</ScrollPromtContainer>
						{PortfolioItems.map((item, idx) => (
							<CaseItem {...item} key={idx} />
						))}
						<Filler />
					</StarWarsScroller>
				</PortfolioContainer>
				<WelcomeContainer id='welcome'>
					<Slogan className={`${userDialog === null ? '' : 'closed'}`}>
						Create your own site <br /> or make it better
					</Slogan>
					<ModalsWrap>
						<HologramModal
							title='About me'
							isClosed={userDialog !== EUserDialog.about ? true : false}
							onClose={handleModalClose}
							footer={
								<AboutFooterWrap>
									<ContactsFooterText>
										Хотите работать вместе?
									</ContactsFooterText>
									<Button
										type='submit'
										onClick={() => {
											setUserDialog(EUserDialog.contacts);
										}}>
										За работу
									</Button>
									<Button
										type='reset'
										onClick={() => {
											setUserDialog(null);
										}}>
										Закрыть
									</Button>
								</AboutFooterWrap>
							}>
							<HologramHeader>Мои навыки</HologramHeader>
							<AboutContentContainer>
								{SkillCards.map((item, idx) => (
									<ModalCard key={idx} {...item} />
								))}
							</AboutContentContainer>
						</HologramModal>
						<HologramModal
							title='Contacts'
							isClosed={userDialog !== EUserDialog.contacts ? true : false}
							onClose={handleModalClose}
							footer={
								<ContactsFooterWrap>
									{SocialsLinks.map((item, idx) => (
										<SocialsItem key={idx} {...item} />
									))}
									<HologramText>
										{'<=  или найдите меня в соц сетях'}
									</HologramText>
								</ContactsFooterWrap>
							}>
							<HologramHeader>
								{'// Вы можете связаться со мной, заполнив и отправив форму:'}
							</HologramHeader>
							<ContactsForm />
						</HologramModal>
					</ModalsWrap>
				</WelcomeContainer>
			</VerticalSlider>
		</>
	);
}

const PortfolioContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
	width: 100%;
	background: 50% 50% / cover no-repeat
		url(${require('/src/images/backgrounds/portfolio.jpg')});
	color: var(--main-theme-color);
	perspective: 100px;
	align-items: center;
`;

const ScrollPromtContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 75px;
	width: 100%;
	border: 2px solid var(--main-theme-color);
	border-radius: 15px;
	background-color: var(--main-theme-bg-soft-color);
`;

const Filler = styled.div`
	min-height: calc(var(--viewport-height) * 0.75);
`;

const WelcomeContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
	background: 49% 50% / cover no-repeat
		url(${require('/src/images/backgrounds/welcome.jpg')});
`;

const Slogan = styled.p`
	position: absolute;
	inset-block-start: 15%;
	inset-inline-start: 10%;
	opacity: 70%;
	cursor: default;
	font-family: 'StarShineMF', sans-serif;
	font-weight: 300;
	text-transform: uppercase;
	color: var(--main-theme-color);
	font-size: min(90px, 6.5vw);
	text-shadow: 0 0 70px var(--main-shadow-color);
	transition: opacity 0.4s, font-size 0.5s;

	&.closed {
		opacity: 0;
	}

	@media (width < ${() => `${ScreenWidth.desctopL}px`}) {
		font-size: 7.5vw;
	}

	@media (width < ${() => `${ScreenWidth.tabletM}px`}) {
		font-size: 8.5vw;
	}

	@media (width < ${() => `${ScreenWidth.tabletS}px`}) {
		inset-inline-start: 7%;
		font-size: max(41px, 10vw);
	}
`;

const ModalsWrap = styled.div`
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	top: calc(var(--viewport-height) / 2);
	left: 7.5%;

	@media (width <= ${() => `${ScreenWidth.desctopS}px`}) {
		left: 9%;
		right: 9%;
	}

	@media (width <= ${() => `${ScreenWidth.tabletS}px`}) {
		left: 15px;
		right: 15px;
	}
`;

const AboutContentContainer = styled.div`
	display: grid;
	grid-template: auto / 1fr 1fr;
	gap: 15px;

	@media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
		grid-template: auto / auto;
	}
`;

const AboutFooterWrap = styled.div`
	display: flex;
	align-items: center;
	justify-self: end;
	margin: 0 10px;
	gap: 10px;
`;

const ContactsFooterWrap = styled.div`
	display: flex;
	align-items: center;
	justify-self: start;
	margin: 0 10px;

	& > a > div {
		max-inline-size: 100% !important;
		transition: none !important;
	}

	@media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
		display: none;
	}
`;

const ContactsFooterText = styled.p`
	font-size: 20px;

	@media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
		display: none;
	}
`;
