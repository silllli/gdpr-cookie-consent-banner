import { writable } from 'svelte/store';

const cookiesShown = writable(false);

export { cookiesShown };
