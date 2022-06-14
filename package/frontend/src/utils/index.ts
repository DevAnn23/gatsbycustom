export const cn = (...args: (string | boolean | undefined)[]): string =>
    args.filter((c) => c !== (undefined || false)).join(' ');

export const isUrlInternal = (url: string) => /^\/(?!\/)/.test(url);

export const findInText = (text: string, search: string): boolean =>
    text.toLowerCase().includes(search.toLowerCase().trim());

export const setBodyOverflow = (value: 'hidden' | 'visible' | '') =>
    (document.body.style.overflow = value);
