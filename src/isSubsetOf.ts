import _containsAllElements from './containsAllElements';

/**
 * Implementation of the subset operation in set theory, which
 * checks if set A is a subset of set B. A subset means all elements
 * of set A are elements of B.
 *  - **Formal definition**: `A ⊆ B`
 *  - This method runs in *linear time*, or `O(n)`, where `n = |A|`
 *    (size of set A).
 * @example
 * ```ts
 * // {1} ⊂ {1, 3}
 * isSubsetOf(new Set([1]), new Set([1, 3])); // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `A ⊆ B` is true
 */
export default function isSubsetOf<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	return a.size <= b.size && _containsAllElements(b, a);
}
