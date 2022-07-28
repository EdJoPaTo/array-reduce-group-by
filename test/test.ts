import test from 'ava';
import {arrayReduceGroupBy} from '../source/index.js';

test('empty input array', t => {
	const input: string[] = [];
	const result = input.reduce(arrayReduceGroupBy(o => o[0]!), {});
	t.deepEqual(result, {});
});

test('simple example', t => {
	const input: string[] = ['alpha', 'beta', 'animal'];
	const result = input.reduce(arrayReduceGroupBy(o => o[0]!), {});
	t.deepEqual(result, {
		a: ['alpha', 'animal'],
		b: ['beta'],
	});
});
