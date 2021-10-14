import _containsAllElements from './containsAllElements';

/**
 * Implementation of the proper superset operation in set theory,
 * which checks if set A is a superset of set B. A proper superset
 * means a set A is a superset of B, but B is not equal to A.
 *  - **Formal definition**: `A ⊃ B`
 *  - This method runs in bilinear time, or `O(n * m)`, where `n = |A|`
 *    (size of set A), and `m = |B|` (set of size B)
 * @example
 * ```ts
 * // {2, 3, 9} ⊃ {3, 9}
 * isProperSupersetOf(new Set([2, 3, 9]), new Set([3, 9])); // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<B>` elements
 * @returns Whether `A ⊃ B` is true
 */
export default function isProperSupersetOf<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	return a.size > b.size && _containsAllElements(a, b);
}
