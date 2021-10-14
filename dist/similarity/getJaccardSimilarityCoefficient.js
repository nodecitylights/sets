"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getIntersection_1 = __importDefault(require("../getIntersection"));
const getUnion_1 = __importDefault(require("../getUnion"));
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
function getJaccardSimilarityCoefficient(a, b) {
    if (a.size === 0 || b.size === 0) {
        return 1;
    }
    return (0, getIntersection_1.default)(a, b).size / (0, getUnion_1.default)(a, b).size;
}
exports.default = getJaccardSimilarityCoefficient;
//# sourceMappingURL=getJaccardSimilarityCoefficient.js.map