import {deepStrictEqual} from 'node:assert';
import {test} from 'node:test';
import {arrayReduceGroupBy} from './index.js';

await test('empty input array', () => {
	const input: string[] = [];
	const result = input.reduce(arrayReduceGroupBy(o => o[0]!), {});
	deepStrictEqual(result, {});
});

await test('simple example', () => {
	const input: string[] = ['alpha', 'beta', 'animal'];
	const result = input.reduce(arrayReduceGroupBy(o => o[0]!), {});
	deepStrictEqual(result, {
		a: ['alpha', 'animal'],
		b: ['beta'],
	});
});
