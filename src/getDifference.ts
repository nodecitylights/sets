/**
 * Represents the difference set operation, where the difference
 * is the set of elements in set B that are not in set A.
 *  - **Formal definition**: `B \ A = {x: x ∈ B | x ∉ A}`
 *  - This method runs in linear time, or `O(n)`, where `n = |B|`
 *    (size of set B).
 *  - This method has *no side effects*, returning a new
 *    `Set<TElement>` instance.
 * @example
 * ```ts
 * //{1, 2, 3} \ {3, 5} = {1, 2}
 * getDifference(new Set([1, 2, 3]), new Set([3, 5])); // new Set([1, 2])
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Difference of A and B
 */
export default function getDifference<TElement>(a: Set<TElement>, b: Set<TElement>): Set<TElement> {
	const difference = new Set<TElement>(a);
	for (const element of b) {
		difference.delete(element);
	}

	return difference;
}
