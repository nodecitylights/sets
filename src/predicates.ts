/**
 * Checks if two sets are disjoint; that is, if both sets
 * have no elements in common.
 * - **Formal definition**: `A ∩ B = ϕ`
 * - This method runs in bilinear time, or `O(m * n)`,
 *   where `m = |B|` (size of set B) and `n = |A|` (size of set A).
 * @example
 * ```ts
 * // {1, 2, 3} ∩ {4, 5, 6} = ϕ
 * areSetsDisjoint(new Set([1, 2, 3]), new Set([4, 5, 6]); // true
 *
 * // {1, 2, 3} ∩ {3, 4, 5} ≠ ϕ
 * areSetsDisjoint(new Set([1, 2, 3]), new Set([3, 4, 5]); // false
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `A ∩ B = ϕ` is true
 */
export function areSetsDisjoint<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	for (const aElement of a) {
		for (const bElement of b) {
			if (aElement === bElement) {
				return false;
			}
		}
	}

	return true;
}

/**
 * Checks if two sets are equal, where two sets have the same number
 * of elements, and same elements themselves
 *  - **Formal definition**: `A = B` means `∀z, (z ∈ x ⇔ z ∈ y)`
 *  - This method runs in *linear time*, or `O(n)`, where `n = |A|`
 *    (size of set A).
 *  - **Note**: This does not check for reference/entity equality,
 *    but rather value equality.
 * @example
 * ```ts
 * // {1, 2, 3, 4} = {1, 2, 3, 4}
 * areSetsEqual(new Set([1, 2, 3, 4]), new Set([1, 2, 3, 4])); // true
 *
 * // {hello, world} = {hello, world}
 * areSetsEqual(new Set(['hello', 'world']), new Set(['hello', 'world'])); // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `A = B` is true
 */
export function areSetsEqual<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	return areSetsEquivalent(a, b) && _containsAllElements(a, b);
}

/**
 * Compares the cardinality of two sets; that is, compares
 * the size of the two sets to see if they are equal.
 *  - **Formal definition**: `|A| = |B|`
 *  - This method runs in *constant time*, or `O(1)`.
 * @example
 * ```ts
 * // |{A, B, C}| = |{D, E, F}|
 * areSetsEquivalent(new Set(['A', 'B', 'C']), new Set(['D', 'E', 'F'])); // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `|A| = |B|` is true
 */
export function areSetsEquivalent<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	return a.size === b.size;
}

/**
 * Checks if all elements of set B are contained within
 * set B.
 *  - This method runs in bilinear time on average, or `O(n * m)`, where
 *    `n = |A|` (size of set A), and `m = |B|` (size of set B).
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether A contains all elements of B
 */
export function _containsAllElements<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	for (const element of b) {
		if (!a.has(element)) {
			return false;
		}
	}

	return true;
}

/**
 * Implementation of the proper subset operation, which checks if
 * set A is a proper subset of set B. A proper subset means
 * a set A is a subset of B, but is not equal to B.
 *  - **Formal definition**: `A ⊂ B`
 *  - This method runs in bilinear time, or `O(n * m)`, where `n = |A|`
 *    (size of set A), and `m = |B|` (set of size B)
 * @example
 * ```ts
 * // {1} ⊂ {1, 3}
 * isProperSubsetOf(new Set([1]), new Set([1, 3])); // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `A ⊂ B` is true
 */
export function isProperSubsetOf<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	return a.size < b.size && _containsAllElements(b, a);
}

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
export function isProperSupersetOf<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	return a.size > b.size && _containsAllElements(a, b);
}

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
export function isSubsetOf<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	return a.size <= b.size && _containsAllElements(b, a);
}

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
export function isSupersetOf<TElement>(a: Set<TElement>, b: Set<TElement>): boolean {
	return a.size >= b.size && _containsAllElements(a, b);
}
