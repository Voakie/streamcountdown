import * as React from "react"
import { ButtonSelectOption, ButtonSelect } from "../../../src/components/ButtonSelect"
import { render, shallow } from "enzyme"
import toJson from "enzyme-to-json"
import sinon from "sinon"

const testOptions: ButtonSelectOption[] = [
  {
    name: "value-one",
    value: "Value One",
  },
  {
    name: "value-two",
    value: "Value Two",
  },
  {
    name: "value-three",
    value: "Value Three",
  },
  {
    name: "value-four",
    value: "Value Four",
  },
]

it("should render", () => {
  const component = render(
    <ButtonSelect options={testOptions} value="value-two" onChange={() => {}} />,
  )

  const tree = toJson(component)
  expect(tree).toMatchSnapshot("static")

  expect(component.find(".first").length).toEqual(1)
  expect(component.find(".last").length).toEqual(1)
  expect(component.find(".active").length).toEqual(1)
})

it("should allow interaction", () => {
  const callback = sinon.spy()
  const component = shallow(
    <ButtonSelect options={testOptions} value="value-two" onChange={callback} />,
  )

  const treeBefore = toJson(component)
  expect(treeBefore).toMatchSnapshot("shallowBeforeChange")

  component.find(".last").simulate("click")
  expect(callback.calledOnceWith(testOptions[3])).toBe(true)
  component.setProps({ value: "value-four" })
  expect(component.find(".last.active").length).toEqual(1)

  const treeAfter = toJson(component)
  expect(treeAfter).toMatchSnapshot("shallowAfterChange")
})

it("should work with 1 option", () => {
  const component = render(
    <ButtonSelect options={[testOptions[0]]} value="value-one" onChange={() => {}} />,
  )
  expect(component.find(".first.last.active").length).toEqual(1)
})
