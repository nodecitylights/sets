import { describe, expect, test } from 'vitest';

import { getLogDice } from '../src';

describe('getLogDice', () => {
	test('getLogDice returns 14 for full similarity', () => {
		expect(getLogDice(
			new Set('hello world'.split('')),
			new Set('world hello'.split('')),
		)).toBe(14);
	});
});
