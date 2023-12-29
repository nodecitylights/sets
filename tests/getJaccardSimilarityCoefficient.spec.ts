import { describe, expect, test } from 'vitest';

import { getJaccardSimilarityCoefficient } from '../src';

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
