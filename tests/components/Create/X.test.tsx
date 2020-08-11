import * as React from "react"
import renderer from "react-test-renderer"
import { X } from "../../../src/components/Create/X"

it("should render", () => {
  const component = renderer.create(<X />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
