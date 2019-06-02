import { writable } from 'svelte/store';

export const popupIsOpen = writable(false);
export const listIsOpen = writable(false);
export const openingInfoBook = writable({});
export const myList = writable([]);