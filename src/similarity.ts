import { getIntersection, getUnion } from './operations';

/**
 * Aalso known as the Jaccard Similarity Coefficient, it is a
 * mathematical formula devised by Paul Jaccard in 1912, and
 * individually discovered again by T. Tanimoto in 1958.
 *
 *  - **Formal definition**: `|(A ∩ B)|/|(A ∪ B)|`, or the size
 *    of the intersection of A and B, divided by the size of
 *    the union of A and B.
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns a normalized percentage from `[0, 1]` which measures
 * the similarity between two sets
 */
export function getJaccardSimilarityCoefficient<TElement>(a: Set<TElement>, b: Set<TElement>): number {
	if(a.size === 0 || b.size === 0) {
		return 1;
	}

	return getIntersection(a, b).size / getUnion(a, b).size;
}

/**
 * Implementation of the logDice algorithm, which was originally
 * formulated by Pavel Rychlý. [1]
 *
 * - This method runs in logarithmic bilinear time, or `O(log(n*m))`,
 *   where `n = |A|`, and `m = |B|`.
 *  - [1] “A Lexicographer-Friendly Association Score - Sketchengine.eu”
 * (Faculty of Informatics, Masaryk University, November 24, 2008)
 * @see https://www.sketchengine.eu/wp-content/uploads/2015/03/Lexicographer-Friendly_2008.pdf
 *
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<B>` elements
 * @returns A coefficient score that can be interpreted into
 *  the number of collocation pairs between members of set and set B
 *  (as defined by §4 "logDice):
 *  - `14`: The theoretical maximum score, where all occurrences of A
 *         co-occur with B and vice-versa
 *  - `0`: There is less than 1 co-occurrence of AB for every 16,000 A
 *        or every 16,000 B
 *  - `< 0`: No statistical significance of AB collocation
 *  - The score is independent of the given corpus's size
 */
export function getLogDice<TElement>(a: Set<TElement>, b: Set<TElement>): number {
	return 14 + Math.log2(getSorensenDiceCoefficient(a, b));
}

/**
 * Also known as the Szymkiewicz–Simpson coefficient, it is a
 * mathematical formula that computes the overlap between two sets
 * by dividing the size of the intersection by the size of the
 * the smallest set.
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns The overlap score between 2 sets
 */
export function getOverlapCoefficient<TElement>(a: Set<TElement>, b: Set<TElement>): number {
	return getIntersection(a, b).size / Math.min(a.size, b.size);
}

/**
 * An implementation of the Sørensen–Dice coefficient, originally
 * formulated by Thorvald Sørensen (1948) and Lee Raymond Dice (1945)
 * respectively.
 *  - **Formal definition**: `2|A ∩ B|/(|A| + |B|)`, which is twice
 *    the size of the intersection between A and B, divided by the sum
 *    of the cardinality of both sets.
 *  - This method runs in *bilinear time*, or `O(n * m)`, where
 *    `n = |B|` (size of set B) and `m = |A|` (size of set A).
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns A unique coefficient that scores the similarity between two sets,
 * where the coefficient is part of the unit interval
 */
export function getSorensenDiceCoefficient<TElement>(a: Set<TElement>, b: Set<TElement>): number {
	return (2 * getIntersection(a, b).size) / (a.size + b.size);
}
