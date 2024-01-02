/**
 * Represents the difference set operation, where the difference
 * is the set of elements in set B that are not in set A.
 *  - **Formal definition**: `B \ A = {x: x ∈ B | x ∉ A}`
 *  - This method runs in linear time, or `O(n)`, where `n = |B|`
 *    (size of set B).
 *  - This method has *no side effects*, returning a new
 *    `Set<TElement>` instance.
 * 
 * @see [TC-39 set methods: `Set.prototype.difference`](https://tc39.es/proposal-set-methods/#sec-set.prototype.difference)
 * @example
 * ```ts
 * //{1, 2, 3} \ {3, 5} = {1, 2}
 * getDifference(new Set([1, 2, 3]), new Set([3, 5])); // new Set([1, 2])
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Difference of A and B
 */
export function getDifference<TElement>(a: Set<TElement>, b: Set<TElement>): Set<TElement> {
	const difference = new Set<TElement>(a);
	for (const element of b) {
		difference.delete(element);
	}

	return difference;
}

/**
 * Represents an intersection set operation, which are the
 * elements that exist in both set A and set B.
 *  - **Formal definition**: `A ∩ B = {x: x ∈ A & x ∈ B}`
 *  - This method runs in *bilinear time*, or `O(n * m)`, where
 *    `n = |B|` (size of set B) and `m = |A|` (size of set A).
 *  - This method has *no side effects*, returning a new
 *    `Set<TElement>` instance.
 * 
 * @see [TC-39 set methods: `Set.prototype.intersection`](https://tc39.es/proposal-set-methods/#sec-set.prototype.intersection)
 * @example
 * ```ts
 * // {1, 2, 3, 4} ∩ {3, 4, 5, 6} = {3, 4}
 * getIntersection(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6])); // new Set([3, 4])
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<B>` elements
 * @returns Intersection of A and B
 */
export function getIntersection<TElement>(a: Set<TElement>, b: Set<TElement>): Set<TElement> {
	const intersection = new Set<TElement>();
	for (const element of b) {
		if (a.has(element)) {
			intersection.add(element);
		}
	}

	return intersection;
}

/**
 * Represents the symmetric difference operation, which is the given set of
 * two sets A and B that contain elements from either set, but not their intersection
 * It is usually known either as `A △ B`, `A ⊖ B`, or `A ⊕ B`.
 *  - **Formal definitions**:
 * 	 - `A △ B = (A \ B) ∪ (B \ A)`: Union of the complements of both sets
 * 	 - `A △ B = {x: (X ∈ A) ⊕ (X ∈ B)}`: Set-builder notation with XOR operation and predicates
 * 	 - `A △ B = (A ∪ B) \ (B ∪ A)`: Difference of the unions of both sets
 *  - **Time complexity**:
 * 
 * @see [TC-39 set methods: `Set.prototype.symmetricDifference`](https://tc39.es/proposal-set-methods/#sec-set.prototype.symmetricdifference)
 * @example
 * ```
 * // {1, 2, 3, 4, 5} △ {2, 4, 6} = {1, 3, 5, 6}
 * getSymmetricDifference(new Set([1, 2, 3, 4, 5]), new Set([2, 4, 6]); // new Set([1, 3, 5, 6])
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<B>` elements
 * @returns The symmetric difference, `A △ B`
 */
export function getSymmetricDifference<TElement>(a: Set<TElement>, b: Set<TElement>): Set<TElement> {
	return getUnion(getDifference(a, b), getDifference(b, a));
}

/**
 * Represents a union set operation, where the union is
 * the elements from both set A and set B.
 *  - **Formal definition**: `A ∪ B = {x: x ∈ A | x ∈ B}`
 *  - This method runs in linear time, or `O(n * m)`, where `n = |B|`
 *    (size of set B).
 *  - This method has *no side effects*, returning a new
 *    `Set<TElement>` instance.
 * 
 * @see [TC-39 set methods: `Set.prototype.union`](https://tc39.es/proposal-set-methods/#sec-set.prototype.union)
 * @example
 * ```ts
 * // {A, B, C} ∪ {E, F, G} = {A, B, C, D, E, F, G}
 * getUnion(new Set(['A', 'B', 'C']), new Set(['E', 'F', 'G'])); // new Set(['A', 'B', 'C', 'E', 'F', 'G'])
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Union of A and B
 */
export function getUnion<TElement>(a: Set<TElement>, b: Set<TElement>): Set<TElement> {
	const union = new Set<TElement>(a);
	for (const element of b) {
		union.add(element);
	}

	return union;
}
