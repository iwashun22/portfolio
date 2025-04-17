import { resolve } from 'node:path';

/**
 * @returns The resolved URL string to the public (static) file.
 */
export const root = (url: string) => {
  const baseURL = import.meta.env.BASE_URL || '/';
  return resolve(baseURL, url);
}

/**
 * Orders image formats according to a preferred format order.
 *
 * @param {ImageMetadata[]} images - The array of generated image metadata.
 * @param {Array<ImageMetadata["format"]>} formatOrder - The desired format order.
 *  Only formats present in `images` will be returned.
 * @returns {Array<[ImageMetadata["format"], ImageMetadata]>} An array of images in desired order.
 */
export const orderFormats = (
  images: ImageMetadata[],
  formatOrder: Array<ImageMetadata["format"]>
): ImageMetadata[] => {
  const generatedFormats = Object.fromEntries(images.map(i => [i.format, i]));
  const arr: ReturnType<typeof orderFormats> = [];

  formatOrder.forEach(f => {
    // check if the listed format is generated.
    if (f in generatedFormats) arr.push(generatedFormats[f]);
  })
  return arr;
}
