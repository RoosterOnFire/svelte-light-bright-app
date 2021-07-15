import { Writable, writable } from 'svelte/store';
import { generateButtonStyle } from './Utility';

export const buttons: Writable<string[]> = writable(generateButtonsArray());
let currentStyle = '';
let lastClickedButtonId = 0;

export function changeStyle() {
  currentStyle = generateButtonStyle();
}

export function reset() {
  buttons.update((buttons) => {
    buttons[lastClickedButtonId] = '';

    return buttons;
  });
}

export function resetAll() {
  updateClickedButton(0);
  buttons.set(generateButtonsArray());
}

export function updateClickedButton(id: number) {
  lastClickedButtonId = id;

  buttons.update((buttons) => {
    buttons[id] = currentStyle;

    return buttons;
  });
}

function generateButtonsArray(): string[] {
  return new Array(100).map((value) => (value = ''));
}
