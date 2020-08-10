import * as React from "react"
import { PageFill, Wrap } from "./elements"

interface WrapperProps {
  className: string
}

export class Wrapper extends React.Component<WrapperProps> {
  render() {
    return (
      <PageFill className={this.props.className}>
        <Wrap>{this.props.children}</Wrap>
      </PageFill>
    )
  }
}
