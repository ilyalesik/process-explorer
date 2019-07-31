import * as React from "react";
import * as renderer from "react-test-renderer";
import { ProcessList } from "../ProcessList";
import { updateListEvent } from "../../../processListStore";

describe("<ProcessList />", () => {
	it("ProcessList renders correctly", () => {
		updateListEvent([
			{
				pid: 1,
				ppid: 0,
				name: "root",
				cpu: 0,
				memory: 0.1
			},
			{
				pid: 2,
				ppid: 1,
				name: "child1",
				cpu: 0,
				memory: 0
			},
			{
				pid: 3,
				ppid: 1,
				name: "child2",
				cpu: 2.14,
				memory: 2.3
			},
			{
				pid: 4,
				ppid: 3,
				name: "child3",
				cpu: 1.3,
				memory: 0
			}
		]);
		const tree = renderer.create(<ProcessList />);
		expect(tree).toMatchSnapshot();
	});
});
