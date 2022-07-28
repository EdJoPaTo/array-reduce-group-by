export function arrayReduceGroupBy<
	Key extends string | number | symbol,
	Value,
>(
	keyFunc: (entry: Value) => Key,
): (coll: Record<Key, Value[]>, add: Value) => Record<Key, Value[]> {
	return (coll, add) => {
		const key = keyFunc(add);
		if (!coll[key]) {
			coll[key] = [];
		}

		coll[key].push(add);
		return coll;
	};
}
