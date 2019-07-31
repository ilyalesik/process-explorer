import * as React from "react";
import * as d3 from "d3";

const percentageToColor = value => d3.interpolateSinebow(0.2 + value);

const toFixed2 = num => Math.round(num * 100) / 100;

export const PercentageIndicator = (props: { value: number; className?: string }) => {
	const { value, className } = props;
	return (
		<p style={{ color: React.useMemo(() => percentageToColor(value), [value]) }} className={className}>
			{toFixed2(value)}%
		</p>
	);
};
