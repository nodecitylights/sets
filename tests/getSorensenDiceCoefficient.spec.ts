import { getSorensenDiceCoefficient } from '../src';

describe('Sorensen\'s Dice Coefficient', () => {
	test('computes correctly', () => {
		expect(getSorensenDiceCoefficient(
			new Set('hello new world'.split(' ')),
			new Set('hello world'.split(' '))
		)).toBeCloseTo(8/10);
	});
});
