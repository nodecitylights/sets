"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getIntersection_1 = __importDefault(require("../getIntersection"));
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
function getSorensenDiceCoefficient(a, b) {
    return (2 * (0, getIntersection_1.default)(a, b).size) / (a.size + b.size);
}
exports.default = getSorensenDiceCoefficient;
//# sourceMappingURL=getSorensenDiceCoefficient.js.map