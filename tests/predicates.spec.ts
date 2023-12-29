import { describe, expect, test } from 'vitest';

import { areSetsDisjoint, areSetsEqual, areSetsEquivalent, isProperSubsetOf, isProperSupersetOf, isSubsetOf, isSupersetOf } from '../src';

describe('areSetsDisjoint', () => {
	test('two sets are disjoint to each other', () => {
		expect(areSetsDisjoint(
			new Set<number>([1, 2, 3]),
			new Set<number>([4, 5, 6]),
		)).toBe(true);
	});

	test('two sets are not disjoint to each other', () => {
		expect(areSetsDisjoint(
			new Set<number>([1, 2, 3]),
			new Set<number>([3, 4, 5]),
		)).toBe(false);
	});
});

describe('areSetsEqual', () => {
	test('two sets are equal to each other', () => {
		expect(areSetsEqual(
			new Set([1, 2, 3, 4, 5]),
			new Set([1, 2, 3, 4, 5]),
		)).toBe(true);
	});
    
	test('two empty sets are equal to each other', () => {
		expect(areSetsEqual<number>(
			new Set<number>([]),
			new Set<number>([]),
		)).toBe(true);
	});
});

describe('areSetsEquivalent', () => {
	test('two empty sets are equivalent to each other', () => {
		expect(areSetsEquivalent<number>(
			new Set<number>(),
			new Set<number>(),
		)).toBe(true);
	});

	test('two sets of same length are equivalent to each other', () => {
		expect(areSetsEquivalent<number>(
			new Set<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
			new Set<number>([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
		)).toBe(true);
	});
});

describe('isProperSubsetOf', () => {
	test('set A is correctly computed as a proper subset of set B', () => {
		expect(isProperSubsetOf(
			new Set([1, 2, 3, 4, 5]),
			new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
		)).toBe(true);
	});    
});

describe('isProperSupersetOf', () => {
	test('set A is correctly defined as a proper superset of set B', () => {
		expect(isProperSupersetOf(
			new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
			new Set([1, 2, 3, 4, 5]),
		)).toBe(true);
	});    
});

describe('isSubsetOf', () => {
	test('set A is correctly defined as a subset of B', () => {
		expect(isSubsetOf(
			new Set([1, 2, 3, 4, 5]),
			new Set([1, 2, 3, 4, 5, 9]),
		)).toBe(true);
	});    
});

describe('isSupersetOf', () => {
	test('set A is a superset of set B', () => {
		expect(isSupersetOf(
			new Set([1, 2, 3, 4, 5, 7]),
			new Set([1, 3, 7]),
		)).toBe(true);
	});    
});
