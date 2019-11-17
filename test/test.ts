import test from 'ava';
import arrayReduceGroupBy from '../source';

test('empty input array', t => {
	const input: string[] = [];
	const result = input.reduce(arrayReduceGroupBy(o => o[0]), {});
	t.deepEqual(result, {});
});

test('simple example', t => {
	const input: string[] = ['Alpha', 'Beta', 'Animal'];
	const result = input.reduce(arrayReduceGroupBy(o => o[0]), {});
	t.deepEqual(result, {
		A: ['Alpha', 'Animal'],
		B: ['Beta']
	});
});
