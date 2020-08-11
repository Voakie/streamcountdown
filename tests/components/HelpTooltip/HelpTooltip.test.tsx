import * as React from "react"
import { render } from "enzyme"
import { HelpTooltip } from "../../../src/components/HelpTooltip"
import toJson from "enzyme-to-json"

it("should render", () => {
  const component = render(<HelpTooltip msg="Test" />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
