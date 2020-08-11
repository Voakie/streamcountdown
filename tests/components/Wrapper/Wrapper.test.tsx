import * as React from "react"
import renderer from "react-test-renderer"
import { Wrapper } from "../../../src/components/Wrapper"

it("should render", () => {
  const component = renderer.create(
    <Wrapper className="test">
      <p>Test</p>
    </Wrapper>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
