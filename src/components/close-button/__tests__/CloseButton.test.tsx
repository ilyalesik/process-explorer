import * as React from "react";
import * as renderer from "react-test-renderer";
import { CloseButton } from "../CloseButton";

describe("<CloseButton />", () => {
	it("CloseButton renders correctly", () => {
		const tree = renderer.create(<CloseButton onClick={() => {}} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
