import { describe, expect, test } from 'vitest';

import { getDifference, getIntersection, getSymmetricDifference, getUnion } from '../src';

describe('getDifference', () => {
	test('difference of sets is computed correctly [1]', () => {
		expect(getDifference(
			new Set([1, 2, 3, 4, 5, 6, 7, 8]),
			new Set([1, 2, 3, 4]),
		)).toStrictEqual(new Set([5, 6, 7, 8]));
	});
    
    
	test('difference of two sets is computed correctly [2]', () => {
		expect(getDifference(
			new Set<number>([1, 2, 3]),
			new Set<number>([2, 3, 4]),
		)).toStrictEqual(
			new Set<number>([1]),
		);
	});
});

describe('getIntersection', () => {
	test('intersection of two sets is computed correctly [1]', () => {
		expect(getIntersection<number>(
			new Set<number>([1, 2, 3]),
			new Set<number>([2, 3, 4]),
		)).toStrictEqual(
			new Set<number>([2, 3]),
		);
	});
    
	test('intersection of two sets is computed correctly [2]', () => {
		expect(getIntersection(
			new Set([8, 9, 10, 11, 12, 13, 14, 15]),
			new Set([14, 15, 16, 17, 18, 19, 20]),
		)).toStrictEqual(new Set([14, 15]));
	});
    
    
	test('intersection of two sets without any common elements returns an empty set', () => {
		expect(getIntersection<number>(
			new Set<number>([1, 2, 3]),
			new Set<number>([4, 5, 6]),
		)).toStrictEqual(
			new Set<number>([]),
		);
	});
});

describe('getSymmetricDifference', () => {
	test('symmetric difference of two sets is computed correctly', () => {
		expect(getSymmetricDifference(
			new Set<number>([1, 2, 3]),
			new Set<number>([3, 4]),
		)).toStrictEqual(
			new Set<number>([1, 2, 4]),
		);
	});
});

describe('getUnion', () => {
	test('union of two sets is computed correctly', () => {
		expect(getUnion<number>(
			new Set<number>([1, 2, 3, 4]),
			new Set<number>([5, 6, 7, 8]),
		)).toStrictEqual(
			new Set<number>([1, 2, 3, 4, 5, 6, 7, 8]),
		);
	});
});
