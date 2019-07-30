import React from "react";
import * as R from "ramda";
import { useStoreMap } from "effector-react";
import { $processListMap } from "../../processListStore";

const valueLens = (pid, field) => R.view(R.lensPath([pid, field]));

export const FieldProvider = props => {
	const { children, pid, field } = props;
	const value = useStoreMap({
		store: $processListMap,
		keys: [pid],
		fn: (processListMap, [pid]) => valueLens(pid, field)(processListMap)
	});

	return <>{children(value)}</>;
};
