import * as React from "react"
import { QuestionDot } from "./elements"

interface HelpTooltipProps {
  msg: string
}

export class HelpTooltip extends React.Component<HelpTooltipProps> {
  render() {
    return (
      <QuestionDot data-tip={this.props.msg}>
        <span>?</span>
      </QuestionDot>
    )
  }
}
