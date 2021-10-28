/**
 * Represents a union set operation, where the union is
 * the elements from both set A and set B.
 *  - **Formal definition**: `A ∪ B = {x: x ∈ A | x ∈ B}`
 *  - This method runs in linear time, or `O(n * m)`, where `n = |B|`
 *    (size of set B).
 *  - This method has *no side effects*, returning a new
 *    `Set<TElement>` instance.
 * @example
 * ```ts
 * // {A, B, C} ∪ {E, F, G} = {A, B, C, D, E, F, G}
 * getUnion(new Set(['A', 'B', 'C']), new Set(['E', 'F', 'G'])); // new Set(['A', 'B', 'C', 'E', 'F', 'G'])
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Union of A and B
 */
export default function getUnion<TElement>(a: Set<TElement>, b: Set<TElement>): Set<TElement> {
	const union = new Set<TElement>(a);
	for (const element of b) {
		union.add(element);
	}

	return union;
}
