import { describe, expect, test } from 'vitest'

import {
	getDifference,
	getIntersection,
	getSymmetricDifference,
	getUnion,
} from '../src'

describe('getDifference', () => {
	test.each([
		[[], [], []],
		[[1, 2, 3], [2, 3, 4], [1]],
		[[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4], [5, 6, 7, 8]],
	])('%O \\ %O = %O', (a, b, expected) => {
		expect(getDifference(
			new Set(a),
			new Set(b),
		)).toStrictEqual(new Set(expected))
	})
})

describe('getIntersection', () => {
	test.each([
		[[1, 2, 3], [4, 5, 6], []],
		[[1, 2, 3], [2, 3, 4], [2, 3]],
		[[8, 9, 10, 11, 12, 13, 14, 15], [14, 15, 16, 17, 18, 19, 20], [14, 15]],
	])('%O ∩ %O = %O', (a, b, expected) => {
		expect(getIntersection<number>(
			new Set<number>(a),
			new Set<number>(b),
		)).toStrictEqual(
			new Set<number>(expected),
		)
	})
})

describe('getSymmetricDifference', () => {
	test.each([
		[[], [], []],
		[[1, 2, 3], [1, 2, 3], []],
		[[1, 2, 3], [3, 4], [1, 2, 4]],
		[[1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]],
	])('%O △ %O = %O', (a, b, expected) => {
		expect(getSymmetricDifference(
			new Set<number>(a),
			new Set<number>(b),
		)).toStrictEqual(
			new Set<number>(expected),
		)
	})
})

describe('getUnion', () => {
	test.each([
		[[], [], []],
		[[1, 2, 3], [2, 3, 4], [1, 2, 3, 4]],
		[[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]],
	])('%O ∪ %O = %O', (a, b, expected) => {
		expect(getUnion<number>(
			new Set<number>(a),
			new Set<number>(b),
		)).toStrictEqual(
			new Set<number>(expected),
		)
	})
})
