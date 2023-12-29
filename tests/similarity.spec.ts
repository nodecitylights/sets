import { describe, expect, test } from 'vitest';

import { getJaccardSimilarityCoefficient, getLogDice, getOverlapCoefficient, getSorensenDiceCoefficient } from '../src';

describe('Jaccard\'s Similarity Coefficient', () => {
	test('comparing "hello world" and "world hello" will result in 100% score', () => {
		expect(getJaccardSimilarityCoefficient(
			new Set('hello world'.split(' ')),
			new Set('world hello'.split(' ')),
		)).toBeCloseTo(1.0);
	});

	test('two equal sets are equally similar', () => {
		expect(getJaccardSimilarityCoefficient(
			new Set([]),
			new Set([]),
		)).toBeCloseTo(1.0);
	});
});

describe('Pavel Rychlý\'s LogDice', () => {
	test('getLogDice returns 14 for full similarity', () => {
		expect(getLogDice(
			new Set('hello world'.split('')),
			new Set('world hello'.split('')),
		)).toBe(14);
	});
});

describe('Overlap Coefficient', () => {
	test('computes correctly', () => {
		expect(getOverlapCoefficient(
			new Set([1, 2, 3, 4]),
			new Set([3, 4, 5, 6, 7]),
		)).toBeCloseTo(1/2);
	});
});

describe('Sorensen\'s Dice Coefficient', () => {
	test('computes correctly', () => {
		expect(getSorensenDiceCoefficient(
			new Set('hello new world'.split(' ')),
			new Set('hello world'.split(' ')),
		)).toBeCloseTo(8/10);
	});
});
