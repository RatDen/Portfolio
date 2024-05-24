export function toggleState(state, setState) {
  setState(!state);
}

export function getFirstSibling(element, siblingSelector) {
  return element.parentNode.querySelector(siblingSelector);
}

export function getWindowWidth() {
  return window.innerWidth;
}
