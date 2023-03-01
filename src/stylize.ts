// TODO: Make text styling configurable so that allow the user to override/change the base styles

const escape = (bg: number, value: string) => `\x1b[1;${bg}m${value}\x1b[0m`;

export const error = (value: string) => escape(41, value);
export const warn = (value: string) => escape(43, value);
export const info = (value: string) => escape(44, value);
export const log = (value: string) => escape(47, value);
export const debug = (value: string) => escape(42, value);
