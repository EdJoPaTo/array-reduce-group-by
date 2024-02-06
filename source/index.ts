export function arrayReduceGroupBy<
	Key extends string | number | symbol,
	Value,
>(
	keyFunction: (entry: Value) => Key,
): (coll: Record<Key, Value[]>, add: Value) => Record<Key, Value[]> {
	return (collection, add) => {
		const key = keyFunction(add);
		if (!collection[key]) {
			collection[key] = [];
		}

		collection[key].push(add);
		return collection;
	};
}
