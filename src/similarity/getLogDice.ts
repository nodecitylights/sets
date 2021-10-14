import getSorensenDiceCoefficient from './getSorensenDiceCoefficient';

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
export default function getLogDice<TElement>(a: Set<TElement>, b: Set<TElement>): number {
	return 14 + Math.log2(getSorensenDiceCoefficient(a, b));
}
