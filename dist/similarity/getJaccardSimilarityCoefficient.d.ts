/**
 * (also known as the Jaccard Similarity Coefficient),
 * a mathematical formula devised by Paul Jaccard in 1912, and
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
export default function getJaccardSimilarityCoefficient<TElement>(a: Set<TElement>, b: Set<TElement>): number;
