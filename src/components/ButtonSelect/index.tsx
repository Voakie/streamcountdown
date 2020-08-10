import * as React from "react"
import { Button, Wrap } from "./elements"

export interface ButtonSelectOption {
  name: string
  value: string
}

interface ButtonSelectProps {
  options: ButtonSelectOption[]
  onChange: (selected: ButtonSelectOption) => void
  value: string
}

export class ButtonSelect extends React.Component<ButtonSelectProps> {
  render() {
    const first = (i: number) => i === 0
    const last = (i: number) => i === this.props.options.length - 1
    const active = (n: string) => n === this.props.value

    return (
      <Wrap>
        {this.props.options.map((option, i) => {
          return (
            <Button
              className={
                (first(i) ? "first " : "") +
                (last(i) ? "last " : "") +
                (active(option.name) ? "active " : "")
              }
              key={i}
              onClick={() => {
                this.props.onChange(option)
              }}
            >
              {option.value}
            </Button>
          )
        })}
      </Wrap>
    )
  }
}
