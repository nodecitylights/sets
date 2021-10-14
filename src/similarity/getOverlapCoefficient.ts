import getIntersection from '../getIntersection';

/**
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns
 */
export default function getOverlapCoefficient<TElement>(a: Set<TElement>, b: Set<TElement>): number {
	return getIntersection(a, b).size / Math.min(a.size, b.size);
}
