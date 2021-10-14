import {getOverlapCoefficient} from '../../src';

describe('Overlap Coefficient', () => {
	test('computes correctly', () => {
		expect(getOverlapCoefficient(
			new Set([1, 2, 3, 4]),
			new Set([3, 4, 5, 6, 7])
		)).toBeCloseTo(1/2)
	})
})
