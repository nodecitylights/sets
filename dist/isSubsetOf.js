"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containsAllElements_1 = __importDefault(require("./containsAllElements"));
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
function isSubsetOf(a, b) {
    return a.size <= b.size && (0, containsAllElements_1.default)(b, a);
}
exports.default = isSubsetOf;
//# sourceMappingURL=isSubsetOf.js.map