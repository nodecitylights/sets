import { describe, expect, test } from 'vitest';

import { getJaccardSimilarityCoefficient, getLogDice, getOverlapCoefficient, getSorensenDiceCoefficient } from '../src';

describe('Jaccard\'s Similarity Coefficient', () => {

	test.each([
		['hello world', 'world hello', 1.0],
		['', '', 1.0],
	])('comparing "%s" and "%s" will give a score of %f', (a, b, expected) => {
		expect(getJaccardSimilarityCoefficient(
			new Set(a.split(' ')),
			new Set(b.split(' ')),
		)).toBeCloseTo(expected);
	});
});

describe('Pavel Rychlý\'s LogDice', () => {
	test.each([
		['hello world', 'world hello'],
		['', ''],
	])('comparing "%s" and "%s" will give 14 for full similarity', (a, b) => {
		expect(getLogDice(
			new Set(a.split(' ')),
			new Set(b.split(' ')),
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
