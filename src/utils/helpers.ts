import { resolve } from 'node:path';

export const root = (url: string) => {
  const baseURL = import.meta.env.BASE_URL || '/';
  return resolve(baseURL, url);
}