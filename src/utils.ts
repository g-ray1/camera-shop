import { Camera } from './types/types';

export const getArraySortedByPrice = (cameras: Camera[]) =>
  [...cameras].sort((first, second) => first.price > second.price ? 1 : -1);
