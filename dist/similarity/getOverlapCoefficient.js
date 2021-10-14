"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getIntersection_1 = __importDefault(require("../getIntersection"));
/**
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns
 */
function getOverlapCoefficient(a, b) {
    return (0, getIntersection_1.default)(a, b).size / Math.min(a.size, b.size);
}
exports.default = getOverlapCoefficient;
//# sourceMappingURL=getOverlapCoefficient.js.map