export function toggleState(
	state: boolean,
	setState: (state: boolean) => void
) {
	setState(!state);
}

export function getWindowWidth() {
	return window.innerWidth;
}
