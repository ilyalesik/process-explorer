import * as React from "react";
import * as renderer from "react-test-renderer";
import { ProcessItemTemplate } from "../ProcessItemTemplate";

describe("<ProcessItemTemplate />", () => {
	it("ProcessItemTemplate renders correctly", () => {
		const tree = renderer.create(
			<ProcessItemTemplate name={"name"} cpu={"cpu"} memory={"memory"} close={"close"}>
				{"children"}
			</ProcessItemTemplate>
		);
		expect(tree).toMatchSnapshot();
	});
});
