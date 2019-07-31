import * as React from "react";
import * as renderer from "react-test-renderer";
import { PercentageIndicator } from "../PercentageIndicator";

describe("<PercentageIndicator />", () => {
	it("PercentageIndicator renders correctly with value = 0", () => {
		const tree = renderer.create(<PercentageIndicator value={0} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("PercentageIndicator renders correctly with value = 0.1", () => {
		const tree = renderer.create(<PercentageIndicator value={0.1} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("PercentageIndicator renders correctly with value = 0.66666", () => {
		const tree = renderer.create(<PercentageIndicator value={0.66666} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("PercentageIndicator renders correctly with value = 100.1", () => {
		const tree = renderer.create(<PercentageIndicator value={100.1} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
