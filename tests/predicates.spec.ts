import { describe, expect, test } from 'vitest';

import {
	areSetsDisjoint,
	areSetsEqual,
	areSetsEquivalent,
	isProperSubsetOf,
	isProperSupersetOf,
	isSubsetOf,
	isSupersetOf,
} from '../src';

describe('areSetsDisjoint', () => {
	test.each([
		[true, [], []],
		[true, [1, 2, 3], [4, 5, 6]],
		[false, [1, 2, 3], [3, 4, 5]],
	])('A ∩ B = ϕ is %O, (A = %O, B = %O)', (expected, a, b) => {
		expect(areSetsDisjoint(
			new Set<number>(a),
			new Set<number>(b),
		)).toBe(expected);
	});
});

describe('areSetsEqual', () => {
	test.each([
		[true, [], []],
		[true, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
	])('A = B is %O, (A = %O, B = %O)', (expected, a, b) => {
		expect(areSetsEqual(
			new Set(a),
			new Set(b),
		)).toBe(expected);
	});
});

describe('areSetsEquivalent', () => {
	test.each([
		[true, [], []],
		[true, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]],
		[false, [1, 2, 3], []],
	])('|A| = |B| is %O, (A = %O, B = %O)', (expected, a, b) => {
		expect(areSetsEquivalent<number>(
			new Set<number>(a),
			new Set<number>(b),
		)).toBe(expected);
	});
});

describe('isProperSubsetOf', () => {
	test.each([
		[true, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
		[false, [1, 2, 3], [1, 2, 3]],
		[false, [], []],
	])('A ⊂ B is %O, (A = %O, B = %O)', () => {
		expect(isProperSubsetOf(
			new Set([1, 2, 3, 4, 5]),
			new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
		)).toBe(true);
	});
});

describe('isProperSupersetOf', () => {
	test.each([
		[true, [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5]],
		[false, [1, 2, 3], [1, 2, 3]],
		[false, [], []],
	])('A ⊃ B is %O, (A = %O, B = %O)', (expected, a, b) => {
		expect(isProperSupersetOf(
			new Set(a),
			new Set(b),
		)).toBe(expected);
	});
});

describe('isSubsetOf', () => {
	test.each([
		[true, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 9]],
		[false, [1, 2, 3, 4, 5, 9], [1, 2, 3, 4, 5]],
		[true, [1, 2, 3], [1, 2, 3]],
		[true, [], []],
	])('A ⊆ B is %O, (A = %O, B = %O)', (expected, a, b) => {
		expect(isSubsetOf(
			new Set(a),
			new Set(b),
		)).toBe(expected);
	});
});

describe('isSupersetOf', () => {
	test.each([
		[true, [1, 2, 3, 4, 5, 7], [1, 3, 7]],
		[false, [1, 3, 7], [1, 2, 3, 4, 5, 7]],
		[true, [1, 3, 7], [1, 3, 7]],
		[true, [], []],
	])('A ⊇ B is %O, (A = %O, B = %O) ', (expected, a, b) => {
		expect(isSupersetOf(
			new Set(a),
			new Set(b),
		)).toBe(expected);
	});
});
