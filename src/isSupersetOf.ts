import _containsAllElements from './containsAllElements';

/**
 * Implementation of the superset operation, which checks if
 * set A is a superset of set B. A superset means all elements
 * of set B are elements of A.
 *  - **Formal definition**: `A ⊇ B`
 *  - This method runs in bilinear time, or `O(n * m)`, where `n = |A|`
 *    (size of set A), and `m = |B|` (set of size B)
 * @example
 * ```ts
 * // {1, 2, 3} ⊇ {1, 2, 3}
 * isSupersetOf(new Set([1, 2, 3]), new Set([1, 2, 3])) // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `A ⊇ B` is true
 */
export default function isSupersetOf<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	return a.size >= b.size && _containsAllElements(a, b);
}
